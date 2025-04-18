import { QueryBox } from "./components/QueryBox";
import type { Metadata } from "next";
import Advantages from "@/components/Advantages";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen(
  "Запрос запчастей по номерам",
  "Вы можете создать запрос на запчасти для погрузчика и мы отправим вам коммерческое предложение.",
);

export default function SelectionParts() {
  return (
    <main>
      <section className="title">
        <div className="container">
          <div className="row">
            <h1 className="h1">
              Некоторые запчасти могут отсутствовать в нашем каталоге – это
              нормально
            </h1>
            <p>
              Вы можете отправить запрос на необходимые позиции, добавив их в
              список ниже. После того, как ваш запрос будет обработан, мы
              отправим вам коммерческое предложение и добавим их в каталог.
            </p>
          </div>
        </div>
      </section>
      <QueryBox />
      <Cta />
      <Advantages />
      <Articles limit={4} />
    </main>
  );
}
