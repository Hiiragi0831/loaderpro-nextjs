import { FC } from "react";
import Feature from "@/components/Feature";
import { getBrandFeatures } from "@/utils/brandFeatures";

interface FeatureListProps {
  brand?: string;
  /** Дополнительные фичи, которые нужно показать */
  extraFeatures?: string[];
}

const FeatureList: FC<FeatureListProps> = ({
  brand = "",
  extraFeatures = [],
}) => {
  // фичи по бренду
  const brandFeatures = getBrandFeatures(brand);
  // объединяем всё вместе
  const items = [...brandFeatures, ...extraFeatures];

  return (
    <>
      {items.map((text) => (
        <Feature text={text} key={text} />
      ))}
    </>
  );
};

export default FeatureList;
