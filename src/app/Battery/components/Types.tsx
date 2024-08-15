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
                  <source srcSet="/assets/images/battery/elektropogruzchiki.png" />
                  <img src="/assets/images/battery/elektropogruzchiki.png" alt="Электропогрузчик" decoding="async" />
                </picture>
                <p>Электропогрузчик</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/assets/images/battery/shtabeler.png" />
                  <img src="/assets/images/battery/shtabeler.png" alt="Штабелер" decoding="async" />
                </picture>
                <p>Штабелер</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/assets/images/battery/richtrak.png" />
                  <img src="/assets/images/battery/richtrak.png" alt="Ричтрак" decoding="async" />
                </picture>
                <p>Ричтрак</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/assets/images/battery/telezhka.png" />
                  <img src="/assets/images/battery/telezhka.png" alt="Электротележка" decoding="async" />
                </picture>
                <p>Электротележка</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="battery__type-item">
                <picture>
                  <source srcSet="/assets/images/battery/golfcart.png" />
                  <img src="/assets/images/battery/golfcart.png" alt="Гольф кары" decoding="async" />
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
