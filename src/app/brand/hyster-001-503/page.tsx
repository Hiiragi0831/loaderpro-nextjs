import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "503";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков HYSTER",
    "Предлагаем купить запчасти для вилочных погрузчиков HYSTER с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
  );
}

export default async function SpareParts() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const brand = await api.getPageBrand(id);

  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти HYSTER</h1>
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
              <h2 className={"h1"}>Купить запчасти для погрузчиков HYSTER</h2>
              <p>
                Hyster — один из ведущих мировых производителей складской
                спецтехники, включая вилочные погрузчики с электрическими и
                дизельными двигателями. Компания известна надежностью своей
                продукции, инновационными технологиями и длительным сроком
                эксплуатации оборудования. Погрузчики Hyster применяются на
                складах, в логистических центрах, на промышленных предприятиях и
                в морских портах.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/hyster-001-503.jpg"} />
              <img src={"/images/brand/hyster-001-503.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что надо знать о запчастях для Hyster?</h2>
            <p>
              Несмотря на высокое качество, длительная эксплуатация и
              интенсивные нагрузки могут приводить к естественному износу узлов
              и деталей. Чтобы техника работала без перебоев, важно своевременно
              проводить диагностику и замену изношенных компонентов.
              Использование оригинальных запчастей или качественных аналогов
              гарантирует сохранение эксплуатационных характеристик техники.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Какие запчасти использует погрузчик Hyster?</h2>
            <p>
              Для поддержания бесперебойной работы погрузчиков Hyster требуются
              различные запасные части, в том числе:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Питание <sup>01</sup>"}
              text={
                "Электрооборудование и тяговые аккумуляторные батареи — обеспечивают надежное питание электропогрузчиков."
              }
            />
            <Box
              title={"Безопасность <sup>02</sup>"}
              text={
                "Детали тормозной, воздушной и топливной систем — отвечают за безопасность и стабильную работу двигателя."
              }
            />
            <Box
              title={"Ходовая часть <sup>03</sup>"}
              text={
                "Запчасти для ходовой части и трансмиссии — включают подшипники, валы, ступицы и редукторы."
              }
            />
            <Box
              title={"Навесное оборудование <sup>04</sup>"}
              text={
                "Вила, ковши, каретки и другие компоненты для погрузочно-разгрузочных работ."
              }
            />
            <Box
              title={"Запасные части <sup>05</sup>"}
              text={
                "Запасные части к коробке передач и двигателю — сцепления, муфты, фильтры, поршневые группы."
              }
            />
            <Box
              title={"Мосты <sup>06</sup>"}
              text={
                "Запчасти к мостам — включая редукторы, полуоси и дифференциалы."
              }
            />
            <Box
              title={"Расходники <sup>07</sup>"}
              text={
                "Расходники и комплектующие — масла, фильтры, ремни, прокладки и другие детали для планового обслуживания."
              }
            />
            <Box
              title={"Ремкомплект <sup>08</sup>"}
              text={"Готовые наборы для ремонта различных узлов."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Использование качественных комплектующих обеспечивает
              долговечность, надежность и безопасность эксплуатации погрузчиков
              Yale, снижая затраты на ремонт и обслуживание.
            </p>
            <p>
              Нужна помощь в выборе деталей? Обращайтесь к нам прямо сейчас, и
              мы поможем в кратчайшие сроки.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для погрузчиков Hyster?</h2>
            <p>
              Выбор запчастей для погрузчиков Hyster — важный процесс, от
              которого зависит надежность работы техники, срок ее службы и
              безопасность эксплуатации. При подборе комплектующих необходимо
              учитывать несколько ключевых факторов:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Модель и год выпуска техники"}
              text={
                "Перед покупкой важно уточнить точное название модели погрузчика и год его производства. Это позволит избежать несовместимости деталей и подобрать комплектующие, соответствующие техническим требованиям."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Технические характеристики"}
              text={
                "Важно учитывать параметры запчасти, такие как размеры, материал изготовления, рабочие нагрузки и прочие характеристики, обеспечивающие правильную работу узлов."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Оригинальные детали"}
              text={
                "Оригинальные запчасти Hyster гарантируют полное соответствие заводским стандартам, максимальную надежность и длительный срок службы. Однако качественные аналоги от проверенных производителей могут стать более экономичным решением без ущерба для эксплуатационных характеристик."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Наша компания предлагает широкий ассортимент запчастей Hyster,
              доступных со склада и под заказ. Наши специалисты помогут
              подобрать нужные детали, обеспечат их быструю отправку и доставку
              не только по Санкт-Петербургу, но и по всей России.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
