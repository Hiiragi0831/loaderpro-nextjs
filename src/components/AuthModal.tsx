"use client";

import { FC, useState } from "react";
import { Modal } from "@/components/Modal";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formLoginSchema,
  TFormLoginValues,
  formRegisterSchema,
  TFormRegisterValues,
} from "@/common/shemas";
import IconLogo from "@/icons/logo.svg";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ isShow, onClose }) => {
  const loginForm = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const registerForm = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
  });
  const [status, setStatus] = useState(true);

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

  const onRegister = async (data: TFormRegisterValues) => {
    try {
      console.log(data);
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/Main/create_user/`,
        {
          method: "POST",
          body: JSON.stringify({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
          }),
        },
      );
      if (resp?.ok) {
        toast.success(
          "Форма успешно оправлена, ссылка активации придет на Email",
        );
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
        <p className="h2">{status ? "Авторизоваться" : "Регистрация"}</p>
        {status ? (
          <form onSubmit={loginForm.handleSubmit(onSubmit)}>
            <TextField
              error={!!loginForm.formState.errors.email}
              helperText={registerForm.formState.errors.email?.message}
              label="Email"
              {...loginForm.register("email", { required: true })}
            />
            <TextField
              error={!!loginForm.formState.errors.password}
              helperText={registerForm.formState.errors.password?.message}
              label="Пароль"
              type={"password"}
              {...loginForm.register("password", { required: true })}
            />
            <button type={"submit"} className={"button button__primary"}>
              Войти
            </button>
            <p>
              Вы новый пользователь?{" "}
              <button type={"button"} onClick={() => setStatus(!status)}>
                Регистрация
              </button>
            </p>
          </form>
        ) : (
          <form onSubmit={registerForm.handleSubmit(onRegister)}>
            <TextField
              error={!!registerForm.formState.errors.firstname}
              helperText={registerForm.formState.errors.firstname?.message}
              label="Имя"
              {...registerForm.register("firstname", { required: true })}
            />
            <TextField
              error={!!registerForm.formState.errors.lastname}
              helperText={registerForm.formState.errors.lastname?.message}
              label="Фамилия"
              {...registerForm.register("lastname", { required: true })}
            />
            <TextField
              error={!!registerForm.formState.errors.email}
              helperText={registerForm.formState.errors.email?.message}
              label="Email"
              {...registerForm.register("email", { required: true })}
            />
            <TextField
              error={!!registerForm.formState.errors.password}
              helperText={registerForm.formState.errors.password?.message}
              label="Пароль"
              type={"password"}
              {...registerForm.register("password", { required: true })}
            />
            <TextField
              error={!!registerForm.formState.errors.confirmPassword}
              helperText={
                registerForm.formState.errors.confirmPassword?.message
              }
              label="Повторите пароль"
              type={"password"}
              {...registerForm.register("confirmPassword", { required: true })}
            />
            <button type={"submit"} className={"button button__primary"}>
              Отправить
            </button>
            <p>
              Уже зарегистрированны?{" "}
              <button type={"button"} onClick={() => setStatus(!status)}>
                Авторизация
              </button>
            </p>
          </form>
        )}
      </div>
    </Modal>
  );
};
