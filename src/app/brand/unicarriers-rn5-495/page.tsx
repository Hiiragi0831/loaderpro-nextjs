import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "495";

export async function generateMetadata() {
  const brand = await api.getPageBrand(id);
  return metaGen(brand.title, brand.description);
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
              <CatalogProducts url={id} brand={true} />
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="brand__header">
            <div className="text">
              <h2 className={"h1"}>Купить запчасти UNICARRIERS</h2>
              <p>
                Техника UNICARRIERS заслуженно пользуется доверием по всему миру
                благодаря своей производительности, долговечности и высокому
                качеству сборки. Это оборудование широко используется на
                складах, в логистических центрах и на производственных
                площадках, где важна бесперебойная работа. Однако даже самая
                надежная спецтехника требует регулярного обслуживания и
                своевременной замены изношенных компонентов.
              </p>
              <p>
                В компании «СПЕЦМАШИНА» вы сможете купить запчасти UNICARRIERS с
                доставкой по РФ.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/unicarriers-rn5-495.jpg"} />
              <img src={"/images/brand/unicarriers-rn5-495.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/unicarriers-rn5-495-2.jpg"} />
              <img src={"/images/brand/unicarriers-rn5-495-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Где купить оригинальные запчасти UNICARRIERS?</h2>
              <p>
                Купить комплектующие для спецтехники UNICARRIERS можно в разных
                местах, но не каждый поставщик может гарантировать подлинность и
                качество деталей. Поэтому лучшим решением станет сотрудничество
                с проверенной компанией, которая специализируется на поставках
                запчастей для грузоподъемного оборудования, как японского, так и
                европейского, китайского или корейского производства.
              </p>
              <p>
                На сайте нашей компании «СПЕЦМАШИНА» представлен обширный
                каталог запчастей UNICARRIERS, где вы найдете все необходимое
                для восстановления и технического обслуживания вашей техники.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему выбирают «СПЕЦМАШИНА»?</h2>
            <p>
              Наша компания на протяжении многих лет помогает владельцам
              спецтехники решать задачи любой сложности, связанные с ремонтом и
              поддержанием оборудования в рабочем состоянии. Мы ценим ваше время
              и стремимся предоставить сервис на высшем уровне:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Обширный выбор"}
              text={
                "На складе постоянно поддерживается запас самых востребованных запчастей для погрузчиков, ричтраков, штабелеров и другой техники."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гарантия качества"}
              text={
                "Все детали проходят строгий контроль, соответствуют международным стандартам и полностью совместимы с оригинальной техникой."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Интуитивный онлайн-каталог"}
              text={
                "Наш сайт упрощает процесс поиска запчастей, экономя ваше время и минимизируя вероятность ошибки при выборе."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Профессиональные консультации"}
              text={
                "Опытные специалисты оперативно помогут вам с подбором нужной позиции, оформлением заказа и ответят на любые вопросы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Честные цены"}
              text={
                "Мы не завышаем стоимость комплектующих и предлагаем справедливую цену без ущерба для качества."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что можно найти в нашем каталоге?</h2>
            <p>
              В нашем каталоге вы найдете полный перечень запчастей UNICARRIERS,
              включая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Фильтры и ремни <sup>01</sup>"} />
            <Box title={"Элементы рулевого управления<sup>02</sup>"} />
            <Box title={"Тормозные узлы <sup>03</sup>"} />
            <Box title={"Комплектующие для гидравлики<sup>04</sup>"} />
            <Box title={"Аккумуляторы и электрические детали <sup>05</sup>"} />
            <Box title={"Колеса и ролики <sup>06</sup>"} />
            <Box
              title={
                "Опорные элементы, датчики, прокладки и многое другое <sup>07</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Оформление заказа и доставка</h2>
            <p>
              Мы доставляем запчасти по всей территории России. Оформить заказ
              можно прямо на сайте или обратившись к нашему менеджеру. Мы
              гарантируем быструю комплектацию и отправку заказа в кратчайшие
              сроки.
            </p>
            <p>
              «СПЕЦМАШИНА» — все для вашей техники UNICARRIERS в одном месте.
              Пусть ваша техника работает как швейцарские часы — с надежными
              запчастями от профессионалов!
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
