import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "614";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков KALMAR",
    "Предлагаем купить запчасти для погрузчиков KALMAR с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
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
            <h1 className="h1">Запчасти KALMAR</h1>
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
              <h2 className={"h1"}>Купить запчасти для погрузчиков KALMAR</h2>
              <p>
                Бренд KALMAR занимается производством специализированного
                погрузочного оборудования, предназначенного для эксплуатации в
                различных промышленных отраслях.
              </p>
              <p>
                В ассортименте техники KALMAR представлены вилочные погрузчики,
                ричстакеры и тягачи. Компания на протяжении многих лет выпускает
                надежные машины, отличающиеся высокой производительностью и
                долговечностью.
              </p>
              <p>
                Обращайтесь к нам прямо сейчас, получите бесплатную консультацию
                и индивидуальный прайс-лист на детали для различных погрузчиков
                KALMAR.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/page-kalmar.png"} />
              <img src={"/images/brand/page-kalmar.png"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что надо знать</h2>
            <p>
              Контейнерные погрузчики KALMAR оснащаются современными силовыми
              агрегатами, трансмиссиями и другими узлами от ведущих мировых
              производителей, таких как Volvo, Cummins и Perkins.
            </p>
            <p>
              Конструкция гидравлической системы разработана с учетом
              минимизации числа соединений, что повышает надежность
              оборудования. Кабины операторов KALMAR обеспечивают отличный
              обзор, комфорт и эргономичность, что делает технику востребованной
              среди профессионалов.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Какие запчасти использует погрузчик KALMAR</h2>
            <p>
              Для поддержания работоспособности погрузчиков KALMAR используются
              оригинальные и аналоговые запчасти. Среди ключевых комплектующих
              можно выделить:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигатели и комплектующие"}
              text={"Поршневые группы, топливные насосы, фильтры"}
            />
            <Box
              icon={<IconBolt />}
              title={"Трансмиссионные узлы"}
              text={"Коробки передач, карданные валы, сцепления"}
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлические элементы"}
              text={"Насосы, цилиндры, распределители"}
            />
            <Box
              icon={<IconBolt />}
              title={"Электрооборудование"}
              text={"Датчики, блоки управления, генераторы"}
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={"Шины, подшипники, ступицы"}
            />
          </div>
        </div>
      </section>
      <section className="title">
        <div className="container">
          <div className="row">
            <h2 className="h1">Как выбрать запчасти для погрузчиков KALMAR?</h2>
            <p>
              Выбор запчастей для погрузчиков KALMAR требует внимательного
              подхода, так как от их качества и совместимости зависит
              долговечность и бесперебойная работа техники. Основные критерии,
              которые необходимо учитывать при подборе:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={"Соответствие модели <sup>01</sup>"}
              text={
                "Перед заказом запчастей важно точно определить модель погрузчика и его серийный номер. Это позволит избежать несовместимости деталей и гарантировать их правильную установку."
              }
            />
            <Box
              title={"Оригинал или аналог <sup>02</sup>"}
              text={
                "Оригинальные детали обеспечивают максимальную надежность и полную совместимость с оборудованием. Однако качественные аналоги от проверенных производителей могут быть более доступными по цене при сохранении высоких эксплуатационных характеристик."
              }
            />
            <Box
              title={"Каталожный номер <sup>03</sup>"}
              text={
                "Использование официального номера запчасти значительно ускоряет процесс поиска, снижает риск ошибки при заказе и помогает подобрать деталь, соответствующую техническим требованиям."
              }
            />
            <Box
              title={"Поставщик <sup>04</sup>"}
              text={
                "Надежные компании предоставляют сертифицированную продукцию, а также гарантию на запчасти, что исключает риск покупки подделок или низкокачественных комплектующих."
              }
            />
            <Box
              title={"Материал и износостойкость <sup>05</sup>"}
              text={
                "При выборе деталей стоит обратить внимание на их прочность, устойчивость к нагрузкам и срок службы, особенно если техника эксплуатируется в сложных условиях."
              }
            />
            <Box
              title={"Совместимость <sup>06</sup>"}
              text={
                "Важно учитывать, как выбранные запчасти будут взаимодействовать с другими элементами погрузчика, особенно если планируется замена сразу нескольких деталей."
              }
            />
          </div>
        </div>
      </section>
      <Cta
        title={"Бесплатная консультация"}
        text={
          "Обращайтесь к нам прямо сейчас, получите бесплатную консультацию и индивидуальный прайс-лист на детали для различных погрузчиков KALMAR."
        }
      />
      <Articles limit={4} />
    </main>
  );
}
