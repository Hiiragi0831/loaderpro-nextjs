"use client";
import { FC } from "react";
import { Modal } from "@/components/Modal";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema, TFormLoginValues } from "@/common/shemas";
import IconLogo from "@/icons/logo.svg";
import { Notifications } from "@/utils/notifications";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ isShow, onClose }) => {
  const { register, handleSubmit, formState } = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors } = formState;

  if (errors) {
    if (errors.email) {
      Notifications.error(`${errors.email.message}`);
    }
    if (errors.password) {
      Notifications.error(`${errors.password.message}`);
    }

    console.log(errors);
  }

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }
      console.log("Вы успешно вошли в аккаунт");

      onClose?.();
    } catch (error) {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form__input">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true, maxLength: 20 })}
            />
            <span>Email</span>
          </label>
          <label className="form__input">
            <input
              type="Password"
              placeholder="Пароль"
              {...register("password", { required: true, maxLength: 20 })}
            />
            <span>Пароль</span>
          </label>
          <button type={"submit"} className={"button button__primary"}>
            Войти
          </button>
        </form>
      </div>
    </Modal>
  );
};
