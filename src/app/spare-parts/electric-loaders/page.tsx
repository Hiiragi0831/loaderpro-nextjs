import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";

export const metadata: Metadata = metaGen(
  "Запчасти для электропогрузчиков от лучших производителей",
  "Предлагаем купить запчасти для электропогрузчиков от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);
export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти для электропогрузчиков</h1>
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
              <h2 className={"h1"}>Купить запчасти для электропогрузчиков</h2>
              <p>
                Поломка электропогрузчика усложняет логистическую работу в разы.
                Каждый час протекает впустую, графики съезжают, а вы теряете
                деньги. «СПЕЦМАШИНА» может помочь с поиском запчастей для
                ремонта. Проверим по каталогам, какая деталь нужна для вашего
                случая, и предложим варианты для покупки.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/electric-loaders.jpg"} />
              <img
                src={"/images/spare-parts/electric-loaders.jpg"}
                alt="logo"
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Когда срочно нужны запчасти</h2>
            <p>
              Чтобы ускорить ремонт, просто сообщите нам модель
              электропогрузчика. Мы найдём в каталогах совместимые детали — для
              планового обслуживания или срочной замены.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Погрузчик плохо управляется, дёргается или не едет?"}
              text={
                "Подберём компоненты электроники: контроллеры, датчики и контакторы, которые гарантируют точное выполнение команд техники."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электропогрузчик не держит заряд, теряет мощность?"}
              text={
                "Найдём решение с аккумуляторами: новые тяговые батареи или элементы для восстановления, чтобы техника работала полную смену."
              }
            />
            <Box
              icon={<IconBolt />}
              title={
                "Присутствует скрип, стук или стало тяжело управлять техникой?"
              }
              text={
                "Предложим детали ходовой части и привода: приводные моторы, колёса и подшипники для плавного и устойчивого хода."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Кроме того, мы оказываем услуги шиномонтажа и восстановления
              колёс. Вы получите готовое к установке колесо в сборе или сможете
              отремонтировать старую пару. Вам не придётся договариваться с
              разными подрядчиками — мы соберём полный рабочий комплект для
              обслуживания вашего ричтрака.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2 items-center">
            <picture>
              <source srcSet={"/images/spare-parts/electric-loaders-2.jpg"} />
              <img
                src={"/images/spare-parts/electric-loaders-2.jpg"}
                alt="logo"
              />
            </picture>
            <div className="text">
              <h2>Запчасти от мировых брендов</h2>
              <p>
                Мы работаем с комплектующими техники Jungheinrich, STILL, Linde,
                Yale, Toyota, Mitsubishi, Hyundai, Komatsu, Heli и других
                производителей. Поэтому для точного поиска запчастей нам могут
                потребоваться разные данные.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2 items-center">
            <div className="text">
              <p>
                Для европейских брендов Jungheinrich, STILL, Linde, Yale нужен
                серийный номер (у одной модели могут быть разные версии
                контроллеров или датчиков). Без точного номера высока
                вероятность ошибки.
              </p>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/electric-loaders-3.jpg"} />
              <img
                src={"/images/spare-parts/electric-loaders-3.jpg"}
                alt="logo"
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2 items-center">
            <picture>
              <source srcSet={"/images/spare-parts/electric-loaders-4.jpg"} />
              <img
                src={"/images/spare-parts/electric-loaders-4.jpg"}
                alt="logo"
              />
            </picture>
            <div className="text">
              <p>
                Для азиатских брендов Toyota, Mitsubishi, Hyundai, Komatsu, Heli
                мы проверяем каталожные номера силовых узлов. Например,
                приводные моторы имеют модификации под разную нагрузку.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Купить запчасти для электропогрузчика в «СПЕЦМАШИНА» — значит
              получить деталь, которая точно подходит по всем параметрам. Вам не
              нужно дважды платить за доставку или терять время на возврат не
              подошедшей запчасти.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/spare-parts/electric-loaders-5.jpg"} />
              <img
                src={"/images/spare-parts/electric-loaders-5.jpg"}
                alt="logo"
              />
            </picture>
            <div className="text">
              <h2>Сопутствующие товары и услуги</h2>
              <p>
                Для полноценного восстановления техники и предотвращения поломок
                нужны правильные расходники. Мы поможем собрать всё необходимое.{" "}
              </p>
              <p>
                Помимо запчастей в заказ можно включить защитные колпачки для
                разъёмов, термоусадочные трубки и качественный
                электротехнический крепёж — всё для долговечного ремонта
                проводки и соединений.
              </p>
              <p>
                С новыми аккумуляторами для электропогрузчика полезно взять
                средства для обслуживания клемм, кабели для быстрой замены АКБ и
                тестеры для проверки заряда.
              </p>
              <p>
                Не лишними будут фильтры системы охлаждения тягового
                электродвигателя.
              </p>
              <p>
                Также наши сервисные услуги (шиномонтаж, восстановление колёс)
                помогут сразу получить готовое к установке колесо, что также
                экономит время.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему с нами ремонт пройдет проще</h2>
            <p>
              Нас выбирают, потому что мы решаем главную проблему, которая
              волнует клиента при заказе — найти запчасти быстро и недорого.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Работаем"}
              text={
                "С моделью и данными вашего электропогрузчика, а не по общим каталогам, чтобы исключить ошибки в совместимости."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Помогаем"}
              text={
                "Подобрать оптимальное решение по цене — объясняем разницу между оригиналом и аналогами."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Учитываем"}
              text={
                "Сроки поставки и всегда предложим альтернативный вариант, если запчасть нужна срочно."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Самое время вернуть технику в строй</h2>
            <p>
              Сделайте первый шаг — обратитесь в «СПЕЦМАШИНА». Мы поможем
              закрыть вопрос с запчастями в день обращения.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
