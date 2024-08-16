import { Achievement } from "@/components/Achievement";
import { InfoBox } from "@/components/InfoBox";
import { Steps } from "@/components/Steps";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Стань поставщиком LOADERPRO",
  description:
    "Вы можете использовать нашу площадку как дополнительный канал сбыта вашей продукции, необходимо лишь настроить интеграцию ваших актуальных остатков к нам в систему.",
};

export default function Suppliers() {
  const connect = [
    "Вы оставляете заявку",
    "Выбираем с Вами оптимальный вариант интеграции",
    "Заключаем договор",
    "Настраиваем интеграцию",
    "Начинаете зарабатывать вместе с нами",
  ];
  return (
    <main>
      <section className="suppliers__hero">
        <div className="container">
          <h1>
            Принимаем предложения о сотрудничестве с поставщиками и
            производителями <span>из России и зарубежа.</span>
          </h1>
          <picture>
            <source srcSet="/images/658cf87cb0dd4446e655fa5caef79c49.png" />
            <img
              src="/images/658cf87cb0dd4446e655fa5caef79c49.png"
              alt="map"
              decoding="async"
            />
          </picture>
        </div>
      </section>
      <InfoBox
        title="Дополнительный рынок сбыта"
        text="Через наш интернет магазин вы получаете дополнительный канал сбыта вашей продукции предлагая ваш
              ассортимент более чем 100 000 посетителям в месяц."
        img="/images/advantage2.jpg"
      />
      <InfoBox
        title="Наши партнёры - наша семья!"
        text="Вместе мы становимся сильнее!"
        img="/images/advantage2.jpg"
        special="/images/dsfki3h239823hds.png"
        class="reverse special"
      />
      <section className="suppliers__achievement">
        <div className="container">
          <div className="row">
            <Achievement
              icon="/images/icons/1.png"
              title="10 лет опыта"
              text="Более 10 лет в бизнесе запчастей для складской техники"
            />
            <Achievement
              icon="/images/icons/2.png"
              title="Сильный маркетинг"
              text="Эффективный маркетинг для стабильного роста"
            />
            <Achievement
              icon="/images/icons/3.png"
              title="Опытная команда!"
              text="Высококвалифицированные специалисты в нашей команде"
            />
            <Achievement
              icon="/images/icons/4.png"
              title="Растущий поток клиентов"
              text="Стабильный и растущий поток довольных клиентов"
            />
            <Achievement
              icon="/images/icons/5.png"
              title="Отлаженные процессы"
              text="Отлаженные процессы для быстрой и эффективной работы"
            />
            <Achievement
              icon="/images/icons/6.png"
              title="Современное оборудование"
              text="Работаем с самым современным оборудованием"
            />
          </div>
        </div>
      </section>
      <InfoBox
        title={
          <>
            <span>МЫ ИЩЕМ ПОСТАВЩИКОВ</span> С&nbsp;НАЛИЧИЕМ ТОВАРОВ ДЛЯ ЛЮБОЙ
            СПЕЦТЕХНИКИ
          </>
        }
        text="Наша компания находится в активной стадии роста и мы готовы разделить этот рост с вами!"
        img="/images/advantage1.jpg"
      />
      <Steps data={connect} title={"5 простых шагов для подключения:"} />
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
