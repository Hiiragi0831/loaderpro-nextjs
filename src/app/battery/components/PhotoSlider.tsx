"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export const PhotoSlider = () => {
  const sliders = [];

  for (let i = 1; i < 10; i++) {
    sliders.push(
      <SwiperSlide key={i}>
        <picture>
          <source srcSet={`/images/battery/slider/${i}.jpg`} />
          <img src={`/images/battery/slider/${i}.jpg`} alt={`${i}`} />
        </picture>
      </SwiperSlide>,
    );
  }
  return (
    <section className="battery__slider">
      <div className="container">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
        >
          {sliders}
        </Swiper>
      </div>
    </section>
  );
};
