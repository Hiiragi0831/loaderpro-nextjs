"use client";

import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function SpecificationModal({ options }: { options: any }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button onClick={() => setModalOpen(true)}>
        Показать все характеристики
      </button>
      <Modal isShow={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="commodity-specification">
          {options?.map((option: any, id: any) => (
            <div className="commodity__specification" key={id}>
              <p>{option.name}</p>
              <span>{option.value}</span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
