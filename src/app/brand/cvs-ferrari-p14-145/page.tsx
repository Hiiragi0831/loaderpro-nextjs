import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "145";

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
                Купить запчасти для ричстакеров CVS FERRARI в Санкт-Петербурге
              </h2>
              <p>
                Ричстакеры CVS Ferrari — это техника премиального уровня,
                созданная для интенсивной работы с контейнерами в портах,
                логистических терминалах и на железнодорожных узлах. Надежность
                и высокая производительность этих машин обеспечиваются за счет
                применения исключительно качественных компонентов, произведённых
                в Европе.
              </p>
              <p>
                История компании CVS Ferrari Srl началась еще в 1973 году, в
                небольшом городке рядом с Миланом, Италия. Гораздо позднее в
                2002 году компания выкупила активы фирмы Belotti, которая в 1975
                году сделала свой первый ричстакер. За счет данного успешного
                слияния удалось существенно расширить производственный и
                инженерный потенциал торговой марки CVS Ferrari. На данный
                момент времени итальянский бренд является дочерней компанией
                американской корпорации Manitex International.
              </p>
              <p>
                Компания «СПЕЦМАШИНА» предлагает в Санкт-Петербурге оригинальные
                запчасти для ричстакеров CVS Ferrari с гарантией качества и
                быстрой поставкой.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/cvs-ferrari-p14-145.jpg"} />
              <img src={"/images/brand/cvs-ferrari-p14-145.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности запчастей для ричстакеров CVS FERRARI</h2>
            <p>
              Ричстакеры Ferrari оснащаются множеством узлов, которые
              обеспечивают стабильную работу техники в самых сложных условиях. В
              ассортименте компании «СПЕЦМАШИНА» представлены следующие
              категории запчастей:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигатели Cummins и Scania"}
              text={
                "Силовые агрегаты с высокой производительностью и ресурсом."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлика Bosch Rexroth"}
              text={"Ключевой элемент системы управления грузом и мачтой."}
            />
            <Box
              icon={<IconBolt />}
              title={"Коробки передач Dana Spicer и ZF"}
              text={
                "Трансмиссии, обеспечивающие эффективную передачу крутящего момента."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Мосты AxleTech и Kessler"}
              text={"Прочные и долговечные компоненты ходовой части."}
            />
            <Box
              icon={<IconBolt />}
              title={"Электронные системы CANBUS"}
              text={
                "Элементы управления и диагностики, поддерживающие работу ричстакера в режиме реального времени."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Стальные конструкции"}
              text={
                "Стрела, мачта, рама, рулевые мосты, изготовленные в Италии."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Кабины и элементы управления"}
              text={"Запчасти, отвечающие за комфорт и безопасность оператора."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Нужна помощь? Обращайтесь прямо сейчас. Менеджеры компании
              «СПЕЦМАШИНА» за 2 минуты подберут нужную запчасть для ричстакеров
              CVC Ferrari и сделают индивидуальное предложение.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для CVS FERRARI</h2>
            <p>
              При выборе комплектующих для ричстакеров CVS Ferrari важно
              учитывать модель техники, год выпуска, специфику эксплуатации и
              оригинальность деталей. Вот несколько советов по выбору:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"VIN <sup>01</sup>"}
              text={
                "Проверка по VIN или серийному номеру — позволяет точно определить нужную запчасть."
              }
            />
            <Box
              title={"Оригинал <sup>02</sup>"}
              text={
                "Использование оригинальных каталогов — компания «СПЕЦМАШИНА» предоставляет доступ к официальным каталогам запчастей."
              }
            />
            <Box
              title={"Консультация <sup>03</sup>"}
              text={
                "Консультация с техническими специалистами — поможет избежать ошибок при подборе."
              }
            />
            <Box
              title={"Условия эксплуатации <sup>04</sup>"}
              text={
                "Учет условий эксплуатации — например, работа в северных регионах требует повышенной устойчивости к морозу."
              }
            />
            <Box
              title={"Сертификация <sup>05</sup>"}
              text={
                "Выбор только оригинальных или сертифицированных аналогов — это обеспечит длительный срок службы техники."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              В Санкт-Петербурге купить оригинальные запчасти для ричстакеров
              CVS Ferrari можно в компании «СПЕЦМАШИНА». Мы располагаем
              складскими запасами ключевых комплектующих, а также готовы
              оперативно организовать поставку любых редких позиций под заказ.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
