import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "678";

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
                Купить силовые разъемы для аккумуляторов REMA в Санкт-Петербурге
              </h2>
              <p>
                Качественные и надежные разъемы REMA прекрасно подходят для
                мощного оснащения, гарантируя отличное подсоединение к источнику
                электроэнергии. Международный консорциум REMA был основан в 1919
                году в Германии и за более чем вековую историю стал ведущим
                мировым производителем специализированных коннекторов. Сегодня
                компания выпускает продукцию, соответствующую высоким стандартам
                промышленного оборудования, применяемого в складской,
                логистической и производственной сферах.
              </p>
              <p>
                Разъемы REMA обеспечивают устойчивый и безопасный контакт между
                аккумуляторами, зарядными устройствами и техникой. Благодаря
                прочной конструкции и технологически продвинутым решениям,
                данные изделия успешно применяются на вилочных погрузчиках,
                штабелерах и иной аккумуляторной технике.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/rema-723-678.jpg"} />
              <img src={"/images/brand/rema-723-678.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности силовых разъемов для аккумуляторов REMA</h2>
            <p>
              Компания REMA предлагает разнообразные типы силовых разъемов,
              каждый из которых имеет уникальные характеристики и область
              применения.  В ассортименте представлены следующие основные
              категории:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Соединители серии SR — UL/CSA"}
              text={
                "Эти модели являются универсальными решениями для подключения аккумуляторных батарей к технике и зарядным устройствам. Наличие цветовой маркировки, указывающей напряжение, позволяет быстро и безопасно производить соединения."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Штепсельные разъемы EURO — DIN"}
              text={
                "Классическое разделение на «папа» (для техники и зарядных устройств) и «мама» (для аккумуляторов) позволяет добиться универсальности применения. Такие разъемы особенно востребованы на погрузчиках и прочем промышленном транспорте."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Плоские силовые разъемы серий SB, SBE, SBX"}
              text={
                "Эти модификации широко используются в оборудовании, где требуется высокая сила тока. В зависимости от модели, данные изделия рассчитаны на ток от 80 до 640 А, что делает их идеальными для тяжелой техники и многозарядных систем."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Использование передовых инженерных разработок, а также контроль
              качества на всех этапах производства позволяет REMA занимать
              лидирующие позиции в своей отрасли.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>
              Как выбрать силовые разъемы для аккумуляторов REMA в
              Санкт-Петербурге
            </h2>
            <p>
              Правильный подбор силового коннектора напрямую влияет на
              стабильность работы аккумуляторной техники и безопасность
              эксплуатации. При выборе разъемов REMA необходимо учитывать
              несколько ключевых факторов:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Тип оборудования и модель АКБ <sup>01</sup>"}
              text={
                "Разъем должен точно соответствовать техническим характеристикам аккумулятора и устройства, к которому он подключается."
              }
            />
            <Box
              title={"Номинальный ток <sup>02</sup>"}
              text={
                "Важно подобрать изделие в соответствии с нагрузкой – REMA выпускает разъемы на ток от 80 до 640 ампер."
              }
            />
            <Box
              title={"Форма подключения <sup>03</sup>"}
              text={
                "Необходимо заранее определить, требуется ли вам штепсельный (папа) или гнездовой (мама) коннектор."
              }
            />
            <Box
              title={"Цветовая маркировка <sup>04</sup>"}
              text={
                "Наличие маркировки помогает избежать ошибок в соединениях, особенно при наличии большого количества однотипной техники."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания «СПЕЦМАШИНА» в Санкт-Петербурге предлагает своим клиентам
              помощь в подборе силовых разъемов REMA, предоставляя консультации
              и доступ к полному каталогу продукции.
            </p>
            <p>
              Если вы ищете оригинальные силовые разъемы REMA для аккумуляторных
              систем, компания «СПЕЦМАШИНА» — надежный поставщик комплектующих
              от немецкого бренда.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
