import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "68";

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
                Запчасти для вилочных погрузчиков Hyundai (Хундай) в
                Санкт-Петербурге
              </h2>
              <p>
                Южнокорейская компания Hyundai — признанный мировой
                производитель качественного складского и погрузочного
                оборудования. Среди его продукции особое место занимают вилочные
                погрузчики, сочетающие надежность, производительность и
                доступную цену.
              </p>
              <p>
                Чтобы техника Hyundai стабильно функционировала в любых
                условиях, крайне важно использовать оригинальные и проверенные
                запчасти, которые полностью соответствуют техническим параметрам
                машин. Компания «СПЕЦМАШИНА» предлагает широкий выбор деталей
                для всех видов погрузчиков Hyundai с оперативной доставкой по
                России.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/hyundai-q72-68.jpg"} />
              <img src={"/images/brand/hyundai-q72-68.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Ассортимент погрузчиков Hyundai: что важно знать при подборе
              запчастей
            </h2>
            <p>
              Hyundai выпускает несколько типов вилочных погрузчиков, каждый из
              которых рассчитан на определенные условия эксплуатации. Это
              необходимо учитывать при выборе запчастей:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Дизельные погрузчики"}
              text={
                "Применяются преимущественно на открытых площадках с твердым покрытием. Грузоподъемность: от 1,5 до 25 тонн. Высота подъема вил — до 7 м. Отличаются мощностью, топливной экономичностью и высокой маневренностью."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Газовые и бензиновые погрузчики"}
              text={
                "Оптимальны как для улицы, так и для больших складов. Рабочий диапазон грузов: 1,5–5 тонн. Высота подъема: 3–6 м."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электропогрузчики"}
              text={
                "Предназначены в основном для работы в закрытых помещениях, но современные модели подходят и для уличных условий. Подъемный потенциал — от 1,25 до 2,5 тонны. Отличаются минимальным уровнем шума и эргономичным управлением."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Комплектующие для Hyundai: что мы предлагаем</h2>
            <p>
              Даже самое надежное оборудование нуждается в регулярной
              диагностике, обслуживании и замене изношенных деталей. В нашем
              каталоге представлены оригинальные и совместимые запчасти для
              вилочных погрузчиков Hyundai, включая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Двигатели и трансмиссионные элементы <sup>01</sup>"} />
            <Box
              title={"Фильтры (масляные, воздушные, топливные) <sup>02</sup>"}
            />
            <Box title={"Электрооборудование <sup>03</sup>"} />
            <Box title={"Элементы ходовой части <sup>04</sup>"} />
            <Box title={"Мастики, уплотнители, ремкомплекты <sup>05</sup>"} />
            <Box title={"Шины (пневматические и суперэластик) <sup>06</sup>"} />
            <Box
              title={
                "Навесное оборудование: захваты, удлинители вил, позиционеры <sup>07</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Также доступны каталоги оригинальных запчастей Hyundai, с помощью
              которых можно точно определить нужную деталь под конкретную модель
              погрузчика.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему стоит выбрать «СПЕЦМАШИНА»?</h2>
            <p>Преимущества нашей компании:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Большой выбор запчастей <sup>01</sup>"}
              text={
                "Мы поставляем продукцию напрямую от производителей или официальных дистрибьюторов."
              }
            />
            <Box
              title={"Консультации специалистов <sup>02</sup>"}
              text={
                "Подберем запчасти под вашу модель погрузчика Hyundai с учетом условий эксплуатации."
              }
            />
            <Box
              title={"Оперативная доставка <sup>03</sup>"}
              text={"Организуем отгрузку по всей России в кратчайшие сроки."}
            />
            <Box
              title={"Гарантия качества <sup>04</sup>"}
              text={
                "Все товары соответствуют заводским стандартам и проверены на совместимость."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/hyundai-q72-68-2.jpg"} />
              <img src={"/images/brand/hyundai-q72-68-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Как заказать?</h2>
              <p>
                Чтобы купить запчасти для вилочных погрузчиков Hyundai,
                достаточно обратиться к менеджерам компании «СПЕЦМАШИНА» по
                телефону или через форму на сайте loaderpro.ru. Мы подберем
                комплектующие, отправим каталог и организуем поставку точно в
                срок.
              </p>
              <p>
                Надежная техника требует качественного обслуживания —
                заказывайте запчасти для Hyundai у профессионалов!
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
