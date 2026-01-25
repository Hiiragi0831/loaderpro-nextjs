import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";

const id = "1185";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков JUNGHEINRICH",
    "Предлагаем купить запчасти для вилочных погрузчиков JUNGHEINRICH с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
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
                Купить запчасти для вилочных погрузчиков JUNGHEINRICH
              </h2>
              <p>
                Jungheinrich — это немецкий производитель подъемно-погрузочной
                техники и складского оборудования, который занимает одну из
                лидирующих позиций в мировой индустрии. Компания производит
                широкий ассортимент техники, включая электрические и дизельные
                вилочные погрузчики, штабелеры, ричтраки и ручные подъемные
                тележки.
              </p>
              <p>
                Благодаря разнообразию моделей с различными техническими
                характеристиками, погрузчики Jungheinrich пользуются большим
                спросом среди бизнеса, стремящегося повысить эффективность
                работы на складах и производственных площадках.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/jungheinrich-269-1185.jpg"} />
              <img src={"/images/brand/jungheinrich-269-1185.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что надо знать о погрузчиках Jungheinrich</h2>
            <p>
              Основное назначение погрузчиков Jungheinrich — это подъем,
              перемещение и укладка различных грузов. Погрузчики этой марки
              известны своей надежностью, долговечностью и высокой
              производительностью. Они идеально подходят для использования в
              различных сферах: от складов и логистики до строительных площадок.
            </p>
            <p>
              Погрузчики отличаются различной грузоподъемностью, высотой подъема
              и комплектациями, что позволяет выбрать оптимальный вариант для
              конкретных задач бизнеса.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Какие запчасти использует погрузчик Jungheinrich?</h2>
            <p>
              Погрузчики Jungheinrich, как и любая техника, нуждаются в
              регулярном обслуживании и своевременной замене изношенных деталей.
              Это позволяет продлить срок их службы, минимизировать поломки и
              обеспечить стабильную работу оборудования.
            </p>
            <p>Среди наиболее часто заменяемых запчастей можно выделить:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={"Фильтры <sup>01</sup>"}
              text={
                "Воздушные, топливные, гидравлические. Они защищают ключевые узлы погрузчика от загрязнений, продлевая срок службы двигателя и гидравлической системы."
              }
            />
            <Box
              title={"Шины и колеса <sup>02</sup>"}
              text={
                "Цельнолитые, пневматические и суперэластик. Влияют на маневренность, устойчивость и проходимость техники в разных условиях эксплуатации."
              }
            />
            <Box
              title={"Прокладки и уплотнения <sup>03</sup>"}
              text={
                "Предотвращают утечки рабочих жидкостей в гидравлических системах, обеспечивая их надежную работу и защищая от преждевременного износа."
              }
            />

            <Box
              title={"Двигатели и аккумуляторы <sup>04</sup>"}
              text={
                "Важные компоненты как для дизельных, так и для электрических моделей погрузчиков. От их состояния зависит эффективность работы оборудования."
              }
            />
            <Box
              title={"Элементы системы управления <sup>05</sup>"}
              text={
                "Рулевые тяги, рычаги, датчики, электрические модули и панели управления, обеспечивающие точное и безопасное управление техникой."
              }
            />
            <Box
              title={"Гидравлические компоненты <sup>06</sup>"}
              text={
                "Насосы, цилиндры, шланги и клапаны, отвечающие за плавность и эффективность работы грузоподъемных механизмов."
              }
            />
            <Box
              title={"Тормозные системы <sup>06</sup>"}
              text={
                "Диски, колодки, барабаны и цилиндры, обеспечивающие безопасное торможение и устойчивость погрузчика."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              В нашей компании есть широкий ассортимент запасных деталей для
              погрузчиков Jungheinrich. У нас вы можете заказать детали для
              погрузчиков с доставкой по СПБ или по России. Мы предлагаем
              заказать оригинальные запчасти для погрузчика Jungheinrich у нас,
              и вы получите персональную стоимость изделий.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
