import { api } from "@/services/api";
import { metaGen } from "@/utils/metaGen";
import CatalogProducts from "@/components/CatalogProducts";
import Link from "next/link";
import { Cta } from "@/components/Cta";
import Articles from "@/components/Articles";
import Box from "@/app/brand/components/Box";

const id = "1218";

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
                Купить запчасти для погрузчиков MANITOU в Санкт-Петербурге
              </h2>
              <p>
                Французский бренд Manitou занимается выпуском вилочных и
                телескопических погрузчиков для эксплуатации в лесной,
                строительной, транспортной и складской сферах.
              </p>
              <p>
                Техника под маркой Manitou появилась на рынке еще в 1958 году,
                когда инженеры компании модернизировали обычный трактор, добавив
                к нему гидравлическое управление и подъемную мачту. С тех пор
                производитель стал одним из лидеров в области высотной и
                погрузочной техники.
              </p>
              <p>
                Для выполнения работ на высоте выпускается целый ряд машин с
                разной грузоподъемностью, фронтальным вылетом и высотой подъема.
                Вилочные погрузчики Manitou отличают такие характеристики, как:
              </p>
              <ul>
                <li>плавный и стабильный ход;</li>
                <li>прочная сварная моноблочная рама;</li>
                <li>защищенные мосты для максимальной надежности;</li>
                <li>экономичные и мощные двигатели Perkins.</li>
              </ul>
              <Link href="/contact" className="button button__primary">
                Оставить заявку
              </Link>
            </div>
            <picture>
              <source srcSet={"/images/brand/manitou-261-1218.jpg"} />
              <img src={"/images/brand/manitou-261-1218.jpg"} alt="logo" />
            </picture>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>О предприятии</h2>
            <p>
              В зависимости от модели, техника оснащается полным или частичным
              управлением колес, а также доступна модификация с боковым
              поворотом. Расширить функциональность можно за счет навесного
              оборудования, которое также выпускает компания Manitou.
            </p>
            <p>
              Кроме традиционных вилочных погрузчиков Manitou, доступны версии с
              поворотной башней и высокой проходимостью, что делает их
              универсальными помощниками на любой строительной или складской
              площадке.
            </p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <h2>Как подобрать запчасти Manitou</h2>
            <p>
              Чтобы вилочный или телескопический погрузчик Manitou работал
              стабильно, эффективно и без простоев, крайне важно ответственно
              подходить к выбору запасных частей и комплектующих. Неправильно
              подобранная деталь может не только не подойти, но и стать причиной
              серьезных поломок и финансовых потерь.
            </p>
            <p>Что нужно знать:</p>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="row row--2">
            <Box
              title={"Подбор запчастей <sup>01</sup>"}
              text={
                "Подобрать запчасть для погрузчика Manitou можно по серийному номеру. Это основной параметр, который позволяет идентифицировать необходимую деталь с высокой точностью. Указав серийный номер, вы исключаете ошибки при подборе запчастей, особенно если речь идет о специфичных узлах или деталях, которые различаются даже в рамках одной линейки моделей."
              }
            />
            <Box
              title={"Тип автопогрузчика и ее конфигурация <sup>02</sup>"}
              text={
                "Производитель Manitou выпускает разнообразную спецтехнику: телескопические погрузчики, модели с поворотной башней, стандартные вилочные погрузчики и пр."
              }
            />
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="text">
            <p>
              В каталоге компании «СПЕЦМАШИНА» вы найдете как оригинальные
              запчасти Маниту, рекомендованные производителем, так и
              качественные сертифицированные аналоги, например, аккумуляторы
              Manitao полностью соответствующие требованиям по прочности,
              ресурсу и надежности.
            </p>
            <p>
              Все запчасти проходят проверку и соответствуют стандартам
              качества, чтобы обслуживание Manitou и ремонт погрузчиков Monitou
              были максимально продуктивными.
            </p>
            <p>
              Если вы ищете, где купить запчасти для погрузчиков Manitou в
              Санкт-Петербурге — обращайтесь в компанию «СПЕЦМАШИНА». Мы
              обеспечим надежность вашей техники и минимизируем риски простоев
              на производстве.
            </p>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
