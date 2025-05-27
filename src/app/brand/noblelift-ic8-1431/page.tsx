import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "1431";

export async function generateMetadata() {
  const brand = await api.getPageBrand(id);
  return metaGen(brand.title, brand.description);
}

export default async function SpareParts() {
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
      <section className="brand">
        <div className="container">
          <div className="brand__header">
            <div className="text">
              <h2 className={"h1"}>
                Купить запчасти для вилочных погрузчиков Noblelift (Ноблелифт) в
                Санкт-Петербурге
              </h2>
              <p>
                Noblelift Equipment — китайская компания, входящая в число
                ведущих мировых производителей складского оборудования и
                погрузочной техники. Производственные мощности сосредоточены в
                Китае и Малайзии, где выпускается основной ассортимент
                продукции, включая вилочные погрузчики Noblelift. Бренд активно
                развивается на международных рынках: филиалы и дочерние
                предприятия работают в Германии, России, США, обеспечивая
                техническую поддержку и снабжение комплектующими.
              </p>
              <p>
                Ассортимент техники Noblelift включает штабелеры, ричтраки,
                электропогрузчики и тележки, вилочные погрузчики, отличающиеся
                надежностью, энергоэффективностью и удобством в эксплуатации.
                Важным преимуществом является применение в конструкции
                компонентов от ведущих мировых производителей, таких как Curtis,
                Kordel, Brevini, что положительно сказывается на сроке службы и
                общей производительности оборудования.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/noblelift-ic8-1431.jpg"} />
              <img src={"/images/brand/noblelift-ic8-1431.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Разновидности запчастей для вилочных погрузчиков Noblelift
              (Ноблелифт)
            </h2>
            <p>
              Складская техника подвержена естественному износу, особенно при
              интенсивной эксплуатации, и требует своевременной замены
              комплектующих. Компания «СПЕЦМАШИНА» предлагает широкий выбор
              оригинальных и аналоговых запчастей для вилочных погрузчиков
              Noblelift в Санкт-Петербурге, включая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигатели и элементы питания"}
              text={"Электродвигатели и тяговые аккумуляторы"}
            />
            <Box
              icon={<IconBolt />}
              title={"Система управления"}
              text={"Детали системы управления (контроллеры, платы, сенсоры)"}
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлическая система"}
              text={"Гидравлические узлы и цилиндры"}
            />
            <Box
              icon={<IconBolt />}
              title={"Рулевое управление"}
              text={"Рулевые механизмы, колеса, тормозные системы"}
            />
            <Box
              icon={<IconBolt />}
              title={"Фильтры"}
              text={"Фильтры, уплотнители, ремкомплекты."}
            />
            <Box
              icon={<IconBolt />}
              title={"Трансмиссия"}
              text={"Элементы трансмиссии и редукторы;"}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Все запчасти прошли проверку на прочность и долговечность, что
              гарантирует их полную совместимость с техникой бренда.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Как выбрать запчасти для вилочных погрузчиков Noblelift
              (Ноблелифт)
            </h2>
            <p>
              Подбор подходящей запчасти — важная задача, от которой зависит
              стабильность и эффективность работы оборудования. Для корректного
              выбора необходимо учитывать следующие критерии:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={
                "Модель и серийный номер погрузчика Noblelift <sup>01</sup>"
              }
              text={
                "Точное определение технических характеристик оборудования позволяет избежать ошибок при подборе деталей."
              }
            />
            <Box
              title={"Оригинальность <sup>02</sup>"}
              text={
                "Оригинальные запчасти Noblelift максимально соответствуют параметрам техники. В случае ограниченного бюджета допустим подбор сертифицированных аналогов от проверенных производителей. Назначение и условия эксплуатации. Комплектующие подбираются с учетом типа работы — внутри склада, на открытых площадках, в условиях высокой влажности и т.д."
              }
            />
            <Box
              title={"Консультация <sup>03</sup>"}
              text={
                "Менеджеры компании «СПЕЦМАШИНА» помогут с подбором деталей по VIN-коду или технической документации, а также предоставят полный или частичный каталог запчастей для вилочных погрузчиков Noblelift."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания «СПЕЦМАШИНА» предлагает надежные решения для поддержания
              работоспособности вилочных погрузчиков Noblelift. Мы обеспечим вас
              всеми необходимыми запчастями для быстрого и эффективного
              восстановления техники.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
