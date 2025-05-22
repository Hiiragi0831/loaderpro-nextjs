import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "1154";

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
                Купить запчасти для погрузчиков BOBCAT в Санкт-Петербурге
              </h2>
              <p>
                Американская торговая марка Bobcat — это более чем полвека
                безупречного лидерства в сфере изготовления универсальных и
                компактных мини-погрузчиков, которые активно применяются на
                строительных площадках, в морских портах, сельскохозяйственных
                работах, а также используются коммунальными службами. Большой
                ассортимент навесного оборудования существенно увеличивает
                функциональность техники.
              </p>
              <p>
                С самого начала предприятие имело название «Melroe Manufacturing
                Company», а уже первое упоминание торговой марки Bobcat
                появилось в 1962 году, именно так назвали первый погрузчик
                компании. В большей мере популярность бренда обусловлена
                востребованностью ее первого мини-погрузчика, который изобрели
                порядка 50 лет назад в США, чтобы механизировать трудоемкие
                погрузочные работы на фермерском хозяйстве.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/bobcat-274-1154.jpg"} />
              <img src={"/images/brand/bobcat-274-1154.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности запчастей для погрузчиков BOBCAT</h2>
            <p>
              На сегодняшний день Bobcat — это один из крупнейших производителей
              строительной и сельскохозяйственной техники с широкой дилерской
              сетью, охватывающей более 75 стран мира. В процессе эксплуатации
              даже самая надежная техника нуждается в техническом обслуживании
              или ремонте, что делает актуальной покупку оригинальных запчастей.
            </p>
            <p>
              На погрузчики Бобкэт запчасти можно разделить на несколько
              ключевых категорий:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Фильтры"}
              text={
                "Масляные, топливные, воздушные, а также элементы гидравлической очистки. Эти компоненты подлежат регулярной замене и отвечают за стабильную работу силовых и гидравлических систем."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ремонтные комплекты"}
              text={
                "Включают сальники, манжеты и уплотнители, применяемые при восстановлении герметичности узлов и агрегатов."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Элементы систем"}
              text={
                "Сюда входят компоненты тормозной, топливной, гидравлической и электрической систем. Это могут быть насосы, цилиндры, проводка, контроллеры, датчики и многое другое."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={
                "Шестерни, оси, полуоси, подшипники, ступицы и другие детали, обеспечивающие надежное передвижение погрузчика и устойчивость на различных типах грунта."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Прочие запчасти"}
              text={
                "Сюда включаются элементы кабины, кузова, навесного оборудования и декоративные детали."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Большая часть деталей для погрузчиков Bobcat всегда в наличии. При
              необходимости подбора специфической детали наши специалисты могут
              предоставить полный каталог запчастей Bobcat, включая чертежи и
              схемы, что упрощает идентификацию нужного компонента.
            </p>
            <p>
              Если вы затрудняетесь с самостоятельным подбором, мы предоставляем
              профессиональную консультацию. Также возможно получение вырезки
              определенного узла из оригинального каталога Bobcat, чтобы вы
              могли точно определить необходимую деталь.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
