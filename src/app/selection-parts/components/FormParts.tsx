"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { Autocomplete } from "@mui/material";
import { Brand } from "@/common/types/Brand";
import { useEffect, useState } from "react";
import CloneDeep from "lodash-es/cloneDeep";
import { RedditTextField } from "@/components/ui/RedditTextField";
import { IsMobile } from "@/utils/IsMobile";
import { RedditButton } from "@/components/ui/RedditButton";
import { InputPhone } from "@/components/ui/InputPhone";
import { useRouter } from "next/navigation";

export const FormParts = () => {
  const [brand, setBrand] = useState<Brand[]>([]);
  const [queryRequested, setQueryRequested] = useState([]);
  const route = useRouter();
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
      if (fdata.status === 200) {
        toast.success("Запрос на подбор успешно создан");
        route.push(`/success?num=${fdata.num}&page=query`);
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
                label="Имя"
                error={!!user.formState.errors.name}
                {...user.register("name", { required: true })}
              />
              <RedditTextField
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
                  <RedditTextField
                    {...params}
                    error={!!user.formState.errors.brand}
                    label="Бренд"
                    {...user.register("brand", { required: true })}
                  />
                )}
              />
              <RedditTextField
                error={!!user.formState.errors.model}
                label="Модель"
                {...user.register("model", { required: true })}
              />
              <RedditTextField
                error={!!user.formState.errors.yearproduction}
                label="Год производства"
                {...user.register("yearproduction", { required: true })}
              />
              <RedditTextField label="Префикс" {...user.register("prefix")} />
              <RedditTextField
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
              <RedditTextField
                error={!!query.formState.errors.sparepart}
                label="Наименование запчасти"
                {...query.register("sparepart", { required: true })}
              />
              <RedditTextField
                label="Каталожный номер запчасти"
                {...query.register("catalognumber")}
              />
              <RedditTextField
                error={!!query.formState.errors.quantity}
                label="Количество"
                {...query.register("quantity", { required: true })}
              />
              <RedditTextField
                label="Комментарий"
                multiline
                {...query.register("comment")}
              />
              <RedditButton type={"submit"} variant="contained">
                Добавить в список
              </RedditButton>
            </div>
          </form>
          <div className="forms">
            <div className="forms__head">
              <p>Ваш запрос</p>
            </div>
            {queryRequested.map((item: any, id) => (
              <div className="forms__request-query" key={id}>
                <RedditTextField
                  label="Бренд"
                  defaultValue={item.sparepart}
                  disabled={true}
                />
                <RedditTextField
                  label="Номер запчасти"
                  defaultValue={item.catalognumber}
                  disabled={true}
                />
                <RedditTextField
                  label="Количество"
                  defaultValue={item.quantity}
                  disabled={true}
                />
                <button
                  className="button button__primary"
                  onClick={() => deleteQuery(id)}
                />
                <RedditTextField
                  label="Комментарий"
                  multiline
                  disabled={true}
                  defaultValue={item.comment}
                />
              </div>
            ))}
          </div>
          <form onSubmit={user.handleSubmit(onSubmit)}>
            <RedditButton type={"submit"} variant="contained">
              Отправить запрос
            </RedditButton>
          </form>
        </div>
      </div>
    </section>
  );
};
