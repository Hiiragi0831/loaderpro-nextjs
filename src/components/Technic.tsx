"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

const slides = [
  {
    title: "Телескопических погрузчиков",
    description: "С телескопической стрелой вилочных или с ковшом",
    img: "/images/technic/telehandlers.png",
    link: "/spare-parts/telehandlers",
  },
  {
    title: "Автопогрузчиков",
    description: "Дизельных, бензиновых и газовых вилочных погрузчиков",
    img: "/images/technic/forklift-truck.png",
    link: "/spare-parts/forklift",
  },
  {
    title: "Штабелеров",
    description:
      "Ручных, самоходных, гидравлических, электрических и других модификаций",
    img: "/images/technic/stackers.png",
    link: "/spare-parts/stackers",
  },
  {
    title: "Ричтраков",
    description:
      "Электрического классического, узкопроходного и прочих модификаций",
    img: "/images/technic/reach-trucks.png",
    link: "/spare-parts/reach-trucks",
  },
  {
    title: "Электропогрузчиков",
    description: "Классических электрокар и электромобильных моделей",
    img: "/images/technic/electric-loaders.png",
    link: "/spare-parts/electric-loaders",
  },
  {
    title: "Электророхли",
    description:
      "С подъемным механизмом, поводковых, самоходных и других электротележек",
    img: "/images/technic/electric-shutters.png",
    link: "/spare-parts/electric-shoes",
  },
  {
    title: "Ричстакеров",
    description:
      "Контейнерного погрузчика перегружателя вилочного или с захватом",
    img: "/images/technic/reach-stacker.png",
    link: "/spare-parts/reach-stackers",
  },
  {
    title: "Боковых погрузчиков",
    description:
      "Трехходовых, четырехходовых и многоходовых вилочных погрузчиков с боковой загрузкой",
    img: "/images/technic/side-loader.png",
    link: "/spare-parts/side-loaders",
  },
];

export default function Technic() {
  return (
    <section className="technic">
      <div className="container">
        <div className="section-title">
          <h2 className="h1">
            Магазин СПЕЦМАШИНА предлагает купить запасные части для:
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
                <Link href={slide.link} className="technic__item">
                  <picture>
                    <source srcSet={slide.img} />
                    <img src={slide.img} alt="slide" />
                  </picture>
                  <p className="technic__title text-center">
                    {slide.title}
                  </p>
                  <p className="technic__description text-center">{slide.description}</p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
