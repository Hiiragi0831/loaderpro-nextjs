import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "172";

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
                Купить запчасти для минипогрузчиков MUSTANG в Санкт-Петербурге
              </h2>
              <p>
                Минипогрузчики Mustang уверенно заняли свою нишу на российском
                рынке спецтехники, несмотря на то, что начали активно
                использоваться в нашей стране сравнительно недавно.
                Производитель с богатой историей, берущей начало в 1865 году,
                изначально специализировался на сельскохозяйственном навесном
                оборудовании. Однако уже к середине XX века компания вышла на
                новый уровень, разработав собственную линейку минипогрузчиков с
                бортовым поворотом. Это сделало Mustang первым в мире
                производителем полноценной минипогрузочной техники.
              </p>
              <p>
                Сегодня бренд предлагает широкую гамму моделей, которые
                отличаются высокой маневренностью, надежностью и возможностью
                работы в самых стесненных условиях. Благодаря многообразию
                конфигураций и оснащения, техника Mustang используется в
                строительстве, коммунальном хозяйстве, логистике и сельском
                хозяйстве.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/mustang-n91-172.jpg"} />
              <img src={"/images/brand/mustang-n91-172.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Особенности минипогрузчиков Mustang</h2>
            <p>Ассортимент спецтехники Mustang охватывает:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"19 моделей в составе"}
              text={"3-х основных серий минипогрузчиков"}
            />
            <Box
              icon={<IconBolt />}
              title={"Две системы управления"}
              text={
                "Классические педали и рычаги или удобное джойстиковое управление"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Два типа подъема стрелы"}
              text={"Радиальный и вертикальный"}
            />
            <Box
              icon={<IconBolt />}
              title={"Более 100 вариантов"}
              text={"Навесного оборудования для вашего погрузчика"}
            />
            <Box
              icon={<IconBolt />}
              title={"Внедрение современных опций"}
              text={
                "Внедрение современных опций и функций для повышения эффективности работы"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания активно инвестирует в собственную инженерную базу — на
              строительство исследовательского центра было направлено более 20
              миллионов долларов. Каждый год Mustang разрабатывает и выводит на
              рынок новые модели, совершенствуя как производственные процессы,
              так и саму технику.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Когда и почему необходима замена запчастей для минипогрузчиков
              MUSTANG?
            </h2>
            <p>
              Даже самая надежная техника требует регулярного обслуживания и
              своевременной замены изношенных деталей. Учитывая интенсивную
              эксплуатацию минипогрузчиков Mustang, особенно в тяжелых условиях,
              важно использовать только проверенные комплектующие.
            </p>
            <p>Запчасти на минипогрузчик Мустанг необходимы при:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box title={"Естественном износе компонентов <sup>01</sup>"} />
            <Box
              title={
                "Поломках вследствие превышения рабочих нагрузок <sup>02</sup>"
              }
            />
            <Box
              title={
                "Замене расходников в рамках технического обслуживания <sup>03</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/mustang-n91-172-2.jpg"} />
              <img src={"/images/brand/mustang-n91-172-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Где купить запчасти для погрузчиков Mustang?</h2>
              <p>
                Компания «СПЕЦМАШИНА» предлагает широкий выбор оригинальных и
                сертифицированных аналогов для всей линейки минипогрузчиков
                Mustang. Мы обеспечиваем:
              </p>
              <ul>
                <li>Подбор запчастей по модели и каталожному номеру;</li>
                <li>Консультации от опытных специалистов;</li>
                <li>Оперативную доставку по всей России.</li>
              </ul>
              <p>
                Наш офис находится в Санкт-Петербурге, но география поставок
                охватывает все регионы страны. Независимо от вашего
                местоположения, вы можете рассчитывать на быстрое решение
                технических проблем.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему выбирают «СПЕЦМАШИНУ»?</h2>
            <p>
              Почему стоит заказать запчасти для минипогрузчиков Mustang у нас:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Надежность поставок и гарантия качества <sup>01</sup>"}
            />
            <Box
              title={"Большой складской запас популярных позиций <sup>02</sup>"}
            />
            <Box
              title={"Доступ к оригинальным каталогам Mustang <sup>03</sup>"}
            />
            <Box
              title={"Удобные формы оплаты и быстрая логистика <sup>04</sup>"}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Если вам нужны прочные и оригинальные запчасти для минипогрузчиков
              Mustang — обращайтесь в «СПЕЦМАШИНУ». Мы знаем специфику этой
              техники и поможем восстановить ее работоспособность в кратчайшие
              сроки.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
