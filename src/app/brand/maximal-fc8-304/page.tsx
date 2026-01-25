import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";

const id = "304";

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
                Купить запчасти для вилочных погрузчиков Maximal (Максимал) в
                Санкт-Петербурге
              </h2>
              <p>
                Zhejiang Maximal Forklift — один из ведущих производителей
                подъемно-транспортного оборудования в Китае, который успешно
                сочетает передовые западные технологии с высокой
                производственной культурой.
              </p>
              <p>
                Под брендом Maximal ежегодно выпускается более 15 000 единиц
                техники, из которых около 90% экспортируется в страны Европы,
                Латинской Америки и США. Это говорит о высоком уровне доверия к
                бренду на международной арене.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/maximal-fc8-304.jpg"} />
              <img src={"/images/brand/maximal-fc8-304.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему выбирают вилочные погрузчики Maximal?</h2>
            <p>
              Погрузчики Maximal завоевали популярность во всем мире благодаря
              таким достоинствам, как:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Инновационные инженерные решения <sup>01</sup>"} />
            <Box
              title={
                "Высокий уровень надежности и производительности <sup>02</sup>"
              }
            />
            <Box title={"Продуманный эргономичный дизайн <sup>03</sup>"} />
            <Box
              title={
                "Соответствие строгим международным стандартам качества <sup>04</sup>"
              }
            />
            <Box
              title={
                "Оптимальный баланс между ценой и техническими возможностями <sup>05</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания выпускает дизельные, электрические, газовые и бензиновые
              модели, охватывая потребности самых разных отраслей логистики и
              складской обработки.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Необходимы запчасти для погрузчиков Maximal? Обратитесь в
              «СПЕЦМАШИНА»
            </h2>
            <p>
              Даже самая надежная техника требует своевременного технического
              обслуживания. Чтобы ваша техника Maximal работала без сбоев,
              необходимы качественные и оригинальные комплектующие. Компания
              «СПЕЦМАШИНА» предлагает широкий выбор запчастей для погрузчиков
              Maximal — в наличии и под заказ по каталожным номерам.
            </p>
            <p>В наличии и под заказ:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Элементы двигателя и трансмиссии <sup>01</sup>"} />
            <Box title={"Гидравлические компоненты <sup>02</sup>"} />
            <Box
              title={"Рулевое управление и тормозные системы <sup>03</sup>"}
            />
            <Box title={"Электрооборудование <sup>04</sup>"} />
            <Box
              title={"Фильтры, ремни, уплотнители, подшипники <sup>05</sup>"}
            />
            <Box title={"Шины и расходные материалы <sup>06</sup>"} />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Если нужной детали нет в наличии — мы быстро организуем поставку
              по индивидуальному запросу.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/maximal-fc8-304-2.jpg"} />
              <img src={"/images/brand/maximal-fc8-304-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Почему стоит выбрать «СПЕЦМАШИНА»?</h2>
              <p>Наши преимущества:</p>
              <ul>
                <li>Оперативная доставка по всей России.</li>
                <li>
                  Консультации специалистов — помощь в подборе запчастей по
                  модели, году выпуска и серийному номеру техники.
                </li>
                <li>
                  Оптимальные цены на оригинальные и проверенные аналоговые
                  комплектующие.
                </li>
                <li>Возможность заказать экспресс-доставку срочных позиций.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Сделайте заказ уже сегодня</h2>
            <p>Компания «СПЕЦМАШИНА» предлагает:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Широкий выбор запчастей в наличии на складе <sup>01</sup>"
              }
              text={
                "Ходовые позиции всегда доступны, что позволяет начать отгрузку в день обращения."
              }
            />
            <Box
              title={"Индивидуальный подбор и консультации <sup>02</sup>"}
              text={
                "Наши технические специалисты помогут точно определить необходимую деталь, сэкономив ваше время и средства."
              }
            />
            <Box
              title={"Организацию доставки по всей России <sup>03</sup>"}
              text={
                "Налаженная логистика позволяет нам доставлять заказы быстро и точно в срок, включая удаленные регионы."
              }
            />
            <Box
              title={"Полноценную техническую поддержку <sup>04</sup>"}
              text={
                "Мы сопровождаем клиента на всех этапах, от подбора запчасти до установки, и при необходимости предоставляем рекомендации по обслуживанию и эксплуатации техники Maximal."
              }
            />
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
