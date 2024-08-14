import { Swiper, SwiperSlide } from "swiper/react";

import { Step } from "./Step";
import {FC} from "react";

type Props = {
  data: [],
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
