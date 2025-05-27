import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "833";

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
                Купить запчасти для тягачей TERBERG в Санкт-Петербурге
              </h2>
              <p>
                Terberg — это известная голландская торговая марка спецтехники,
                которая была основана в 1948 году. Главный офис компании
                расположен в городе Эйсселстейн, Нидерланды. Основной профиль
                компании — это терминальные тягачи Terberg, тягачи ро-ро,
                терминальные тракторы и иное специализированное портовое
                оборудование.
              </p>
              <p>
                История бренда началась с небольшой ремонтной мастерской, в
                которой обслуживалась военная техника, оставшаяся в Европе после
                Второй мировой войны. В 1980-х, с началом развития морских
                перевозок крупногабаритных грузов и формированием формата
                «ро-ро», возникла потребность в специализированных тягачах, и
                именно компания Terberg стала одной из первых, кто предложил
                эффективное решение. Сегодня Terberg — крупнейший производитель
                портовых тягачей в Европе с ежегодным выпуском тысяч единиц
                техники, поставляемой в более чем 80 стран мира.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/terberg-d21-833.jpg"} />
              <img src={"/images/brand/terberg-d21-833.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности запчастей для тягачей TERBERG</h2>
            <p>
              Тягачи марки Terberg зарекомендовали себя как надежная
              спецтехника, применяемая в портах, логистических терминалах и на
              промышленных объектах. Ассортимент техники Terberg делится на две
              основные категории, каждая из которых требует индивидуального
              подхода при подборе запасных частей:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <Box
              title={"Портовые тягачи Terberg серии RT (ро-ро) <sup>01</sup>"}
              text={
                "Техника с высокой грузоподъемностью от 120 до 320 тонн. Все модели оснащаются постоянным полным приводом, что обеспечивает стабильную работу на сложных покрытиях и при больших нагрузках. Эти тягачи активно используются при перемещении тяжелых грузов в условиях ограниченного пространства. Для их бесперебойной работы особенно важны надежные компоненты трансмиссии, подвески, тормозной и гидравлической систем."
              }
            />
            <Box
              title={"Терминальные тягачи Terberg серии YT <sup>02</sup>"}
              text={
                "Отличаются задним приводом и различной высотой седельно-сцепного устройства. Эти модели предназначены для работы с контейнерными платформами и прицепами разных стандартов. Они широко применяются в логистических терминалах, на складах и в распределительных центрах. Для YT-тягачей особенно актуальны точный подбор запчастей по конфигурации седла, тормозной системе и электрооборудованию."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Каждый тип тягача Terberg требует строго соответствующих
              техническим характеристикам комплектующих, так как использование
              неподходящих запчастей может привести к отказу узлов и простоям
              техники.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Запчасти для тягачей Terberg</h2>
            <p>
              В компании «СПЕЦМАШИНА» (г. Санкт-Петербург) представлен обширный
              ассортимент запасных частей для всех моделей тягачей Terberg,
              включая:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть и рулевое управление"}
              text={
                "Рулевые тяги, амортизаторы, шкворни, втулки, ступицы и подшипники."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Двигатель и трансмиссия"}
              text={
                "Фильтры, прокладки, шестерни, подшипники, карданные валы, редукторы, сцепление и элементы КПП."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлические узлы и цилиндры"}
              text={
                "Гидронасосы, цилиндры подъема седла, распределители, шланги высокого давления."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Нужно больше видов деталей? Специалисты компании «СПЕЦМАШИНА»
              помогут быстро и точно подобрать необходимые запчасти по серийному
              номеру тягача Terberg или VIN-коду, предоставят технические
              консультации и обеспечат оперативную поставку в любой регион.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
