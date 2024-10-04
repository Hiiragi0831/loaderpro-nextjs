"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Brand } from "@/common/types/Brand";
import { Autocomplete } from "@mui/material";
import CloneDeep from "lodash-es/cloneDeep";
import { RedditTextField } from "@/components/ui/RedditTextField";
import { IsMobile } from "@/utils/IsMobile";
import { RedditButton } from "@/components/ui/RedditButton";

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
    <section className="forms__section">
      <div className="container">
        <div className="row">
          <div className="forms">
            <div className="forms__head">
              <p>Контактная информация</p>
            </div>
            <div className="forms__row row-3">
              <RedditTextField
                error={!!user.formState.errors.name}
                label="Имя"
                {...user.register("name", { required: true })}
              />
              <RedditTextField
                error={!!user.formState.errors.email}
                label="Email"
                {...user.register("email", { required: true })}
              />
              <RedditTextField
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
                  <RedditTextField
                    error={!!query.formState.errors.brand}
                    {...params}
                    label="Бренд"
                    {...query.register("brand", { required: true })}
                  />
                )}
              />
              <RedditTextField
                error={!!query.formState.errors.serialnumber}
                label="Номер запчасти"
                {...query.register("serialnumber", { required: true })}
              />
              <RedditTextField
                error={!!query.formState.errors.quantity}
                label="Количество"
                {...query.register("quantity", { required: true })}
              />
              <div className="forms__buttons">
                <RedditButton variant="contained" type={"submit"}>
                  Добавить в список
                </RedditButton>
              </div>
            </form>
          </div>
          <div className="forms">
            <div className="forms__head">
              <p>Ваш запрос</p>
            </div>
            {queryRequested.map((item: any, id) => (
              <div className="forms__query" key={id}>
                <RedditTextField
                  label="Бренд"
                  defaultValue={item.brand}
                  disabled={true}
                />
                <RedditTextField
                  label="Номер запчасти"
                  defaultValue={item.serialnumber}
                  disabled={true}
                />
                <RedditTextField
                  label="Количество"
                  defaultValue={item.quantity}
                  disabled={true}
                />
                <div className="forms__buttons">
                  <RedditButton
                    onClick={() => deleteQuery(id)}
                    variant="contained"
                  >
                    X
                  </RedditButton>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={user.handleSubmit(onSubmit)}>
            <RedditButton variant="contained" type="submit">
              Отправить запрос
            </RedditButton>
          </form>
        </div>
      </div>
    </section>
  );
};
