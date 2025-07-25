import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";

const id = "1302";

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
                Купить запчасти для погрузчиков STILL в Санкт-Петербурге
              </h2>
              <p>
                Техника для склада Still от немецкого производителя широко
                известна в России. Погрузчики этого бренда зарекомендовали себя
                как надежное, производительное и эффективное грузоподъемное
                оборудование, применяемое для различных складских операций.
                Высокое качество сборки и использование современных технологий
                делают Still одним из ведущих производителей складской техники.
              </p>
              <p>
                Для бесперебойной работы погрузчиков Still необходимо
                своевременное обслуживание и замена изношенных деталей.  В
                каталоге запчастей представлены как оригинальные немецкие
                комплектующие, так и качественные аналоги. На складах
                поставщиков всегда доступны расходные материалы и узлы, что
                позволяет оперативно проводить ремонт и техническое обслуживание
                техники. Только сертифицированные детали гарантируют
                долговечность и стабильную работу погрузчиков.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/still-255-1302.jpg"} />
              <img src={"/images/brand/still-255-1302.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Какие запчасти использует погрузчик?</h2>
            <p>
              Для поддержания работоспособности складской техники Still
              используются различные виды запчастей, обеспечивающие
              бесперебойную эксплуатацию оборудования и продлевающие срок его
              службы. К основным категориям запасных частей для погрузчиков
              Still относятся:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Подшипники игольчатые и для ступицы <sup>01</sup>"}
              text={
                "Cнижают трение и обеспечивают плавное вращение колес и других подвижных элементов."
              }
            />
            <Box
              title={"Фильтры масляные и гидравлические <sup>02</sup>"}
              text={
                "Защищают гидравлическую систему и двигатель от загрязнений, продлевая срок их эксплуатации."
              }
            />
            <Box
              title={"Элементы тормозной системы <sup>03</sup>"}
              text={
                "Включают тормозные колодки, диски, барабаны и цилиндры, обеспечивая надежное торможение и безопасность работы техники."
              }
            />
            <Box
              title={"Рулевые тяги <sup>04</sup>"}
              text={
                "Отвечают за точное управление и маневренность погрузчиков."
              }
            />
            <Box
              title={"Пальцы <sup>05</sup>"}
              text={
                "Крепежные элементы, используемые в подъемных механизмах и шарнирных соединениях."
              }
            />
            <Box
              title={"Ведущие и опорные колеса <sup>06</sup>"}
              text={
                "Обеспечивают устойчивость и плавное движение техники, выдерживая значительные нагрузки."
              }
            />
            <Box
              title={"Ремни вентилятора и привода <sup>07</sup>"}
              text={
                "Передают крутящий момент на различные механизмы, обеспечивая эффективную работу двигателя и других агрегатов."
              }
            />
            <Box
              title={"Термостаты <sup>08</sup>"}
              text={
                "Регулируют температурный режим двигателя, предотвращая перегрев и способствуя оптимальному функционированию техники."
              }
            />
            <Box
              title={"Панель приборов <sup>09</sup>"}
              text={
                "Отображает важные рабочие параметры, такие как уровень топлива, температура двигателя, скорость и ошибки системы"
              }
            />
            <Box
              title={"Ремкомплекты <sup>10</sup>"}
              text={
                "Включают уплотнительные кольца, манжеты, прокладки и другие расходные материалы, необходимые для ремонта и технического обслуживания."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Использование качественных оригинальных запчастей Still позволяет
              минимизировать простои техники и гарантировать ее надежность в
              условиях интенсивной эксплуатации. Купить запчасти для погрузчика
              Still и выполнить качественный ремонт не составит труда, если
              обратиться к специалистам. Запрос можно оформить онлайн или
              связаться с консультантом для получения точной информации о
              наличии и стоимости необходимых комплектующих.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
