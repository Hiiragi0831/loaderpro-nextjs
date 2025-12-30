import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "419";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для штабелеров и погрузчиков XILIN",
    "Предлагаем купить запчасти для штабелеров и погрузчиков XILIN с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
  );
}

export default async function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти XILIN</h1>
          </div>
          <div className="row row-1">
            <div className="catalog__products">
              <CatalogProducts url={id} brand={true} />
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="brand__header">
            <div className="text">
              <h2 className={"h1"}>
                Купить запчасти для штабелеров и погрузчиков XILIN
              </h2>
              <p>
                Техника XILIN часто используется там, где нет права на простой.
                Погрузчики работают сменами, тележки и штабелеры перемещают груз
                весь день. При такой нагрузке износ деталей неизбежен. Вопрос
                лишь в том, насколько быстро удаётся заменить нужный узел и
                вернуть технику в работу. Компания «Спецмашина» поставляет
                запчасти XILIN для обслуживания и ремонта складской техники с
                учётом реальных условий эксплуатации.
              </p>
              <p>
                В каталоге представлены детали для вилочных погрузчиков XILIN, а
                также комплектующие для ричтраков, штабелеров и самоходной
                техники. Отдельное внимание уделяется запчастям для тележек,
                которые чаще всего используются без остановок и выходных.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/xilin-y25-419.jpg"} />
              <img src={"/images/brand/xilin-y25-419.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/xilin-y25-419-2.jpg"} />
              <img src={"/images/brand/xilin-y25-419-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>О запчастях XILIN</h2>
              <p>
                Конструкция техники XILIN достаточно проста, но она требует
                точного подбора деталей. Даже небольшое расхождение по размерам
                или посадочным местам может привести к ускоренному износу.
                Поэтому при замене важно учитывать не только тип детали, но и
                конкретную модель погрузчиков и другой техники.
              </p>
              <p>
                Запчасти XILIN подбираются с учётом особенностей каждой серии.
                Это касается как механических узлов, так и элементов гидравлики
                или электрики.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что ищут чаще всего</h2>
            <p>
              В первую очередь запрашивают запчасти для узлов, которые
              испытывают постоянную нагрузку при выполнении ежедневных операций
              погрузки.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Электрооборудование"}
              text={
                "Контакты, датчики и элементы управления: выходят из строя из-за постоянных циклов включения."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлические узлы"}
              text={
                "Насосы и уплотнительные элементы: со временем теряют герметичность."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={
                "Колёса и подшипники: принимают на себя основной вес груза."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Тормозные элементы"}
              text={"Изнашиваются при частых остановках и манёврах."}
            />
            <Box
              icon={<IconBolt />}
              title={"Рулевые узлы"}
              text={"Страдают при работе в ограниченном пространстве склада."}
            />
            <Box
              icon={<IconBolt />}
              title={"Подъёмный механизм"}
              text={"Цепи и ролики: работают под постоянной нагрузкой."}
            />
            <Box
              icon={<IconBolt />}
              title={"Защитные элементы"}
              text={"Кожухи и панели: повреждаются при активной эксплуатации."}
            />
            <Box
              icon={<IconBolt />}
              title={"Расходные материалы"}
              text={"Фильтры и прокладки: меняются при каждом обслуживании."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Заранее подобранные и купленные детали помогут обслуживать технику
              вовремя, без внеплановых остановок на аварийный ремонт.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как купить запчасти XILIN и не ошибиться</h2>
            <p>
              Чтобы заказать нужную деталь с первого раза, определите точную
              модель вашей техники и условия, в которых она работает. От этого
              напрямую зависит, какие детали подойдут лучше всего.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Подбираем по параметрам"}
              text={
                "Наши специалисты сверяются с серийными номерами и техническими характеристиками. Так минимизируется риск несовпадений и исключаются дополнительные возвраты."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Оригинал или аналог — есть выбор"}
              text={
                "Мы предлагаем как оригинальные запчасти XILIN, так и проверенные аналоги. Вы сможете выбрать оптимальный вариант по соотношению цены и надёжности."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Как быстро вы получите детали"}
              text={
                "Нужные позиции можно забрать со склада или под заказ. Организуем доставку по Санкт-Петербургу и в любой регион России."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Правильный выбор детали и быстрая логистика помогут вашей технике
              работать без сбоев и простоев.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Консультация по запчастям XILIN</h2>
            <p>
              Требуется помощь с подбором или есть сомнения по совместимости?
              Смело звоните нам. Специалисты компании «Спецмашина» готовы
              ответить на любой вопрос. Мы поможем подобрать запчасти XILIN для
              погрузчиков, ричтраков, штабелеров и самоходной техники с учётом
              задач склада и реальных условий работы.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
