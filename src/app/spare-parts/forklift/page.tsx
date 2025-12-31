import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";

export const metadata: Metadata = metaGen(
  "Запчасти для автопогрузчиков от лучших производителей",
  "Предлагаем купить запчасти для автопогрузчиков от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);
export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти для автопогрузчиков</h1>
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
              <h2 className={"h1"}>Купить запчасти для автопогрузчиков</h2>
              <p>
                Если автопогрузчик начал терять мощность, сбоить в управлении
                или появился стук в ходовой — ремонт нужен немедленно. Каждая
                смена простоя такой техники оборачивается срывом погрузки на
                всём складе. Чтобы не терять время на поиски новой детали,
                начните с обращения в интернет-магазин «Спецмашина». Мы подберём
                запчасти для вашего автопогрузчика, а вам останется поставить
                деталь на место.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/forklift.jpg"} />
              <img src={"/images/spare-parts/forklift.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Огромный каталог</h2>
            <p>
              Проблемы с автопогрузчиками могут быть самые разные, но у нас есть
              запчасти на все случаи жизни.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"При падении мощности, перегреве двигателя"}
              text={
                "Для ремонта можем предложить: воздушные, топливные и масляные фильтры, насосы и форсунки, свечи, катушки, радиаторы и помпы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"При люфте руля, стуке в подвеске"}
              text={
                "Для замены найдем детали: тяги, наконечники, маятниковый рычаг, сайлент-блоки, амортизаторы, подшипники ступиц, шины, диски, колёсные редукторы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={
                "При медленном подъёме, течи гидравлики, проблемах с вилами"
              }
              text={
                "Для восстановления подберем: цилиндры, насосы, распределительные клапаны, шланги, вилы, каретки, ремонтные пальцы и втулки."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2 items-center">
            <picture>
              <source srcSet={"/images/spare-parts/forklift-2.jpg"} />
              <img src={"/images/spare-parts/forklift-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Различия в брендах</h2>
              <p>
                Ошибка в подборе запчасти для автопогрузчика часто дорого
                обходится. Вилка от ричтрака Jungheinrich не подойдёт к его же
                погрузчику, а у Toyota электрические и дизельные модели
                используют разные поколения деталей. Поэтому мы сначала
                уточняем, что именно за машина у вас: ричтрак, вилочный
                погрузчик или телескопический? Какая у него грузоподъёмность и
                тип двигателя?
              </p>
              <p>После этого поиск идёт по нужному разделу каталога.</p>
              <ul>
                <li>
                  Для Jungheinrich, STILL, Linde ищем детали мачт, электроники,
                  ходовой для узких проездов.
                </li>
                <li>
                  Для Toyota, Nissan, Mitsubishi смотрим на тип привода —
                  электрический или ДВС.
                </li>
                <li>
                  Для Hyster, JCB, Komatsu подбираем усиленные мосты, редукторы,
                  гидравлику.
                </li>
              </ul>
              <p>
                Сообщите нам модель или серию — мы проверим по каталогу и
                предложим то, что вам подойдёт.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что еще понадобится для ремонта</h2>
            <p>
              Помимо основной запчасти для полноценного ремонта автопогрузчика
              вам потребуются сопутствующие детали и материалы. Мы помогаем
              собрать всё необходимое в один заказ.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Если проблема в ходовой"}
              text={
                "Подберём шины под нагрузку и покрытие вашего объекта. Для электрических моделей — тяговые аккумуляторы. Чтобы сэкономить время, вы можете заказать шиномонтаж или восстановление колёс."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"К новой детали"}
              text={"Сразу добавим подходящие масла, фильтры."}
            />
            <Box
              icon={<IconBolt />}
              title={"В заказ включим"}
              text={
                "Болты, гайки, шплинты, стопорные кольца, которые часто теряются при разборке."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Заказывая всё сразу, вы получаете полный комплект для ремонта
              одной поставкой в любой город России.
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
              <h2>Почему с нами проще</h2>
              <p>
                Простой автопогрузчика из-за отсутствия детали несёт в себе
                недопустимые убытки. Мы строим работу так, чтобы вы с этим не
                столкнулись.
              </p>
              <ul>
                <li>
                  Знаем, какие узлы в конкретных моделях работают на пределе, и
                  порекомендуем усиленные версии или более износостойкие
                  аналоги.
                </li>
                <li>
                  Не предлагаем «похожие» детали и не пытаемся «продать что-то
                  ещё». Наша задача — найти в каталоге нужную позицию по вашей
                  модели.
                </li>
                <li>
                  Отправляем заказы не только по Санкт-Петербургу, но и в любой
                  другой город России.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Ваш автопогрузчик простаивает?</h2>
            <p>
              Оставьте заявку на сайте. Мы сверимся с каталогами, рассчитаем
              логистику и перезвоним вам с готовым вариантом по запчасти, её
              стоимости и срокам поставки.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
