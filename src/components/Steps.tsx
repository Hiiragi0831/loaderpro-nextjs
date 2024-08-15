'use client';

import { Step } from "./Step";
import {FC} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

type Props = {
  data: string[],
  title: string,
}

export const Steps: FC<Props> = ({ data, title }) => {
  return (
    <section className="steps">
      <div className="container">
        <span className="h1">{title}</span>
        <Swiper slidesPerView={"auto"}>
          {data.map((item: string, id: number) => {
            return (
              <SwiperSlide key={id}>
                <Step count={id + 1} text={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
