"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Brand } from "@/common/types/Brand";
import { Autocomplete, Button, TextField } from "@mui/material";
import CloneDeep from "lodash-es/cloneDeep";
import { IsMobile } from "@/utils/IsMobile";
import { InputPhone } from "@/components/ui/InputPhone";
import { useRouter } from "next/navigation";
import { useQuery } from "@/store/query";

export const QueryBox = () => {
  const [disabled, setDisabled] = useState(false);
  const [brand, setBrand] = useState<Brand[]>([]);
  const [queryRequested, setQueryRequested] = useState([]);
  const route = useRouter();
  // const addToQuery = useQuery((state) => state.addToQuery);

  const query = useForm({
    defaultValues: {
      brand: "",
      serialnumber: "",
      quantity: "",
    },
  });
  const user = useForm({
    disabled,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const loadBrands = async () => {
    try {
      const props = await api.getAllBrand();
      setBrand(props);
    } catch (error) {
      // @ts-expect-error @ts-expect-error
      console.error("Error fetching:", error.message);
    }
  };

  const onSubmit = async (data: any) => {
    const fd = Object.assign(data, { query: queryRequested });
    console.log(fd);
    setDisabled(true);
    try {
      const fdata = await api.postQueryZp(fd);
      if (fdata.status === 200) {
        toast.success("Запрос успешно создан");
        route.push(`/success?num=${fdata.num}&page=query`);
        user.reset();
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
    setDisabled(false);
  };

  const addToQuery = (data: object) => {
    const arr: any = queryRequested;
    arr.push(data);
    console.log(data);
    setQueryRequested(arr);
  };

  const deleteQuery = (id: number) => {
    const arr = CloneDeep(queryRequested);
    arr.splice(id, 1);
    setQueryRequested(arr);
  };

  useEffect(() => void loadBrands(), []);

  return (
    <section className="forms__section">
      <div className="container">
        <div className="row">
          <div className="forms">
            <div className="forms__head">
              <p>Контактная информация</p>
            </div>
            <div className="forms__row row-3">
              <TextField
                error={!!user.formState.errors.name}
                label="Имя"
                {...user.register("name", { required: true })}
              />
              <TextField
                error={!!user.formState.errors.email}
                label="Email"
                {...user.register("email", { required: true })}
              />
              <InputPhone
                error={!!user.formState.errors.phone}
                label="Телефон"
                {...user.register("phone", { required: true })}
              />
            </div>
          </div>
          <div className="forms">
            <div className="forms__head">
              <p>Запрос цены</p>
            </div>
            <form
              className="forms__query"
              onSubmit={query.handleSubmit(addToQuery)}
            >
              <Autocomplete
                size={IsMobile() ? "small" : "medium"}
                disablePortal
                getOptionLabel={(option) => option.name}
                options={brand}
                renderInput={(params) => (
                  <TextField
                    error={!!query.formState.errors.brand}
                    {...params}
                    label="Бренд"
                    {...query.register("brand", { required: true })}
                  />
                )}
              />
              <TextField
                error={!!query.formState.errors.serialnumber}
                label="Номер запчасти"
                {...query.register("serialnumber", { required: true })}
              />
              <TextField
                error={!!query.formState.errors.quantity}
                label="Количество"
                {...query.register("quantity", { required: true })}
              />
              <div className="forms__buttons">
                <Button variant="contained" type={"submit"}>
                  Добавить в список
                </Button>
              </div>
            </form>
          </div>
          <div className="forms">
            <div className="forms__head">
              <p>Ваш запрос</p>
            </div>
            {queryRequested.map((item: any, id) => (
              <div className="forms__query" key={id}>
                <TextField
                  label="Бренд"
                  defaultValue={item.brand}
                  disabled={true}
                />
                <TextField
                  label="Номер запчасти"
                  defaultValue={item.serialnumber}
                  disabled={true}
                />
                <TextField
                  label="Количество"
                  defaultValue={item.quantity}
                  disabled={true}
                />
                <div className="forms__buttons">
                  <Button onClick={() => deleteQuery(id)} variant="contained">
                    X
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={user.handleSubmit(onSubmit)}>
            <Button variant="contained" type="submit" disabled={disabled}>
              Отправить запрос
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
