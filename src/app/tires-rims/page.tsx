import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Шины для вилочных погрузчиков",
  description:
    "Купить шины для вилочных погрузчиков с доставкой по России вы можете на маркетплейсе СПЕЦМАШИНА. В ассортименте шинокомплекты и цельнолитые шины различного исполнения. Наши специалисты проходят регулярные обучения по продукту и помогут подобрать шины подходящие именно для ваших условий эксплуатации.",
};

const CatalogProducts = dynamic(() => import("@/components/CatalogProducts"), {
  ssr: false,
});

export default function TiresRims() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Шины и диски</h1>
          </div>
          <div className="row row-1">
            <div className="catalog__products">
              <CatalogProducts url={"tires_rims"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
