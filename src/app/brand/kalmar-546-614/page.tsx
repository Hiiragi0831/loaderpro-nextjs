import dynamic from "next/dynamic";
import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import type { Metadata } from "next";

export const metadata: Metadata = metaGen(
  "Стань дилером LOADERPRO",
  "Мы создали сервис в котором просто и понятно можно покупать запчасти для складской техники ваших клиентов. Стань нашим партнером и зарабатывай вместе с LOADERPRO.",
);

const CatalogProducts = dynamic(() => import("@/components/CatalogProducts"), {
  ssr: false,
});

export default async function SpareParts() {
  const id = "614";
  const brand = await api.getPageBrand(id);

  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">{brand.h1 ? brand.h1 : brand.title}</h1>
          </div>
          <div className="row row-1">
            <div className="catalog__products">
              <CatalogProducts url={id} brand={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
