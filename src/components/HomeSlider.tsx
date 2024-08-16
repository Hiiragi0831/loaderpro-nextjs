"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const slides = ["1", "2", "3", "4", "5", "6"];

const HomeSlider = () => {
  return (
    <section className="home__slider">
      <div className="slider slider--main">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000 }}
        >
          {slides.map((slide, key) => {
            return (
              <SwiperSlide key={key} className="SwiperSlide">
                <div className="slider__content">
                  <picture className="for-desktop">
                    <source srcSet={`/images/slider/${slide}.jpeg`} />
                    <img
                      src={`/images/slider/${slide}.jpeg`}
                      alt=""
                      decoding="async"
                    />
                  </picture>
                  <picture className="for-devices">
                    <source srcSet={`/images/slider/${slide}m.jpeg`} />
                    <img
                      src={`/images/slider/${slide}m.jpeg`}
                      alt=""
                      decoding="async"
                    />
                  </picture>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
