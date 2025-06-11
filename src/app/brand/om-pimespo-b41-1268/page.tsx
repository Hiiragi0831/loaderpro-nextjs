import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "1268";

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
              <h2 className={"h1"}>
                Купить запчасти для штабелеров OM Pimespo в Санкт-Петербурге
              </h2>
              <p>
                OM Pimespo — известный итальянский производитель складской
                техники, входящий в промышленную группу KION Group, в которую
                также входит бренд Linde. Основные производственные мощности
                компании расположены в городах Бари и Луццара (Италия), а
                главный офис — в Лайнате, провинции Милана.
              </p>
              <p>
                До 2002 года компания была известна под названием FIAT Carrelli
                Elevatori, а сегодня это один из ведущих европейских брендов в
                сфере подъемно-транспортного оборудования.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/om-pimespo-b41-1268.jpg"} />
              <img src={"/images/brand/om-pimespo-b41-1268.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/om-pimespo-b41-1268-2.jpg"} />
              <img src={"/images/brand/om-pimespo-b41-1268-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Надежная техника для складской логистики</h2>
              <p>OM Pimespo предлагает широкий спектр складской техники:</p>
              <ul>
                <li>Вилочные и электрические погрузчики;</li>
                <li>Ричтраки;</li>
                <li>Штабелеры с боковой и трехсторонней обработкой груза;</li>
                <li>
                  Самоходные штабелеры, включая модели с выдвижной мачтой.
                </li>
              </ul>
              <p>
                Штабелеры бренда могут поднимать грузы массой до 2 тонн и
                работать на высоте до 13 метров, что делает их идеальным
                решением для многоуровневого хранения. Техника OM Pimespo
                представлена в вариантах с дизельными, газовыми и электрическими
                двигателями, с грузоподъемностью от 500 кг до 10 тонн.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Качественные запчасти OM Pimespo от компании «СПЕЦМАШИНА»</h2>
            <p>
              Бесперебойная и эффективная работа штабелеров OM Pimespo напрямую
              зависит от состояния их комплектующих. Своевременное техническое
              обслуживание и замена изношенных деталей — залог надежности и
              безопасности техники на складе, в цехе или на производственной
              площадке.
            </p>
            <p>
              Компания «СПЕЦМАШИНА» предлагает широкий ассортимент оригинальных
              запчастей для техники OM Pimespo, а также качественные проверенные
              аналоги от сертифицированных поставщиков. Мы понимаем важность
              точного подбора компонентов, поэтому предоставляем
              профессиональные консультации и помогаем подобрать детали с учетом
              модели, модификации и условий эксплуатации вашей техники.
            </p>
            <p>В наличии:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Детали трансмиссии и гидравлики <sup>01</sup>"} />
            <Box title={"Комплектующие для системы подъема<sup>02</sup>"} />
            <Box
              title={"Тормозные элементы и рулевое управление <sup>03</sup>"}
            />
            <Box title={"Колеса, ролики, аккумуляторы <sup>04</sup>"} />
            <Box title={"Расходные материалы и электрика <sup>05</sup>"} />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему выбирают «СПЕЦМАШИНА»?</h2>
            <p>Какие преимущества работы с нами:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Большой ассортимент"}
              text={"Тысячи позиций уже на складе"}
            />
            <Box
              icon={<IconBolt />}
              title={"Оперативная доставка"}
              text={"Оперативная доставка в любую точку России"}
            />
            <Box
              icon={<IconBolt />}
              title={"Профессиональные консультации"}
              text={
                "Профессиональные консультации по подбору деталей — по модели, году выпуска и номеру техники"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электронный каталог"}
              text={"Электронный каталог запчастей OM Pimespo"}
            />
            <Box
              icon={<IconBolt />}
              title={"Доступные цены"}
              text={"Честные цены и прозрачные условия"}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Закажите запчасти OM Pimespo легко</h2>
            <p>
              Чтобы оформить заказ, просто свяжитесь с нашими менеджерами или
              оставьте заявку на сайте loaderpro.ru. Мы подберем необходимые
              детали, предложим оптимальный вариант по срокам и стоимости, и
              обеспечим быструю отправку.
            </p>
            <p>
              «СПЕЦМАШИНА» — надежный поставщик запчастей для штабелеров OM
              Pimespo. Максимум качества, минимум хлопот.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
