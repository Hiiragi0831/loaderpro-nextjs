"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Key, useState } from "react";
import { FreeMode, Thumbs } from "swiper/modules";

const sliders = (items: string[]) => {
  if (items.length === 0) {
    return (
      <SwiperSlide>
        <picture>
          <source srcSet="/images/no-photo.jpg" />
          <img src="/images/no-photo.jpg" alt="" />
        </picture>
      </SwiperSlide>
    );
  }
  return items.map((item: any, index: Key | null | undefined) => (
    <SwiperSlide key={index}>
      <picture>
        <source srcSet={item} />
        <img src={item} alt="" />
      </picture>
    </SwiperSlide>
  ));
};

export default function Gallery({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="commodity__gallery-main">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
        >
          {sliders(images)}
        </Swiper>
      </div>
      <div className="commodity__gallery-thumb">
        <Swiper
          // @ts-expect-error @ts-expect-error
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
        >
          {sliders(images)}
        </Swiper>
      </div>
    </>
  );
}
