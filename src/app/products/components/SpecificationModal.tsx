"use client";

import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function SpecificationModal({
  options,
  count,
}: {
  options: any;
  count?: number;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const optionStatus = (option: any) => {
    if (option.name === "Срок поставки") {
      if (count === 0) {
        return "7-10 дней";
      }
    }
    if (option.value === "В идентификации") {
      return "7-10 дней";
    }

    return option.value;
  };
  return (
    <>
      <button onClick={() => setModalOpen(true)}>
        Показать все характеристики
      </button>
      <Modal isShow={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="commodity-specification">
          {options?.map((option: any, id: any) => (
            <div
              className={`commodity__specification ${option.value === "OEM" ? "is-hidden" : ""}`}
              key={id}
            >
              <p>{option.name}</p>
              <span>{optionStatus(option)}</span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
