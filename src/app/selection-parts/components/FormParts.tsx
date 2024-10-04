"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { Autocomplete, TextField } from "@mui/material";
import { Brand } from "@/common/types/Brand";
import { useEffect, useState } from "react";
import CloneDeep from "lodash-es/cloneDeep";
import { RedditInput } from "@/components/ui/RedditInput";
import { IsMobile } from "@/utils/IsMobile";
import { RedditButton } from "@/components/ui/RedditButton";
import { RedditTextarea } from "@/components/ui/RedditTextarea";

export const FormParts = () => {
  const [brand, setBrand] = useState<Brand[]>([]);
  const [queryRequested, setQueryRequested] = useState([]);
  const user = useForm({
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
    try {
      const fdata = await api.postQueryTs(fd);
      if (fdata.ok) {
        toast.success("Запрос на подбор успешно создан");
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
              <RedditInput
                label="Имя"
                isInvalid={!!user.formState.errors.name}
                {...user.register("name", { required: true })}
              />
              <RedditInput
                label="Email"
                isInvalid={!!user.formState.errors.email}
                {...user.register("email", { required: true })}
              />
              <RedditInput
                label="Телефон"
                isInvalid={!!user.formState.errors.phone}
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
              <RedditInput
                isInvalid={!!user.formState.errors.model}
                label="Модель"
                {...user.register("model", { required: true })}
              />
              <RedditInput
                isInvalid={!!user.formState.errors.yearproduction}
                label="Год производства"
                {...user.register("yearproduction", { required: true })}
              />
              <RedditInput label="Префикс" {...user.register("prefix")} />
              <RedditInput
                isInvalid={!!user.formState.errors.serialnumber}
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
              <RedditInput
                isInvalid={!!query.formState.errors.sparepart}
                label="Наименование запчасти"
                {...query.register("sparepart", { required: true })}
              />
              <RedditInput
                label="Каталожный номер запчасти"
                {...query.register("catalognumber")}
              />
              <RedditInput
                isInvalid={!!query.formState.errors.quantity}
                label="Количество"
                {...query.register("quantity", { required: true })}
              />
              <RedditTextarea
                label="Комментарий"
                minRows={1}
                {...query.register("comment")}
              />
              <button className="button button__outline">
                Добавить в список
              </button>
            </div>
          </form>
          <div className="forms">
            <div className="forms__head">
              <p>Ваш запрос</p>
            </div>
            {queryRequested.map((item: any, id) => (
              <div className="forms__request-query" key={id}>
                <RedditInput
                  label="Бренд"
                  defaultValue={item.sparepart}
                  disabled={true}
                />
                <RedditInput
                  label="Номер запчасти"
                  defaultValue={item.catalognumber}
                  disabled={true}
                />
                <RedditInput
                  label="Количество"
                  defaultValue={item.quantity}
                  disabled={true}
                />
                <button
                  className="button button__primary"
                  onClick={() => deleteQuery(id)}
                >
                  X
                </button>
                <RedditTextarea
                  label="Комментарий"
                  defaultValue={item.comment}
                  disabled={true}
                />
              </div>
            ))}
          </div>
          <form onSubmit={user.handleSubmit(onSubmit)}>
            <RedditButton type={"submit"}>Отправить запрос</RedditButton>
          </form>
        </div>
      </div>
    </section>
  );
};
