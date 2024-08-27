"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export const Team = () => {
  const data = [
    {
      image: "images/team/semenov.jpg",
      name: "Семенов Максим Евгеньевич",
      position: "Начальник отдела логистики",
    },
    {
      image: "images/team/grigorieva.jpg",
      name: "Григорьевна Яна Николаевна",
      position: "Руководитель отдела продаж",
    },
    {
      image: "images/team/privalov.jpg",
      name: "Привалов Алексей Васильевич",
      position: "Директор по маркетингу",
    },
    {
      image: "images/team/kukushkina.jpg",
      name: "Кукушкина Евгения Викторовна",
      position: "Бухгалтер",
    },
    {
      image: "images/team/stepanov.jpg",
      name: "Степанов Антон Олегович",
      position: "Технический директор",
    },
    {
      image: "images/team/sokirka.jpg",
      name: "Сокирка Юлия Витальевна",
      position: "Маркетолог",
    },
    {
      image: "images/team/kryuchkova.jpg",
      name: "Крючкова Надежда Андреевна",
      position: "Специалист по подбору персонала",
    },
    {
      image: "images/team/zagvozdin.jpg",
      name: "Загвоздин Андрей Петрович",
      position: "ВЭД специалист",
    },
    {
      image: "images/team/makarova.jpg",
      name: "Макарова Марина Александровна",
      position: "Руководитель отдела закупок",
    },
    {
      image: "images/team/kuznetsova.jpg",
      name: "Кузнецова Елена Германовна",
      position: "Специалист отдела закупок",
    },
    {
      image: "images/team/peretyagin.jpg",
      name: "Перетягин Кирилл Александрович",
      position: "Специалист отдела продаж",
    },
    {
      image: "images/team/orlov.jpg",
      name: "Орлов Сергей Викторович",
      position: "Менеджер маркетплейсов",
    },
    {
      image: "images/team/grigorev.jpg",
      name: "Григорьев Сергей Сергеевич",
      position: "Кладовщик",
    },
  ];

  return (
    <section className="team">
      <div className="container">
        <div className="title">
          <span className="h1">Наша команда - знай наших в лицо:</span>
          <p>
            Каждый человек в нашей команде имеет большую ценность и является
            важной частью единого механизма нашей компании.
          </p>
        </div>
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
          {data.map((post: any, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="team__slide">
                  <picture>
                    <source srcSet={`${post.image}`} />
                    <img
                      src={`${post.image}`}
                      alt={post.name}
                      decoding="async"
                    />
                  </picture>
                  <p>
                    <b>{post.name}</b>
                  </p>
                  <p>{post.position}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
