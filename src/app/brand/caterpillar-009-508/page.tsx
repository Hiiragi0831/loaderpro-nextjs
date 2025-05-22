import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "508";

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
                Купить запчасти для погрузчиков CATERPILLAR в Санкт Петербурге
              </h2>
              <p>
                Компания Caterpillar занимается производством надежных вилочных
                погрузчиков, а также предлагает качественную техническую
                поддержку складской техники. Вилочный погрузчик CAT прекрасно
                известен по всему миру и высоко ценится многими клиентами
                американского бренда. Модельный ряд вилочных погрузчиков
                Катерпиллар состоит из складской техники с грузоподъемностью от
                1,5 до 15 тонн. Компания выпускает электрические погрузчики с
                противовесом и автопогрузчики с ДВС, которые комплектуются
                цельнолитыми или пневматическими шинами.
              </p>
              <p>
                Каждая единица техники производится на заводе в Хьюстоне, штат
                Техас, в соответствии со строгими международными стандартами ISO
                9001:2000. Интеграция передовых технологий обеспечивает высокую
                производительность при выполнении погрузочно-разгрузочных
                операций. Особый интерес пользователей вызывают такие опции, как
                кнопочное управление, система контроля присутствия оператора
                PDS, многофункциональный дисплей, усиленная конструкция рамы и
                мачты.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/caterpillar-009-508.jpg"} />
              <img src={"/images/brand/caterpillar-009-508.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности запчастей для погрузчиков CATERPILLAR</h2>
            <p>
              Ассортимент запасных частей для погрузчиков Caterpillar включает
              широкий перечень комплектующих, предназначенных для восстановления
              и технического обслуживания техники. Среди них можно выделить
              следующие категории:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигательные узлы и компоненты"}
              text={"Фильтры, турбины, насосы, поршни, свечи, генераторы."}
            />
            <Box
              icon={<IconBolt />}
              title={"Трансмиссия и коробка передач"}
              text={"Сцепление, редукторы, муфты, шестерни, валы."}
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлика"}
              text={"Гидроцилиндры, насосы, распределители, РВД."}
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={
                "Колеса (цельнолитые, пневматические), ступицы, подшипники."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электрика"}
              text={"Стартеры, датчики, реле, аккумуляторы, электродвигатели."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Такой широкий выбор позволяет подобрать как оригинальные, так и
              аналоговые (совместимые) детали в зависимости от бюджета и
              потребностей клиента. Хотите больше запчастей для погрузчиков
              Caterpillar? Обращайтесь к нам прямо сейчас. Менеджеры компании
              максимально быстро подберут товар и предложат персональный
              прайс-лист.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для погрузчиков CATERPILLAR</h2>
            <p>
              Погрузчики марки CAT отличаются высокой выносливостью, простотой
              обслуживания и надежностью даже при интенсивной эксплуатации.
              Однако ни одна техника не может работать без регулярного
              сервисного обслуживания и своевременной замены изношенных
              компонентов. Чтобы правильно подобрать запчасти и не столкнуться с
              проблемой несовместимости, необходимо учитывать следующие
              параметры:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Модель <sup>01</sup>"}
              text={"Точная модель техники."}
            />
            <Box title={"Год <sup>02</sup>"} text={"Год выпуска погрузчика."} />
            <Box title={"Номер <sup>03</sup>"} text={"Серийный номер рамы."} />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Эти данные позволяют идентифицировать конкретную конфигурацию
              оборудования и подобрать идеально подходящие комплектующие. Это
              особенно важно при заказе сложных узлов, таких как элементы
              двигателя или трансмиссии.
            </p>
            <p>
              Для удобства клиентов специалисты компании «СПЕЦМАШИНА» готовы
              помочь в подборе нужных деталей. Достаточно предоставить
              техническую информацию, после чего будет предоставлен список
              доступных запчастей, их стоимость и сроки поставки. Кроме
              складских позиций, также доступны профессиональные каталоги с
              оригинальными и совместимыми деталями для вилочных погрузчиков
              CATERPILLAR, что упрощает процесс выбора и гарантирует оперативную
              доставку.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
