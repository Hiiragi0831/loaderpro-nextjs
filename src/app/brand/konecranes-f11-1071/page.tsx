import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";

const id = "1071";

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
                Купить запчасти для ричстакеров KONECRANES в Санкт-Петербурге
              </h2>
              <p>
                Ричстакеры Konecranes — это высокопроизводительная техника,
                которую по праву считают эталоном в сфере грузоподъемного
                оборудования. Финская компания с более чем вековой историей
                занимает лидирующие позиции на мировом рынке благодаря
                инновационным решениям, прочной конструкции и высокому уровню
                безопасности. Однако, как и любое оборудование, даже самые
                надежные ричстакеры требуют своевременного технического
                обслуживания и замены изношенных компонентов.
              </p>
              <p>
                Нужно купить запчасти для ремонта ричстакеров KONECRANES?
                Обращайтесь к нам прямо сейчас — вас ждет индивидуальное
                предложение.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/konecranes-f11-1071.jpg"} />
              <img src={"/images/brand/konecranes-f11-1071.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Особенности техники Konecranes</h2>
            <p>
              Бренд Konecranes начал свою деятельность в 1910 году в Финляндии с
              небольшой мастерской по ремонту электродвигателей. За десятилетия
              компания выросла в промышленного гиганта, предлагающего передовые
              решения для контейнерных терминалов, портов, железнодорожных узлов
              и промышленных предприятий.
            </p>
            <p>
              Современные ричстакеры Konecranes — это мощные машины с
              грузоподъемностью от 10 до 80 тонн. В зависимости от области
              применения они делятся на несколько категорий:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Контейнерные ричстакеры<sup>01</sup>"}
              text={
                "(10–45 т) — для работы с гружеными и порожними контейнерами."
              }
            />
            <Box
              title={"Железнодорожные и интермодальные модели <sup>02</sup>"}
              text={"(41–45 т) — для обработки грузов на терминалах"}
            />
            <Box
              title={"Баржевые погрузчики <sup>03</sup>"}
              text={"(до 45 т) — оптимизированы под речные порты"}
            />
            <Box
              title={"Промышленные ричстакеры <sup>04</sup>"}
              text={
                "(35–80 т) — предназначены для перемещения негабаритных и тяжелых грузов на производстве"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания первой в мире разработала ричстакер с гибридным приводом,
              сочетающим топливную экономичность и экологичность. Все модели
              оснащаются малотоксичными двигателями, а также широким выбором
              навесного оборудования для нестандартных задач.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему важно использовать оригинальные запчасти Konecranes?</h2>
            <p>
              Работа ричстакеров Konecranes часто связана с интенсивными
              нагрузками, экстремальными условиями и точным соблюдением графиков
              грузоперевозок. Даже незначительный сбой может привести к простою,
              срыву логистических цепочек и финансовым потерям.
            </p>
            <p>
              Поэтому при обслуживании техники важно использовать только
              оригинальные запчасти или сертифицированные аналоги:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Они обеспечивают полную совместимость с техникой<sup>01</sup>"
              }
            />
            <Box
              title={
                "Гарантируют сохранение заводских характеристик <sup>02</sup>"
              }
            />
            <Box
              title={
                "Соответствуют международным стандартам надежности и безопасности <sup>03</sup>"
              }
            />
            <Box title={"Увеличивают срок службы техники <sup>04</sup>"} />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/konecranes-f11-1071-2.jpg"} />
              <img src={"/images/brand/konecranes-f11-1071-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Где купить запчасти для ричстакеров Konecranes?</h2>
              <p>
                Компания «СПЕЦМАШИНА» — надежный поставщик комплектующих для
                ричстакеров Konecranes. Мы предлагаем:
              </p>
              <ul>
                <li>
                  Широкий ассортимент оригинальных запчастей и проверенных
                  аналогов;
                </li>
                <li>
                  Поставку под заказ любых компонентов из фирменного каталога
                  Konecranes;
                </li>
                <li>
                  Консультации по подбору деталей по модели, серийному номеру и
                  году выпуска техники;
                </li>
                <li>Быструю доставку по всей России.</li>
              </ul>
              <p>
                Мы понимаем, насколько важна бесперебойная работа оборудования
                на терминалах и в логистических центрах, поэтому делаем все
                возможное, чтобы ваши заказы обрабатывались и доставлялись в
                кратчайшие сроки.
              </p>
              <p>
                Поддерживайте эффективность вашего ричстакера Konecranes —
                заказывайте запчасти у профессионалов. «СПЕЦМАШИНА» — ваш ключ к
                надежной технике и стабильной работе грузоподъемного
                оборудования.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
