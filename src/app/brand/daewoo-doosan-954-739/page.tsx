import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "739";

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
                Купить запчасти для погрузчиков DAEWOO-DOOSAN в Санкт-Петербурге
              </h2>
              <p>
                Спецтехника DAEWOO-DOOSAN известна своей выносливостью,
                производительностью и долговечностью. Однако любая техника, даже
                самая надежная, требует технического обслуживания и
                своевременной замены комплектующих. Компания «СПЕЦМАШИНА»
                предлагает купить качественные запчасти DAEWOO-DOOSAN с
                возможностью доставки в любой регион страны.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/daewoo-doosan-954-739.jpg"} />
              <img src={"/images/brand/daewoo-doosan-954-739.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/daewoo-doosan-954-739-2.jpg"} />
              <img
                src={"/images/brand/daewoo-doosan-954-739-2.jpg"}
                alt="logo"
              />
            </picture>
            <div className="text">
              <h2>Где купить запчасти DAEWOO-DOOSAN?</h2>
              <p>
                Найти расходные материалы для спецтехники сегодня несложно — они
                представлены в множестве точек продаж. Однако далеко не все
                магазины могут гарантировать подлинность, надежность и точное
                соответствие деталей оригиналу. Поэтому лучший вариант — это
                покупка в проверенных специализированных компаниях с прямым
                доступом к официальным каталогам техники.
              </p>
              <p>
                На сайте <strong>loaderpro.ru</strong> вы найдете все
                необходимые компоненты для обслуживания и ремонта погрузчиков,
                ричтраков, штабелеров и другой техники DAEWOO-DOOSAN. Мы
                предлагаем детали, которые идеально подходят по характеристикам
                и допускам — это залог эффективной и безопасной работы
                оборудования.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что предлагает «СПЕЦМАШИНА»?</h2>
            <p>
              Компания «СПЕЦМАШИНА» специализируется на поставке комплектующих
              для специальной техники ведущих мировых производителей. В нашем
              ассортименте представлены запчасти для японской, китайской,
              европейской и корейской спецтехники, что позволяет нам охватывать
              широкий спектр моделей и модификаций машин, используемых в
              строительстве, логистике, промышленности и других отраслях.
            </p>
            <p>
              Особое внимание уделено технике бренда DAEWOO-DOOSAN — в каталоге
              представлено более 15 000 наименований. Здесь вы найдете как
              популярные и востребованные ходовые запчасти, так и
              узкоспециализированные, редкие позиции, которые поставляются под
              индивидуальный заказ. Мы предлагаем элементы ходовой части,
              гидравлику, фильтры, элементы управления, узлы трансмиссии и
              многое другое.
            </p>
            <p>Вот почему клиенты выбирают нас:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Широкий ассортимент"}
              text={
                "Постоянное наличие деталей на складе позволяет сократить сроки поставки"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Официальные каталоги"}
              text={
                "Точный подбор по модели и серийному номеру техники исключает ошибки"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гарантия качества"}
              text={
                "Мы реализуем только проверенные и сертифицированные комплектующие"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Консультации специалистов"}
              text={
                "Наши сотрудники оперативно подберут нужную деталь и предоставят техническую поддержку"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Доступные цены"}
              text={
                "Прямые поставки и эффективная логистика позволяют удерживать конкурентную стоимость."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Удобный онлайн-каталог"}
              text={
                "Фильтрация по бренду, типу техники и артикулу экономит ваше время"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Быстрая доставка по всей России</h2>
            <p>
              Если техника DAEWOO-DOOSAN вышла из строя — не теряйте время. Мы
              организуем быструю отправку необходимых запчастей в ваш регион.
              Работая напрямую с производителями и проверенными поставщиками, мы
              гарантируем точное соответствие комплектующих и минимальные сроки
              доставки.
            </p>
            <p>
              Нужны оригинальные запчасти DAEWOO-DOOSAN? Заказывайте у надежного
              поставщика — в компании «СПЕЦМАШИНА». Мы поможем вернуть вашу
              спецтехнику в строй быстро, надежно и без переплат!
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
