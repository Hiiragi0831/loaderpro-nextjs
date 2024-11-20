import dynamic from "next/dynamic";
import { api } from "@/services/api";

export async function generateMetadata({ params }: { params: any }) {
  const slugArray = params.slug.split("-");
  const id = slugArray.pop();
  const brand = await api.getPageBrand(id);

  return {
    title: brand.title,
    description: brand.description,
  };
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
            <span className="h1">{brand.title}</span>
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
