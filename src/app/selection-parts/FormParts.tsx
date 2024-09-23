"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { Autocomplete, TextField } from "@mui/material";
import { Brand } from "@/common/types/Brand";
import { useEffect, useState } from "react";

export const FormParts = () => {
  const [brand, setBrand] = useState<Brand[]>([]);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      brand: "",
    },
  });

  const onSubmit = async (data: any) => {
    const fd = Object.assign(data);
    console.log(fd);
    try {
      const fdata = await api.postBasket(fd);
      if (fdata.ok) {
        toast.success("Заказ успешно создан");
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  const loadBrands = async () => {
    try {
      const props = await api.getAllBrand();
      setBrand(props);
    } catch (error) {
      // @ts-expect-error @ts-expect-error
      console.error("Error fetching:", error.message);
    }
  };

  useEffect(() => void loadBrands(), []);

  return (
    <section className="forms__section">
      <div className="container">
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
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
                    {...params}
                    label="Бренд"
                    {...register("brand", { required: true })}
                  />
                )}
              />
              <label className="form__input">
                <input type="text" name="model" placeholder="Модель" />
                <span>Модель</span>
              </label>
              <label className="form__input">
                <input
                  type="text"
                  name="yearproduction"
                  placeholder="Год производства"
                />
                <span>Год производства</span>
              </label>
              <label className="form__input">
                <input type="text" name="prefix" placeholder="Префикс" />
                <span>Префикс</span>
              </label>
              <label className="form__input">
                <input
                  type="text"
                  name="serialnumber"
                  placeholder="Серийный номер"
                />
                <span>Серийный номер</span>
              </label>
            </div>
          </div>
          <div className="forms">
            <div className="forms__head">
              <p>Добавить запчасти для ТС</p>
            </div>
            <div className="forms__row row-3">
              <label className="form__input">
                <input
                  type="text"
                  name="sparepart"
                  placeholder="Наименование запчасти"
                />
                <span>Наименование запчасти</span>
              </label>
              <label className="form__input">
                <input
                  type="text"
                  name="catalognumber"
                  placeholder="Каталожный номер запчасти"
                />
                <span>Каталожный номер запчасти</span>
              </label>
              <label className="form__input">
                <input type="text" name="quantity" placeholder="Количество" />
                <span>Количество</span>
              </label>
            </div>
            <div className="forms__row">
              <label className="form__textarea">
                <textarea name="comment" rows={4} placeholder="Комментарий" />
                <span>Комментарий</span>
              </label>
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
