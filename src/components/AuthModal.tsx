import { FC } from "react";
import { Modal } from "@/components/Modal";
import { signIn } from "@/services/auth";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ isShow, onClose }) => {
  return (
    <Modal isShow={isShow} onClose={onClose}>
      <form
        action={async (formData) => {
          await signIn("credentials", formData);
        }}
      >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>
    </Modal>
  );
};
