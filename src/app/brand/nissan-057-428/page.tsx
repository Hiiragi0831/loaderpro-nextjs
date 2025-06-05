import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "428";

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
                Купить запчасти для вилочных погрузчиков Nissan (Ниссан) в
                Санкт-Петербурге
              </h2>
              <p>
                Вилочные погрузчики Nissan заслуженно считаются одной из самых
                популярных моделей складской техники на мировом рынке.
                Производитель с почти вековой историей зарекомендовал себя как
                поставщик не только надежного оборудования, но и
                высококачественных комплектующих.
              </p>
              <p>
                Компания Nissan ведет свою деятельность с 1935 года и входит в
                тройку мировых лидеров по объемам производства техники, уступая
                только Toyota и Honda. Это подтверждает высокий спрос и
                признание бренда в разных отраслях, включая логистику и
                складскую обработку грузов.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/nissan-057-428.jpg"} />
              <img src={"/images/brand/nissan-057-428.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/nissan-057-428-2.jpg"} />
              <img src={"/images/brand/nissan-057-428-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Особенности погрузчиков Nissan и их обслуживание</h2>
              <p>
                Сегодня Nissan активно продвигает электрические и гибридные
                вилочные погрузчики, которые отличаются экологичностью и
                сниженным уровнем выбросов. Такое оборудование идеально подходит
                для работы в закрытых помещениях, не загрязняет воздух сажей и
                минимизирует воздействие вредных веществ на персонал.
              </p>
              <p>
                Несмотря на надежность техники, периодическое обслуживание и
                замена деталей остаются неотъемлемой частью эксплуатации.
                Особенно это важно при наличии ошибок или неисправностей,
                связанных с годом выпуска или модификацией погрузчика. Даже у
                моделей с одинаковыми названиями могут отличаться комплектующие
                — именно поэтому важно подбирать запчасти по точным данным.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для погрузчиков Nissan?</h2>
            <p>
              Перед покупкой деталей необходимо уточнить три ключевых параметра:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={"Модель погрузчика <sup>01</sup>"}
              text={
                "Важно убедиться, что запчасть подходит именно для вашей модели вилочного погрузчика"
              }
            />
            <Box
              title={"Номер рамы <sup>02</sup>"}
              text={
                "Важно подбирать запчасти, соответствующие конкретной модификации погрузчика."
              }
            />
            <Box
              title={"Год выпуска <sup>03</sup>"}
              text={
                "Это поможет правильно подобрать детали под нужный год выпуска."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Эти данные позволяют точно определить нужную запчасть и избежать
              ошибок при заказе. На сайте loaderpro.ru представлен широкий
              ассортимент оригинальных запчастей и проверенных аналогов для
              вилочных погрузчиков Nissan.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему стоит выбрать «СПЕЦМАШИНА»?</h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает не только комплектующие к
              популярным моделям погрузчиков Nissan, но и профессиональную
              консультацию. Наши менеджеры помогут подобрать нужные запчасти по
              каталожному номеру и уточненным техническим данным.
            </p>
            <p>В наличии — широкий выбор:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Деталей двигателя"}
              text={
                "Детали для дизельных, бензиновых и электрических погрузчиков, включая фильтры, поршни, ремни и системы охлаждения, в том числе для газобаллонного оборудования"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Элементов трансмиссии"}
              text={
                "Детали трансмиссии — сцепления, коробки передач, редукторы, шестерни и подшипники, рассчитанные на интенсивную нагрузку и длительный срок службы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Расходных материалов и фильтров"}
              text={
                "Расходники и комплектующие — масла, фильтры, ремни, прокладки и другие детали для планового обслуживания."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Шин, вил и гидравлических узлов"}
              text={
                "Шины влияют на маневренность, устойчивость и проходимость техники. Насосы, цилиндры, шланги и клапаны, отвечающие за плавность и эффективность работы грузоподъемных механизмов."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электрических компонентов"}
              text={
                "Аккумуляторы, проводка, гидравлические цилиндры, насосы и распределители."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Доставка и гарантия</h2>
            <p>
              Мы обеспечиваем оперативную доставку по всей России и предлагаем
              гарантию на поставляемые детали. Благодаря тесному сотрудничеству
              с производителями и официальными поставщиками, вы можете быть
              уверены в подлинности и высоком качестве приобретаемой продукции.
            </p>
            <p>
              Если вы ищете надежные и оригинальные запчасти для вилочных
              погрузчиков Nissan — обращайтесь в нашу компанию «СПЕЦМАШИНА». Мы
              поможем сохранить работоспособность вашей техники на высоком
              уровне и обеспечим все необходимое для бесперебойной работы.
              Звоните и получите бесплатную консультацию прямо сейчас — 8 (800)
              551-19-96, +7 (812) 642-12-56
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
