"use client";
import { FC } from "react";
import { Modal } from "@/components/Modal";
import { signIn } from "@/services/auth";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema, TFormLoginValues } from "@/common/shemas";

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
    <Modal isShow={isShow} onClose={onClose}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <label>
            Email
            <input name="email" type="email" />
          </label>
          <label>
            Password
            <input name="password" type="password" />
          </label>
          <button type={"submit"}>Sign In</button>
        </form>
      </FormProvider>
    </Modal>
  );
};
