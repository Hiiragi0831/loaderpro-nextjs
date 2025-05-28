import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "1192";

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
                Купить запчасти для вилочных погрузчиков BT с доставкой по РФ
              </h2>
              <p>
                BT погрузчики можно смело охарактеризовать как продукцию
                японской торговой марки с европейскими корнями. В лучших
                традициях восточного высокого качества были модернизированы и
                успешно внедрены на мировой рынок различные модели складских
                погрузчиков данного бренда. В ассортименте компании представлены
                погрузчики с электродвигателями и ДВС.
              </p>
              <p>
                У нас вы сможете купить запчасти для оборудования бренда BT с
                доставкой по РФ. Обращайтесь, получите бесплатную консультацию
                прямо сейчас.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/bt-268-1192.jpg"} />
              <img src={"/images/brand/bt-268-1192.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/bt-268-1192-2.jpg"} />
              <img src={"/images/brand/bt-268-1192-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Кратко о бренде</h2>
              <p>
                Бренд складского оборудования BT тесно связан с популярной
                японской корпорацией Toyota. На данный момент торговая марка BT
                входит в число предприятий, которыми владеет Toyota Industries
                Corporation.
              </p>
              <p>
                Изначально бренд BT был создан в 1946 году, а уже спустя 2 года
                на мировой рынок вышла первая гидравлическая тележка BT.
                Торговая ассоциация с 1954 года в Швеции начала открывать первые
                сервисные центры.
              </p>
              <p>
                Спустя 14 лет компания расширилась до такой степени, что был
                открыт первый завод в городе Мелби, Швеция. В 1978 году на этих
                производственных мощностях была изготовлена первая модель BT с
                полуавтоматизированным управлением, а также разработан первый
                ричтрак. С 2000 года компания BT Industries входит в состав
                Toyota Industries Corporation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Разновидности основных запчастей для вилочных погрузчиков BT
            </h2>
            <p>
              Для бесперебойной работы складской техники BT необходимы надежные
              и качественные запчасти. Запасные части для этих погрузчиков
              отличаются высокой степенью взаимозаменяемости и подходят для
              многих моделей складской техники Toyota.
            </p>
            <p>
              Основные категории запчастей для вилочных погрузчиков BT включают:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигатель и силовая установка"}
              text={
                "Детали для дизельных, бензиновых и электрических погрузчиков, включая фильтры, поршни, ремни и системы охлаждения."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Топливная и тормозная системы"}
              text={
                "Насосы, инжекторы, тормозные колодки, шланги и другие компоненты для поддержания безопасности и стабильной работы."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Рама и конструкционные элементы"}
              text={
                "Мачты, вилы, амортизаторы, противовесы и элементы крепления."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Система управления"}
              text={"Рулевые механизмы, рычаги, датчики, кабели управления."}
            />
            <Box
              icon={<IconBolt />}
              title={"Электрика и гидравлика"}
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
            <p>
              Наша компания продает сертифицированные запчасти для вилочных
              погрузчиков BT. У нас вы сможете купить любые детали для вилочных
              погрузчиков BT с доставкой к вам в город.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для вилочных погрузчиков BT</h2>
            <p>
              Выбор запасных частей для вилочных погрузчиков BT требует учета
              ряда факторов:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={"Совместимость с моделью <sup>01</sup>"}
              text={
                "Важно убедиться, что запчасть подходит именно для вашей модели вилочного погрузчика BT. Каталоги и техническая документация помогут в этом вопросе."
              }
            />
            <Box
              title={"Наличие и сроки доставки <sup>02</sup>"}
              text={
                "Наличие деталей на складе сокращает время простоя техники, а быстрая доставка обеспечит оперативный ремонт."
              }
            />
            <Box
              title={"Консультация специалистов <sup>03</sup>"}
              text={
                "Если возникают сомнения в выборе, лучше обратиться за помощью к профессионалам, которые помогут подобрать оптимальный вариант."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              У нас свыше 15.000 разновидностей запчастей для вилочных
              погрузчиков BT. Обращайтесь, и наши специалисты прямо сейчас
              подберут нужную деталь, проконсультируют касательно установки и
              обслуживания.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
