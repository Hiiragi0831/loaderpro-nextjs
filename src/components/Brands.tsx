"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export const Brands = () => {
  const data = [
    { title: "sany" },
    { title: "anderson" },
    { title: "atlet" },
    { title: "baumann" },
    { title: "bobcat" },
    { title: "bosch" },
    { title: "bt" },
    { title: "caterpillar" },
    { title: "clark" },
    { title: "combilift" },
    { title: "crown" },
    { title: "cummnis" },
    { title: "cvs_ferrrari" },
    { title: "dalian" },
    { title: "deutz" },
    { title: "donaldson" },
    { title: "doosan" },
    { title: "fantuzzi" },
    { title: "hangcha" },
    { title: "heli" },
    { title: "hyster" },
    { title: "hysterold" },
    { title: "hyundai" },
    { title: "impco" },
    { title: "isuzu" },
    { title: "jac" },
    { title: "jcb" },
    { title: "jungheinrich" },
    { title: "kalmar" },
    { title: "komatsu" },
    { title: "konecranes" },
    { title: "kubota" },
    { title: "linde" },
    { title: "loaderpro" },
    { title: "lovato" },
    { title: "manitou" },
    { title: "maximal" },
    { title: "merlo" },
    { title: "mitsubishi" },
    { title: "mustang" },
    { title: "nichiyu" },
    { title: "nissan" },
    { title: "noblelift" },
    { title: "om_pimespo" },
    { title: "perkins" },
    { title: "rader_vogel" },
    { title: "rema" },
    { title: "schaltbau" },
    { title: "sennebogen" },
    { title: "still" },
    { title: "tcm" },
    { title: "terberg" },
    { title: "terex" },
    { title: "toyota" },
    { title: "tvh" },
    { title: "tvhold" },
    { title: "unicarriers" },
    { title: "yale" },
    { title: "yanmar" },
  ];

  return (
    <section className="brands">
      <div className="container">
        <Swiper
          slidesPerView={2}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          {data.map((brand, id) => {
            return (
              <SwiperSlide key={id}>
                <div className="brands__slide">
                  <picture>
                    <source srcSet={`/images/vendors/${brand.title}.png`} />
                    <img
                      src={`/images/vendors/${brand.title}.png`}
                      alt={brand.title}
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
