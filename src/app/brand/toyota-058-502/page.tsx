import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "502";

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
              <CatalogProducts url={"spare_parts"} />
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="brand__header">
            <div className="text">
              <h2 className={"h1"}>
                Купить запчасти для погрузчиков Toyota в Санкт-Петербурге
              </h2>
              <p>
                Компания «СПЕЦМАШИНА» предлагает купить запчасти для вилочных
                погрузчиков Toyota (Тойота) с доставкой по Санкт-Петербургу и
                всей России. В наличии широкий ассортимент оригинальных деталей
                и качественных аналогов, подходящих под любые модели японской
                спецтехники. Запчасти всегда в наличии на складе, возможна
                оперативная доставка и подбор деталей под конкретную модификацию
                техники.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/toyota-058-502.jpg"} />
              <img src={"/images/brand/toyota-058-502.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Виды запчастей</h2>
            <p>
              Каталог запчастей для вилочных погрузчиков Toyota охватывает все
              основные системы и узлы спецтехники. В ассортименте представлены
              как оригинальные комплектующие от производителя Toyota, так и
              проверенные аналоги, соответствующие требованиям японского
              качества:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Электрооборудование"}
              text={"Стартеры, генераторы, датчики, проводка."}
            />
            <Box
              icon={<IconBolt />}
              title={"Тормозная система"}
              text={"Тормозные колодки, цилиндры, шланги и суппорты."}
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть и трансмиссия"}
              text={"Ступицы, редукторы, полуоси, коробки передач."}
            />
            <Box
              icon={<IconBolt />}
              title={"Навесное оборудование"}
              text={"Вилы, гидравлика, каретки, мачты."}
            />
            <Box
              icon={<IconBolt />}
              title={"Двигатель"}
              text={"Поршни, кольца, клапаны, фильтры, ремни, прокладки."}
            />
            <Box
              icon={<IconBolt />}
              title={"Мосты"}
              text={
                "Ведущие и управляемые мосты, подшипники, элементы подвески."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Расходники и комплектующие"}
              text={"Фильтры, масла, ремни, уплотнители."}
            />
            <Box
              icon={<IconBolt />}
              title={"Ремкомплекты"}
              text={
                "Для капитального и частичного ремонта двигателя, трансмиссии, шкворня."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как подобрать запчасти для погрузчиков Toyota</h2>
            <p>
              Подбор запчастей для вилочного погрузчика Toyota — задача,
              требующая внимательного подхода и учета множества технических
              параметров. Неправильно подобранные детали могут не только не
              подойти, но и нанести вред технике, сократить срок её службы или
              вызвать внеплановые поломки.
            </p>
            <p>
              Специалисты компании «СПЕЦМАШИНА» обладают обширным опытом в сфере
              технического обслуживания погрузочной техники и готовы помочь в
              подборе необходимых запчастей для вилочных погрузчиков «Тойота» в
              Санкт-Петербурге. Для точного определения нужных запчастей
              используются следующие данные:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={"Модификацию погрузчика <sup>01</sup>"}
              text={
                "Различные версии одной модели могут иметь отличия в конструкции и использовать разные типы узлов и агрегатов."
              }
            />
            <Box
              title={"Точную модель <sup>02</sup>"}
              text={
                "Указывается в техническом паспорте техники и помогает сузить круг поиска."
              }
            />
            <Box
              title={"Год выпуска <sup>03</sup>"}
              text={
                "На одном и том же шасси могли выпускаться машины с разными конфигурациями в разные годы."
              }
            />
            <Box
              title={"Серийный номер или VIN-код <sup>04</sup>"}
              text={
                "Уникальный идентификатор, позволяющий точно определить характеристики конкретного экземпляра."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Такой подход исключает вероятность ошибок при заказе и гарантирует
              полную совместимость деталей с вашей техникой. Вся продукция,
              предлагаемая компанией «СПЕЦМАШИНА», сертифицирована, проходит
              строгий контроль качества и поставляется с заводской гарантией.
            </p>
            <p>
              Мы сотрудничаем как с официальными производителями, так и с
              проверенными поставщиками аналогов, благодаря чему предлагаем
              широкий ассортимент комплектующих — от фильтров и ремней до
              сложных гидравлических систем и электронных компонентов.
              Обращайтесь, получите бесплатную консультацию прямо сейчас.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
