import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "504";

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
                Купить запчасти для погрузчиков CROWN в Санкт-Петербурге
              </h2>
              <p>
                В 1960 году в сфере обработки и перемещения больших грузов
                появилась компания Crown, которая быстро зарекомендовала себя
                как новатор в области разработки и производства складской
                техники. Однако первые вилочные погрузчики под этим брендом были
                выпущены еще в 1957 году. Бренд вилочных погрузчиков Crown
                начала свою деятельность как семейный бизнес с главным офисом в
                небольшом американском городе Нью-Бремен (штат Огайо), где
                проживает менее трёх тысяч человек.
              </p>
              <p>
                На сегодняшний день Crown — это один из крупнейших
                производителей складской техники, в том числе электропогрузчиков
                грузоподъемностью до 3 тонн, ричтраков, штабелеров и другой
                спецтехники. Продукция компании представлена в дилерских центрах
                по всему миру.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/crown-002-504.jpg"} />
              <img src={"/images/brand/crown-002-504.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Где заказать запчасти Crown для профессионального ремонта?</h2>
            <p>
              Несмотря на надежность и высокое качество техники Crown, как и
              любое другое оборудование, вилочные погрузчики нуждаются в
              регулярном техническом обслуживании, а также в своевременной
              замене изношенных деталей и расходников.
            </p>
            <p>
              Компания Crown производит около 85% комплектующих для своей
              техники самостоятельно. В список оригинальных запчастей Crown
              входят:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигатели"}
              text={"Поршни, кольца, клапаны, фильтры, ремни, прокладки."}
            />
            <Box
              icon={<IconBolt />}
              title={"Приводы различных типов"}
              text={"Ступицы, редукторы, полуоси, коробки передач."}
            />
            <Box
              icon={<IconBolt />}
              title={"Электронные модули и платы"}
              text={
                "Стартеры, генераторы, реле, фары, лампы, сигнальные устройства и проводка."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Важно использовать качественные запасные части, чтобы продлить
              срок службы техники и избежать простоев в работе склада. В
              компании «СПЕЦМАШИНА» вы найдете свыше 20 вариантов запчастей для
              вилочных погрузчиков CROWN с доставкой. Обращайтесь, подберем
              детали прямо сейчас и предложим персональную стоимость заказа.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Надежный поставщик запчастей Crown – компания «СПЕЦМАШИНА»</h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает оригинальные запчасти Crown, а
              также качественные аналоги, соответствующие всем техническим
              стандартам. Мы сотрудничаем с проверенными производителями и
              готовы предоставить весь спектр запчастей для погрузчиков Crown,
              включая редкие позиции.
            </p>
            <p>В ассортименте доступны:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"01"}
              text={"Трансмиссии, редукторы и тормозные системы"}
            />
            <Box
              icon={<IconBolt />}
              title={"02"}
              text={"Рулевые элементы и подъемные механизмы"}
            />
            <Box
              icon={<IconBolt />}
              title={"03"}
              text={
                "Аккумуляторы, зарядные устройства и элементы системы управления"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Преимущества работы с нами</h2>
            <p>Почему стоит заказать продукцию у нас:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Гибкие цены <sup>01</sup>"}
              text={
                "Доступные цены и гибкая система скидок для оптовых заказчиков."
              }
            />
            <Box
              title={"Доставка <sup>02</sup>"}
              text={
                "Быстрая доставка по всей России, а также самовывоз из офисов в Москве, Санкт-Петербурге и Пензе."
              }
            />
            <Box
              title={"Поддержка <sup>03</sup>"}
              text={
                "Профессиональная консультация по подбору запчастей и техническому обслуживанию."
              }
            />
            <Box
              title={"Отношение к работе <sup>04</sup>"}
              text={
                "Делаем всё, чтобы обеспечить оперативное снабжение необходимыми комплектующими."
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
