import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "1084";

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
                Купить запчасти для вилочных погрузчиков Dalian (Далянь) в
                Санкт-Петербурге
              </h2>
              <p>
                Погрузчики китайского бренда Dalian (Далянь) — это надежная
                складская техника, успешно зарекомендовавшая себя в условиях
                интенсивной эксплуатации на складах, производственных
                предприятиях и логистических терминалах. Несмотря на прочность и
                качество сборки, любые механизмы требуют регулярного
                обслуживания и замены деталей.
              </p>
              <p>
                Компания «СПЕЦМАШИНА» предлагает широкий выбор запчастей для
                вилочных погрузчиков Dalian с доставкой в любой регион страны.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/dalian-ej2-1084.jpg"} />
              <img src={"/images/brand/dalian-ej2-1084.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Кратко о производителе Dalian</h2>
            <p>
              Компания Dalian была основана в 1946 году и изначально являлась
              государственным предприятием. Сегодня это один из крупнейших
              производителей складской техники в Китае, продукция которого
              экспортируется по всему миру и соответствует международным
              стандартам качества.
            </p>
            <p>Особенности погрузчиков Dalian:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"01"}
              text={"Выпускаются дизельные, бензиновые и электрические модели"}
            />
            <Box
              icon={<IconBolt />}
              title={"02"}
              text={"Грузоподъемность от 1,5 до 30 тонн"}
            />
            <Box
              icon={<IconBolt />}
              title={"03"}
              text={"Производятся с применением японских технологий Mitsubishi"}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Электромодели оснащены современными контроллерами Zapi, системой
              рекуперации и функцией самодиагностики.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Какие запчасти для погрузчиков Dalian вы найдете у нас?</h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает полный спектр комплектующих для
              погрузчиков Dalian, включая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Двигатели и силовые узлы <sup>01</sup>"} />
            <Box title={"Коробки передач, мосты, трансмиссии <sup>02</sup>"} />
            <Box
              title={"Системы гидравлики и рулевого управления <sup>03</sup>"}
            />
            <Box
              title={
                "Электрические компоненты и контроллеры Zapi <sup>04</sup>"
              }
            />
            <Box
              title={
                "Ремонтные комплекты, манжеты, сальники, прокладки <sup>05</sup>"
              }
            />
            <Box
              title={
                "Фильтры (масляные, топливные, воздушные, гидравлические) <sup>06</sup>"
              }
            />
            <Box title={"Шины, диски, колеса и ступицы <sup>07</sup>"} />
            <Box title={"Элементы кабины, кузова и освещения<sup>08</sup>"} />
            <Box
              title={"Тяговые аккумуляторные батареи для Dalian<sup>09</sup>"}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Мы подберем нужную деталь под конкретную модель вашей техники и
              оперативно оформим поставку.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/dalian-ej2-1084-2.jpg"} />
              <img src={"/images/brand/dalian-ej2-1084-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Почему выбирают «СПЕЦМАШИНА»?</h2>
              <p>
                5 причин купить запчасти для вилочных погрузчиков Dalian
                (Далянь) с доставкой у нас:
              </p>
              <ul>
                <li>
                  Оригинальные запчасти и качественные аналоги для всей линейки
                  погрузчиков Dalian.
                </li>
                <li>
                  Широкий ассортимент на складе — от расходников до ключевых
                  узлов.
                </li>
                <li>
                  Доставка в любой регион РФ — быстро, удобно и по доступной
                  цене.
                </li>
                <li>
                  Профессиональная помощь при подборе деталей и консультации по
                  ремонт.
                </li>
                <li>
                  Каталоги запчастей Dalian доступны для подбора по артикулу.
                </li>
              </ul>
              <h2>Как заказать?</h2>
              <p>
                Что нужно сделать, чтобы купить запчасти для вилочных
                погрузчиков Dalian (Далянь) у нас:
              </p>
              <ul>
                <li>
                  Свяжитесь с нашими специалистами — достаточно сообщить модель
                  техники или каталожный номер запчасти. Мы оперативно уточним
                  наличие и доставим нужную деталь.
                </li>
                <li>
                  Если нужной позиции нет в наличии, оформим индивидуальный
                  заказ с гарантией поставки.
                </li>
              </ul>
              <p>
                «СПЕЦМАШИНА» — запчасти для вилочных погрузчиков Dalian с
                гарантией и доставкой по всей России. С нами ваша техника будет
                работать стабильно и без простоев!
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
