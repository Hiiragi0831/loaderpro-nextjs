"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Brand } from "@/common/types/Brand";
import { Autocomplete, TextField } from "@mui/material";
import CloneDeep from "lodash-es/cloneDeep";

export const QueryBox = () => {
  const [brand, setBrand] = useState<Brand[]>([]);
  const [queryRequested, setQueryRequested] = useState([]);
  const query = useForm({
    defaultValues: {
      brand: "",
      serialnumber: "",
      quantity: "",
    },
  });
  const user = useForm({
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
    try {
      const fdata = await api.postQueryZp(fd);
      if (fdata.ok) {
        toast.success("Запрос успешно создан");
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  const addToQuery = (data: object) => {
    const arr: any = queryRequested;
    arr.push(data);
    setQueryRequested(arr);
  };

  const deleteQuery = (id: number) => {
    const arr = CloneDeep(queryRequested);
    arr.splice(id, 1);
    setQueryRequested(arr);
  };

  useEffect(() => void loadBrands(), []);

  return (
    <section className="query__section">
      <div className="container">
        <div className="row">
          <div className="query">
            <div className="query__title">Контактная информация</div>
            <div className="query__user-form">
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
              <TextField
                error={!!user.formState.errors.phone}
                label="Телефон"
                {...user.register("phone", { required: true })}
              />
            </div>
          </div>
          <div className="query">
            <div className="query__title">Запрос цены</div>
            <form
              className="query__form"
              onSubmit={query.handleSubmit(addToQuery)}
            >
              <Autocomplete
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
              <div className="query__buttons">
                <button className="button button__primary">
                  Добавить в список
                </button>
              </div>
            </form>
          </div>
          <div className="query">
            <div className="query__title">Ваш запрос</div>
            {queryRequested.map((item: any, id) => (
              <div className="query__form" key={id}>
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
                <div className="query__buttons">
                  <button
                    className="button button__primary"
                    onClick={() => deleteQuery(id)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={user.handleSubmit(onSubmit)}>
            <button className="button button__primary" type="submit">
              Отправить запрос
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
