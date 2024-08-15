import { Link } from "react-router-dom";

import Articles from "../../components/Articles";
import { Cta } from "../../components/Cta";
import { InfoBox } from "../../components/InfoBox";
import { VideoBlock } from "../../components/VideoBlock";
import { Category } from "./components/Category";

export const PolyurethaneWheels = () => {
  const assortment = ["Ведущие колеса", "Грузовые колеса", "Грузовые ролики", "Опорные колеса"];
  return (
    <main>
      <section className="polyurethane__hero">
        <div className="container">
          <div className="row">
            <div className="polyurethane__hero-info">
              <h1>Полиуретановые колеса и&nbsp;ролики для&nbsp;складской техники</h1>
              <p>
                Чтобы купить полиуретановые колеса для складской техники вы&nbsp;можете обратиться в&nbsp;наш
                специализированный магазин комплектующих для складского оборудования. Мы&nbsp;предлагаем широкий
                ассортимент колес различных размеров и&nbsp;конфигураций.
              </p>
              <picture className="for-desktop">
                <source srcSet={`/assets/images/polyurethane/logos.png`} />
                <img src={`/assets/images/polyurethane/logos.png`} alt="" decoding="async" />
              </picture>
              <picture className="for-devices">
                <source srcSet={`/assets/images/polyurethane/logos-m.png`} />
                <img src={`/assets/images/polyurethane/logos-m.png`} alt="" decoding="async" />
              </picture>
            </div>
            <div class="polyurethane__hero-img">
              <picture>
                <source srcSet={`/assets/images/polyurethane/wheels-1.png`} />
                <img src={`/assets/images/polyurethane/wheels-1.png`} alt="" decoding="async" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <Category />
      <section className="polyurethane__advantages">
        <div className="container">
          <picture>
            <source srcSet={`/assets/images/polyurethane/01.png`} />
            <img src={`/assets/images/polyurethane/01.png`} alt="" decoding="async" />
          </picture>
        </div>
      </section>
      <section className="polyurethane__assortment">
        <div className="container">
          <span className="h1">В нашем ассортименте вы найдёте:</span>
          <div class="row">
            {assortment.map((cat, key) => (
              <div className="polyurethane__cat" key={key}>
                <picture>
                  <source srcSet={`/assets/images/polyurethane/assortment-0${key + 1}.png`} />
                  <img src={`/assets/images/polyurethane/assortment-0${key + 1}.png`} alt="" decoding="async" />
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
        img="/assets/images/polyurethane/still.png"
        class="reverse polyurethane__info-box"
      />
      <section className="polyurethane__about">
        <div className="container">
          <div class="row">
            <div className="polyurethane__about-text">
              <span class="h1">Наш интернет-магазин</span>
              <p>
                Вы&nbsp;можете использовать наш интернет-магазин, чтобы осуществить выбор полиуретановых колес
                самостоятельно.
              </p>
              <p>
                При выборе полиуретановых колес убедитесь, что их&nbsp;параметры соответствуют требованиям вашего
                конкретного вида складской техники (например, ричтрака или штабелера).
              </p>
              <p>
                Необходимо знать номер или размеры и&nbsp;характеристики колес, чтобы подобрать оптимальные варианты для
                вашей складской техники.
              </p>
              <Link to="#" className="button button__primary">
                Перейти в каталог
              </Link>
            </div>
            <div class="polyurethane__about-logo">
              <svg>
                <use xlinkHref="/__spritemap#sprite-logo" />
              </svg>
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
                Зачастую колеса, у&nbsp;которых есть повреждения контактного слоя, выбрасываются. Большинство
                не&nbsp;знают, что существует восстановление полиуретановых колес и&nbsp;роликов, за&nbsp;счет чего
                мощно существенно сэкономить деньги на&nbsp;замену деталей и&nbsp;время на&nbsp;подбор подходящего
                комплектующего.
              </p>
              <p>
                Компания &laquo;СПЕЦМАШИНА&raquo; оказывает услуги по&nbsp;восстановлению полиуретанового покрытия
                на&nbsp;колесах для разнообразной складской техники&nbsp;&mdash; ричтраки, самоходные тележки,
                штабелёры, палетоперевозчики, роклы, комплектовщики заказов, узкопроходные штабелёры с&nbsp;высокой
                грузоподъемностью.
              </p>
              <Link to="/polyurethane-surfacing" className="button button__outline">
                Перейти
              </Link>
            </div>
            <div className="leadcta__video">
              <VideoBlock id={"gVuSID82kpY"} className={"title-hidden"} />
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
};
