import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "453";

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
                Купить запчасти для погрузчиков KOMATSU в Санкт-Петербурге
              </h2>
              <p>
                Погрузчики Komatsu по праву считаются одной из самых надежных и
                востребованных моделей складской техники. Их отличает высокая
                грузоподъемность (до 25 тонн), отличная выносливость и
                соответствие современным экологическим стандартам. Чтобы
                оборудование продолжало работать безотказно, важно своевременно
                использовать качественные запчасти.
              </p>
              <p>
                Компания «СПЕЦМАШИНА» предлагает оригинальные и аналоговые
                комплектующие для вилочных погрузчиков Komatsu по выгодной цене
                — с доставкой по Санкт-Петербургу и всей России.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/komatsu-107-453.jpg"} />
              <img src={"/images/brand/komatsu-107-453.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Кратко про бренд вилочных погрузчиков Komatsu</h2>
            <p>
              Японская компания Komatsu Ltd начала свою деятельность еще в 1921
              году как небольшая строительная мастерская. Спустя несколько лет
              бренд активно включился в разработку строительной техники, а затем
              и в производство вилочных погрузчиков, которые быстро завоевали
              популярность по всему миру.
            </p>
            <p>
              Сегодня техника Komatsu используется не только на складах, но и на
              производственных площадках благодаря своей мощности, экономичности
              и высокой степени экологичности. Современные модели работают на
              бензине и дизеле с минимальным расходом топлива и соответствием
              международным нормам.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Ассортимент запчастей для вилочных погрузчиков Komatsu</h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает обширный и постоянно пополняемый
              каталог запчастей для вилочных погрузчиков Komatsu различных годов
              выпуска, моделей и конфигураций. У нас вы найдете как оригинальные
              комплектующие от производителя, так и высококачественные
              аналоговые решения, которые не уступают по надежности и
              эксплуатационным характеристикам.
            </p>
            <p>
              Мы обеспечиваем широкий выбор запчастей, охватывающий все основные
              узлы и системы погрузчиков:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={
                "Комплектующие для ходовой части, мостов и рулевого управления — ступицы, полуоси, рулевые тяги, подшипники, обеспечивающие точное управление и устойчивость погрузчика на любой поверхности."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Двигатель"}
              text={
                "Элементы двигателя и моторы в сборе — поршни, гильзы, клапаны, прокладки, ремкомплекты и полностью собранные двигатели, готовые к установке."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Трансмиссия"}
              text={
                "Детали трансмиссии — сцепления, коробки передач, редукторы, шестерни и подшипники, рассчитанные на интенсивную нагрузку и длительный срок службы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлика"}
              text={
                "Гидравлические компоненты — насосы, цилиндры, распределители, гидрошланги и фитинги, необходимые для бесперебойной работы подъемных и наклонных механизмов."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Охлаждение"}
              text={
                "Системы охлаждения, топливные и тормозные узлы — радиаторы, термостаты, топливные насосы и т.д."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электрооборудование"}
              text={
                "Электрооборудование — стартеры, генераторы, датчики, реле и блоки управления, обеспечивающие стабильную работу электрических и управляющих систем."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Каждая поставляемая запчасть для вилочных погрузчиков Komatsu
              проходит обязательную проверку качества, включая тесты на
              соответствие заводским стандартам и требованиям производителя. Это
              гарантирует надежность, безопасность и долговечность узлов при
              установке и эксплуатации.
            </p>
          </div>
        </div>
      </section>

      <Cta />
      <Articles limit={4} />
    </main>
  );
}
