"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { Autocomplete, Button, TextField } from "@mui/material";
import { Brand } from "@/common/types/Brand";
import { useEffect, useState } from "react";
import CloneDeep from "lodash-es/cloneDeep";
import { IsMobile } from "@/utils/IsMobile";
import { InputPhone } from "@/components/ui/InputPhone";
import { useRouter } from "next/navigation";

export const FormParts = () => {
  const [disabled, setDisabled] = useState(false);
  const [brand, setBrand] = useState<Brand[]>([]);
  const [queryRequested, setQueryRequested] = useState([]);
  const route = useRouter();
  const user = useForm({
    disabled,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      brand: "",
      model: "",
      yearproduction: "",
      prefix: "",
      serialnumber: "",
    },
  });

  const query = useForm({
    defaultValues: {
      sparepart: "",
      catalognumber: "",
      quantity: "",
      comment: "",
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
      const fdata = await api.postQueryTs(fd);
      if (fdata.status === 200) {
        toast.success("Запрос на подбор успешно создан");
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
                label="Имя"
                error={!!user.formState.errors.name}
                {...user.register("name", { required: true })}
              />
              <TextField
                label="Email"
                error={!!user.formState.errors.email}
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
              <p>Информация о транспортном средстве</p>
            </div>
            <div className="forms__row row-3">
              <Autocomplete
                size={IsMobile() ? "small" : "medium"}
                disablePortal
                getOptionLabel={(option) => option.name}
                options={brand}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!user.formState.errors.brand}
                    label="Бренд"
                    {...user.register("brand", { required: true })}
                  />
                )}
              />
              <TextField
                error={!!user.formState.errors.model}
                label="Модель"
                {...user.register("model", { required: true })}
              />
              <TextField
                error={!!user.formState.errors.yearproduction}
                label="Год производства"
                {...user.register("yearproduction", { required: true })}
              />
              <TextField label="Префикс" {...user.register("prefix")} />
              <TextField
                error={!!user.formState.errors.serialnumber}
                label="Серийный номер"
                {...user.register("serialnumber", { required: true })}
              />
            </div>
          </div>
          <form className="forms" onSubmit={query.handleSubmit(addToQuery)}>
            <div className="forms__head">
              <p>Добавить запчасти для ТС</p>
            </div>
            <div className="forms__request">
              <TextField
                error={!!query.formState.errors.sparepart}
                label="Наименование запчасти"
                {...query.register("sparepart", { required: true })}
              />
              <TextField
                label="Каталожный номер запчасти"
                {...query.register("catalognumber")}
              />
              <TextField
                error={!!query.formState.errors.quantity}
                label="Количество"
                {...query.register("quantity", { required: true })}
              />
              <TextField
                label="Комментарий"
                multiline
                {...query.register("comment")}
              />
              <Button type={"submit"} variant="contained">
                Добавить в список
              </Button>
            </div>
          </form>
          <div className="forms">
            <div className="forms__head">
              <p>Ваш запрос</p>
            </div>
            {queryRequested.map((item: any, id) => (
              <div className="forms__request-query" key={id}>
                <TextField
                  label="Бренд"
                  defaultValue={item.sparepart}
                  disabled={true}
                />
                <TextField
                  label="Номер запчасти"
                  defaultValue={item.catalognumber}
                  disabled={true}
                />
                <TextField
                  label="Количество"
                  defaultValue={item.quantity}
                  disabled={true}
                />
                <button
                  className="button button__primary"
                  onClick={() => deleteQuery(id)}
                />
                <TextField
                  label="Комментарий"
                  multiline
                  disabled={true}
                  defaultValue={item.comment}
                />
              </div>
            ))}
          </div>
          <form onSubmit={user.handleSubmit(onSubmit)}>
            <Button type={"submit"} variant="contained" disabled={disabled}>
              Отправить запрос
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
