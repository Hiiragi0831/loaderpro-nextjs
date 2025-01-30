import HomeSlider from "@/components/HomeSlider";
import { Brands } from "@/components/Brands";
import Advantages from "@/components/Advantages";
import { Reviews } from "@/components/Reviews";
import { MapSending } from "@/components/MapSending";
import { Team } from "@/components/Team";
import { VideoGallery } from "@/components/VideoGallery";
import Articles from "@/components/Articles";
import dynamic from "next/dynamic";
import Link from "next/link";

const Products = dynamic(() => import("@/components/Products"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <section className={"home__title"}>
        <div className="container">
          <h1 className={"h1"}>
            Запчасти для вилочных погрузчиков и складской техники
          </h1>
          <picture>
            <source srcSet="/images/home/kat.png" />
            <img src="/images/home/kat.png" alt="kat" />
          </picture>
        </div>
      </section>
      <Brands />
      <Products
        limit={5}
        filter={"inStock"}
        title={"В наличии"}
        link={"/spare-parts"}
      />
      <Products
        limit={5}
        filter={"popular"}
        title={"Спецпредложения"}
        link={"/tires-rims"}
      />
      <section className={"home-block"}>
        <div className="container">
          <div className="home-block__wrapper">
            <div className="section-title">
              <h2 className="h1">Все бренды – все запчасти!</h2>
              <p>
                Чтобы поддерживать складскую технику в отличном рабочем
                состоянии долгое время, требуется соблюдать несколько пунктов:
              </p>
            </div>
            <div className="row">
              <div className="home-block__icons">
                <div className="home-block__icon">
                  <picture>
                    <source srcSet="/images/home/icons/icon-park-outline_fork.png" />
                    <img
                      src="/images/home/icons/icon-park-outline_fork.png"
                      alt="icon"
                    />
                  </picture>
                  <p>Профессиональная эксплуатация</p>
                </div>
                <div className="home-block__icon">
                  <picture>
                    <source srcSet="/images/home/icons/ep_tools.png" />
                    <img src="/images/home/icons/ep_tools.png" alt="icon" />
                  </picture>
                  <p>Правильное обслуживание</p>
                </div>
                <div className="home-block__icon">
                  <picture>
                    <source srcSet="/images/home/icons/material-symbols_forklift.png" />
                    <img
                      src="/images/home/icons/material-symbols_forklift.png"
                      alt="icon"
                    />
                  </picture>
                  <p>Использование качественных запчастей</p>
                </div>
              </div>
              <div className="home-block__text">
                <p>
                  У нас есть собственные каталоги запчастей вилочных погрузчиков
                  с множеством деталей для разнообразных марок и моделей
                  техники. Компания «СПЕЦМАШИНА» осуществляет поставку запасных
                  частей по всей территории России. Мы занимаемся поставкой
                  запчастей со всего мира, сюда относятся оригинальные детали и
                  аналоги.
                </p>
                <p>
                  У нас можно купить запчасти из Европы, Америки и Азии. На
                  сайте удастся найти детали китайских вилочных погрузчиков,
                  японских, корейских, европейских и американских марок и
                  моделей. Все запчасти – на все бренды! Мы обладаем многолетней
                  экспертизой и готовы помочь при наличии у вас потребности в
                  наших товарах.
                </p>
              </div>
              <div className="home-block__button">
                <Link href="/spare-parts" className="button button__primary">
                  Перейти в каталог
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Advantages />
      <Reviews />
      <MapSending />
      <section className={"home-block"}>
        <div className="container">
          <div className="home-block__wrapper">
            <div className="section-title">
              <h2 className="h1">
                Запчасти для вилочных погрузчиков и эффективность работы
              </h2>
            </div>
            <div className="row">
              <div className="home-block__text">
                <p>
                  Вилочные погрузчики, независимо от вида питания (батарея или
                  двигатель внутреннего сгорания), являются неотъемлемой частью
                  любого бизнеса, который основывается на операциях с погрузкой
                  и обработкой тяжелых материалов. Они необходимы для
                  безопасного подъема и перемещения тяжелых грузов, но хоть и
                  данная техника рассчитана на продолжительную службу,
                  определенные части оборудования подвержены износу. Чтобы
                  техника всегда работала исправно и сотрудники чувствовали себя
                  в безопасности, требуется купить запчасти на вилочный
                  погрузчик высокого качества.
                </p>
                <p>
                  Сейчас купить запчасти для погрузчика может быть не самая
                  простая задача ввиду нарушения старых цепочек поставок у
                  многих Российских компаний. Мы сотрудничаем со многими
                  мировыми производителями и отладили параллельный импорт со
                  сроком поставки некоторых позиций от 14 дней. Если Вы
                  действительно цените качество и профессиональный подход к
                  делу, то стоит обратиться в магазин запчастей для погрузчиков
                  «СПЕЦМАШИНА». Мы стараемся уделять очень большое внимание
                  деталям, так как считаем что “мелочи не имеют решающего
                  значения, потому что мелочи решают все”
                </p>
              </div>
              <span className="h3">
                СПЕЦМАШИНА - ваш поставщик всех необходимых запчастей для
                профессионального ремонта погрузчиков!
              </span>
            </div>
          </div>
        </div>
      </section>
      <Team />
      <VideoGallery />
      <Articles limit={4} />
    </main>
  );
}
