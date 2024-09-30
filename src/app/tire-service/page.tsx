import { Achievement } from "@/components/Achievement";
import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { VideoBlock } from "@/components/VideoBlock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Шиномонтаж цельнолитых шин",
  description:
    "Для наших клиентов в Санкт-Петербурге мы предлагаем услугу шиномонтажа цельнолитых шин. Шиномонтаж выполняется на профессиональном оборудовании с использованием всех необходимых инструментов исключающих перекос шины.",
};

export default function TireService() {
  return (
    <main>
      <section className="tireservice__hero">
        <div className="container">
          <picture className="for-desktop">
            <source srcSet={`/images/tireservice/hero.jpg`} />
            <img src={`/images/tireservice/hero.jpg`} alt="" decoding="async" />
          </picture>
          <picture className="for-devices">
            <source srcSet={`/images/tireservice/hero-m.jpg`} />
            <img
              src={`/images/tireservice/hero-m.jpg`}
              alt=""
              decoding="async"
            />
          </picture>
        </div>
      </section>
      <section className="tireservice__pressing">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <span className="h1">
                Запрессовка цельнолитых шин – профессиональный подход к каждому
                колесу
              </span>
              <p>
                Цельнолитые шины на вилочных погрузчиках требуют регулярной
                замены для минимизации износа и снижения нагрузок на ходовую
                часть. Шины с износом на 40% передают до 85% ударных нагрузок,
                что ускоряет износ техники.
              </p>
              <p>
                Не рискуйте! Закажите плановый шиномонтаж у наших специалистов.
                Мы обеспечим качественное и оперативное обслуживание, продлевая
                срок службы вашего погрузчика. Обратитесь к нам и убедитесь в
                преимуществах профессионального подхода!
              </p>
              <Cta
                title={"Заказать консультацию"}
                text={"Получите восстановленные колёса уже на этой неделе!"}
                class={"inner columns"}
              />
            </div>
            <div className="image">
              <picture>
                <source
                  srcSet={`/images/tireservice/shinomontazh-lityh-shin-1.png`}
                />
                <img
                  src={`/images/tireservice/shinomontazh-lityh-shin-1.png`}
                  alt=""
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="tireservice__tire">
        <div className="container">
          <div className="row col-2">
            <div className="image">
              <picture>
                <source srcSet={`/images/tireservice/remont.png`} />
                <img
                  src={`/images/tireservice/remont.png`}
                  alt=""
                  decoding="async"
                />
              </picture>
            </div>
            <div className="text">
              <span className="h1">
                Почему стоит доверить шиномонтаж профессионалам?{" "}
              </span>
              <p>
                Самостоятельный монтаж цельнолитых шин без специального
                оборудования невозможен. Эти массивные покрышки требуют
                использования специального пресса для установки на диск, так как
                внутренний диаметр шины меньше диаметра диска. Во время монтажа
                необходимо приложить усилие до 140 тонн, в зависимости от
                размеров.
              </p>
              <p>
                Некоторые «мастера» используют солидол для упрощения процесса,
                но это разрушает материал шин и снижает их срок службы.
                Самостоятельный монтаж может привести к перекосу шины, уменьшая
                её эксплуатационный период в два раза.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="achievements">
        <div className="container">
          <div className="section-title">
            <span className="h1">Наши преимущества:</span>
            <p>
              Доверьте шиномонтаж профессионалам, чтобы обеспечить долговечность
              и надёжность вашей техники.
            </p>
          </div>
          <div className="row">
            <Achievement
              icon="/images/icons/work-flow.png"
              title="Комплексные услуги"
              text="Устранение расслоившихся покрышек и установка новых"
            />
            <Achievement
              icon="/images/icons/home-repair-service-rounded.png"
              title="Профессиональный пресс"
              text="Используем специальное оборудование для точного и безопасного монтажа"
            />
            <Achievement
              icon="/images/icons/team-fill.png"
              title="Опытные специалисты"
              text="Способные устранить повреждённые шины и монтируют новые"
            />
            <Achievement
              icon="/images/icons/outline-tire-repair.png"
              title="Замена шин"
              text="Демонтаж старых повреждённых шин и замена на новые"
            />
            <Cta
              title={null}
              text={
                "Наши клиенты ценят наше сотрудничество за экономию времени и денег. \n" +
                "Стоимость ремонта можно уточнить после консультации и осмотра техники специалистом."
              }
              class={"inner columns"}
            />
          </div>
        </div>
      </section>
      <section className="tireservice__price">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <span className="h1">В какую цену обойдутся услуги монтажа?</span>
              <p>
                Купить цельнолитые шины – несложно, сложнее установить их на
                диски. Сотрудники компании «СПЕЦМАШИНА» быстро решат эту задачу.
                Стоимость установки зависит от размера шин, уточнить цену можно
                у наших менеджеров. Мы также поможем подобрать оптимальные
                цельнолитые шины для вашей модели погрузчика, обеспечивая лучшее
                соотношение цена-качество. Время выполнения работы зависит от
                объема и сложности.
              </p>
              <p>
                Мы осуществляем шиномонтаж цельнолитых шин для погрузчиков с
                использованием специального пресса для индустриальных шин.
                Процесс контролируют опытные специалисты, исключая перекос
                покрышки и неравномерный износ протектора в будущем.
              </p>
            </div>
            <div className="image">
              <picture>
                <source srcSet={`/images/tireservice/to-1.png`} />
                <img
                  src={`/images/tireservice/to-1.png`}
                  alt=""
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="leadcta">
        <div className="container">
          <div className="row">
            <div className="leadcta__text">
              <span className="h1">
                <p>Хотите заменить шины?</p>
                <p>Обращайтесь к нам!</p>
                <mark>Экономия до 30%!</mark>
              </span>
              <p>
                Купить цельнолитые шины – несложно, сложнее установить их на
                диски. Сотрудники компании «СПЕЦМАШИНА» быстро решат эту задачу.
                Стоимость установки зависит от размера шин, уточнить цену можно
                у наших менеджеров.
              </p>
              <button className="button button__outline">
                Оставить заявку
              </button>
            </div>
            <div className="leadcta__video">
              <VideoBlock
                id={"16c0f9067cd5d466d617ec313c0a535a"}
                className={"title-hidden"}
              />
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
