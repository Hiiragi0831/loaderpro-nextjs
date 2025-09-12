import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "591";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков LINDE",
    "Предлагаем купить запчасти для вилочных погрузчиков LINDE с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
  );
}

export default async function SpareParts() {
  const brand = await api.getPageBrand(id);

  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти LINDE</h1>
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
              <h2 className={"h1"}>Купить запчасти для погрузчиков LINDE</h2>
              <p>
                LINDE — один из ведущих производителей складской техники,
                выпускающий надежные и долговечные вилочные погрузчики. Эти
                машины востребованы в логистике, производстве и на складах
                благодаря высокой производительности, эргономичности и качеству
                сборки.
              </p>
              <p>
                Погрузчики LINDE представлены в разных модификациях: с
                дизельным, бензиновым, газовым двигателем и электроприводом.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/page-linde.png"} />
              <img src={"/images/brand/page-linde.png"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что надо знать</h2>
            <p>
              Для бесперебойной работы погрузчиков LINDE необходимо использовать
              только оригинальные или высококачественные аналоги запчастей.
              Экономия на комплектующих может привести к поломкам и
              дополнительным затратам.
            </p>
            <p>
              Важно учитывать, что все детали должны соответствовать модели
              техники, ее году выпуска и серийному номеру, указанному на раме.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Какие запчасти использует погрузчик LINDE?</h2>
            <p>
              Использование оригинальных запчастей LINDE и качественных аналогов
              позволяет продлить срок службы погрузчиков, минимизировать затраты
              на ремонт и повысить их эксплуатационную надежность.
            </p>
            <p>
              Для эксплуатации и ремонта погрузчиков LINDE требуются различные
              запчасти и расходные материалы, обеспечивающие бесперебойную
              работу техники в разных условиях. Основные категории запасных
              частей включают:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Тяговые аккумуляторы"}
              text={
                "Применяются в электропогрузчиках и обеспечивают стабильное энергоснабжение."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Фильтры"}
              text={
                "Масляные, топливные, воздушные и гидравлические. Фильтрующие элементы защищают двигатель и гидравлическую систему от загрязнений, продлевая срок их службы и предотвращая поломки."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ремкомплекты"}
              text={
                "Включают уплотнители, прокладки, манжеты и другие детали, необходимые для технического обслуживания и ремонта ключевых узлов."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Расходные материалы"}
              text={
                "Масла, смазки, антифризы, тормозные жидкости и гидравлические жидкости. Регулярное использование качественных расходников снижает износ деталей и предотвращает перегрев узлов."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Шины"}
              text={
                "Цельнолитые, пневматические и суперэластик. Подбор подходящих шин зависит от условий эксплуатации: цельнолитые подходят для работы на ровных покрытиях, пневматические обеспечивают амортизацию на неровных поверхностях."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Элементы тормозной системы"}
              text={
                "Диски, колодки, барабаны и цилиндры, гарантирующие безопасное и эффективное торможение."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Рулевые тяги и шаровые опоры"}
              text={"Отвечают за точность управления и маневренность техники."}
            />
            <Box
              icon={<IconBolt />}
              title={"Осветительные приборы"}
              text={
                "Лампы, фары, датчики, реле и проводка, необходимые для освещения рабочей зоны и стабильной работы электрических систем."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Кабины и защитные элементы"}
              text={
                "Стекла, дверные механизмы, зеркала и защитные ограждения, улучшающие условия работы оператора и повышающие безопасность."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Надежность силового агрегата"}
              text={
                "Детали двигателя, ходовой части и трансмиссии — включают ремни, шкивы, поршни, турбины, карданные валы и коробки передач. Эти элементы обеспечивают надежную работу силового агрегата и плавность передвижения погрузчика."
              }
            />
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
