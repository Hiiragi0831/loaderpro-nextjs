"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Key } from "react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

type Props = {
  sliders: string[];
};

export default function Hero({ sliders }: Props) {
  return (
    <div className="commodity__hero">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {sliders.map((item: any, index: Key | null | undefined) => (
          <SwiperSlide key={index}>
            <Link href="htpps://my.loaderpro.ru/" target={"_blank"}>
              <picture>
                <source srcSet={item} />
                <img src={item} alt="slide" />
              </picture>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
