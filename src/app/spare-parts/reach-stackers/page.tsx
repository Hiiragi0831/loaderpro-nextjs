import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";

export const metadata: Metadata = metaGen(
  "Запчасти для ричстакеров от лучших производителей",
  "Предлагаем купить запчасти для ричстакеров от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);
export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти для ричстакеров</h1>
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
              <p className={"h1"}>Запчасти для ричстакеров</p>
              <p>
                Если ричстакер начинает сбоить, работая на высоте с многотонным
                контейнером, значит времени на раздумья нет. Любая неисправность
                в гидравлике, ходовой или системе управления грозит серьезными
                проблемами. Чтобы ремонт не затягивался из-за поиска деталей,
                компания «СПЕЦМАШИНА» предложит запчасти для вашего ричстакера
                точно по модели и условиям работы.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/reach-stackers.jpg"} />
              <img src={"/images/spare-parts/reach-stackers.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Особенности подбора деталей</h2>
            <p>
              Поломки ричстакера случаются чаще всего в трёх основных узлах. Мы
              подбираем запчасти под соответствующую нагрузку, а не по общему
              названию.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Гидравлика и подъём"}
              text={
                "Если мачта движется рывками, а контейнер смещается при подъёме — проблема в гидравлике. Мы предлагаем гидронасосы, цилиндры мачты, распределители и необходимые уплотнения."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая и колёса"}
              text={
                "Люфт в управлении, вибрация или быстрый износ шин — признаки перегруженной ходовой. У нас есть рулевые тяги, подшипники, шины, которые выдержат ваши нагрузки. Если нужно, сразу делаем шиномонтаж или восстановление колес."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Двигатель"}
              text={
                "Потеря тяги или перегрев часто начинаются с фильтров. Мы подбираем воздушные, топливные и масляные фильтры по параметрам мотора вашего ричстакера."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2 items-center">
            <picture>
              <source srcSet={"/images/spare-parts/reach-stackers-2.jpg"} />
              <img
                src={"/images/spare-parts/reach-stackers-2.jpg"}
                alt="logo"
              />
            </picture>
            <div className="text">
              <h2>Бренды, с которыми мы работаем</h2>
              <p>
                Конструкция мачты и ходовой части у Kalmar отличается от
                Fantuzzi, а гидравлика Hyster — от Terex. Поэтому мы формируем
                каталог под конкретные марки. В продаже у нас найдутся запчасти:
                Kalmar, Fantuzzi, Hyster, CVS Ferrari, Terex, Sany, Konecranes и
                др.
              </p>
              <p>
                Для подбора сообщите модель, серийный номер и год выпуска вашей
                машины. Без этих данных поиск сильно усложняется. Например, у
                европейских ричстакеров в одной модели могут стоять разные
                гидроблоки. Мы сверяемся с техническими каталогами и предлагаем
                два варианта: оригинальные запчасти или аналоги, которые
                полностью соответствуют по нагрузкам и посадочным размерам.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что еще может понадобиться для ремонта ричстакера?</h2>
            <p>
              Замена основной детали — это только часть работы. Чтобы ремонт не
              остановился из-за мелочи, мы можем сразу подобрать все
              необходимое.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Расходные материалы под замену узлов"}
              text={
                "Гидравлическое масло, уплотнительные кит-комплекты, сменные картриджи и прокладки."
              }
            />
            <Box
              icon={<IconBolt />}
              title={
                "Шины, диски для ричстакеров под разное покрытие и нагрузку"
              }
              text={
                "А если нужно не просто купить, а сразу получить готовый узел, сделаем шиномонтаж или восстановление ваших колёс."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Крепежи и мелочи"}
              text={
                "Болты, шайбы, фиксаторы, которые часто теряются при разборке."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              В итоге вы экономите на логистике и не отвлекаетесь на поиск
              недостающих мелочей. Весь комплект для ремонта придет одним
              заказом.
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
              <h2>Почему обращаются в «СПЕЦМАШИНА»</h2>
              <p>
                Мы понимаем, что простой ричстакера — это прямые убытки. Поэтому
                наша работа строится на трёх принципах, важных для клиента.
              </p>
              <ul>
                <li>Разбираемся в нюансах и отличиях между брендами.</li>
                <li>
                  Находим нужные запчасти для ричстакера и собираем весь
                  комплект для отправки.
                </li>
                <li>
                  Организуем быструю поставку в Санкт-Петербурге и по всей
                  России.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Не уверены в точном номере запчасти?</h2>
            <p>
              Сообщите нам модель и серийный номер вашего ричстакера. Мы поможем
              сориентироваться в электронных каталогах производителя, чтобы
              определить нужные номера для поиска вашей запчасти.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
