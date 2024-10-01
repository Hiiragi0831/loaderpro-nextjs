"use client";
import { FC, useLayoutEffect, useState } from "react";
import { api } from "@/services/api";
import { Product as ProductType } from "@/common/types/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import IconStar from "@/icons/star.svg";

type Props = {
  name: string;
  date: string;
  message: string;
  rating: number;
};

const Review: FC<Props> = ({ name, date, message, rating }) => {
  const currentDate = new Date(date)
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join(".");

  const star = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(i);
    }
    return stars.map((item) => (
      <div className="review__star" key={item}>
        <IconStar />
      </div>
    ));
  };

  return (
    <div className="review">
      <div className="review__head">
        <div className="review__rating">{star(rating)}</div>
        <div className="review__name">
          <p>{name}</p>
        </div>
        <div className="review__date">
          <p>{currentDate}</p>
        </div>
      </div>
      <div className="review__message">
        <p>{message.length > 200 ? `${message.slice(0, 200)}...` : message}</p>
      </div>
    </div>
  );
};

export const Reviews = () => {
  const [data, setData] = useState<any>([]);
  const [dataCompany, setDataCompany] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadReviews = async () => {
    try {
      const data = await api.getReviews("615460382f94086a47cb9ca9");
      setData(data);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  const loadReviewCompany = async () => {
    try {
      const data = await api.getReviewCompany("615460382f94086a47cb9ca9");
      setDataCompany(data);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  useLayoutEffect(() => void loadReviews(), []);
  useLayoutEffect(() => void loadReviewCompany(), []);

  return (
    <section className="reviews">
      <div className="container">
        <div className="section-title">
          <span className="h1">
            Что говорят о нас <span className={"is-hidden"}>{dataCompany.yaSpravRating}</span>
          </span>
          <p>
            <a href="https://yandex.ru/profile/144706740321" target="_blank">
              Все отзывы
            </a>
          </p>
        </div>
        {isLoading ? (
          "Загрузка"
        ) : (
          <Swiper
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 5,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {data.map((review: any) => (
              <SwiperSlide key={review._id}>
                <Review {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

// {
//   "_id": "66fada50eb335c7456ed2855",
//   "imageFileNames": [],
//   "images": [],
//   "name": "Родион Лукахин",
//   "photo": "",
//   "message": "Хороший поставщик. ",
//   "rating": 5,
//   "date": "2024-09-27T13:32:27.854Z",
//   "type": "yaSprav",
//   "src": "https://yandex.ru/profile/144706740321",
//   "widget": "615460382f94086a47cb9ca9",
//   "createdAt": "2024-09-30T17:05:20.344Z",
//   "__v": 0,
//   "updatedAt": "2024-09-30T17:05:20.344Z"
// },
