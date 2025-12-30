import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import Box from "@/app/brand/components/Box";
import IconBolt from "@/icons/bolt.svg";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";

export const metadata: Metadata = metaGen(
  "Запчасти для электророхли от лучших производителей",
  "Предлагаем купить запчасти для электророхли от лучших мировых производителей и поставщиков с доставкой по всей России у компании СПЕЦМАШИНА",
);
export default function SpareParts() {
  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="section-title">
            <h1 className="h1">Запчасти для электророхли</h1>
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
              <p className={"h1"}>Купить запчасти для электророхли</p>
              <p>
                Когда ломается электророхля, искать запчасть «примерно
                подходящую» под заводской аналог — значит гарантировать себе
                повторный простой. «Спецмашина» работает иначе. Вам не нужно
                выбирать из сотен позиций. Достаточно обратиться за помощью к
                нашим менеджерам. Они точно подскажут, какая деталь нужна, и
                найдут её в наших каталогах. А вам не придётся через неделю
                снова искать ту же запчасть, но уже в срочном порядке.
              </p>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/spare-parts/electric-shoes.jpg"} />
              <img src={"/images/spare-parts/electric-shoes.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Три узла, которые нельзя игнорировать в электророхле</h2>
            <p>
              Для долговечного ремонта нужно правильно подобрать детали для трёх
              систем.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Управление и электроника"}
              text={
                "Контроллеры, датчики, контакторы. При подборе мы проверяем и совместимость разъёмов, и версии прошивок, чтобы новая деталь корректно встроилась в систему."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Питание и автономность"}
              text={
                "Тяговые аккумуляторы и зарядные устройства. Мы сопоставляем параметры вашей техники с характеристиками АКБ, чтобы зарядка была оптимальной и не сокращала срок службы батареи."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ходовая часть"}
              text={
                "Ведущие и опорные колёса. Наши специалисты учитывают тип покрытия (бетон, асфальт, антистатик) и среднюю нагрузку, чтобы колёса изнашивались равномерно и не требовали частой замены."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Мы подбираем запчасти для электророхли не «вслепую», а сверяясь с
              моделью вашей техники и условиями работы.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2 items-center">
            <picture>
              <source srcSet={"/images/spare-parts/electric-shoes-2.jpg"} />
              <img
                src={"/images/spare-parts/electric-shoes-2.jpg"}
                alt="logo"
              />
            </picture>
            <div className="text">
              <h2>Запчасти для электророхли Jungheinrich, Toyota и других</h2>
              <p>
                В каталоге «СПЕЦМАШИНА» можно найти детали для техники
                Jungheinrich, STILL, Toyota, Linde, Yale, Hangcha, Noblelift,
                Heli и др. Представленный в магазине охват брендов покрывает
                запросы большинства наших клиентов.
              </p>
              <p>
                Подбор любой запчасти всегда начинается с одного вопроса: «Какая
                у вас точная модель и год выпуска?» Без этой информации поиск
                превращается в угадывание, а это риск повторного ремонта техники
                после установки новой запчасти. Поэтому мы просим предоставлять
                эти данные в обязательном порядке, чтобы результат был
                предсказуемым, а ремонт — окончательным.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Поломка одной детали указывает на проблемы с другими</h2>
            <p>
              В электророхлях износ редко бывает точечным. Стертые ведущие
              колеса увеличивают нагрузку на опорные и их подшипники. Проблемы с
              управлением говорят о печальном состоянии клемм и разъемов.
              Поэтому мы рекомендуем не ограничиваться заменой только сломанного
              узла.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--3">
            <Box
              icon={<IconBolt />}
              title={"Меняете ведущие колеса?"}
              text={
                "Добавьте в заказ опорные и смазку для подшипников, чтобы продлить срок службы всего узла."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Нужен новый электронный блок?"}
              text={
                "Одновременно замените предохранители и клеммы в его цепи, чтобы защитить новую запчасть от старых проблем."
              }
            />
            <Box
              icon={<IconBolt />}
              title={"Ищете аккумулятор?"}
              text={
                "Убедитесь в совместимости зарядного устройства. Добавьте тестер для контроля, так вы сохраните ресурс батареи."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              Заказывая всё в одном месте, вы сокращаете итоговую стоимость
              (одна доставка вместо трёх) и ускоряете ремонт (все детали
              приходят одной партией и сразу готовы к использованию).
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
              <h2>Почему со «СПЕЦМАШИНА» проще найти нужные запчасти</h2>
              <p>
                Потому что мы придерживаемся трёх ключевых правил работы, за что
                нас ценят клиенты.
              </p>
              <ol>
                <li>
                  Подбираем только то, что вам действительно нужно, и что
                  встанет на место без использования молотка.
                </li>
                <li>Объясняем доходчиво, чтобы вы знали за что платите.</li>
                <li>Не навязываем ничего лишнего при покупке.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Не нашли то, что искали?</h2>
            <p>
              Позвоните нам, назовите модель и год выпуска электророхли. Этого
              достаточно, чтобы мы начали поиск по каталогам и предложили вам
              варианты подходящих запчастей.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
