"use client";
import { FC } from "react";
import { Modal } from "@/components/Modal";
import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "@/common/shemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Notifications } from "@/utils/notifications";
import { signIn } from "@/services/auth";

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

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("Credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw Error();
      }

      Notifications.success("Вы успешно вошли в аккаунт");

      onClose?.();
    } catch (error) {
      console.error("Error [LOGIN]", error);
      Notifications.error("Не удалось войти в аккаунт");
    }
  };

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <form
        action={async (formData) => {
          await signIn("credentials", { formData, redirect: false });
        }}
      >
        <label className="form__input">
          <input type="text" placeholder="Emal" name="email" />
          <span>email</span>
        </label>
        <label className="form__input">
          <input type="password" placeholder="Пароль" name="password" />
          <span>Пароль</span>
        </label>
        <button type="submit">
          {form.formState.isSubmitting ? "Вход..." : "Войти"}
        </button>
      </form>
    </Modal>
  );
};
