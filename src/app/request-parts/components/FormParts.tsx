"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { Autocomplete, TextField } from "@mui/material";
import { Brand } from "@/common/types/Brand";
import { useEffect, useState } from "react";

export const FormParts = () => {
  const [brand, setBrand] = useState<Brand[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      brand: "",
      name: "",
      email: "",
      phone: "",
      model: "",
      yearproduction: "",
      prefix: "",
      serialnumber: "",
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
    const fd = Object.assign(data);
    console.log(fd);
    try {
      const fdata = await api.postQueryTs(fd);
      if (fdata.ok) {
        toast.success("Заказ успешно создан");
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  useEffect(() => void loadBrands(), []);

  return (
    <section className="forms__section">
      <div className="container">
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
          <div className="forms">
            <div className="forms__head">
              <p>Контактная информация</p>
            </div>
            <div className="forms__row row-3">
              <TextField
                label="Имя"
                error={!!errors.name}
                {...register("name", { required: true })}
              />
              <TextField
                label="Email"
                error={!!errors.email}
                {...register("email", { required: true })}
              />
              <TextField
                label="Телефон"
                error={!!errors.phone}
                {...register("phone", { required: true })}
              />
            </div>
          </div>
          <div className="forms">
            <div className="forms__head">
              <p>Информация о транспортном средстве</p>
            </div>
            <div className="forms__row row-3">
              <Autocomplete
                disablePortal
                getOptionLabel={(option) => option.name}
                options={brand}
                renderInput={(params) => (
                  <TextField
                    error={!!errors.brand}
                    {...params}
                    label="Бренд"
                    {...register("brand", { required: true })}
                  />
                )}
              />
              <TextField
                error={!!errors.model}
                label="Модель"
                {...register("model", { required: true })}
              />
              <TextField
                error={!!errors.yearproduction}
                label="Год производства"
                {...register("yearproduction", { required: true })}
              />
              <TextField label="Префикс" {...register("prefix")} />
              <TextField
                error={!!errors.serialnumber}
                label="Серийный номер"
                {...register("serialnumber", { required: true })}
              />
            </div>
          </div>
          <div className="forms">
            <div className="forms__head">
              <p>Добавить запчасти для ТС</p>
            </div>
            <div className="forms__row row-3">
              <TextField
                error={!!errors.sparepart}
                label="Наименование запчасти"
                {...register("sparepart", { required: true })}
              />
              <TextField
                label="Каталожный номер запчасти"
                {...register("catalognumber")}
              />
              <TextField
                error={!!errors.quantity}
                label="Количество"
                {...register("quantity", { required: true })}
              />
            </div>
            <div className="forms__row">
              <TextField
                label="Комментарий"
                multiline
                maxRows={4}
                {...register("comment")}
              />
            </div>
            <div className="forms__buttons">
              <button className="button button__outline">
                Добавить в список
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
