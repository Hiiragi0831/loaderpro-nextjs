"use client";
import { FC, useLayoutEffect, useMemo, useState } from "react";

import { api } from "@/services/api";
import Article from "./Article";
import { Article as ArticleType } from "../common/types/Article";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

type Props = {
  limit: number;
};

const Articles: FC<Props> = ({ limit }) => {
  const [data, setData] = useState<ArticleType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const dataArticles = useMemo(() => data.slice(0, limit), [data, limit]);

  const loadArticles = async () => {
    try {
      const data = await api.getArticles();
      setData(data);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  useLayoutEffect(() => void loadArticles(), []);
  return (
    <section className="article__section">
      <div className="container">
        <div className="title">
          <span className="h1">Полезная информация</span>
        </div>
        <div className="row">
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            modules={[Autoplay]}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {isLoading
              ? "Загрузка"
              : dataArticles.map((post: any) => (
                  <SwiperSlide key={post.id}>
                    <Article key={post.id} {...post} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Articles;
