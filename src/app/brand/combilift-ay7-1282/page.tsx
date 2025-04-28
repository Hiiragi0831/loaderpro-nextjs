import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import IconBolt from "@/icons/bolt.svg";
import Box from "@/app/brand/components/Box";

export async function generateMetadata() {
  const id = "591";
  const brand = await api.getPageBrand(id);

  return metaGen(brand.title, brand.description);
}

export default async function SpareParts() {
  const id = "1282";
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
                Купить запчасти для погрузчиков COMBILIFT в Санкт-Петербурге
              </h2>
              <p>
                Торговая марка Combilift была основана в 1998 году в городе
                Монахан, Ирландия. Ее создателями стали инженеры Мартин Максикар
                и Роберт Моффетт, которые объединили свои знания и опыт для
                разработки инновационного погрузочного оборудования. Основной
                специализацией бренда стали машины для работы с длинномерными
                грузами.
              </p>
              <p>
                За короткий срок компания стала мировым лидером в производстве
                специализированных погрузчиков. Сегодня техника Combilift
                экспортируется более чем в 50 стран, а в эксплуатации находится
                свыше 6000 единиц оборудования. Бренд ежегодно инвестирует 7%
                доходов в исследования и разработку, создавая безопасные,
                экономичные и эффективные решения для грузоперевозок в сложных
                условиях.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/page-combilift.png"} />
              <img src={"/images/brand/page-combilift.png"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что надо знать</h2>
            <p>
              Погрузчики Combilift — это инновационные машины, сочетающие в себе
              свойства вилочного погрузчика, ричтрака и бокового погрузчика. Их
              главные преимущества:
            </p>
            <ol>
              <li>
                Высокая маневренность и возможность движения в четырех
                направлениях.
              </li>
              <li>
                Экономия пространства на складе благодаря оптимизированному
                способу работы с грузами.
              </li>
              <li>Возможность обработки длинномерных материалов.</li>
              <li>
                Надежность и долговечность благодаря использованию качественных
                комплектующих.
              </li>
            </ol>
            <p>
              Комбинированный функционал делает технику Combilift универсальной
              для работы в логистике, строительстве и складской деятельности.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Какие запчасти использует погрузчик COMBILIFT</h2>
            <p>
              Для бесперебойной работы погрузчиков Combilift требуется
              регулярное техническое обслуживание и замена расходных материалов.
              Среди ключевых запчастей:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Двигательные системы"}
              text={"Топливные насосы, форсунки, фильтры."}
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={"Колеса, оси, ступицы."}
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлическая система"}
              text={"Насосы, цилиндры, клапаны."}
            />
            <Box
              icon={<IconBolt />}
              title={"Электроника"}
              text={"Датчики, реле, контроллеры."}
            />
            <Box
              icon={<IconBolt />}
              title={"Кабина оператора"}
              text={"Сиденья, рычаги управления,  защитные стекла."}
            />
          </div>
        </div>
      </section>
      <section className="title">
        <div className="container">
          <div className="row">
            <h2 className="h1">
              Как выбрать запчасти для погрузчиков Combilift?
            </h2>
            <p>
              Выбор запчастей для погрузчиков Combilift требует ответственного
              подхода, так как от их качества зависит надежность и срок службы
              техники. Чтобы обеспечить бесперебойную работу оборудования, при
              покупке комплектующих важно учитывать несколько ключевых факторов:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              title={"Оригинальность <sup>01</sup>"}
              text={
                "Предпочтение следует отдавать оригинальным запчастям от производителя, так как они полностью соответствуют техническим требованиям. Однако проверенные аналоги от надежных поставщиков могут стать более экономичным вариантом при сохранении качества и долговечности."
              }
            />
            <Box
              title={"Наличие сертификатов <sup>02</sup>"}
              text={
                "Подтверждает качество и соответствие запчасти установленным стандартам. Сертифицированные детали проходят строгий контроль и обеспечивают безопасную эксплуатацию погрузчика."
              }
            />
            <Box
              title={"Каталожный номер <sup>03</sup>"}
              text={
                "Использование официального номера детали облегчает поиск нужной запчасти, исключает ошибки при заказе и гарантирует точное соответствие требованиям производителя."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Грамотный подход к выбору запчастей для погрузчиков Combilift
              позволяет продлить срок их службы, предотвратить внеплановые
              поломки и обеспечить бесперебойную работу техники. Наша компания
              предлагает широкий ассортимент оригинальных и аналоговых запчастей
              для погрузчиков Combilift. В случае отсутствия нужной детали в
              наличии возможен заказ по каталогу с оперативной доставкой по всей
              России.
            </p>
          </div>
        </div>
      </section>
      <Cta
        title={"Бесплатная консультация"}
        text={
          "Обращайтесь к нам прямо сейчас, получите бесплатную консультацию и индивидуальный прайс-лист на детали для различных погрузчиков KALMAR."
        }
      />
      <Articles limit={4} />
    </main>
  );
}
