import dynamic from "next/dynamic";
import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";

export async function generateMetadata({ params }: { params: any }) {
  const slugArray = params.slug.split("-");
  const id = slugArray.pop();
  const brand = await api.getPageBrand(id);

  return metaGen(brand.title, brand.description);
}

const CatalogProducts = dynamic(() => import("@/components/CatalogProducts"), {
  ssr: false,
});

export default async function SpareParts({ params }: { params: any }) {
  const slugArray = params.slug.split("-");
  const id = slugArray.pop();
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
          {brand.content ? (
            <div
              dangerouslySetInnerHTML={{ __html: brand.content }}
              className={"catalog__info"}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </main>
  );
}
