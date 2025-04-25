import { Achievement } from "@/components/Achievement";
import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { VideoBlock } from "@/components/VideoBlock";
import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import Products from "@/components/Products";

export const metadata: Metadata = metaGen(
  "Смазочные материалы NEO",
  "Являясь официальным представителем завода премиальных смазочных материалов NEO мы предлагаем своим клиентам проверенные масла, готовые выдерживать самые суровые условия эксплуатации.",
);

export default function OilsLubricants() {
  return (
    <main>
      <section className="oilslubricants__premium">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <h1 className="h1">Премиальное масло по доступной цене</h1>
              <p>
                Наше масло, произведенное по инновационной технологии NSA,
                гарантирует максимальное смешивание компонентов в рекордные
                сроки. Эта уникальная технология обеспечивает исключительное
                качество продукта, создавая смазочные материалы, превосходящие
                текущие стандарты. Наши масла обладают улучшенными
                низкотемпературными свойствами и высокой термоокислительной
                стабильностью. Кроме того, благодаря эксклюзивной технологии
                TCN, они обеспечивают надежную защиту от износа.
              </p>
              <p>
                Выбирая наше премиальное масло, вы инвестируете в долговечность
                и надежность вашей техники. Оставьте заявку прямо сейчас и
                почувствуйте разницу!
              </p>
              <Cta
                title={"Заказать масло"}
                text={"Получите новое масло уже на сегодня с доставкой на дом!"}
                class={"inner columns"}
              />
            </div>
            <div className="image">
              <picture>
                <source srcSet={`/images/oilslubricants/serv3.png`} />
                <img src={`/images/oilslubricants/serv3.png`} alt="serv3" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="oilslubricants__who">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <span className="h1">Почему стоит довериться нашему маслу?</span>
              <p>
                Наше масло &laquo;NEO&raquo;&nbsp;&mdash; это результат
                инновационных технологий и&nbsp;строгого контроля качества.
                Мы&nbsp;предлагаем продукцию, созданную с&nbsp;учетом ваших
                потребностей и&nbsp;адаптированную для российских условий
                эксплуатации.
              </p>
              <p>
                Выбирая масло &laquo;NEO&raquo;, вы&nbsp;получаете надежный
                и&nbsp;долговечный продукт, который обеспечивает стабильную
                работу работу техники при любых условиях. Доверьтесь
                &laquo;NEO&raquo; и&nbsp;почувствуйте разницу!
              </p>
            </div>
            <div className="image">
              <picture>
                <source srcSet={`/images/oilslubricants/remont.png`} />
                <img src={`/images/oilslubricants/remont.png`} alt="remont" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="achievements">
        <div className="container">
          <div className="section-title">
            <span className="h1">Наши преимущества:</span>
          </div>
          <div className="row">
            <Achievement
              icon="/images/icons/wather.png"
              title="Высокая текучесть"
              text="Моментально обволакивает все детали узлов и механизмов при запуске"
            />
            <Achievement
              icon="/images/icons/shield.png"
              title="Отличные моющие свойства"
              text="Предотвращает появление осадков и отложений"
            />
            <Achievement
              icon="/images/icons/rub.png"
              title="Адаптация к России"
              text="100% адаптация к российским условиям использования"
            />
            <Achievement
              icon="/images/icons/solid-plan.png"
              title="Идеальная адгезия"
              text="Позволяет технике выдерживать сверх нагрузки"
            />
            <Achievement
              icon="/images/icons/lic.png"
              title="Лицензированная продукция"
              text="Официальная лицензированная продукция, нет подделок"
            />
            <Cta
              title={"Оставляйте заявку на новое масло"}
              text={"И получите его уже сегодня!"}
              class={"inner small"}
            />
          </div>
        </div>
      </section>
      <Products
        limit={5}
        filter={"popular"}
        title={"Часто ищут"}
        link={"/spare-parts"}
      />
      <section className="leadcta">
        <div className="container">
          <div className="row">
            <div className="leadcta__video">
              <VideoBlock id={"56de968581caeea3eadc92a61b68077d"} />
            </div>
            <div className="leadcta__video">
              <VideoBlock id={"4fb95e9411664792a7c1576ab9f18543"} />
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
