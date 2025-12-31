import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";

export const metadata: Metadata = metaGen(
  "Запчасти для боковых погрузчиков от лучших производителей",
  "Предлагаем купить запчасти для боковых погрузчиков от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);
export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти для боковых погрузчиков</h1>
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
              <h2 className={"h1"}>Купить запчасти для боковых погрузчиков</h2>
              <p>
                Стандартный каталог запчастей для вилочных погрузчиков не
                подходит для боковых моделей. Разные системы выноса, усиленные
                оси, специфическая гидравлика — здесь нужен совсем другой подход
                в поиске запчастей. «СПЕЦМАШИНА» специализируется на такой
                технике. Наши менеджеры знают, как найти деталь для вашего
                погрузчика, чтобы вы не тратили время на поиск и не столкнулись
                с возвратом.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/side-loaders.jpg"} />
              <img src={"/images/spare-parts/side-loaders.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что ищут чаще всего</h2>
            <p>
              Поломки бокового погрузчика редко бывают случайными. Чаще они
              возникают в трёх узлах, которые работают под постоянной нагрузкой
              от смещённого груза.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть и управление"}
              text={
                "Подберём детали, рассчитанные на постоянные боковые нагрузки: ступицы, рулевые тяги, ШРУСы, колёсные редукторы и подшипники."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлика и система бокового выноса"}
              text={
                "Предложим гидроцилиндры выноса, насосы, распределители и клапаны, а также уплотнения и шланги высокого давления."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Рама и элементы крепления"}
              text={
                "Найдем всё для ремонта и усиления рамы: кронштейны, усилители, пальцы и втулки крепления цилиндров, рассчитанные на повышенные нагрузки."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2 items-center">
            <picture>
              <source srcSet={"/images/spare-parts/side-loaders-2.jpg"} />
              <img src={"/images/spare-parts/side-loaders-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Разница между брендами</h2>
              <p>
                Конструкция рамы и системы выноса у бокового погрузчика Baumann
                отличается от Combilift, а гидравлика Kalmar — от Hyster.
                Подбирать запчасти для погрузчика без учёта марки — это
                бесполезная трата времени. Поэтому мы работаем с техникой
                известных производителей: Baumann, Combilift, Kalmar, Hyster,
                Hyundai, Still.
              </p>
              <p>
                Чтобы найти подходящую запчасть, нужна точная информация:
                модель, серийный номер и, по возможности, каталожный номер узла.
                Менеджер «Спецмашины» сверится с техническими каталогами, чтобы
                предложить вариант для покупки, который соответствует нагрузкам
                и посадочным размерам вашей машины.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Что еще может понадобиться</h2>
            <p>
              Замена сломанного узла — это лишь часть работы. Чтобы ремонт был
              завершённым, рекомендуем заказать вместе с запчастями бокового
              погрузчика расходные материалы. Если потребуется, мы поможем
              собрать всё в один заказ.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Подберём"}
              text={
                "Шины, диски, полиуретановые колеса под покрытие и нагрузку вашей техники."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Найдем"}
              text={
                "Расходные материалы для замены: масло, уплотнительные кит-комплекты, фильтры и др."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Включим"}
              text={
                "В заказ крепежи и мелкие детали: болты, шайбы, фиксаторы на замену утерянным или повреждённым при разборке."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              С нами вы получите полный комплект для ремонта одной поставкой,
              сэкономив на логистике и избавившись от поиска недостающих мелочей
              в момент сборки.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/spare-parts/office.jpg"} />
              <img src={"/images/spare-parts/office.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Что вы получаете, обращаясь к нам</h2>
              <p>
                Работа с нами — это способ уменьшить риски и не затянуть ремонт
                из-за неподошедшей запчасти. Мы гарантируем три момента.
              </p>
              <ul>
                <li>
                  Вам не придётся гадать, подойдёт ли деталь. Мы найдём её в
                  заводских каталогах по модели и серийному номеру вашего
                  погрузчика. Вы получите ту деталь, которая нужна.
                </li>
                <li>
                  Вы увидите варианты и примете решение. Мы покажем, что есть в
                  наличии, что можно заказать, цену и время доставки.
                </li>
                <li>
                  Вы получите деталь в нужный город. «Спецмашина» работает с
                  доставкой по Санкт-Петербургу и в регионы страны. Мы
                  рассчитаем срок и способ, чтобы вы точно спланировали
                  предстоящий ремонт.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Начните ремонт с поиска запчасти</h2>
            <p>
              Сообщите нам модель и серийный номер вашего бокового погрузчика.
              Если известен каталожный номер детали — укажите и его. Мы проверим
              по каталогам и сразу ответим, что есть на складе, что «под заказ»,
              по какой цене и в какой срок.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
