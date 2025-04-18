"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  {
    title: "Запчасти телескопических погрузчиков",
    description: "С телескопической стрелой вилочных или с ковшом",
    img: "/images/technic/telehandlers.png",
  },
  {
    title: "Запчасти для автопогрузчиков",
    description: "Дизельных, бензиновых и газовых вилочных погрузчиков",
    img: "/images/technic/forklift-truck.png",
  },
  {
    title: "Запчасти для штабелеров",
    description:
      "Ручных, самоходных, гидравлических, электрических и других модификаций",
    img: "/images/technic/stackers.png",
  },
  {
    title: "Запчасти для ричтрака",
    description:
      "Электрического классического, узкопроходного  и прочих модификаций",
    img: "/images/technic/reach-trucks.png",
  },
  {
    title: "Запчасти для электропогрузчиков",
    description: "Классических электрокар и электромобильных моделей",
    img: "/images/technic/electric-loaders.png",
  },
  {
    title: "Запчасти для электророхли",
    description:
      "С подъемным механизмом, поводковых, самоходных и других электротележек",
    img: "/images/technic/electric-shutters.png",
  },
  {
    title: "Запчасти для ричстакера",
    description:
      "Контейнерного погрузчика перегружателя вилочного или с захватом",
    img: "/images/technic/reach-stacker.png",
  },
  {
    title: "Запчасти бокового погрузчика",
    description:
      "Трехходовых, четырехходовых и многоходовых вилочных погрузчиков с боковой загрузкой",
    img: "/images/technic/side-loader.png",
  },
];

export default function Technic() {
  return (
    <section className="technic">
      <div className="container">
        <div className="section-title">
          <h2 className="h1">
            Магазин запчастей для погрузчиков СПЕЦМАШИНА предлагает купить:
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Pagination]}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
        >
          {slides.map((slide, id) => {
            return (
              <SwiperSlide key={id} className="SwiperSlide">
                <div className="technic__item">
                  <picture>
                    <source srcSet={slide.img} />
                    <img src={slide.img} alt="slide" />
                  </picture>
                  <p className="technic__title">{slide.title}</p>
                  <p className="technic__description">{slide.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
