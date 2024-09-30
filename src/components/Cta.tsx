"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { createTheme, TextField, ThemeProvider } from "@mui/material";

type CtaType = {
  title?: any;
  text?: any;
  class?: string;
};
const darkTheme = createTheme({
  typography: {
    fontFamily: "'FiraSans', Arial, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#fab84f",
    },
  },
});

export const Cta: FC<CtaType> = (data) => {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      username: "",
      phone: "",
    },
  });
  const title = data.title
    ? data.title
    : "Оставьте заявку и наш менеджер свяжется с вами в течении 15 минут!";
  const text = data.text
    ? data.text
    : "Получите полную консультацию по всем видам аккумуляторов!";

  const onSubmit = async (data: any) => {
    const fd = Object.assign(data);
    console.log(fd);
    try {
      const res = await api.postCB(fd);
      if (res.ok) {
        toast.success("Заявка успешно отправлена");
        reset();
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <section className={`cta ${data.class ? data.class : ""}`}>
        <div className="container">
          <div className="row">
            <div className="cta__info">
              {data.title === null ? "" : <span className="h1">{title}</span>}
              {data.text === null ? "" : <p>{text}</p>}
            </div>
            <form className="cta__form" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                error={!!formState.errors.username}
                label="Имя"
                {...register("username", { required: true })}
              />
              <TextField
                error={!!formState.errors.phone}
                label="Телефон"
                {...register("phone", { required: true })}
              />
              <button className="button button__primary" type={"submit"}>
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};
