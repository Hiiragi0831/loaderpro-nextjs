import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "507";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков CLARK",
    "Предлагаем купить запчасти для вилочных погрузчиков CLARK с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
  );
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
              <h2 className={"h1"}>Купить запчасти для погрузчиков CLARK</h2>
              <p>
                Погрузчик Clark – это высококачественная складская техника от
                южнокорейского бренда. Компания Clark была основана в 1917 году
                и считается пионером в создании первой в мире подъемной
                гидравлической системы. В настоящее время по всему миру активно
                эксплуатируется около 350 000 единиц техники этого бренда.
                Вилочные погрузчики Clark полностью оправдывают корпоративный
                девиз — «создан на века», демонстрируя высокую износостойкость и
                отличные рабочие характеристики.
              </p>
              <p>
                Ассортимент производителя включает автопогрузчики с ДВС,
                работающие на бензине, газе или дизельном топливе, а также
                электропогрузчики с современными микропроцессорными блоками
                управления. Clark остается одним из самых старых и уважаемых
                производителей подъемной техники, внедряя инновационные
                технологии и строгую систему контроля качества на каждом этапе
                сборки.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/clark-007-507.jpg"} />
              <img src={"/images/brand/clark-007-507.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности запчастей для погрузчиков CLARK</h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает в Санкт-Петербурге широкий
              ассортимент оригинальных запчастей для вилочных погрузчиков CLARK,
              а также высококачественных сертифицированных аналогов, проверенных
              в условиях реальной эксплуатации. Мы обеспечиваем комплексный
              подход к обеспечению запчастями, предлагая все необходимое для
              полного технического обслуживания и ремонта техники.
            </p>
            <p>Ассортимент включает:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Комплектующие"}
              text={
                "Комплектующие двигателя, трансмиссии и ходовой части — поршневые группы, ремни, муфты, сцепления, КПП, мосты, ступицы, подшипники и другие элементы, отвечающие за ключевые функции техники."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Фильтры"}
              text={
                "Воздушные, топливные, масляные и гидравлические фильтры — необходимые для защиты основных систем от загрязнений, продлевающие срок службы оборудования и повышающие его эксплуатационную надежность."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Шины"}
              text={
                "Цельнолитые шины и шинокомплекты — устойчивые к повреждениям и проколам, обеспечивают стабильность и безопасность техники при интенсивной работе в сложных условиях склада или производства."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ремкомплекты"}
              text={
                "Сальники, манжеты, уплотнители, прокладки и другие расходные материалы, применяемые при плановом обслуживании или устранении неисправностей."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Тормозная система"}
              text={
                "Элементы тормозной системы, рулевого управления и электрики — тормозные колодки, цилиндры, рулевые тяги, электрические жгуты, предохранители, стартеры, генераторы, датчики и контроллеры."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Дополнительно, специалисты компании «СПЕЦМАШИНА» предоставят
              профессиональную консультацию по подбору необходимых
              комплектующих, а также помогут с оформлением заказа и организацией
              оперативной доставки по Санкт-Петербургу и регионам.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
