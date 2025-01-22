"use client";

import { FC } from "react";
import { Modal } from "@/components/Modal";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema, TFormLoginValues } from "@/common/shemas";
import IconLogo from "@/icons/logo.svg";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ isShow, onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  // const { errors } = form.formState;
  //
  // if (errors) {
  //   console.log(errors);
  // }

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (resp?.error) {
        throw Error();
      } else {
        toast.success("Вы успешно вошли в аккаунт");
        router.push("/account");
        onClose?.();
      }
    } catch (error) {
      toast.error("Не верный логин или пароль");
      console.error("Error [LOGIN]", error);
    }
  };

  return (
    <Modal isShow={isShow} onClose={onClose} className={"auth-modal"}>
      <div className={"auth-modal__content"}>
        <div className="auth-modal__logo">
          <IconLogo />
        </div>
        <hr />
        <p className="h2">Авторизоваться</p>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <TextField
            error={!!form.formState.errors.email}
            label="Email"
            {...form.register("email", { required: true })}
          />
          <TextField
            error={!!form.formState.errors.password}
            label="Пароль"
            type={"password"}
            {...form.register("password", { required: true })}
          />
          <button type={"submit"} className={"button button__primary"}>
            Войти
          </button>
        </form>
      </div>
    </Modal>
  );
};
