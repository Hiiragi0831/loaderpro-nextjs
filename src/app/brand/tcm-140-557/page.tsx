import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "557";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков TCM",
    "Предлагаем купить запчасти для вилочных погрузчиков TCM с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
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
              <h2 className={"h1"}>
                Купить запчасти для погрузчиков TCM
              </h2>
              <p>
                Японские вилочные погрузчики TCM давно зарекомендовали себя как
                надежное и производительное складское оборудование, широко
                используемое в логистике, промышленности и на строительных
                объектах.
              </p>
              <p>
                Если вы решаете вопрос приобрести запчасти для погрузчиков TCM в
                Санкт-Петербурге по выгодной цене — компания «СПЕЦМАШИНА» готова
                предложить оптимальные решения. Мы поставляем комплектующие для
                моделей грузоподъемностью от 1 до 43 тонн с возможностью
                доставки во все регионы России.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/tcm-140-557.jpg"} />
              <img src={"/images/brand/tcm-140-557.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/tcm-140-557-2.jpg"} />
              <img src={"/images/brand/tcm-140-557-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Пару слов о компании</h2>
              <p>
                TCM Corporation начала свою историю в 1947 году, и уже в 1949
                представила первый вилочный погрузчик с двигателем внутреннего
                сгорания. С тех пор компания непрерывно развивается и входит в
                «большую тройку» производителей складской техники Японии. На
                мировом рынке бренд вилочных погрузчиков TCM занимает лидирующие
                позиции, входя в десятку крупнейших поставщиков погрузочного
                оборудования.
              </p>
              <p>Современная линейка включает:</p>
              <ul>
                <li>дизельные погрузчики;</li>
                <li>бензиновые модели;</li>
                <li>электрические вилочные погрузчики.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <div className="text">
              <p>
                Благодаря надежности конструкции и долговечности агрегатов, TCM
                Corporation начала свою историю в 1947 году, и уже в 1949
                представила первый вилочный погрузчик с двигателем внутреннего
                сгорания. С тех пор компания непрерывно развивается и входит в
                «большую тройку» производителей складской техники Японии. На
                мировом рынке бренд TCM занимает лидирующие позиции, входя в
                десятку крупнейших поставщиков погрузочного оборудования.
              </p>
              <p>
                Благодаря надежности конструкции и долговечности агрегатов,
                вилочные погрузчики TCM активно эксплуатируется в тяжелых
                условиях, что требует своевременного технического обслуживания и
                качественных запчастей.
              </p>
            </div>
            <picture>
              <source srcSet={"/images/brand/tcm-140-557-3.jpg"} />
              <img src={"/images/brand/tcm-140-557-3.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Разновидности запчастей для погрузчиков TCM в Санкт-Петербурге
            </h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает широчайший выбор запасных частей,
              предназначенных для ремонта и сервисного обслуживания погрузчиков
              TCM всех серий и годов выпуска. В нашем ассортименте:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Системы техники"}
              text={
                "Системы охлаждения, питания, тормозная система — радиаторы, топливные насосы, колодки, диски, шланги."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Двигатель и его компоненты"}
              text={"Поршни, клапаны, моторы в сборе."}
            />
            <Box
              icon={<IconBolt />}
              title={"Трансмиссия"}
              text={"Сцепление, КПП, редукторы, валы."}
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть и рулевое управление"}
              text={"Мосты, ступицы, рычаги."}
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлическая система"}
              text={"Цилиндры, насосы, распределители."}
            />
            <Box
              icon={<IconBolt />}
              title={"Электрооборудование"}
              text={"Стартеры, генераторы, датчики, блоки управления."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              В номенклатуре насчитываются сотни наименований, включая
              подшипники, втулки, уплотнители, фильтры, ремни и множество других
              деталей, соответствующих оригинальным спецификациям.
            </p>
            <p>
              Мы предлагаем как оригинальные комплектующие, так и качественные
              аналоги, что позволяет подобрать решение под любой бюджет без
              потери надежности. Если вам нужно купить запчасти для погрузчиков
              TCM в Санкт-Петербурге — обращайтесь в «СПЕЦМАШИНУ». Мы обеспечим
              вашу технику надежными комплектующими и профессиональным сервисом.
            </p>
          </div>
        </div>
      </section>

      <Cta />
      <Articles limit={4} />
    </main>
  );
}
