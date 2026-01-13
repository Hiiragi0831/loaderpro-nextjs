import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

const id = "17";

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
                Купить запчасти для ричстакеров FANTUZZI в Санкт-Петербурге
              </h2>
              <p>
                Компания Fantuzzi-Reggiane — это известный производитель
                грузоподъемного оборудования, родом из Италии. Бренд Fantuzzi
                был основан в 1960 году инженером Лючиано Фантуцци, который по
                сей день руководит компанией. С момента основания предприятие
                специализировалось на выпуске перегрузочной техники для
                различных отраслей промышленности. Уже с середины 60-х годов
                акцент был сделан на портовое оборудование.
              </p>
              <p>
                В 1973 году на рынок вышел первый ричстакер Fantuzzi. С тех пор
                компания выпустила сотни единиц контейнерной техники, поставив
                её в десятки стран по всему миру. Сегодня промышленная группа
                Fantuzzi-Reggiane занимается производством специализированной
                техники, включая:
              </p>
              <ul>
                <li>вилочные погрузчики Fantuzzi,</li>
                <li>контейнерные штабелеры,</li>
                <li>козловые краны,</li>
                <li>причальные перегружатели.</li>
              </ul>
              <p>
                Группа объединяет 8 фирм и 6 крупных производственных
                предприятий, оснащённых современными технологическими линиями.
                Сеть из 30 представительств по всему миру обеспечивает
                оперативную работу с клиентами и дилерами.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/fantuzzi-b71-17.jpg"} />
              <img src={"/images/brand/fantuzzi-b71-17.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности запчастей для ричстакеров FANTUZZI</h2>
            <p>
              Современные ричстакеры Fantuzzi представлены в виде 7 моделей и 2
              семейств техники, имеющих грузоподъемностью от 10 до 45 тонн. Для
              обслуживания и ремонта этих машин необходимы качественные и
              оригинальные запчасти. В продаже можно найти:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигатели и комплектующие"}
              text={"Насосы, стартеры, генераторы, поршни."}
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлические элементы"}
              text={"Шланги, клапаны, цилиндры, гидробаки."}
            />
            <Box
              icon={<IconBolt />}
              title={"Электрика"}
              text={"Панели управления, датчики, провода, блоки ЭБУ."}
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={"Мосты, колеса, тормозные системы, ступицы."}
            />
            <Box
              icon={<IconBolt />}
              title={"Кабины и элементы управления"}
              text={"Стекла, сиденья, джойстики, рулевые колонки."}
            />
            <Box
              icon={<IconBolt />}
              title={"Стреловое оборудование"}
              text={"Тяги, направляющие, каретки и механизмы подъема."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              На складе компании «СПЕЦМАШИНА» в Санкт-Петербурге всегда есть
              широкий ассортимент запчастей как для популярных моделей Fantuzzi,
              так и для редких модификаций, включая снятые с производства.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для ричстакеров FANTUZZI</h2>
            <p>
              Выбор комплектующих для ричстакеров должен учитывать несколько
              ключевых факторов:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Совместимость <sup>01</sup>"}
              text={
                "Перед покупкой важно точно определить модель ричстакера, его серийный номер и год выпуска."
              }
            />
            <Box
              title={"Оригинальность детали <sup>02</sup>"}
              text={
                "Только оригинальные запчасти гарантируют долгий срок службы и безопасную эксплуатацию."
              }
            />
            <Box
              title={"Наличие на складе <sup>03</sup>"}
              text={
                "Срочные поставки возможны только при наличии деталей в наличии — у «СПЕЦМАШИНЫ» это одно из главных преимуществ."
              }
            />
            <Box
              title={"Документация <sup>04</sup>"}
              text={
                "Если требуемой позиции нет на сайте, специалисты компании предложат каталоги для подбора аналога или оригинальной позиции."
              }
            />
            <Box
              title={"Консультация <sup>05</sup>"}
              text={
                "Менеджеры «СПЕЦМАШИНЫ» помогут подобрать точную запчасть, учитывая все технические параметры и особенности эксплуатации."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания «СПЕЦМАШИНА» предлагает запчасти как для новых, так и для
              старых моделей ричстакеров Fantuzzi. Большинство комплектующих
              всегда в наличии в Санкт-Петербурге, что обеспечивает быструю
              доставку.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
