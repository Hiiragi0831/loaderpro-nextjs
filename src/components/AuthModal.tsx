"use client";
import { FC } from "react";
import { Modal } from "@/components/Modal";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formLoginSchema, TFormLoginValues } from "@/common/shemas";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ isShow, onClose }) => {
  const { register, handleSubmit } = useForm<TFormLoginValues>({
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email
          <input
            type="email"
            {...register("email", { required: true, maxLength: 20 })}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            {...register("password", { required: true, maxLength: 20 })}
          />
        </label>
        <button type={"submit"}>Sign In</button>
      </form>
    </Modal>
  );
};
