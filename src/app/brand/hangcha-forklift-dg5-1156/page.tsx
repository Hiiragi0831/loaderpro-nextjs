import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "1156";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков HANGCHA",
    "Предлагаем купить запчасти для вилочных погрузчиков HANGCHA с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
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
                Купить запчасти для вилочных погрузчиков HANGCHA
              </h2>
              <p>
                Компания по выпуску погрузочной техники Hangcha расположена в
                Китае. Бренд был создан в 1956 году и сейчас Ханча – это мировой
                холдинг по изготовлению грузоподъемного оснащения, которое
                прекрасно сочетает в себе японские технологии и европейское
                качество при низкой стоимости. Инновационные производственные
                мощности позволяют бренду ежегодно выпускать 80 000 единиц
                погрузочной техники, исключая возможность брака и различий в
                качестве сборки.
              </p>
              <p>
                Погрузчики Hangcha завоевали популярность благодаря высокой
                надежности и отличной производительности. Важную роль в
                поддержании их бесперебойной работы играет своевременная замена
                оригинальных запчастей и комплектующих. Правильно подобранные
                детали обеспечивают долгий срок службы техники и ее соответствие
                заводским характеристикам.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/hangcha-forklift-dg5-1156.jpg"} />
              <img
                src={"/images/brand/hangcha-forklift-dg5-1156.jpg"}
                alt="logo"
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Разновидности запчастей для вилочных погрузчиков Hangcha (Ханча)
            </h2>
            <p>
              Ассортимент запчастей для автопогрузчиков Hangcha охватывает
              широкий спектр компонентов, включая как базовые узлы, так и
              дополнительные элементы для расширения функциональности техники.
              Наиболее востребованные виды запчастей:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигатели и элементы питания"}
              text={
                "Моторы дизельные, бензиновые и электрические, стартеры, генераторы, аккумуляторы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлика"}
              text={
                "Гидронасосы, распределители, гидроцилиндры, рукава высокого давления."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Тормозная система"}
              text={"Тормозные барабаны, колодки, цилиндры, суппорты."}
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={"Колеса, ступицы, подшипники, амортизаторы."}
            />
            <Box
              icon={<IconBolt />}
              title={"Рулевое управление"}
              text={"Рулевые редукторы, гидроусилители, тяги."}
            />
            <Box
              icon={<IconBolt />}
              title={"Трансмиссия"}
              text={"Сцепление, КПП, приводные валы."}
            />
            <Box
              icon={<IconBolt />}
              title={"Подъемные механизмы"}
              text={"Цепи, каретки, направляющие, вилы."}
            />
            <Box
              icon={<IconBolt />}
              title={"Электрика и освещение"}
              text={"Фары, реле, блоки управления, приборные панели."}
            />
            <Box
              icon={<IconBolt />}
              title={"Кабины и элементы комфорта"}
              text={"Сиденья, зеркала, стекла, отопители."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Также доступен ряд навесного оборудования, включая захваты, ковши,
              удлинители вил, что расширяет функциональные возможности техники.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Как выбрать запчасти для вилочных погрузчиков Hangcha (Ханча)
            </h2>
            <p>
              Чтобы подобрать подходящие запчасти на вилочный погрузчик Hangcha,
              необходимо ориентироваться на конкретные технические параметры
              вашей техники. В идеале — использовать оригинальный каталожный
              номер детали. Однако даже при его отсутствии правильный выбор
              возможен при предоставлении следующей информации:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Название <sup>01</sup>"}
              text={"Название нужной запчасти Hangcha"}
            />
            <Box
              title={"Номер <sup>02</sup>"}
              text={"Серийный номер техники"}
            />
            <Box title={"Год <sup>03</sup>"} text={"Год выпуска модели"} />
            <Box
              title={"Двигатель <sup>04</sup>"}
              text={"Номер и модель установленного двигателя"}
            />
            <Box
              title={"Цилиндры <sup>05</sup>"}
              text={"Количество цилиндров"}
            />
            <Box
              title={"Тип <sup>06</sup>"}
              text={
                "Тип мачты и высота подъема (если необходима замена мачтовых компонентов)"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Вся эта информация содержится на фирменной табличке, расположенной
              на шасси погрузчика. На основе этих данных сотрудники компании
              «СПЕЦМАШИНА» смогут оперативно определить нужную позицию в
              каталоге и подобрать 100% совместимый элемент.
            </p>
            <p>
              Если конкретной запчасти нет в наличии, возможна поставка под
              заказ напрямую с заводов производителя. Все товары отправляются по
              всей территории России, включая удаленные регионы. Это позволяет
              минимизировать простой техники и поддерживать ее работоспособность
              на высоком уровне.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
