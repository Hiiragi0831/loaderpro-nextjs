"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { ThemeProvider } from "@mui/material";
import { RedditButton } from "@/components/ui/RedditButton";
import { darkTheme } from "@/utils/customTheme";
import { RedditTextField } from "@/components/ui/RedditTextField";
import { InputPhone } from "@/components/ui/InputPhone";
import { usePathname, useRouter } from "next/navigation";

type CtaType = {
  title?: any;
  text?: any;
  class?: string;
};

export const Cta: FC<CtaType> = (data) => {
  const pathname = usePathname();
  const route = useRouter();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      username: "",
      phone: "",
    },
  });
  const title = data.title
    ? data.title
    : "Наш специалист свяжется с вами в течение 15 минут";
  const text = data.text
    ? data.text
    : "Если у вас возникли вопросы, вы можете заказать обратный звонок";

  const onSubmit = async (data: any) => {
    const fd = Object.assign(data, { url: pathname });
    console.log(fd);
    try {
      const fdata = await api.postCB(fd);
      if (fdata.status === 200) {
        toast.success("Заявка успешно отправлена");
        route.push(`/success?num=${fdata.num}&page=call`);
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
              <RedditTextField
                error={!!formState.errors.username}
                label="Имя"
                {...register("username", { required: true })}
              />
              <InputPhone
                error={!!formState.errors.phone}
                label="Телефон"
                {...register("phone", { required: true })}
              />
              <RedditButton type={"submit"} variant="contained">
                Оставить заявку
              </RedditButton>
            </form>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};
