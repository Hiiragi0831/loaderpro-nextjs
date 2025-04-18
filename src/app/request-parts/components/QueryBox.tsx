"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Brand } from "@/common/types/Brand";
import { Autocomplete, Button, TextField } from "@mui/material";
import { IsMobile } from "@/utils/IsMobile";
import { InputPhone } from "@/components/ui/InputPhone";
import { useRouter } from "next/navigation";
import { useQuery } from "@/store/query";
import ym from "react-yandex-metrika";

export const QueryBox = () => {
  const [disabled, setDisabled] = useState(false);
  const [brand, setBrand] = useState<Brand[]>([]);
  const route = useRouter();
  const queryData = useQuery((state) => state.query);
  const resetQuery = useQuery((state) => state.reset);
  const addToQuery = useQuery((state) => state.addToQuery);
  const deleteQuery = useQuery((state) => state.deleteFormQuery);

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
    const fd = Object.assign(data, { query: queryData });
    console.log(queryData);
    setDisabled(true);
    try {
      const fdata = await api.postQueryZp(fd);
      if (fdata.status === 200) {
        toast.success("Запрос успешно создан");
        route.push(`/success?num=${fdata.num}&page=query`);
        user.reset();
        resetQuery();
        ym("reachGoal", "sendRequestParts");
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
    setDisabled(false);
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
              onSubmit={query.handleSubmit((data) => {
                addToQuery(
                  data.serialnumber,
                  Number(data.quantity),
                  data.brand,
                );
              })}
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
            {queryData.map((item: any) => (
              <div className="forms__query" key={item.serialnumber}>
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
                  <Button
                    onClick={() => deleteQuery(item.serialnumber)}
                    variant="contained"
                  >
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
