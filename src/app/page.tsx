import HomeSlider from "@/components/HomeSlider";
import { Brands } from "@/components/Brands";
import Advantages from "@/components/Advantages";
import { Reviews } from "@/components/Reviews";
import { MapSending } from "@/components/MapSending";
import { Team } from "@/components/Team";
import { VideoGallery } from "@/components/VideoGallery";
import Articles from "@/components/Articles";
import Link from "next/link";
import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import Technic from "@/components/Technic";
import Semicircle from "@/components/Semicircle";
import { Cta } from "@/components/Cta";
import Products from "@/components/Products";

export const metadata: Metadata = metaGen(
  "Запчасти для погрузчиков от лучших мировых производителей",
  "Предлагаем купить запчасти для вилочных погрузчиков, штабелеров, ричтраков, ричстакеров и другой складской техники от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <section className={"home__title"}>
        <div className="container">
          <h1 className={"h1"}>ЗАПЧАСТИ ДЛЯ ПОГРУЗЧИКОВ И СКЛАДСКОЙ ТЕХНИКИ</h1>
          <picture>
            <source srcSet="/images/home/kat.png" />
            <img src="/images/home/kat.png" alt="kat" />
          </picture>
        </div>
      </section>
      <Brands />
      <Products
        limit={5}
        filter={"inStock"}
        title={"В наличии"}
        link={"/spare-parts"}
      />
      <Products
        limit={5}
        filter={"popular"}
        title={"Спецпредложения"}
        link={"/tires-rims"}
      />
      <Technic />
      <section className="home-find">
        <div className="container">
          <div className="section-title">
            <h2 className="h1">Как подобрать запчасти для погрузчиков?</h2>
            <p>
              Выбор комплектующих для вилочного погрузчика требует учета
              нескольких факторов:
            </p>
          </div>
          <div className="row">
            <Semicircle
              circle="1"
              title="Марка и модель техники"
              text="необходимо знать точное название производителя и модификацию погрузчика."
            />
            <Semicircle
              circle="2"
              title="Каталожный номер"
              text="оригинальные запчасти легко найти по серийному номеру, указанному в технической документации."
            />
            <Semicircle
              circle="3"
              title="Совместимость с аналогами"
              text="если оригинальная деталь недоступна, наши специалисты помогут подобрать качественный аналог."
            />
            <Semicircle
              circle="4"
              title="Условия эксплуатации"
              text="выбор комплектующих зависит от условий работы: температурного режима, нагрузки и типа покрытия."
            />
          </div>
        </div>
      </section>
      <Advantages />
      <section className={"home-block"}>
        <div className="container">
          <div className="home-block__wrapper">
            <div className="section-title">
              <h2 className="h1">Все бренды – все запчасти!</h2>
              <p>
                Чтобы поддерживать складскую технику в отличном рабочем
                состоянии долгое время, требуется соблюдать несколько пунктов:
              </p>
            </div>
            <div className="row">
              <div className="home-block__icons">
                <div className="home-block__icon">
                  <picture>
                    <source srcSet="/images/home/icons/icon-park-outline_fork.png" />
                    <img
                      src="/images/home/icons/icon-park-outline_fork.png"
                      alt="icon"
                    />
                  </picture>
                  <p>Профессиональная эксплуатация</p>
                </div>
                <div className="home-block__icon">
                  <picture>
                    <source srcSet="/images/home/icons/ep_tools.png" />
                    <img src="/images/home/icons/ep_tools.png" alt="icon" />
                  </picture>
                  <p>Правильное обслуживание</p>
                </div>
                <div className="home-block__icon">
                  <picture>
                    <source srcSet="/images/home/icons/material-symbols_forklift.png" />
                    <img
                      src="/images/home/icons/material-symbols_forklift.png"
                      alt="icon"
                    />
                  </picture>
                  <p>Использование качественных запчастей</p>
                </div>
              </div>
              <div className="home-block__text">
                <p>
                  Использование качественных комплектующих&nbsp;&mdash; залог
                  долгой и бесперебойной работы складской техники. Наш
                  интернет-магазин предлагает запчасти для погрузчиков ведущих
                  мировых производителей, обеспечивая надежность
                  и&nbsp;эффективность вашей техники.
                </p>
                <p>
                  Мы&nbsp;поставляем запчасти для вилочных погрузчиков различных
                  марок и&nbsp;моделей, включая китайские, японские, корейские,
                  европейские и&nbsp;американские бренды. В&nbsp;нашем каталоге
                  представлены как оригинальные детали, так и&nbsp;надежные
                  аналоги, поставляемые напрямую от&nbsp;проверенных
                  производителей.
                </p>
              </div>
              <div className="home-block__button">
                <Link href="/spare-parts" className="button button__primary">
                  Перейти в каталог
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <section className="home-how">
        <div className="container">
          <div className="section-title">
            <h2 className="h1">
              Какие запчасти мы поставляем из Европы, Азии и США?
            </h2>
            <p>
              Мы напрямую сотрудничаем с ведущими мировыми производителями
              запчастей для погрузчиков, обеспечивая бесперебойные поставки
              оригинальных и аналоговых комплектующих.
            </p>
          </div>
          <div className="row">
            <Semicircle
              circle="AS"
              title="Из Азии"
              text="запчасти для Toyota, Komatsu, Mitsubishi, Doosan, Hyundai, Hangcha, Lonking и прочих."
            />
            <Semicircle
              circle="EU"
              title="Из Европы"
              text="детали для Linde, Jungheinrich, Still, Atlet, BT и других европейских брендов."
            />
            <Semicircle
              circle="USA"
              title="Из США"
              text="комплектующие для Caterpillar, Clark, Yale, Hyster и других американских марок."
            />
          </div>
        </div>
      </section>
      <MapSending />
      <section className={"home-block"}>
        <div className="container">
          <div className="home-block__wrapper">
            <div className="section-title">
              <h2 className="h1">
                Запчасти для вилочных погрузчиков и эффективность работы
              </h2>
            </div>
            <div className="row">
              <div className="home-block__text">
                <p>
                  Если вам необходимо купить запчасти для погрузчиков
                  с&nbsp;доставкой по&nbsp;всей России,
                  обращайтесь к&nbsp;нам&nbsp;&mdash; мы&nbsp;предложим лучшие
                  условия и&nbsp;оперативное обслуживание!
                  <br />
                  <br />
                  Доставка по&nbsp;всей России&nbsp;&mdash; быстро отправляем
                  заказы в&nbsp;любой регион, минимизируя простой техники.
                  <br />
                  <br />
                  Профессиональная консультация&nbsp;&mdash; наши специалисты
                  помогут подобрать запчасти по&nbsp;каталожным номерам
                  и&nbsp;характеристикам.
                </p>
                <p>
                  <b>
                    Почему стоит купить запчасти для погрузчиков у&nbsp;нас?
                  </b>
                  <br />
                  <br />
                  Широкий выбор деталей&nbsp;&mdash; в&nbsp;наличии
                  комплектующие для всех узлов и&nbsp;систем: двигателя,
                  трансмиссии, ходовой части, гидравлики, электрооборудования
                  и&nbsp;тормозной системы.
                  <br />
                  <br />
                  Прямые поставки из&nbsp;Европы, Америки
                  и&nbsp;Азии&nbsp;&mdash; гарантируем высокое качество
                  и&nbsp;полное соответствие запчастей техническим требованиям
                  производителей.
                </p>
              </div>
              <span className="h3">
                СПЕЦМАШИНА - ваш поставщик всех необходимых запчастей для
                профессионального ремонта погрузчиков!
              </span>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <Cta
        title="Есть проблемы с подбором?"
        text="Консультация специалиста от нашей компании — то, что вам надо. Поможем и подскажем в кратчайшие сроки."
      />
      <VideoGallery />
      <Articles limit={4} />
    </main>
  );
}
