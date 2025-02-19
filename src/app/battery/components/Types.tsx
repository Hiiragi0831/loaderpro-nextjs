"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export const Types = () => {
  return (
    <section className="battery__type">
      <div className="container">
        <div className="row">
          <Swiper slidesPerView={"auto"}>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/images/battery/elektropogruzchiki.png" />
                  <img
                    src="/images/battery/elektropogruzchiki.png"
                    alt="Электропогрузчик"
                  />
                </picture>
                <p>Электропогрузчик</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/images/battery/shtabeler.png" />
                  <img src="/images/battery/shtabeler.png" alt="Штабелер" />
                </picture>
                <p>Штабелер</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/images/battery/richtrak.png" />
                  <img src="/images/battery/richtrak.png" alt="Ричтрак" />
                </picture>
                <p>Ричтрак</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/images/battery/telezhka.png" />
                  <img
                    src="/images/battery/telezhka.png"
                    alt="Электротележка"
                  />
                </picture>
                <p>Электротележка</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/images/battery/golfcart.png" />
                  <img src="/images/battery/golfcart.png" alt="Гольф кары" />
                </picture>
                <p>Гольф кары</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
