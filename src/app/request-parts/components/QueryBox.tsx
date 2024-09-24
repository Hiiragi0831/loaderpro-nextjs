"use client";

import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Brand } from "@/common/types/Brand";
import { Autocomplete, TextField } from "@mui/material";

export const QueryBox = () => {
  const [brand, setBrand] = useState<Brand[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      brand: "",
      serialnumber: "",
      quantity: "",
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
    <section className="query__section">
      <div className="container">
        <div className="row">
          <div className="query">
            <div className="query__title">Запрос цены</div>
            <div className="query__form">
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
                error={!!errors.serialnumber}
                label="Номер запчасти"
                {...register("serialnumber", { required: true })}
              />
              <TextField
                error={!!errors.quantity}
                label="Количество"
                {...register("quantity", { required: true })}
              />
              <div className="query__buttons">
                <button className="button button__primary">
                  Добавить в запрос
                </button>
              </div>
            </div>
          </div>
          <div className="query">
            <div className="query__title">Ваш запрос</div>
            <div className="query__form">
              <label className="form__input">
                <input
                  type="text"
                  name="brand"
                  placeholder="Бренд"
                  defaultValue="Loaderpro"
                />
                <span>Бренд</span>
              </label>
              <label className="form__input">
                <input
                  type="text"
                  name="partnumber"
                  placeholder="Номер запчасти"
                  defaultValue="13243422"
                />
                <span>Номер запчасти</span>
              </label>
              <label className="form__input">
                <input
                  type="text"
                  name="brand"
                  placeholder="Количество"
                  defaultValue="2"
                />
                <span>Количество</span>
              </label>
              <div className="query__buttons">
                <button className="button button__primary">X</button>
              </div>
            </div>
            <div className="query__form">
              <label className="form__input">
                <input
                  type="text"
                  name="brand"
                  placeholder="Бренд"
                  defaultValue="Loaderpro"
                />
                <span>Бренд</span>
              </label>
              <label className="form__input">
                <input
                  type="text"
                  name="partnumber"
                  placeholder="Номер запчасти"
                  defaultValue="13243422"
                />
                <span>Номер запчасти</span>
              </label>
              <label className="form__input">
                <input
                  type="text"
                  name="brand"
                  placeholder="Количество"
                  defaultValue="2"
                />
                <span>Количество</span>
              </label>
              <div className="query__buttons">
                <button className="button button__primary">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
