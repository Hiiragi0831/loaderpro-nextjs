import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "1042";

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
                Купить запчасти для ричстакеров TEREX в Санкт-Петербурге
              </h2>
              <p>
                Корпорация Terex занимается разработкой и выпуском подъемного
                оснащения и техники для переработки материалов. Бренд заслужил
                широкое признание благодаря производству портовых погрузчиков и
                башенных кранов Terex Cranes. Особое внимание потребителей
                привлекли ричстакеры TEREX — высокомощные машины, активно
                применяемые не только в портах и логистических терминалах, но и
                в строительстве, металлургии, особенно для транспортировки
                крупногабаритных стальных рулонов.
              </p>
              <p>
                Производитель предлагает 6 различных моделей контейнерных
                погрузчиков, которые отличаются:
              </p>
              <ul>
                <li>
                  использованием высокопрочной стали, устойчивой к изгибам и
                  скручиваниям без риска деформации;
                </li>
                <li>
                  удобным доступом ко всем выдвижным механизмам со стороны
                  задней части стрелы — это упрощает техническое обслуживание;
                </li>
                <li>
                  возможностью эксплуатации в различных температурных условиях,
                  включая экстремально низкие температуры.
                </li>
              </ul>
              <p>
                Ричстакеры Terex обеспечивают быструю и безопасную
                транспортировку груженых и пустых контейнеров. Модели с
                грузоподъемностью до 45 тонн позволяют укладывать до 5–6 ярусов
                в первом ряду. Оснащение комплектующими ведущих мировых
                производителей (двигатели Volvo, Cummins, трансмиссия Dana)
                делает технику исключительно надежной.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/terex-f74-1042.jpg"} />
              <img src={"/images/brand/terex-f74-1042.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Разновидности запчастей для ричстакеров TEREX</h2>
            <p>
              Для стабильной работы ричстакеров необходим своевременный подбор и
              замена оригинальных или совместимых комплектующих. В компании
              «СПЕЦМАШИНА» в Санкт-Петербурге вы можете купить разнообразные
              запчасти для ричстакеров TEREX, в том числе:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Мотор"}
              text={"Моторы и навесное оборудование (Volvo, Cummins);"}
            />
            <Box
              icon={<IconBolt />}
              title={"Трансмиссия"}
              text={"Узлы трансмиссии (комплектующие Dana);"}
            />
            <Box
              icon={<IconBolt />}
              title={"Тормозные механизмы"}
              text={
                "Тормозные механизмы, гидроцилиндры, шланги высокого давления;"
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Элементы мачты"}
              text={"Стрелы, элементы мачты, телескопические выдвижные модули;"}
            />
            <Box
              icon={<IconBolt />}
              title={"Фильтры"}
              text={"Фильтры, прокладки, уплотнители и ремкомплекты;"}
            />
            <Box
              icon={<IconBolt />}
              title={"ЭБУ"}
              text={"Электрические и электронные блоки управления."}
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              На складе всегда поддерживается наличие востребованных позиций,
              что позволяет оперативно реагировать на потребности клиентов.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как выбрать запчасти для ричстакеров TEREX</h2>
            <p>
              Грамотный выбор запасных частей гарантирует долговечную и
              безопасную эксплуатацию ричстакера. При выборе стоит учитывать
              следующие рекомендации:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Идентификация техники <sup>01</sup>"}
              text={
                "Укажите модель погрузчика, номер рамы, технические параметры. Это поможет избежать ошибок при подборе."
              }
            />
            <Box
              title={"Оригинал <sup>02</sup>"}
              text={
                "Оригинальные комплектующие от TEREX или их проверенные аналоги обеспечивают совместимость и длительный срок службы."
              }
            />
            <Box
              title={"Каталог <sup>03</sup>"}
              text={
                "Специалисты компании «СПЕЦМАШИНА» предоставят полный каталог запчастей Terex Cranes с указанием артикулов и технических характеристик."
              }
            />
            <Box
              title={"Поддержка <sup>04</sup>"}
              text={
                "Наши менеджеры помогут подобрать нужную запчасть, даже если у вас нет точного наименования — достаточно сообщить технические параметры."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Компания «СПЕЦМАШИНА» — надежный поставщик оригинальных и
              совместимых запчастей для ричстакеров TEREX в Санкт-Петербурге.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
