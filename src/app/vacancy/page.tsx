import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import type { Metadata } from "next";
import { Vacancy } from "./components/Vacancy";

export const metadata: Metadata = {
  title: "Вакансии компании СПЕЦМАШИНА.",
};

export default function vacancy() {
  return (
    <main>
      <Vacancy />
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
