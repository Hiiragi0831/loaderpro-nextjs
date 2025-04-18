import type { Metadata } from "next";
import { FormParts } from "./components/FormParts";
import { Cta } from "@/components/Cta";
import Advantages from "@/components/Advantages";
import Articles from "@/components/Articles";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen(
  "Подбор запасных частей по каталогам",
  "Наши технические специалисты постоянно расширяют базу каталогов запчастей для различных брендов складской техники, это позволяет нам осуществлять подбор запасных частей с гарантией.",
);

export default function RequestParts() {
  return (
    <main>
      <section className="title">
        <div className="container">
          <div className="row">
            <h1 className="h1">
              Если у вас нет каталожных номеров запчастей - это не проблема
            </h1>
            <p>
              Заполните данные техники в полях ниже, а также добавьте
              необходимые позиции в список. После того, как ваш запрос будет
              обработан, мы отправим вам коммерческое предложение.
            </p>
          </div>
        </div>
      </section>
      <FormParts />
      <Cta />
      <Advantages />
      <Articles limit={4} />
    </main>
  );
}
