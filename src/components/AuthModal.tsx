import { FC } from "react";
import { Modal } from "@/components/Modal";
import { useForm } from "react-hook-form";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ isShow, onClose }) => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Modal isShow={isShow} onClose={onClose}>
      <label className="form__input">
        <input type="text" placeholder="Emal" name="emal" />
        <span>Emal</span>
      </label>
      <label className="form__input">
        <input type="password" placeholder="Пароль" name="password" />
        <span>Пароль</span>
      </label>
    </Modal>
  );
};
