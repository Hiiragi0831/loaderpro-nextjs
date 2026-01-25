import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";

const id = "289";

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
                Купить запчасти для ричстакеров Sany для в Санкт-Петербурге
              </h2>
              <p>
                Компания SANY — один из крупнейших китайских производителей
                спецтехники и строительного оборудования. Основанная в 1989
                году, сегодня SANY занимает 6-е место в мире по объемам выпуска
                и признана надежным поставщиком техники высокого класса. Главный
                офис расположен неподалеку от Пекина, а продукция компании
                экспортируется во многие страны мира.
              </p>
              <p>
                В числе популярных моделей бренда — ричстакеры SANY, которые
                широко применяются для работы с контейнерами, трубами,
                лесоматериалами и интермодальными грузами. Эти машины отличаются
                впечатляющими техническими характеристиками и высокой
                производительностью.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/sany-km3-289.jpg"} />
              <img src={"/images/brand/sany-km3-289.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/sany-km3-289-2.jpg"} />
              <img src={"/images/brand/sany-km3-289-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Технические особенности ричстакеров SANY</h2>
              <p>Характеристики ричстакеров SAN:</p>
              <ul>
                <li>Грузоподъемность до 45 тонн.</li>
                <li>Возможность подъема контейнеров на высоту до 15 метров.</li>
                <li>
                  Современная гидравлическая система с автоматическим
                  определением массы груза и выбором оптимальной мощности.
                </li>
                <li>
                  Встроенный бортовой компьютер для диагностики и контроля
                  состояния техники в режиме реального времени.
                </li>
                <li>
                  Эргономичное управление с удобной кабиной оператора и
                  интуитивно понятными рычагами.
                </li>
              </ul>
              <p>
                Ричстакеры SANY обеспечивают высокую маневренность, прочность
                конструкции и отличный обзор для оператора, что особенно важно
                при работе с грузами, расположенными на значительном расстоянии.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Почему важны оригинальные запчасти для ричстакеров SANY?</h2>
            <p>
              Для поддержания эффективной и безопасной работы техники необходимы
              качественные комплектующие. Запчасти низкого качества могут
              привести к поломкам, простоям и значительным финансовым потерям.
            </p>
            <p>
              Использование оригинальных или сертифицированных деталей
              гарантирует:
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box title={"Долговечность работы агрегатов <sup>01</sup>"} />
            <Box title={"Снижение риска аварийных ситуаций<sup>02</sup>"} />
            <Box
              title={
                "Сохранение технических характеристик оборудования <sup>03</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Запчасти SANY в компании «СПЕЦМАШИНА»</h2>
            <p>
              Компания «СПЕЦМАШИНА» предлагает полный ассортимент запчастей для
              ричстакеров SANY. В нашем каталоге вы найдете расходные материалы,
              комплектующие для гидравлики, трансмиссии, электрооборудования и
              других узлов.
            </p>
            <p>Мы обеспечиваем:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={
                "Быстрый подбор деталей по модели и серийному номеру техники <sup>01</sup>"
              }
            />
            <Box
              title={"Наличие популярных запчастей на складе<sup>02</sup>"}
            />
            <Box title={"Оперативную доставку по всей России <sup>03</sup>"} />
            <Box
              title={
                "Консультации специалистов для правильного выбора комплектующих <sup>04</sup>"
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Оформление заказа и доставка</h2>
            <p>
              Купить запчасти для ричстакеров SANY можно из любого региона
              России. У «СПЕЦМАШИНА» есть склад в Санкт-Петербурге и развитая
              логистическая сеть, что позволяет доставлять товары максимально
              быстро и удобно.
            </p>
            <p>
              Свяжитесь с нашими менеджерами для консультации или оформите заказ
              на сайте loaderpro.ru. Мы поможем сохранить вашу технику в
              отличном состоянии и обеспечим бесперебойную работу вашего склада.
            </p>
            <p>
              «СПЕЦМАШИНА» — запчасти для ричстакеров SANY высокого качества по
              доступным ценам!
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
