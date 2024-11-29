"use client";

import { InputPhone } from "@/components/ui/InputPhone";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBasket } from "@/store/basket";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const BasketForm = () => {
  const [delivery, setDelivery] = useState(false);
  const [status, setStatus] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
  const route = useRouter();
  const products = useBasket((state) => state.basket);
  const cleanBasket = useBasket((state) => state.reset);
  const { register, handleSubmit, reset, formState } = useForm({
    disabled,
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      pay: "",
      delivery: "",
      transport: "",
      methoddelivery: "",
      city: "",
      address: "",
      priority: "",
    },
  });

  const loadBasketStatus = async () => {
    try {
      const data = await api.getBasketStatus();
      setStatus(data);
      setIsLoadingStatus(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  const onSubmit = async (data: any) => {
    const fd = Object.assign({ goods: products }, data);
    console.log(fd);
    setDisabled(true);
    try {
      const fdata = await api.postBasket(fd);
      if (fdata.status === 200) {
        route.push(`/success?num=${fdata.num}&page=basket`);
        toast.success("Заказ успешно создан");
        cleanBasket();
        reset();
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
    setDisabled(false);
  };

  const select = (name: string) => {
    type status = {
      name: string;
      title: string;
      options: [
        {
          id: number;
          label: string;
        },
      ];
    };

    const item: any = status.find((item: status) => item.name == name);

    if (name === "delivery") {
      return (
        <FormControl>
          <InputLabel id={`select-${item.id}`}>{item.title}</InputLabel>
          <Select
            labelId={`select-${item.id}`}
            label={item.title}
            {...register(item.name, { required: true })}
            onChange={(e) => {
              if (Number(e.target.value) === 4) {
                setDelivery(true);
              } else {
                setDelivery(false);
              }
            }}
          >
            {item.options.map((option: any) => (
              <MenuItem key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }

    if (item) {
      return (
        <FormControl>
          <InputLabel id={`select-${item.id}`}>{item.title}</InputLabel>
          <Select
            labelId={`select-${item.id}`}
            label={item.title}
            {...register(item.name, { required: true })}
          >
            {item.options.map((option: any) => (
              <MenuItem key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }
  };

  useLayoutEffect(() => void loadBasketStatus(), []);
  return (
    <form className="basket__form-data" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={!!formState.errors.username}
        label="Имя"
        {...register("username", { required: true })}
      />
      <TextField
        error={!!formState.errors.email}
        label="Email"
        {...register("email", { required: true })}
      />
      <InputPhone
        error={!!formState.errors.phone}
        label="Телефон"
        {...register("phone", { required: true })}
      />
      {isLoadingStatus ? "" : select("pay")}
      {isLoadingStatus ? "" : select("delivery")}
      {delivery && (
        <>
          {isLoadingStatus ? "" : select("transport")}
          {isLoadingStatus ? "" : select("methoddelivery")}
          <TextField
            error={!!formState.errors.city}
            label="Город"
            {...register("city", { required: true })}
          />
          <TextField
            error={!!formState.errors.address}
            label="Адрес"
            {...register("address", { required: true })}
          />
        </>
      )}
      {isLoadingStatus ? "" : select("priority")}
      <Button variant="contained" type={"submit"} disabled={disabled}>
        Оформить заказ
      </Button>
    </form>
  );
};
