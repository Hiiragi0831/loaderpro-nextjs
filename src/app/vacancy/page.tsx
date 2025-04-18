import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { VacancyItem } from "./components/VacancyItem";
import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen("Вакансии компании СПЕЦМАШИНА");

export default function vacancy() {
  return (
    <main>
      <VacancyItem />
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
