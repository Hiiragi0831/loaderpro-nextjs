import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "605";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков ATLET",
    "Предлагаем купить запчасти для вилочных погрузчиков ATLET с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
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
                Купить запчасти для вилочных погрузчиков Atlet (Атлет)
              </h2>
              <p>
                Вилочные погрузчики Atlet (Атлет) — это качественная и
                высокотехнологичная складская техника шведского производства,
                известная своей надежностью и функциональностью. Они разработаны
                для эффективной работы как в закрытых помещениях, так и на
                открытых территориях.
              </p>
              <p>
                Однако даже самая выносливая техника требует своевременного
                обслуживания и замены деталей — и здесь на помощь приходят
                оригинальные запчасти Atlet, которые предлагает компания
                «СПЕЦМАШИНА». У нас вы можете купить запчасти для вилочных
                погрузчиков Atlet (Атлет) с доставкой.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/atlet-506-605.jpg"} />
              <img src={"/images/brand/atlet-506-605.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>О бренде Atlet: качество из Швеции</h2>
            <p>
              Компания Atlet ведет свою историю из города Мельнлюкке (Швеция),
              где расположены ее головной офис, производственные цеха и учебные
              центры. Сегодня бренд является частью корпорации Nissan Forklift,
              а его дилерская сеть охватывает десятки стран мира: Францию,
              Германию, США, Бельгию, Норвегию и другие.
            </p>
            <p>Погрузчики Atlet отличаются:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"01"}
              text={"Грузоподъемностью от 1,25 до 3 тонн"}
            />
            <Box
              icon={<IconBolt />}
              title={"02"}
              text={"Высокой маневренностью"}
            />
            <Box
              icon={<IconBolt />}
              title={"03"}
              text={"Эргономичным дизайном"}
            />
            <Box
              icon={<IconBolt />}
              title={"04"}
              text={"Инновационными техническими решениями"}
            />
            <Box
              icon={<IconBolt />}
              title={"05"}
              text={
                "Высокой устойчивостью к нагрузкам при интенсивной эксплуатации"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Ассортимент запчастей для погрузчиков Atlet</h2>
            <p>
              Для бесперебойной и безопасной работы вилочного погрузчика
              необходимо использовать качественные комплектующие. «СПЕЦМАШИНА»
              предлагает широкий выбор запчастей для Atlet, подходящих как для
              текущего обслуживания, так и для полноценного ремонта:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Фильтры <sup>01</sup>"}
              text={"Воздушные, масляные, топливные, гидравлические"}
            />
            <Box
              title={"Аккумуляторы <sup>02</sup>"}
              text={"Тяговые батареи и комплектующие для электрических моделей"}
            />
            <Box
              title={"Шины <sup>03</sup>"}
              text={
                "Суперэластик, пневматические – для различных условий эксплуатации"
              }
            />
            <Box
              title={"Гидравлика <sup>04</sup>"}
              text={
                "Штоки, гидроцилиндры, ремкомплекты (манжеты, сальники, уплотнения)"
              }
            />
            <Box
              title={"Кузовные элементы <sup>05</sup>"}
              text={"Стекла, зеркала, фары, элементы рамы и кабины"}
            />
            <Box
              title={"Двигатель, трансмиссия и ходовая часть <sup>06</sup>"}
              text={"Все необходимое для капитального ремонта"}
            />
            <Box
              title={"Запчасти для ричтраков и штабелеров Atlet <sup>07</sup>"}
              text={"Оригинальные комплектующие и их аналоги"}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Также у нас представлены официальные каталоги запчастей Atlet, по
              которым вы можете легко определить нужную деталь. Если нужная
              позиция временно отсутствует на складе — мы быстро оформим
              поставку под заказ.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/atlet-506-605-2.jpg"} />
              <img src={"/images/brand/atlet-506-605-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Почему выбирают «СПЕЦМАШИНА»?</h2>
              <p>Почему стоит выбрать нас:</p>
              <ul>
                <li>
                  Оригинальные запчасти и проверенные аналоги от производителя.
                </li>
                <li>Подбор по каталожному номеру или модели техники.</li>
                <li>Консультации специалистов по ремонту и обслуживанию.</li>
                <li>Оперативная доставка по всей территории России.</li>
                <li>Выгодные цены и гибкие условия сотрудничества.</li>
              </ul>
              <p>
                Гарантируйте надежную работу вашей техники Atlet — выбирайте
                качественные запчасти от «СПЕЦМАШИНЫ». Мы обеспечим вас всем
                необходимым для эффективного обслуживания и ремонта складской
                техники, независимо от региона или сложности задачи.
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
