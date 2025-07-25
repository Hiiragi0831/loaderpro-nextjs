import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { Preference } from "@/components/Preference";
import { Steps } from "@/components/Steps";

import IconPersonDolly from "@/icons/person-dolly.svg";
import IconRevenue from "@/icons/revenue.svg";
import IconTools from "@/icons/tools.svg";
import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen(
  "Стань дилером LOADERPRO",
  "Мы создали сервис в котором просто и понятно можно покупать запчасти для складской техники ваших клиентов. Стань нашим партнером и зарабатывай вместе с LOADERPRO.",
);

export default function Dealer() {
  const steps = [
    "Добавление запроса в\u00A0систему",
    "Получение ценового предложения в\u00A0системе",
    "Отправка коммерческого предложение из\u00A0системы",
    "Согласование покупки с\u00A0клиентом",
    "Оформление заказа в\u00A0системе",
  ];
  const whats = [
    "Контроль денег",
    "Отгрузка или заказ товара",
    "Маркировка и упаковка",
    "Логистика до клиента",
    "Обмен бухгалтерскими документами",
  ];
  return (
    <main>
      <section>
        <div className="container">
          <div className="dealer__hero">
            <picture className="for-desktop">
              <source srcSet={`/images/slider/6.jpeg`} />
              <img src={`/images/slider/6.jpeg`} alt="6" />
            </picture>
            <picture className="for-devices">
              <source srcSet={`/images/slider/6m.jpeg`} />
              <img src={`/images/slider/6m.jpeg`} alt="6m" />
            </picture>
          </div>
        </div>
      </section>
      <section className="dealer__head">
        <div className="container">
          <div className="row">
            <div className="dealer__head-text">
              <h1>Дилерская платформа</h1>
              <p>
                На&nbsp;фоне ухода иностранных компаний с&nbsp;рынка,
                мы&nbsp;создали сервис с&nbsp;привычным и&nbsp;понятным
                функционалом. Наша команда разработала решение, которое сочетает
                в&nbsp;себе все лучшие практики и&nbsp;удобство использования, к
                которым вы&nbsp;привыкли. Мы&nbsp;стремимся обеспечить
                непрерывность и&nbsp;высокое качество обслуживания, предоставляя
                вам всё необходимое для эффективной работы.
              </p>
              <p>
                Наш сервис ориентирован на&nbsp;простоту и&nbsp;удобство
                взаимодействия, позволяя нашим клиентам легко находить и
                заказывать нужные комплектующие. Мы&nbsp;понимаем, насколько
                важно для вас стабильное и&nbsp;надежное функционирование
                спецтехники, поэтому предлагаем только проверенные
                и&nbsp;качественные товары.
              </p>
              <p>
                Мы&nbsp;также обеспечиваем полный спектр услуг поддержки
                и&nbsp;консультирования, чтобы вы&nbsp;могли быть уверены в
                правильности своего выбора и&nbsp;надежности поставляемых
                комплектующих. С&nbsp;&laquo;СПЕЦМАШИНА&raquo; вы&nbsp;получаете
                не просто сервис, а&nbsp;надежного партнера, который всегда
                рядом, готовый помочь в&nbsp;любой ситуации и&nbsp;предложить
                оптимальные решения для вашего бизнеса.
              </p>
            </div>
            <iframe
              src="https://rutube.ru/play/embed/e8d5f3268e79d1f15cfb78ac994e8042/"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <section className="dealer__preference">
        <div className="container">
          <span className="h1">Возможности данной платформы:</span>
          <div className="row">
            <div className="dealer__preference-list">
              <Preference title="55 000 000" text="товарных позиций" bg="1" />
              <Preference title="1 616" text="брендов в портфеле" bg="2" />
              <Preference title="3" text="надежных канала поставок" bg="3" />
            </div>
            <div className="lead">
              <ul>
                <li>Запросы на подбор по&nbsp;каталогу или номеру детали</li>
                <li>Собственный гараж</li>
                <li>
                  Мобильная версия и&nbsp;полноценное мобильное приложение
                </li>
                <li>Оригиналы, OEM и&nbsp;аналоги</li>
                <li>Создание КП с&nbsp;указанием вашей наценки</li>
                <li>Доставка до&nbsp;вас или ваших клиентов</li>
              </ul>
              <a
                className="button button__outline-white"
                href={"https://my.loaderpro.ru/registration"}
                target="_blank"
              >
                {" "}
                Оставить заявку
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="dealer__who">
        <div className="container">
          <div className="dealer__who-title">
            <span className="h1">Кто может стать дилером нашей платформы?</span>
            <picture className="for-desktop">
              <source srcSet={`/images/who-arrows.png`} />
              <img
                src={`/images/who-arrows.png`}
                alt="Кто может стать дилером нашей платформы"
              />
            </picture>
          </div>
          <div className="row">
            <div className="dealer__who-item">
              <IconPersonDolly />
              <span className="h1">
                Торгующие <br />
                организации
              </span>
            </div>
            <div className="dealer__who-item">
              <IconRevenue />
              <span className="h1">
                Сервисные <br />
                компании
              </span>
            </div>
            <div className="dealer__who-item">
              <IconTools />
              <span className="h1">Сотрудники крупных компаний</span>
            </div>
          </div>
        </div>
      </section>
      <section className="dealer__agent">
        <div className="container">
          <div className="row">
            <article>
              <span className="h1">
                Также мы ищем частных агентов во всех регионах России:
              </span>
              <p>
                Вам больше не&nbsp;нужно содержать своё юр&nbsp;лицо или
                работать на&nbsp;&laquo;дядю&raquo; в&nbsp;этой сфере,
                достаточно просто иметь базу лояльных клиентов. Вы&nbsp;можете
                подключиться к&nbsp;нашей платформе и&nbsp;зарабатывать
                на&nbsp;ней из&nbsp;любой точки мира продавая запчасти своим
                клиентам за&nbsp;комиссионное вознаграждение.
              </p>
            </article>
            <picture>
              <source srcSet={`/images/39cb5a85e98971fa10132bc4929b5b14.jpg`} />
              <img
                src={`/images/39cb5a85e98971fa10132bc4929b5b14.jpg`}
                alt="agents"
              />
            </picture>
          </div>
        </div>
      </section>
      <Steps data={steps} title={"Вы делаете 5 простых шагов:"} />
      <Steps data={whats} title={"Что делаем мы:"} />
      <section className="dealer__qa">
        <div className="container">
          <article>
            <span className="h1">
              Под торговой маркой <b>LOADERPRO</b> реализуется только
              проверенная пользователями продукция, мы&nbsp;верифицируем каждого
              производителя и&nbsp;поставщика! Присоединяйтесь к&nbsp;нашей
              дилерской системе и&nbsp;зарабатывайте легче -{" "}
              <b>вместе с&nbsp;нами!</b>
            </span>
          </article>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
