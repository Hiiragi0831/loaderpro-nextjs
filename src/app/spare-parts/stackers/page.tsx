import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";

export const metadata: Metadata = metaGen(
  "Запчасти для штабелеров от лучших производителей",
  "Предлагаем купить запчасти для штабелеров от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);
export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти для штабелеров</h1>
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
              <h2 className={"h1"}>Купить запчасти для штабелеров</h2>
              <p>
                Ваш штабелер круглые сутки в работе? От постоянных нагрузок
                техника изнашивается — рано или поздно детали придется менять.
                Главное сделать это вовремя, чтобы не сорвать график работ из-за
                внезапной поломки. Компания «Спецмашина» поставляет запчасти для
                любых штабелеров: от простых ручных до гидравлических,
                самоходных моделей.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/stackers.jpg"} />
              <img src={"/images/spare-parts/stackers.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что мы предлагаем</h2>
            <p>
              Не тратьте время на самостоятельный поиск. Наши специалисты быстро
              подберут запчасти, которые нужны для ремонта вашей техники — будь
              то плановая замена, преждевременный износ или срочное устранение
              поломки. Для этого нам нужно знать модель вашего штабелера, год
              выпуска и условия его эксплуатации.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Подъём стал медленным или появились рывки? <sup>01</sup>"}
              text={
                "Предлагаем запчасти для гидравлики: цилиндры, насосы и ремкомплекты для герметичности."
              }
            />
            <Box
              title={"Появился скрип, ухудшился ход? <sup>02</sup>"}
              text={
                "В нашем магазине есть широкий выбор колёс (подберём тип под покрытие), роликов и подшипников ходовой части."
              }
            />
            <Box
              title={"Мачта люфтит или груз «гуляет»? <sup>03</sup>"}
              text={
                "Пора купить новые запчасти. Для штабелера у нас найдутся: цепи, направляющие ролики и втулки для стабильной работы."
              }
            />
            <Box
              title={
                "Самоходная модель плохо едет или не слушается в управлении? <sup>04</sup>"
              }
              text={
                "Найдём нужные компоненты. У нас есть всё: от тяговых батарей до датчиков и плат управления."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Запчасти для штабелеров основных производителей</h2>
            <p>
              Мы формируем каталог, ориентируясь на спрос и наличие техники на
              рынке. Ведущие европейские бренды (Jungheinrich, STILL, Toyota,
              BT, Linde Material Handling, Yale, Crown) и популярные азиатские
              (Mitsubishi, Hyundai, Komatsu, Heli, Hangcha, Nichiyu) составляют
              основу парка на многих складах по всему миру. Добавляя к ним такие
              марки, как Noblelift или Atlet, мы закрываем потребности
              большинства клиентов. Чтобы убедиться в этом, просто назовите
              модель своего штабелера — мы проверим наличие запчастей и
              предложим варианты.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что ещё нужно для полноценного ремонта?</h2>
            <p>
              После замены основного узла вам гарантировано потребуются
              расходники или сопутствующие материалы. Чтобы вы не искали их
              отдельно, у нас есть:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Гидравлические масла и жидкости"}
              text={"После замены насосов или цилиндров."}
            />
            <Box
              icon={<IconBolt />}
              title={"Смазки и герметики"}
              text={"Для сборки узлов и защиты от износа."}
            />
            <Box
              icon={<IconBolt />}
              title={"Крепёж и мелкий инвентарь"}
              text={"Болты, шайбы, фиксаторы на замену утерянным."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Соберём для вас полный комплект, чтобы ремонт был выполнен сразу и
              до конца.
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
              <h2>Почему клиенты возвращаются к нам</h2>
              <p>
                Наша цель — помочь вам вернуть штабелер в строй как можно
                скорее. Поэтому работа с нами открывает такие преимущества.
              </p>
              <ul>
                <li>
                  Мы знаем конструктивные различия штабелеров Jungheinrich,
                  STILL, LINDE, Toyota, BT и других марок из нашего каталога.
                  Подбор по модели и серийному номеру исключает ошибки.
                </li>
                <li>
                  Вам не нужно искать отдельно расходники или крепежи. Мы
                  соберём полный комплект для ремонта — от основной детали до
                  масла и болтов.
                </li>
                <li>
                  Наш ассортимент сформирован под реальные нужды клиентов.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Готовы вернуть штабелер к работе?</h2>
            <p>
              Сделайте первый шаг — свяжитесь с нами любым удобным для вас
              способом: позвоните, напишите или оставьте заявку на сайте.
              Расскажите, что случилось с техникой или назовите модель. Всё
              остальное мы берём на себя: уточним совместимость, предложим
              варианты запчастей для штабелеров по цене и срокам, быстро оформим
              заказ.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
