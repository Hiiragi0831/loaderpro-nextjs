import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "765";

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
                Купить запчасти для телескопических погрузчиков Merlo (Мерло) в
                Санкт-Петербурге
              </h2>
              <p>
                Телескопические погрузчики Merlo давно зарекомендовали себя как
                техника премиум-класса для строительных, сельскохозяйственных и
                коммунальных работ. С момента основания в 1960-х годах в
                итальянском городе Кунео, компания Merlo произвела более 35 000
                единиц спецтехники, которые успешно используются по всему миру.
              </p>
              <p>
                Нужны запчасти для телескопических погрузчиков Merlo (Мерло)?
                Обращайтесь, получите бесплатную консультацию прямо сейчас.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/merlo-a24-765.jpg"} />
              <img src={"/images/brand/merlo-a24-765.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что отличает погрузчики Merlo?</h2>
            <p>
              Погрузчики Merlo — это высокотехнологичное оборудование с
              телескопической стрелой, доступное в нескольких линейках:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Серия Roto и Panoramic"}
              text={"Универсальные строительные решения с вращающейся кабиной"}
            />
            <Box
              icon={<IconBolt />}
              title={"Multifarmer и Turbofarmer"}
              text={"Специализированные модели для аграрного сектора"}
            />
            <Box
              icon={<IconBolt />}
              title={"Compact"}
              text={"Мини-погрузчики для работы в ограниченных пространствах"}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>Каждая модель оснащается рядом инновационных функций:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Независимая гидропневматическая подвеска с автоматическим выравниванием<sup>01</sup>"
              }
            />
            <Box
              title={"Двухсекционные телескопические стрелы <sup>02</sup>"}
            />
            <Box title={"Автоматическая стабилизация опор <sup>03</sup>"} />
            <Box
              title={
                "Функция бокового смещения для точной подачи груза <sup>04</sup>"
              }
            />
            <Box
              title={
                "Гидростатическая трансмиссия с индивидуальным приводом на каждое колесо <sup>05</sup>"
              }
            />
            <Box
              title={
                "Мотор сбоку — для лучшего баланса и расширенного обзора <sup>06</sup>"
              }
            />
            <Box
              title={
                "Три режима управления колесами (все, передние, «краб») <sup>07</sup>"
              }
            />
            <Box
              title={
                "Интеллектуальная система MERLIN для диагностики и контроля <sup>08</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Такая комбинация возможностей делает телескопические погрузчики
              Merlo настоящими универсалами и лидерами среди аналогичной
              техники.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему важно использовать оригинальные запчасти Merlo?</h2>
            <p>
              Эффективность работы техники напрямую зависит от состояния ее
              компонентов. Износ или повреждение даже одной детали может
              привести к простою и поломке дорогостоящего оборудования. Только
              качественные комплектующие обеспечивают:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Надежность в любых условиях<sup>01</sup>"} />
            <Box title={"Сохранение заводских характеристик <sup>02</sup>"} />
            <Box title={"Длительный срок службы машины <sup>03</sup>"} />
            <Box title={"Безопасную эксплуатацию <sup>04</sup>"} />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              В компании «СПЕЦМАШИНА» вы можете приобрести оригинальные и
              аналоговые запчасти для телескопических погрузчиков Merlo. В
              наличии широкий ассортимент комплектующих для всех серий техники —
              от фильтров и гидроузлов до элементов трансмиссии и электроники.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/merlo-a24-765-2.jpg"} />
              <img src={"/images/brand/merlo-a24-765-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Как заказать нужные детали?</h2>
              <p>Для точного подбора запчастей вам потребуется:</p>
              <ul>
                <li>Точная модель и модификация погрузчика;</li>
                <li>Каталожный номер детали (при наличии);</li>
                <li>Год выпуска техники.</li>
              </ul>
              <p>
                Обратитесь к нашим менеджерам — мы предоставим оригинальные
                каталоги запчастей Merlo, поможем найти нужную позицию и оформим
                доставку в кратчайшие сроки.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Преимущества работы с «СПЕЦМАШИНОЙ»</h2>
            <p>Какие плюс сотрудничества с нами:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Большой склад запчастей для Merlo в наличии <sup>01</sup>"
              }
            />
            <Box
              title={"Быстрая доставка по всей территории России <sup>02</sup>"}
            />
            <Box title={"Помощь в подборе и оформлении заказа <sup>03</sup>"} />
            <Box
              title={
                "Только проверенные комплектующие с гарантией качества <sup>04</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Наш офис находится в Санкт-Петербурге, но география поставок
              охватывает всю страну. Мы уверены: даже в самых отдаленных
              регионах вы должны иметь доступ к качественным запасным частям.
            </p>
            <p>
              Поддержите производительность вашего Merlo — заказывайте
              оригинальные запчасти в «СПЕЦМАШИНЕ». Надежность итальянской
              техники требует соответствующего обслуживания.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
