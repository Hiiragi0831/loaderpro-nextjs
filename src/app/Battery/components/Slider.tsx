import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Slider = () => {
  const sliders = [];

  for (let i = 1; i < 10; i++) {
    sliders.push(
      <SwiperSlide>
        <picture>
          <source srcSet={`/assets/images/battery/slider/${i}.jpg`} />
          <img src={`/assets/images/battery/slider/${i}.jpg`} alt="" decoding="async" />
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
          // @ts-expect-error @ts-expect-error
          autoplay={{ delay: 3000 }}
        >
          {sliders}
        </Swiper>
      </div>
    </section>
  );
};
