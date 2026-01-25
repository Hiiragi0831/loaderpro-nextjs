import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "1616";

export async function generateMetadata() {
  return metaGen(
    "Запчасти TVH (TOTAL SOURCE)",
    "Предлагаем купить запчасти TVH (TOTAL SOURCE) с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
  );
}

export default async function SpareParts() {
  const brand = await api.getPageBrand(id);

  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">{brand.h1 ? brand.h1 : brand.title}</h1>
          </div>
          <div className="row row-1">
            <div className="catalog__products">
              <CatalogProducts url={"spare_parts"} />
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="brand__header">
            <div className="text">
              <h2 className={"h1"}>
                Купить запчасти TVH (Total Source) для вилочных погрузчиков
              </h2>
              <p>
                Компания TVH (Total Source) — один из крупнейших мировых
                поставщиков запасных частей и комплектующих для вилочной
                техники. Несмотря на уход главного мирового лидера с российского
                рынка, мы продолжаем поставки всего ассортимента продукции от
                TVH и обеспечиваем высокий уровень сервиса.
              </p>
              <p>
                Нужна консультация? Обращайтесь к нам, и менеджеры компании
                максимально быстро подберут запчасти ТВХ для вашей техники.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/tvh-tvh-1616.jpg"} />
              <img src={"/images/brand/tvh-tvh-1616.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Классификация запчастей от бренда TVH (Total Source)</h2>
            <p>
              Каталог компании TVH — один из крупнейших в отрасли: в нем
              представлено более 37 миллионов единиц продукции, охватывающих все
              возможные потребности в запасных частях и комплектующих для
              погрузочной техники. Такой масштабный ассортимент делает TVH
              надежным партнером для предприятий любого масштаба, работающих с
              вилочными и складскими погрузчиками.
            </p>
            <p>
              Ассортимент включает широкий спектр комплектующих, среди которых:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть и элементы подвески"}
              text={
                "Колёса, шины, ступицы, подшипники и другие детали, обеспечивающие устойчивость и плавность хода техники."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Детали трансмиссии"}
              text={
                "Редукторы, валы, муфты и другие компоненты, передающие крутящий момент от двигателя к колесам."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Системы управления и тормоза"}
              text={
                "Рычаги, педали, тормозные цилиндры, диски и колодки, отвечающие за безопасность эксплуатации."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электрические компоненты"}
              text={
                "Стартеры, генераторы, реле, фары, лампы, сигнальные устройства и проводка."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлические узлы и насосы"}
              text={
                "Гидромоторы, распределители, цилиндры, шланги и фитинги, обеспечивающие работу подъемных и наклонных механизмов."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Как подобрать запчасти для вилочных погрузчиков от бренда деталей
              TVH (Total Source)
            </h2>
            <p>
              Чтобы точно подобрать подходящие комплектующие TVH (Total Source),
              необходимо знать ключевые параметры техники:
            </p>
            <ul>
              <li>марку и модель вилочного погрузчика;</li>
              <li>серийный номер;</li>
              <li>тип установленного двигателя;</li>
              <li>
                особенности конфигурации (тип трансмиссии, грузоподъемность и
                т.д.).
              </li>
            </ul>
            <p>
              С этими данными подбор деталей осуществляется максимально точно и
              быстро. Наши специалисты помогут оперативно сориентироваться в
              широком ассортименте и предложат оптимальные решения с учетом
              технических характеристик вашей техники.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Заказать запчасти TVH для погрузчиков у официального поставщика
            </h2>
            <p>
              Компания TVH осуществляет поставки через международную сеть
              реселлеров. Мы предлагаем:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Комплектующие <sup>01</sup>"}
              text={
                "Оригинальные комплектующие Total Source без скрытых наценок."
              }
            />
            <Box
              title={"Доставка <sup>02</sup>"}
              text={"Быструю доставку по всей территории России."}
            />
            <Box
              title={"Поддержка <sup>03</sup>"}
              text={"Техническую поддержку и помощь в подборе."}
            />
            <Box
              title={"Сотрудничество <sup>04</sup>"}
              text={
                "Гибкие условия сотрудничества для частных клиентов и бизнеса."
              }
            />
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
