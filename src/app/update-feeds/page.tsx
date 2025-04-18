import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import ymlGenerate from "@/utils/ymlGenerate";

export const metadata: Metadata = metaGen(
  "Запчасти для вилочных погрузчиков и складской техники в Санкт-Петербурге",
  "Предлагаем купить запчасти для вилочных погрузчиков и складской техники от лучших мировых производителей и поставщиков в Санкт-Петербурге с доставкой по всей России у компании СПЕЦМАШИНА",
);

export default function Home() {
  ymlGenerate();
  return <main />;
}
