import { api } from "@/services/api";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import translit from "@/utils/translit";
import Gallery from "@/app/products/components/Gallery";
import SpecificationModal from "@/app/products/components/SpecificationModal";
import CountAddTo from "@/app/products/components/CountAddTo";

export default async function ProductInfo(params: any) {
  const slugArray = params.id.slug.split("-");
  const id = slugArray.pop();
  const slug = slugArray.join("-");

  const data = await api.getProduct(id);
  if (!data.id) {
    notFound();
  }

  if (slug !== translit(data.productname.replaceAll(" ", "-"))) {
    redirect(
      `/products/${translit(data.productname.replaceAll(" ", "-"))}-${data.id}`,
    );
  }

  const price =
    data.price === 0
      ? "Цена по запросу"
      : `${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;

  return (
    <>
      <section
        className="commodity__section"
        itemScope
        itemType="https://schema.org/Product"
      >
        <div className="container">
          <div className="row">
            <div className="commodity__head">
              <div className="commodity__title">
                <h1 itemProp="name">
                  {data.productname} {data.brand} {data.article}
                </h1>
              </div>
            </div>
            <div className="commodity__main">
              <div className="commodity__gallery">
                <img
                  src={data.image.length ? data.image[0] : ""}
                  itemProp="image"
                  className={"is-hidden"}
                  alt="gallery"
                />
                <Gallery images={data.image} />
              </div>
              <div className="commodity__info">
                <div className="commodity__info-box">
                  <div
                    className={`commodity__availability ${data.count === 0 ? "commodity__availability--green" : `commodity__availability--${data.status.value}`}`}
                  >
                    <span />
                    <p>{data.count === 0 ? "7-10 дней" : data.status.name}</p>
                  </div>
                  <div className="commodity__specifications">
                    <div className="commodity__specification">
                      <p>Артикул</p>
                      <span>{data.article}</span>
                    </div>
                    <div className="commodity__specification">
                      <p>Бренд</p>
                      <span>{data.brand}</span>
                    </div>
                    <SpecificationModal options={data.options} />
                  </div>
                </div>
                <div className="commodity__description">
                  {data.description ? (
                    <>
                      <h5>Описание</h5>
                      <p itemProp="description">{data.description}</p>
                    </>
                  ) : (
                    <>
                      <h5>Описание</h5>
                      <p>
                        {data.productname} {data.brand} {data.article} вы можете
                        купить с доставкой в любую точку России с оплатой по
                        безналичному расчету с НДС 20% или по карте. Если у вас
                        возникли сложности с выбором, вы можете получить
                        экспертную консультацию связавшись с нами любым удобным
                        способом со страницы{" "}
                        <Link href={"/contact"}> Контакты</Link>
                      </p>
                    </>
                  )}
                  <picture>
                    <source srcSet="/images/product/hero.png" />
                    <img src="/images/product/hero.png" alt="hero" />
                  </picture>
                </div>
                <div
                  className="commodity__basket"
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <meta itemProp="price" content={data.price.toString()} />
                  <meta itemProp="priceCurrency" content="RUB" />
                  <link
                    itemProp="availability"
                    href="http://schema.org/InStock"
                  />
                  <div className="commodity__price">
                    <span>Цена:</span>
                    <p>{price}</p>
                  </div>
                  <CountAddTo
                    id={data.id}
                    article={data.article}
                    count={data.count}
                    brand={data.brand}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
