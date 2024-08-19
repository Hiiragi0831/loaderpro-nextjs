import { useEffect, useLayoutEffect, useRef, useState } from "preact/compat";

import { Brand } from "../../../common/types/Brand";
import { api } from "../../../services/api";

type Props = {
  value: number;
  onChange: (id: number) => void;
};

const SelectBrand = ({ value, onChange }: Props) => {
  const ref = useRef(null);
  const [brands, setBrands] = useState<Brand[]>([]);

  const init = async () => {
    try {
      const props = await api.getAllBrand();
      setBrands(props);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void init(), []);

  useEffect(() => {
    ref.current.addEventListener("change", handleChange);
    return () => ref.current.removeEventListener("change", handleChange);
  }, []);

  const handleChange = (event: { target: { value: any } }) => {
    onChange(Number(event.target.value) || -1);
  };

  return (
    <>
      <select name="brand" ref={ref}>
        <option value="-1" label="Все бренды" selected={value === -1} />
        {brands?.map((option) => (
          <option key={option?.id} value={option?.id} label={option?.name} selected={option?.id === value} />
        ))}
      </select>
    </>
  );
};

export default SelectBrand;
