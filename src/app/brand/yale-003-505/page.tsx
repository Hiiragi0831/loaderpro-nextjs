import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "505";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков YALE",
    "Предлагаем купить запчасти для вилочных погрузчиков YALE с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
  );
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
              <CatalogProducts url={id} brand={true} />
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="brand__header">
            <div className="text">
              <h2 className={"h1"}>Купить запчасти для погрузчиков YALE</h2>
              <p>
                Компания Yale — один из старейших мировых производителей
                грузоподъемного оборудования. Основанная в 1844 году, она
                начинала с разработки цилиндрического замка с реверсивным
                штыковым механизмом. В 1870-х годах компания выпустила первый
                погрузчик, а в 1920-х — аккумуляторные тележки с подъемными
                платформами. Впоследствии Yale расширила производство, начав
                выпуск вилочных погрузчиков и другой техники.
              </p>
              <p>
                Страна происхождения погрузчиков Yale — США. В 1930-х компания
                вышла на международный рынок, открыв заводы в Великобритании.
                Одним из ключевых направлений развития стало внедрение новых
                технологий, включая гидроусилитель и другие технические
                усовершенствования.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/yale-003-505.jpg"} />
              <img src={"/images/brand/yale-003-505.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что надо знать о запчастях Yale</h2>
            <p>
              Погрузчики Yale широко используются в логистике, строительстве и
              промышленности благодаря своей надежности и высокой
              производительности. Однако для поддержания их бесперебойной работы
              необходима своевременная замена изношенных деталей. Использование
              качественных комплектующих не только продлевает срок службы
              техники, но и снижает вероятность серьезных поломок.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Основные категории запчастей Yale</h2>
            <p>
              Двигатели и их элементы. Включают поршни, клапаны, прокладки,
              фильтры, топливные насосы и ремни ГРМ. От исправности этих
              компонентов зависит мощность, экономичность и эффективность работы
              двигателя.
            </p>
            <p>Какие еще детали используют в погрузчиках Yale:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Ключевые элементы"}
              text={
                "Гидравлические насосы, гидроцилиндры, распределители, шланги высокого давления и уплотнители. Эти запчасти обеспечивают плавность работы погрузчика и точность управления грузоподъемными механизмами."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Избегаем износа"}
              text={
                "Колеса, ступицы, подшипники, тормозные механизмы, амортизаторы и оси. Регулярная проверка и замена этих деталей позволяет избежать преждевременного износа и обеспечивает устойчивость погрузчика."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электрическая система"}
              text={
                "Аккумуляторы, стартеры, генераторы, датчики, блоки управления, кабели и освещение. Надежная электрическая система – залог стабильной работы всех узлов техники."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Также погрузчики Yale используют такое навесное оборудование, как
              вилы, каретки, захваты, крепежные элементы и удлинители.
              Использование качественного навесного оборудования повышает
              функциональность погрузчика и безопасность работы с грузами.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для погрузчиков Yale</h2>
            <p>
              При выборе запасных частей необходимо учитывать несколько
              факторов:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={"Оригинальность продукции <sup>01</sup>"}
              text={
                "Оригинальные детали гарантируют полное соответствие техническим требованиям производителя."
              }
            />
            <Box
              title={"Совместимость с моделью <sup>02</sup>"}
              text={
                "Важно подбирать запчасти, соответствующие конкретной модификации погрузчика."
              }
            />
            <Box
              title={"Рекомендации производителя <sup>03</sup>"}
              text={
                "Соблюдение рекомендаций по обслуживанию и замене деталей помогает продлить срок службы техники."
              }
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
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
