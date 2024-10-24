import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Запчасти для вилочных погрузчиков",
  description:
    "Купить запчасти для вилочных погрузчиков с доставкой по России вы можете на маркетплейсе СПЕЦМАШИНА. Мы объединили проверенных и надежных поставщиков России, Азии и Европы в одной площадке. Теперь приобрести необходимые запчасти стало намного проще, в нашем портфеле 1616 брендов производителей со всего мира.",
};

const CatalogProducts = dynamic(() => import("@/components/CatalogProducts"), {
  ssr: false,
});

export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <span className="h1">Запчасти для вилочных погрузчиков</span>
          </div>
          <div className="row row-1">
            <div className="catalog__products">
              <CatalogProducts />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
