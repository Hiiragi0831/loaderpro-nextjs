import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { InfoBox } from "@/components/InfoBox";
import { VideoBlock } from "@/components/VideoBlock";
import { PolyurethaneCategory } from "@/components/PolyurethaneCategory";
import Link from "next/link";
import type { Metadata } from "next";
import IconLogo from "@/icons/logo.svg";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen(
  "Большегрузные полиуретановые колеса в Санкт-Петербурге",
  "Купить полиуретановые колеса для ричтраков, штабелеров, электрических тележек и другой складской техники вы можете на маркетплейсе СПЕЦМАШИНА. В ассортименте как бюджетные варианты, так и премиум бренды Rader Vogel, FKK и Stellana.",
);

export default function polyurethaneWheels() {
  const assortment = [
    "Ведущие колеса",
    "Грузовые колеса",
    "Грузовые ролики",
    "Опорные колеса",
  ];
  return (
    <main>
      <section className="polyurethane__hero">
        <div className="container">
          <div className="row">
            <div className="polyurethane__hero-info">
              <h1>
                Полиуретановые колеса и&nbsp;ролики для&nbsp;складской техники
              </h1>
              <p>
                Чтобы купить полиуретановые колеса для складской техники
                вы&nbsp;можете обратиться в&nbsp;наш специализированный магазин
                комплектующих для складского оборудования. Мы&nbsp;предлагаем
                широкий ассортимент колес различных размеров
                и&nbsp;конфигураций.
              </p>
              <picture className="for-desktop">
                <source srcSet={`/images/polyurethane/logos.png`} />
                <img src={`/images/polyurethane/logos.png`} alt="logos" />
              </picture>
              <picture className="for-devices">
                <source srcSet={`/images/polyurethane/logos-m.png`} />
                <img src={`/images/polyurethane/logos-m.png`} alt="logos-m" />
              </picture>
            </div>
            <div className="polyurethane__hero-img">
              <picture>
                <source srcSet={`/images/polyurethane/wheels-1.png`} />
                <img src={`/images/polyurethane/wheels-1.png`} alt="wheels" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <PolyurethaneCategory />
      <section className="polyurethane__advantages">
        <div className="container">
          <picture>
            <source srcSet={`/images/polyurethane/01.png`} />
            <img src={`/images/polyurethane/01.png`} alt="polyurethane" />
          </picture>
        </div>
      </section>
      <section className="polyurethane__assortment">
        <div className="container">
          <span className="h1">В нашем ассортименте вы найдёте:</span>
          <div className="row">
            {assortment.map((cat, key) => (
              <div className="polyurethane__cat" key={key}>
                <picture>
                  <source
                    srcSet={`/images/polyurethane/assortment-0${key + 1}.png`}
                  />
                  <img
                    src={`/images/polyurethane/assortment-0${key + 1}.png`}
                    alt="assortment"
                  />
                </picture>
                <p>{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <InfoBox
        title="Совместимость"
        text="Наши колеса и ролики подходят для брендов"
        images={[
          "/images/vendors/still.png",
          "/images/vendors/linde.png",
          "/images/vendors/bt.png",
          "/images/vendors/jungheinrich.png",
          "/images/vendors/yale.png",
          "/images/vendors/hyster.png",
          "/images/vendors/crown.png",
          "/images/vendors/noblelift.png",
        ]}
        class="reverse polyurethane__info-box"
      />
      <section className="polyurethane__about">
        <div className="container">
          <div className="row">
            <div className="polyurethane__about-text">
              <span className="h1">Наш интернет-магазин</span>
              <p>
                Вы&nbsp;можете использовать наш интернет-магазин, чтобы
                осуществить выбор полиуретановых колес самостоятельно.
              </p>
              <p>
                При выборе полиуретановых колес убедитесь, что их&nbsp;параметры
                соответствуют требованиям вашего конкретного вида складской
                техники (например, ричтрака или штабелера).
              </p>
              <p>
                Необходимо знать номер или размеры и&nbsp;характеристики колес,
                чтобы подобрать оптимальные варианты для вашей складской
                техники.
              </p>
              <Link href="#" className="button button__primary">
                Перейти в каталог
              </Link>
            </div>
            <div className="polyurethane__about-logo">
              <IconLogo />
            </div>
          </div>
        </div>
      </section>
      <section className="leadcta">
        <div className="container">
          <div className="row">
            <div className="leadcta__text">
              <span className="h1">
                <p>Зачем покупать новые?</p>
                <p>Восстановите старые!</p>
                <mark>Экономия до 70%!</mark>
              </span>
              <p>
                Зачастую колеса, у&nbsp;которых есть повреждения контактного
                слоя, выбрасываются. Большинство не&nbsp;знают, что существует
                восстановление полиуретановых колес и&nbsp;роликов, за&nbsp;счет
                чего мощно существенно сэкономить деньги на&nbsp;замену деталей
                и&nbsp;время на&nbsp;подбор подходящего комплектующего.
              </p>
            </div>
            <div className="leadcta__video">
              <VideoBlock
                id={"57e9efd2ebc2bf490c9b34a530e1c9dd"}
                className={"title-hidden"}
              />
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
