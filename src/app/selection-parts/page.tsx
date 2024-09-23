import type { Metadata } from "next";
import { FormParts } from "@/app/selection-parts/FormParts";
export const metadata: Metadata = {
  title: "Подбор запасных частей по каталогам",
  description:
    "Наши технические специалисты постоянно расширяют базу каталогов запчастей для различных брендов складской техники, это позволяет нам осуществлять подбор запасных частей с гарантией.",
};

export default function SelectionParts() {
  return (
    <main>
      <FormParts />
    </main>
  );
}
