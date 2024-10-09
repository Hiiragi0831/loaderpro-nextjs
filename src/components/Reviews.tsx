"use client";
import { FC, useLayoutEffect, useState } from "react";
import { api } from "@/services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import IconStar from "@/icons/star.svg";

type Props = {
  name: string;
  date: string;
  message: string;
  rating: number;
  photo: string;
};

const Review: FC<Props> = ({ name, date, message, rating, photo }) => {
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
        <div className="review__avatar">
          <picture className="info-box__image--main">
            <source srcSet={photo ? photo : "/images/blank/avatar.png"} />
            <img
              src={photo ? photo : "/images/blank/avatar.png"}
              alt={name}
              decoding="async"
            />
          </picture>
        </div>
        <div className="review__info">
          <div className="review__rating">{star(rating)}</div>
          <div className="review__name">
            <p>{name}</p>
          </div>
          <div className="review__date">
            <p>{currentDate}</p>
          </div>
        </div>
      </div>
      <div className="review__message">
        <p>{message.length > 200 ? `${message.slice(0, 200)}...` : message}</p>
      </div>
    </div>
  );
};

// {
//   "_id": "6702d181eb335c2ec3228c1b",
//   "imageFileNames": [],
//   "images": [],
//   "name": "Мария Д.",
//   "photo": "https://avatars.mds.yandex.net/get-yapic/27232/m45zfoSrzjhi5T9dxtNuq8226CQ-1/islands-68",
//   "message": "Добрый день! Обращались в компанию за услугой нанесения полиуретанового покрытия на ролики. Сделали в срок, проточили, выполнили фаски, все согласно чертежа и на высоком уровне. Однозначно, будем обращаться вновь! Благодарим за профессионализм. С вами приятно работать! ",
//   "rating": 5,
//   "date": "2024-10-02T05:37:43.439Z",
//   "type": "yaSprav",
//   "src": "https://yandex.ru/profile/144706740321",
//   "widget": "615460382f94086a47cb9ca9",
//   "createdAt": "2024-10-06T18:05:53.834Z",
//   "__v": 0,
//   "updatedAt": "2024-10-06T18:05:53.837Z"
// },

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
            Что говорят о нас{" "}
            <span className={"is-hidden"}>{dataCompany.yaSpravRating}</span>
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
