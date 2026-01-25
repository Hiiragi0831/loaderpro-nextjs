import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "455";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков BAUMANN",
    "Предлагаем купить запчасти для боковых погрузчиков BAUMANN с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
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
                Купить запчасти для боковых вилочных погрузчиков Baumann
                (Бауман)
              </h2>
              <p>
                Компания Baumann (Бауман) — это мировой эталон в сфере
                производства боковых вилочных погрузчиков. Бренд, основанный в
                1969 году в итальянском городе Кавайон, специализируется
                исключительно на выпуске техники с боковой загрузкой. Такой
                подход позволил добиться впечатляющих результатов и заслужить
                доверие пользователей по всему миру.
              </p>
              <p>
                Сегодня Baumann — единственное предприятие, серийно выпускающее
                погрузчики с боковой загрузкой, грузоподъемность которых
                варьируется от 3 до 50 тонн. Заводы компании производят не
                только дизельные и газовые модели, но и электропогрузчики с
                многосторонним и четырехсторонним управлением, полностью
                адаптированные под индивидуальные задачи заказчиков. Главный
                офис бренда находится в Вероне, а техника успешно
                эксплуатируется на объектах по всему миру, включая Россию.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/baumann-a97-455.jpg"} />
              <img src={"/images/brand/baumann-a97-455.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/baumann-a97-455-2.jpg"} />
              <img src={"/images/brand/baumann-a97-455-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Почему важно использовать оригинальные запчасти Baumann?</h2>
              <p>
                Даже самая выносливая спецтехника со временем нуждается в замене
                компонентов. Работа бокового вилочного погрузчика связана с
                интенсивными нагрузками, особенно в складских комплексах и
                производственных зонах.
              </p>
              <p>
                Любая неисправность может остановить процессы, что оборачивается
                финансовыми потерями и срывами сроков. Поэтому важно вовремя
                выполнять техническое обслуживание и использовать оригинальные
                или сертифицированные комплектующие.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Где купить качественные запчасти для погрузчиков Baumann?</h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает широкий выбор запчастей и
              расходных материалов для всех моделей боковых погрузчиков Baumann.
              Мы помогаем минимизировать простой оборудования, предлагая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Оригинальные и сертифицированные комплектующие <sup>01</sup>"
              }
            />
            <Box
              title={
                "Консультации профессионалов с опытом в подборе запчастей<sup>02</sup>"
              }
            />
            <Box
              title={
                "Каталог запасных частей, в котором легко найти нужную позицию <sup>03</sup>"
              }
            />
            <Box
              title={
                "Быструю доставку по всей России: от Санкт-Петербурга и Москвы до самых отдаленных регионов<sup>04</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Как правильно подобрать запчасти для бокового погрузчика Baumann?
            </h2>
            <p>Чтобы мы могли подобрать нужную деталь, необходимо знать:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box title={"Точную модель погрузчика <sup>01</sup>"} />
            <Box title={"Серийный номер техники<sup>02</sup>"} />
            <Box title={"Каталожный номер запчасти <sup>03</sup>"} />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Если у вас нет полной информации — не проблема. Специалисты
              «СПЕЦМАШИНА» помогут в подборе комплектующих по внешнему виду
              узла, фото, описанию и году выпуска техники.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Преимущества компании «СПЕЦМАШИНА»?</h2>
            <p>Почему клиенты выбирают нас:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Скорость работы"}
              text={
                "Популярные запчасти уже на складе, заказ комплектующих занимает минимум времени."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Качество"}
              text={
                "Мы поставляем только оригинальную продукцию или проверенные аналоги с гарантией."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Профессиональный подход"}
              text={
                "Наши специалисты работают точно, как швейцарские часы: без ошибок и задержек."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гибкая логистика"}
              text={
                "Доставляем товары в любую точку России оперативно и надежно."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Прозрачные цены"}
              text={"Без скрытых наценок и посредников."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              «СПЕЦМАШИНА» — ваш надежный поставщик запчастей для боковых
              погрузчиков Baumann. Верните технику в строй быстро, безопасно и
              без лишних затрат. Закажите комплектующие онлайн на loaderpro.ru
              или свяжитесь с нашими специалистами — мы всегда на связи, чтобы
              помочь вам!
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
