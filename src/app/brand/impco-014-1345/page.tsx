import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "1345";

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
                Купить газовые редукторы и испарители IMPCO в Санкт-Петербурге
              </h2>
              <p>
                Американская компания IMPCO Technologies — мировой лидер в сфере
                разработки и производства газового оборудования для промышленных
                установок с двигателями внутреннего сгорания. За более чем 50
                лет успешной работы бренд заслужил репутацию производителя
                надежных и эффективных решений для перевода техники на
                альтернативные виды топлива.
              </p>
              <p>
                У нас вы сможете купить газовые редукторы и испарители IMPCO с
                доставкой уже сегодня. Обращайтесь, получите бесплатную
                консультацию и персональное предложение прямо сейчас.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/impco-014-1345.jpg"} />
              <img src={"/images/brand/impco-014-1345.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>История и достижения IMPCO</h2>
            <p>
              В 2003 году IMPCO объединила усилия с итальянским брендом BRC Gas
              Equipment, создав концерн Fuel Systems Solutions. Это слияние
              позволило объединить передовые технологии США и Европы, обеспечив
              выпуск современных топливных систем для автотранспорта, складской
              техники и малых двигателей. Сегодня продукция IMPCO доступна по
              всему миру благодаря широкой дилерской сети и многочисленным
              представительствам.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Газовые редукторы и испарители IMPCO: преимущества</h2>
            <p>
              Газовое оборудование IMPCO востребовано среди профессионалов
              благодаря следующим ключевым характеристикам:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Высокая надежность"}
              text={
                "Компоненты IMPCO рассчитаны на длительный срок службы и бесперебойную работу даже в условиях интенсивной эксплуатации."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Качество и точность"}
              text={
                "Все устройства проходят строгий контроль на производстве и соответствуют международным стандартам."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Экономичность"}
              text={
                "Перевод техники на газ снижает расходы на топливо и уменьшает вредные выбросы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Экологичность"}
              text={
                "Использование альтернативного топлива помогает сократить воздействие на окружающую среду и соответствует современным требованиям по выбросам."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Газовые редукторы и испарители"}
              text={
                "Эффективно используются на вилочных погрузчиках, генераторах, строительной технике и других агрегатах с ДВС, работающих на сжиженном или сжатом газе."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Где купить газовые редукторы IMPCO по выгодной цене?</h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает широкий выбор газового
              оборудования IMPCO, включая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Газовые редукторы IMPCO <sup>01</sup>"} />
            <Box title={"Испарители <sup>02</sup>"} />
            <Box title={"Комплектующие и переходники <sup>03</sup>"} />
            <Box
              title={
                "Элементы топливной системы под конкретную модель техники <sup>04</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>Мы обеспечиваем:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Оригинальную продукцию напрямую от производителя <sup>01</sup>"
              }
            />
            <Box
              title={
                "Консультации специалистов для подбора оборудования <sup>02</sup>"
              }
            />
            <Box
              title={"Доставку по всей России в кратчайшие сроки <sup>03</sup>"}
            />
            <Box title={"Честные цены и гарантии качества <sup>04</sup>"} />
          </div>
        </div>
      </section>

      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/impco-014-1345-2.jpg"} />
              <img src={"/images/brand/impco-014-1345-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Сделайте заказ прямо сейчас</h2>
              <p>
                Оформить покупку газового оборудования IMPCO можно на сайте
                loaderpro.ru, по телефону или через форму обратного звонка. Наши
                менеджеры помогут подобрать нужную модель, рассчитают стоимость
                и организуют доставку до вашего объекта.
              </p>
              <p>
                Выбирайте IMPCO — это надежность, экономия и забота об экологии.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
