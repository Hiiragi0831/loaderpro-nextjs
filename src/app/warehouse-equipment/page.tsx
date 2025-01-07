import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Вилочные погрузчики и складская техника",
  description:
    "Купить вилочные погрузчики и складскую технику под различные потребности вы можете на маркетплейсе СПЕЦМАШИНА. В ассортименте вы найдете оборудование от гидравлических тележек до контейнерных ричстакеров. Мы специализируемся на складской технике и комплектующих к ней уже более 10 лет, обратившись к нам вы получите экспертное сопровождение покупки оборудования.",
};

const CatalogProducts = dynamic(() => import("@/components/CatalogProducts"), {
  ssr: false,
});

export default function WarehouseEquipment() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Складская техника</h1>
          </div>
          <div className="row row-1">
            <div className="catalog__products">
              <CatalogProducts url={"warehouse_equipment"} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
