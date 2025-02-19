"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const slides = [
  { id: 1, link: "/spare-parts" },
  { id: 2, link: "/tires-rims" },
  { id: 3, link: "/dealer" },
  { id: 4, link: "/about" },
  { id: 5, link: "/battery" },
  { id: 6, link: "/suppliers" },
];

const HomeSlider = () => {
  return (
    <section className="home__slider">
      <div className="slider slider--main">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000 }}
        >
          {slides.map((slide) => {
            return (
              <SwiperSlide key={slide.id} className="SwiperSlide">
                <Link className="slider__content" href={slide.link}>
                  <picture className="for-desktop">
                    <source srcSet={`/images/slider/${slide.id}.jpeg`} />
                    <img src={`/images/slider/${slide.id}.jpeg`} alt="slide" />
                  </picture>
                  <picture className="for-devices">
                    <source srcSet={`/images/slider/${slide.id}m.jpeg`} />
                    <img src={`/images/slider/${slide.id}m.jpeg`} alt="slide" />
                  </picture>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
