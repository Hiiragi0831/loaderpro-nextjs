import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";

export const metadata: Metadata = metaGen(
  "Запчасти для телескопических погрузчиков от лучших производителей",
  "Предлагаем купить запчасти для телескопических погрузчиков от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);
export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти для телескопических погрузчиков</h1>
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
              <p className={"h1"}>Запчасти для телескопических погрузчиков</p>
              <p>
                Найти запчасть для телескопического погрузчика по одному только
                названию почти невозможно. Конструкция стрелы, усиленная ходовая
                и гидравлика выноса у каждого производителя и модели уникальны
                по-своему. Мы знаем эти отличия. Специалисты «СПЕЦМАШИНА» найдут
                нужную деталь по каталогам производителей, чтобы вы не тратили
                на это свое время.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/telehandlers.jpg"} />
              <img src={"/images/spare-parts/telehandlers.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>С чем чаще всего связаны запросы в «СПЕЦМАШИНА»</h2>
            <p>
              Основные обращения связаны с тремя узлами телескопического
              погрузчика.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Проблемы с подъёмом и вылетом стрелы"}
              text={
                "Для ремонта гидравлики подбираем цилиндры стрелы, насосы, распределители и уплотнения."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ухудшение управляемости и вибрация"}
              text={
                "Для ходовой части находим мосты, колёсные редукторы, ШРУСы и рулевые тяги"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Люфты в основании стрелы, скрипы"}
              text={
                "Для рамы и опорно-поворотного узла предлагаем компоненты ОПУ, усилители и кронштейны."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2 items-center">
            <picture>
              <source srcSet={"/images/spare-parts/telehandlers-2.jpg"} />
              <img src={"/images/spare-parts/telehandlers-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Запчасти по каталогам производителей</h2>
              <p>
                Конструкция стрелы и её гидравлики — это ключевое отличие
                Manitou от JCB, а Merlo от Bobcat. «Универсальных» решений не
                существует. Мы подбираем запчасти по заводским каталогам марок
                Manitou, Merlo, JCB, Bobcat, Caterpillar, Dieci, Heli и др. Это
                единственный способ получить деталь, которая соответствует
                оригиналу по нагрузкам и геометрии. Вы сообщаете нам модель и
                серийный номер вашего погрузчика, мы проверяем совместимость по
                каталогу и предлагаем вариант для покупки.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Сопутствующие товары и услуги</h2>
            <p>
              Запчасть для телескопического погрузчика редко меняется без
              использования расходников. Вместе с основной деталью рекомендуем
              сразу купить дополнительные материалы.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Расходники под узел"}
              text={
                "Гидравлическое масло и ремкомплект уплотнений к новому гидроцилиндру стрелы; прокладки и крепления к фильтрам двигателя."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Колёса или готовые решения"}
              text={
                "На случай если изношена ходовая. Подберём шины под нагрузку и нужное покрытие. Чтобы не заниматься сборкой самостоятельно, воспользуйтесь нашими услугами шиномонтажа или восстановления дисков."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Мелочи для сборки старого узла"}
              text={
                "Добавим в заказ болты, стопорные кольца или шплинты, чтобы ремонт не остановился из-за таких мелочей."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              С нашей помощью все выбранные детали будут совместимы с вашей
              техникой и придут к вам в одно место и в одно время.
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
              <h2>Почему клиенты заказывают запчасти у нас</h2>
              <p>
                Ремонт телескопического погрузчика часто затягивается не из-за
                сложной поломки, а из-за неподходящей детали или нехватки
                мелочей для сборки. Мы убираем эти три причины простоев. Поэтому
                обращаясь к нам вам не нужно:
              </p>
              <ul>
                <li>
                  Объяснять менеджеру разницу между Manitou и Merlo — мы в ней
                  уже разбираемся;
                </li>
                <li>
                  Переживать, что деталь не подойдёт по нагрузке — мы проверим
                  по каталогу и уточним условия работы;
                </li>
                <li>
                  Бегать за маслом, уплотнениями или болтами — мы соберём всё
                  необходимое в один заказ.
                </li>
              </ul>
              <p>
                Единственное, что нам нужно от вас: сообщите модель, серийный
                номер и расскажите, при каких нагрузках работает ваша техника.
                Мы найдём деталь, которая выдержит такую работу.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как заказать запчасть для телескопического погрузчика</h2>
            <p>
              Свяжитесь с менеджером «СПЕЦМАШИНА» и получите готовое
              предложение. Мы найдём деталь в каталогах (Heli, Merlo, JCB и
              др.), проверим совместимость, рассчитаем сроки поставки в ваш
              город.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
