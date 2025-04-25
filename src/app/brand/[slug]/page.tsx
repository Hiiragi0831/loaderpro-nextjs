import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";

export async function generateMetadata(props: { params: Promise<any> }) {
  const params = await props.params;
  const slugArray = params.slug.split("-");
  const id = slugArray.pop();
  const brand = await api.getPageBrand(id);

  return metaGen(brand.title, brand.description);
}

export default async function SpareParts(props: { params: Promise<any> }) {
  const params = await props.params;
  const slugArray = params.slug.split("-");
  const id = slugArray.pop();
  const brand = await api.getPageBrand(id);
  console.log(params);

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
