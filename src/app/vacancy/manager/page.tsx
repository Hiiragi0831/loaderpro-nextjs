"use client";

import { useState } from "react";

import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { Modal } from "@/components/Modal";
import IconLogo from "@/icons/logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function VacancyManager() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main>
      <Modal isShow={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="vacancy-modal">
          <div className="vacancy-modal__text">
            <div className="vacancy-modal__head">
              <p className="h1">Крючкова Надежда Андреевна</p>
              <small>Специалист по подбору персонала</small>
            </div>
            <p>
              Здравствуйте! Меня зовут Надежда, я HR-менеджер в компании ООО
              «СПЕЦМАШИНА»!
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
            <Link
              className="button button__primary"
              onClick={() => setModalOpen(false)}
              href={"/vacancy"}
            >
              Посмотреть другие вакансии
            </Link>
          </div>
          <div className="vacancy-modal__image">
            <picture>
              <source srcSet="/images/vacancy/hr.jpg" />
              <img src="/images/vacancy/hr.jpg" alt="hr" />
            </picture>
          </div>
        </div>
      </Modal>
      <section className="vacancy-inner">
        <div className="container">
          <div className="vacancy-inner__head">
            <div className="vacancy-inner__title">
              <h1>Менеджер по продажам</h1>
              <span>от 70 000 до 150 000 ₽ на руки</span>
            </div>
            <div className="vacancy__info">
              <p>Требуемый опыт работы: не требуется</p>
              <p>Полная занятость, в офисе</p>
            </div>
            <div className="vacancy__buttons">
              <button
                className="button button__primary"
                onClick={() => setModalOpen(true)}
              >
                Откликнуться
              </button>
            </div>
          </div>
          <div className="vacancy-inner__body">
            <div className="vacancy-inner__info">
              <div className="vacancy-inner__info-text">
                <p className="h1">СПЕЦМАШИНА</p>
                <p>
                  «CПEЦМAШИHА» - мультибpендовая компания - пoстaвщик склaдcкoй
                  тeхники, и всeх нeoбxoдимыx деталей для профессиoнaльнoго
                  ремонтa и обслуживания.
                </p>
                <p>
                  Mы paбoтаeм в сeгмeнте В2B на рынкe cкладcкoй теxники уже
                  более 8-и лeт. Hашей компaнии доверяют тысячи компаний из
                  paзныx точeк Pocсии.
                </p>
                <p>
                  <strong>
                    В связи с развитием компании и расширением отдела продаж,
                    приглашаем в свою команду ответственного человека, менеджера
                    по продажам и работе с клиентами!
                  </strong>
                </p>
              </div>
              <img src={"/images/vacancy/v-01.jpg"} alt={"company"} />
            </div>
            <div className="vacancy-inner__conditions">
              <div className="vacancy-inner__condition">
                <span className="h1">Что мы предлагаем:</span>
                <blockquote>
                  <p>
                    Работа в новом, светлом офисе по адресу Санкт-Петербург,
                    Красное село, ул. Юных Пионеров 38 А (Деловой квартал Sun
                    Сity БЦ Реформа)
                  </p>
                  <p>
                    График работы: 09:00 до 17:00, 5/2 сб, вс и праздничные дни
                    – выходные
                  </p>
                  <p>
                    Отдельное рабочее место, полностью оборудованное для
                    комфортной работы (компьютер, смартфон, корпоративная связь)
                  </p>
                  <p>Система адаптации, обучение, сопровождение наставника</p>
                  <p>
                    Адекватное руководство, быстрый процесс согласования условий
                    и реализации проектов
                  </p>
                  <p>
                    Заработная плата указана с учетом профессионального развития
                  </p>
                  <p>
                    Прозрачная, понятная, эффективная система мотивации, высокий
                    % от продаж без «потолка»
                  </p>
                </blockquote>
              </div>
              <div className="vacancy-inner__condition">
                <span className="h1">Дополнительные преимущества:</span>
                <blockquote>
                  <p>
                    Дружный позитивный коллектив и поддержка на всех этапах
                    работы
                  </p>
                  <p>
                    Яркие корпоративные мероприятия, подарки для сотрудников и
                    их детей
                  </p>
                </blockquote>
              </div>
              <div className="vacancy-inner__condition">
                <span className="h1">Пожелания к кандидату:</span>
                <blockquote>
                  <p>
                    Желание развиваться в сфере продаж и работать на результат
                  </p>
                  <p>
                    Коммуникабельность и умение находить общий язык с клиентами
                  </p>
                  <p>Грамотная устная и письменная речь</p>
                  <p>Опытный пользователь ПК, желателен опыт работы в 1С</p>
                  <p>Умение работать в команде</p>
                  <p>
                    Обучаемость, исполнительность, внимательность и готовность
                    выполнять поставленные задачи в конкретные сроки
                  </p>
                </blockquote>
              </div>
              <div className="vacancy-inner__condition">
                <span className="h1">Обязанности:</span>
                <blockquote>
                  <p>
                    Активное взаимодействие с клиентами, поддержание и развитие
                    долгосрочных отношений, расширение клиентской базы
                  </p>
                  <p>Ведение документооборота по сделкам</p>
                  <p>Контроль дебиторской задолженности</p>
                  <p>
                    Изучение ассортимента, характеристик товаров, конъюнктуры
                    рынка
                  </p>
                  <p>Взаимодействие со смежными отделами</p>
                  <p>Выполнение плана продаж после испытательного срока</p>
                </blockquote>
              </div>
            </div>
            <div className="vacancy-inner__info-text">
              <br />
              <p>
                Мы стремимся к лидерству и постоянно развиваемся, чтобы
                предлагать нашим клиентам лучшие решения. Наши клиенты доверяют
                нам, и мы гордимся высоким уровнем возвратности и лояльности.
              </p>
              <p>
                Мы работаем в динамично развивающемся рынке и понимаем, что наше
                дальнейшее масштабирование зависит от создания новых рабочих
                мест, так как возможности текущего состава находятся на пределе
                возможностей.
              </p>
              <p>
                Присоединяйтесь к нам и станьте частью нашей успешной команды!
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
