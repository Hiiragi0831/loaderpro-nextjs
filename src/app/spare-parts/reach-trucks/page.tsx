import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";

export const metadata: Metadata = metaGen(
  "Запчасти для ричтраков от лучших производителей",
  "Предлагаем купить запчасти для ричтраков от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);
export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти для ричтраков</h1>
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
              <h2 className={"h1"}>Купить запчасти для ричтраков</h2>
              <p>
                Как и любая другая техника, ричтрак ломается неожиданно, а
                ремонтируется долго. Простои на высоте с грузом могут стать
                самыми дорогими часами для склада. Наша задача — сократить и то,
                и другое. Магазин «СПЕЦМАШИНА» помогает подобрать запчасти,
                которые вернут технике работоспособность и устойчивость к
                поломкам.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/reach-trucks.jpg"} />
              <img src={"/images/spare-parts/reach-trucks.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Наши услуги по поиску запчастей для ричтраков</h2>
            <p>
              Мы разбили процесс выбора на три основных этапа. Каждый из них —
              гарантия, что вы получите нужные, и что главное, подходящие
              запчасти для ричтрака.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={"Анализ и подбор компонентов для узлов <sup>01</sup>"}
              text={
                "Для мачты, гидравлики и ходовой части выбираем детали, чьи характеристики (размеры, нагрузка, материал) соответствуют заводским требованиям вашей модели."
              }
            />
            <Box
              title={"Консультация по совместимости и аналогам <sup>02</sup>"}
              text={
                "Объясняем, какие оригинальные детали нужны, и предлагаем проверенные аналоги, если это допустимо для конкретного узла, не теряя в качестве."
              }
            />
            <Box
              title={"Комплектация заказа <sup>03</sup>"}
              text={
                "К основным деталям сразу предлагаем необходимые расходники (масла, уплотнения, крепёж), чтобы ремонт был выполнен полностью."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Работаем с основными брендами ричтраков</h2>
            <p>
              Неважно, какая техника работает на вашем складе — Jungheinrich,
              STILL, LINDE, Toyota, BT, Crown, ATLET или другие. Наш каталог
              включает запчасти самых популярных производителей ричтраков.
            </p>
            <p>
              Вы можете выбрать оригинальные детали или качественные аналоги. В
              любом случае мы гарантируем, что они подойдут по характеристикам и
              обеспечат работоспособность техники. Сообщите модель ричтрака и мы
              поможем выбрать между оригиналом и аналогом, исходя из вашей
              ситуации.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Всё для обслуживания в одном месте</h2>
            <p>
              Чтобы ремонт или ТО прошли без задержек, вам могут понадобиться не
              только основные запчасти. В одном заказе вы можете получить
              необходимые сопутствующие товары.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Аккумуляторы и зарядные устройства"}
              text={
                "Чтобы после ремонта электроники техника была сразу готова к работе."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Колёса, шины и ролики"}
              text={
                "Для замены изношенной ходовой части, подобранные под нагрузку и покрытие вашего склада."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Специальные масла и смазки"}
              text={
                "Рекомендованные для гидравлических систем и узлов трения ричтраков."
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
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/spare-parts/office.jpg"} />
              <img src={"/images/spare-parts/office.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Почему выбирают нас</h2>
              <p>
                Мы помогаем быстро вернуть технику в строй и избежать повторных
                поломок.
              </p>
              <ul>
                <li>
                  Разбираемся в особенностях брендов и моделей, поэтому
                  исключаем ошибки при подборе запчастей для ричтраков.
                </li>
                <li>
                  Предлагаем оригинальные детали и проверенные аналоги,
                  подобранные под вашу технику и условия эксплуатации.
                </li>
                <li>
                  Берём на себя организацию полного цикла: от поиска и проверки
                  совместимости до сборки заказа. Вам остается только поставить
                  деталь на место.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Решите проблему с запчастями сейчас</h2>
            <p>
              Заполните форму на сайте или свяжитесь с менеджером «СПЕЦМАШИНА».
              Нам понадобятся точные данные вашей техники (модель, серийный
              номер). С ними мы найдём деталь, проверим логистику и предложим
              вам готовое решение по доступной цене.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
