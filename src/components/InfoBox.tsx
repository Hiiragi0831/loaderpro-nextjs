import { FC } from "react";

type InfoBoxType = {
  title: any;
  text: string;
  img: string;
  special?: string;
  class?: string;
};

export const InfoBox: FC<InfoBoxType> = (data) => {
  const special = () => {
    if (data.special) {
      return (
        <picture className="info-box__image--special">
          <source srcSet={data.special} />
          <img src={data.special} alt={data.title} decoding="async" />
        </picture>
      );
    }
  };
  return (
    <section className={`info-box ${data.class ? data.class : ""}`}>
      <div className="container">
        <div className="row">
          <div className="info-box__text">
            <span className="h1">{data.title}</span>
            <p>{data.text}</p>
          </div>
          <div className="info-box__image">
            <picture className="info-box__image--main">
              <source srcSet={data.img} />
              <img src={data.img} alt={data.title} decoding="async" />
            </picture>
            {special()}
          </div>
        </div>
      </div>
    </section>
  );
};
