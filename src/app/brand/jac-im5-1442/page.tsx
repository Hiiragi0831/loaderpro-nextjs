import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "1442";

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
                Купить запчасти для вилочных погрузчиков JAC (Джак) в
                Санкт-Петербурге
              </h2>
              <p>
                JAC Motors — один из крупнейших государственных
                машиностроительных брендов Китая, известный во всем мире как
                производитель надежной спецтехники. Компания основана на базе
                автомобильного завода и на сегодняшний день управляет 16
                промышленными предприятиями в Китае.
              </p>
              <p>
                Производимые ею вилочные погрузчики с дизельными,
                газобензиновыми и электрическими двигателями востребованы на
                складах и в логистических центрах более чем в 100 странах мира.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/jac-im5-1442.jpg"} />
              <img src={"/images/brand/jac-im5-1442.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Прочные и универсальные погрузчики JAC</h2>
            <p>Техника JAC выделяется:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={
                "Широким диапазоном грузоподъемности — от 1 до 25 тонн <sup>01</sup>"
              }
            />
            <Box title={"Высокой маневренностью <sup>02</sup>"} />
            <Box
              title={
                "Надежной конструкцией и долговечными узлами <sup>03</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Но даже самая качественная техника требует своевременного
              технического обслуживания. Чтобы ваша складская техника JAC
              работала безотказно, необходимо использовать только качественные
              оригинальные запчасти.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Где купить оригинальные запчасти для погрузчиков JAC?</h2>
            <p>
              Если вы ищете надежного поставщика оригинальных запчастей для
              погрузчиков JAC, обратитесь в компанию «СПЕЦМАШИНА» — официального
              дилера бренда JAC на территории России. Мы предлагаем полный
              спектр услуг по поставке комплектующих, обеспечивая качество,
              точность подбора и быстрые сроки поставки.
            </p>
            <p>Наши клиенты получают доступ к:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Оригинальным запчастям JAC"}
              text={
                "На сегодняшний день объем складских запасов превышает 1 миллион долларов, что позволяет оперативно отгружать наиболее востребованные позиции без ожидания."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Полным каталогам запчастей на все модели погрузчиков JAC"}
              text={
                "В том числе на устаревшие или снятые с производства модификации, что особенно важно для владельцев техники с большим сроком службы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Профессиональной помощи в подборе деталей"}
              text={
                "Наши специалисты оперативно определяют нужные комплектующие по марке, году выпуска и номеру рамы погрузчика, исключая ошибки при заказе и снижая время простоя техники"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания «СПЕЦМАШИНА» — это не просто поставщик, а надежный
              технический партнер, готовый обеспечить вашу технику JAC всеми
              необходимыми компонентами для стабильной и эффективной работы.
              Офис и склад находятся в Санкт-Петербурге, оттуда и осуществляется
              логистика по всей России.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Ассортимент запчастей JAC</h2>
            <p>У нас вы найдете:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Элементы трансмиссии и ходовой части <sup>01</sup>"} />
            <Box title={"Двигатели и навесное оборудование <sup>02</sup>"} />
            <Box
              title={
                "Тормозные системы, фильтры, ремни и прокладки <sup>03</sup>"
              }
            />
            <Box title={"Электрооборудование <sup>04</sup>"} />
            <Box
              title={"Шины, масла и другие расходные материалы <sup>05</sup>"}
            />
          </div>
        </div>
      </section>

      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/jac-im5-1442-2.jpg"} />
              <img src={"/images/brand/jac-im5-1442-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Доставка по всей России — быстро и надежно</h2>
              <p>
                Мы понимаем, как важно быстро восстановить работу погрузочной
                техники. Поэтому предлагаем:
              </p>
              <ul>
                <li>Стандартную доставку в любой регион РФ.</li>
                <li>
                  Экспресс-доставку необходимых запчастей в течение 48 часов.
                </li>
                <li>
                  Полную консультационную поддержку от специалистов с опытом в
                  ремонте техники JAC.
                </li>
              </ul>
              <p>
                Обратитесь к нам — мы знаем, как продлить срок службы вашей
                техники. Если вам нужны запчасти для вилочного погрузчика JAC —
                оставьте заявку на сайте loaderpro.ru, позвоните по телефону или
                заполните форму обратной связи.
              </p>
              <p>
                Наши менеджеры оперативно свяжутся с вами и предложат наилучшее
                решение под ваш бюджет и задачу. «СПЕЦМАШИНА» — ваш надежный
                поставщик оригинальных запчастей для погрузчиков JAC.
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
