"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type InfoBoxType = {
  title: any;
  text: string;
  img?: string;
  images?: string[];
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
            {data.images ? (
              <Swiper autoplay={{ delay: 3000 }} modules={[Autoplay]}>
                {data.images.map((image, id) => (
                  <SwiperSlide key={id}>
                    <picture>
                      <source srcSet={image} />
                      <img src={image} alt={data.title} decoding="async" />
                    </picture>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <picture className="info-box__image--main">
                <source srcSet={data.img} />
                <img src={data.img} alt={data.title} decoding="async" />
              </picture>
            )}
            {special()}
          </div>
        </div>
      </div>
    </section>
  );
};
