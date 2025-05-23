import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "170";

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
                Запчасти для погрузчиков HELI в Санкт-Петербурге
              </h2>
              <p>
                Heli — это одна из самых крупных компаний в Китае по
                производству грузоподъемного оборудования, которая на данный
                момент относится к масштабной корпорации с несколькими заводами
                для изготовления погрузчиков и деталей к ним. История компании
                идет с 1958 года, первый погрузчик Heli был выпущен уже через 5
                лет после открытия фирмы, далее началось стремительное развитие
                торговой марки. Уже в 1976 году компания смогла выпустить
                китайский погрузчик Heli с грузоподъемностью в 20-25 тонн.
                Спустя 9 лет в соответствии с технологиями компании TCM,
                производитель смог выпустить вилочный погрузчик Heli на 1-10
                тонн.
              </p>
              <p>
                Сегодня предприятие Heli является производителем
                государственного уровня, выпускающим широкий спектр складского
                оборудования. Ассортимент включает:
              </p>
              <ul>
                <li>
                  погрузчики с электродвигателями и двигателями внутреннего
                  сгорания;
                </li>
                <li>боковые погрузчики;</li>
                <li>штабелеры и тележки для контейнеров;</li>
                <li>тягачи;</li>
                <li>электроштабелеры.</li>
              </ul>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/heli-u88-170.jpg"} />
              <img src={"/images/brand/heli-u88-170.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>О предприятии</h2>
            <p>
              Почти 85% производства автоматизировано, что гарантирует высокую
              точность и качество продукции. Anhui Heli Machinery Import &
              Export Co., Ltd. сертифицирована по системе ISO 9001, что
              подтверждает соответствие международным стандартам. Разновидности
              запчастей для погрузчиков HELI
            </p>
            <p>
              Поддержание надежной и бесперебойной работы вилочных погрузчиков
              требует своевременного обслуживания и замены изношенных узлов. На
              складе компании «СПЕЦМАШИНА» в Санкт-Петербурге всегда в наличии
              обширный ассортимент запчастей для техники HELI, включая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Фильтры"}
              text={"Фильтры топливные, воздушные, масляные"}
            />
            <Box
              icon={<IconBolt />}
              title={"Двигатель"}
              text={"Компоненты двигателя и гидравлики"}
            />
            <Box
              icon={<IconBolt />}
              title={"Трансмиссия"}
              text={"Элементы трансмиссии и ходовой части"}
            />
            <Box
              icon={<IconBolt />}
              title={"Ремкомплект"}
              text={"Ремонтные комплекты, штоки, гидроцилиндры"}
            />
            <Box
              icon={<IconBolt />}
              title={"Охлаждение"}
              text={
                "Системы охлаждения, тормозные механизмы и прочие комплектующие"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Мы предлагаем как оригинальные запчасти HELI, так и
              сертифицированные аналоги с высоким уровнем надежности. Все
              позиции проходят обязательную проверку качества.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для погрузчиков HELI</h2>
            <p>
              Правильный выбор комплектующих — залог долговечности и стабильной
              работы техники. При подборе запчастей для погрузчиков Heli важно
              учитывать следующие факторы:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Совместимость <sup>01</sup>"}
              text={
                "При заказе детали необходимо точно знать модель и серийный номер техники. Это позволит избежать ошибок и исключить несовместимость."
              }
            />
            <Box
              title={"Происхождение <sup>02</sup>"}
              text={
                "Оригинальные запчасти обеспечивают максимальный срок службы и соответствие техническим параметрам. Однако сертифицированные аналоги также допустимы при ограниченном бюджете."
              }
            />
            <Box
              title={"Наличие каталога <sup>03</sup>"}
              text={
                "Компания «СПЕЦМАШИНА» предоставляет полный каталог запасных частей, где удобно найти нужную позицию по артикулу или узлу."
              }
            />
            <Box
              title={"Консультация <sup>04</sup>"}
              text={
                "Опытные специалисты помогут с выбором, предложат альтернативы и проконсультируют по вопросам установки."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Если вы ищете надежные и качественные запчасти для вилочного
              погрузчика HELI в Санкт-Петербурге — обращайтесь в компанию
              «СПЕЦМАШИНА». Мы гарантируем профессиональный подход, быстрое
              обслуживание и поставку комплектующих в кратчайшие сроки.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
