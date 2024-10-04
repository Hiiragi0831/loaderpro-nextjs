"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useMemo, useState } from "react";
import { Brand } from "@/common/types/Brand";
import CloneDeep from "lodash-es/cloneDeep";
import { RedditInput } from "@/components/ui/RedditInput";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { RedditButton } from "@/components/ui/RedditButton";
// import { Autocomplete, TextField } from "@mui/material";

export const QueryBox = () => {
  const [brand, setBrand] = useState<Brand[]>([]);
  const [isBrandLoading, setIsBrandLoading] = useState(true);
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
      setIsBrandLoading(false);
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

  useMemo(() => void loadBrands(), []);

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
                isInvalid={!!user.formState.errors.name}
                errorMessage={user.formState.errors.name?.message}
                label="Имя"
                variant={"bordered"}
                {...user.register("name", { required: true })}
              />
              <RedditInput
                isInvalid={!!user.formState.errors.email}
                label="Email"
                {...user.register("email", { required: true })}
              />
              <RedditInput
                isInvalid={!!user.formState.errors.phone}
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
              <Autocomplete label="Select an animal" className="max-w-xs" isLoading={isBrandLoading}>
                {brand.map((item) => (
                  <AutocompleteItem key={item.id} value={item.name}>
                    {item.name}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
              {/*<Autocomplete*/}
              {/*  disablePortal*/}
              {/*  getOptionLabel={(option) => option.name}*/}
              {/*  options={brand}*/}
              {/*  renderInput={(params) => (*/}
              {/*    <TextField*/}
              {/*      error={!!query.formState.errors.brand}*/}
              {/*      {...params}*/}
              {/*      label="Бренд"*/}
              {/*      {...query.register("brand", { required: true })}*/}
              {/*    />*/}
              {/*  )}*/}
              {/*/>*/}
              <RedditInput
                isInvalid={!!query.formState.errors.serialnumber}
                label="Номер запчасти"
                {...query.register("serialnumber", { required: true })}
              />
              <RedditInput
                isInvalid={!!query.formState.errors.quantity}
                label="Количество"
                {...query.register("quantity", { required: true })}
              />
              <div className="forms__buttons">
                <RedditButton type={"submit"}>Добавить в список</RedditButton>
              </div>
            </form>
          </div>
          <div className="forms">
            <div className="forms__head">
              <p>Ваш запрос</p>
            </div>
            {queryRequested.map((item: any, id) => (
              <div className="forms__query" key={id}>
                <RedditInput
                  label="Бренд"
                  defaultValue={item.brand}
                  disabled={true}
                />
                <RedditInput
                  label="Номер запчасти"
                  defaultValue={item.serialnumber}
                  disabled={true}
                />
                <RedditInput
                  label="Количество"
                  defaultValue={item.quantity}
                  disabled={true}
                />
                <div className="forms__buttons">
                  <RedditButton onClick={() => deleteQuery(id)}>X</RedditButton>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={user.handleSubmit(onSubmit)}>
            <RedditButton type="submit">Отправить запрос</RedditButton>
          </form>
        </div>
      </div>
    </section>
  );
};
