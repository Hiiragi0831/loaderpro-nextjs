"use client";

import { Modal } from "@/components/Modal";
import IconLogo from "@/icons/logo.svg";
import Link from "next/link";
import { useState } from "react";

export const Vacancy = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Modal isShow={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="vacancy-modal">
          <div className="vacancy-modal__text">
            <div className="vacancy-modal__head">
              <p className="h1">Крючкова Надежда Андреевна</p>
              <small>Специалист по подбору персонала</small>
            </div>
            <p>
              Здравствуйте! Меня зовут Надежда, я HR-менеджер в компании ООО
              “Спецмашина”!
            </p>
            <p>
              Отправьте своё резюме с указанием должности или позвоните и
              запишитесь на собеседование.
            </p>
            <div className="contact__info">
              <div className="contact__item">
                <small>Телефон:</small>
                <a href="tel:+79045560011">+7 (904) 556-00-11</a>
              </div>
              <div className="contact__item">
                <small>Почта:</small>
                <a href="mailto:hr@loaderpro.ru">hr@loaderpro.ru</a>
              </div>
            </div>
            <button
              className="button button__primary"
              onClick={() => setModalOpen(false)}
            >
              Посмотреть другие вакансии
            </button>
          </div>
          <div className="vacancy-modal__image">
            <picture>
              <source srcSet="/images/vacancy/hr.jpg" />
              <img src="/images/vacancy/hr.jpg" alt="" decoding="async" />
            </picture>
          </div>
        </div>
      </Modal>
      <section className="vacancy">
        <div className="container">
          <div className="row">
            <div className="vacancy-item">
              <div className="vacancy-item__head">
                <div className="vacancy-item__title">
                  <span className="h1">Менеджер по продажам</span>
                  <p>от 90 000 до 200 000 ₽ на руки</p>
                </div>
                <div className="vacancy-item__logo">
                  <IconLogo />
                </div>
              </div>
              <div className="vacancy-item__body">
                <div className="vacancy__info">
                  <p>Требуемый опыт работы: не требуется</p>
                  <p>Полная занятость, удаленная работа</p>
                </div>
                <div className="vacancy__buttons">
                  <Link
                    className="button button__outline"
                    href={"/vacancy/manager"}
                  >
                    Подробнее
                  </Link>
                  <button
                    className="button button__primary"
                    onClick={() => setModalOpen(true)}
                  >
                    Откликнуться
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
