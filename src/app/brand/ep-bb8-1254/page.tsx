import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";

const id = "1254";

export async function generateMetadata() {
  return metaGen(
    "Запчасти для погрузчиков EP",
    " Предлагаем купить запчасти для погрузчиков EP с доставкой по всей России у проверенного поставщика в компании СПЕЦМАШИНА",
  );
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
                Запчасти EP — широкий выбор для складской техники
              </h2>
              <p>
                Погрузчики, ричтраки, штабелеры и тележки EP — это «рабочие
                лошадки» любого склада. Но даже у самой выносливой техники со
                временем изнашиваются детали. Чтобы не допустить простоев, важно
                вовремя их менять. В «Спецмашине» вы найдете запчасти EP,
                которые гарантированно подойдут вашей технике и выдержат её
                рабочий ритм.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/ep-bb8-1254.jpg"} />
              <img src={"/images/brand/ep-bb8-1254.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <picture>
              <source srcSet={"/images/brand/ep-bb8-1254-2.jpg"} />
              <img src={"/images/brand/ep-bb8-1254-2.jpg"} alt="logo" />
            </picture>
            <div className="text">
              <h2>Защитите технику от неправильных деталей</h2>
              <p>
                Неподходящая запчасть — это не только быстрый износ, но и риск
                серьёзной поломки с незапланированным простоем. Каждый
                погрузчик, ричтрак или штабелер EP имеет свои особенности,
                поэтому так важен точный подбор детали по: модели, году выпуска
                и нагрузкам.
              </p>
              <p>
                Чтобы вы не ошиблись, наши инженеры сами подберут для вашей
                техники EP нужные детали. Учитываем всё: от серийного номера до
                специфики работы именно на вашем складе. Это ваш гарантированный
                способ избежать простоев и лишних трат.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Всё для ремонта в одном месте</h2>
            <p>
              Мы закрываем любую потребность в запчастях для техники EP. В нашем
              каталоге — детали для всех систем, обеспечивающих бесперебойную
              работу вашего склада.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Подъёмные механизмы"}
              text={
                "От вилок и кареток до цепей и креплений. Всё, что отвечает за безопасное и точное поднятие грузов."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Гидравлическая система"}
              text={
                "Насосы, создающие давление, рабочие цилиндры и надежные уплотнения, которые защищают от утечек и потери мощности."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть и трансмиссия"}
              text={
                "Колеса (пневматические и полиуретановые), подшипники, амортизаторы и компоненты привода — для устойчивости и маневренности даже при полной загрузке."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Электрооборудование и управление"}
              text={
                "Датчики положения, контроллеры (платы управления), контакторы и пульты — «нервная система» техники, от которой зависит четкость команд."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Безопасность и управление"}
              text={
                "Тормозные колодки, диски, рулевые тяги и шарниры. Компоненты, от которых зависит контроль над машиной и безопасность оператора."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Расходные материалы и уплотнения"}
              text={
                "Масляные, воздушные и гидравлические фильтры; ремни ГРМ и привода; комплекты прокладок для планового ТО и ремонта."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Что выбрать — решать вам. Все запчасти доступны как в оригинальном
              исполнении (гарантия полной совместимости), так и в виде
              проверенных аналогов (способ сэкономить без потери в качестве). Мы
              поможем выбрать лучшее решение.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--4">
            <Box
              title={"Легко купить и быстро получить <sup>01</sup>"}
              text={
                "Мы сделали так, чтобы вы получили запчасти EP максимально просто и быстро. Вам не нужно разбираться в каталогах, мы берем всю работу по выбору на себя."
              }
            />
            <Box
              title={"Экспертный подбор по вашим данным <sup>02</sup>"}
              text={
                "Опишите задачу нашему инженеру или отправьте модель и серийный номер техники. Мы сами найдем в каталоге нужные запчасти, проверим их совместимость и сообщим вам о вариантах и сроках."
              }
            />
            <Box
              title={"Самовывоз со склада в СПб <sup>03</sup>"}
              text={
                "Если вам нужны запасные части срочно, вы можете забрать их лично. На нашем складе в Санкт-Петербурге заказ будет готов к выдаче в минимальные сроки, и вы сможете проверить его на месте."
              }
            />
            <Box
              title={"Отправка в ваш регион <sup>04</sup>"}
              text={
                "Для иногородних клиентов мы организуем доставку по всей России."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Нужно закрыть вопрос с ремонтом? От вас понадобиться всего один
              звонок или письмо. Дальше мы работаем за вас.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Остались вопросы? Поможем с выбором!</h2>
            <p>
              Сомневаетесь в совместимости или не можете определиться с
              запчастью ЕР? Просто позвоните нам. Наши специалисты
              проконсультируют и дадут рекомендацию, чтобы вы купили именно то,
              что нужно для быстрого и надежного ремонта.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
