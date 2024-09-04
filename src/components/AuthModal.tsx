"use client";
import { FC } from "react";
import { Modal } from "@/components/Modal";
import { SignIn } from "@/components/forms/sign-in";

interface Props {
  isShow: boolean;
  onClose: () => void;
}

export const AuthModal: FC<Props> = ({ isShow, onClose }) => {
  return (
    <Modal isShow={isShow} onClose={onClose}>
      <SignIn />
    </Modal>
  );
};
