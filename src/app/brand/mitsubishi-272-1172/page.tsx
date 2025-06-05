import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "1172";

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
                Купить запчасти для вилочных погрузчиков Mitsubishi в
                Санкт-Петербурге
              </h2>
              <p>
                Погрузчики Mitsubishi — это сочетание передовых технологий,
                высокой производительности и традиционного японского качества.
                Бренд Mitsubishi, основанный в 1870 году как судоходная
                компания, за полтора века вырос в транснациональный промышленный
                концерн, охватывающий практически все направления современной
                техники.
              </p>
              <p>
                Среди прочего оборудования особое место занимает линейка
                складской техники, в том числе погрузчиков, которые активно
                используются в логистике, строительстве, сельском хозяйстве и
                коммунальной сфере.
              </p>
              <p>
                Обращайтесь к нам прямо сейчас, получите бесплатную консультацию
                касательно подбора запчастей для вилочных погрузчиков
                Mitsubishi.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/mitsubishi-272-1172.jpg"} />
              <img src={"/images/brand/mitsubishi-272-1172.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Особенности погрузчиков Mitsubishi</h2>
            <p>
              Погрузчики Mitsubishi сконструированы с учетом самых высоких
              стандартов безопасности и эффективности. Производитель предлагает
              более 150 моделей техники для складской логистики, включая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Компактность"}
              text={"Компактные погрузчики для ограниченных пространств"}
            />
            <Box
              icon={<IconBolt />}
              title={"Электрический привод"}
              text={"Модели с электрическим приводом (до 5,5 тонн)"}
            />
            <Box
              icon={<IconBolt />}
              title={"Различные версии"}
              text={"Дизельные и газовые версии для работы в тяжелых условиях"}
            />
            <Box
              icon={<IconBolt />}
              title={"Мощные"}
              text={"Мощные машины с грузоподъемностью до 16 тонн"}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Такая многообразная линейка делает технику Mitsubishi
              универсальной и востребованной во многих отраслях. Вся техника
              проходит строгую сертификацию, и на основные агрегаты
              предоставляется расширенная гарантия — до 5 лет или 6000
              моточасов.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Зачем и когда требуется замена запчастей?</h2>
            <p>
              Как и любая профессиональная техника, погрузчики Mitsubishi
              подвержены износу. При регулярной эксплуатации возникает
              необходимость в техническом обслуживании и замене определенных
              узлов:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Изношенные расходники (фильтры, прокладки, ремни) <sup>01</sup>"
              }
            />
            <Box
              title={
                "Поврежденные элементы трансмиссии и гидравлики <sup>02</sup>"
              }
            />
            <Box title={"Электронные компоненты управления <sup>03</sup>"} />
            <Box title={"Навесное оборудование <sup>04</sup>"} />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Использование оригинальных или сертифицированных аналогов
              гарантирует долговечность работы погрузчика и предотвращает более
              серьезные поломки в будущем.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/mitsubishi-272-1172-2.jpg"} />
              <img src={"/images/brand/mitsubishi-272-1172-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Как подобрать подходящие запчасти?</h2>
              <p>
                Чтобы правильно выбрать нужные комплектующие для погрузчика
                Mitsubishi, необходимо иметь следующую информацию:
              </p>
              <ul>
                <li>Год выпуска техники;</li>
                <li>Серийный номер;</li>
                <li>Точная модель и ее модификация (при наличии).</li>
              </ul>
              <p>
                Компания «СПЕЦМАШИНА» предоставляет профессиональную помощь в
                подборе запчастей. Наши специалисты проконсультируют вас,
                уточнят наличие нужных деталей на складе и помогут с оформлением
                заказа. Также мы предлагаем оригинальные каталоги Mitsubishi для
                самостоятельного поиска по артикулу.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему стоит выбрать «СПЕЦМАШИНУ»?</h2>
            <p>
              4 причины купить запчасти для вилочных погрузчиков Mitsubishi.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Большой выбор оригинальных и аналоговых запчастей <sup>01</sup>"
              }
            />
            <Box
              title={
                "Поставки по всей России, включая срочную доставку <sup>02</sup>"
              }
            />
            <Box title={"Консультации от опытных инженеров <sup>03</sup>"} />
            <Box
              title={
                "Высокое качество продукции, подтвержденное сертификатами <sup>04</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Наш офис находится в Санкт-Петербурге, но география заказов
              охватывает всю территорию России — мы уверены, что каждая техника
              Mitsubishi должна работать бесперебойно независимо от региона.
            </p>
            <p>
              Если вам нужны качественные и надежные запчасти для погрузчиков
              Mitsubishi — обращайтесь в компанию «СПЕЦМАШИНА». Мы поможем
              продлить срок службы вашей техники и обеспечить ее стабильную
              работу в любых условиях.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
