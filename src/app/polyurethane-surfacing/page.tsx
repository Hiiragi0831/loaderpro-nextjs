import { Achievement } from "@/components/Achievement";
import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { PolyurethaneCategory } from "@/components/PolyurethaneCategory";
import { VideoBlock } from "@/components/VideoBlock";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Восстановление полиуретановых колес",
  description:
    "Заказать услугу восстановления полиуретановых колес вы можете в компании СПЕЦМАШИНА. Мы более 10 лет успешно восстанавливаем полиуретановые колеса для наших партнеров. В числе наших клиентов крупнейшие складские комплексы и производственные площадки России.",
};

export default function PolyurethaneSurfacing() {
  return (
    <main>
      <PolyurethaneCategory />
      <section className="polyurethane__hero">
        <div className="container">
          <div className="row">
            <div className="polyurethane__hero-surfacing">
              <h1>Наплавка полиуретаном</h1>
              <p>
                Восстановление полиуретановых колес - наплавка полиуретаном,
                ремонт старых колёс под ключ!
              </p>
              <Cta
                title={"Заказать консультацию"}
                text={"Получите восстановленные колёса уже на этой неделе!"}
                class={"inner columns"}
              />
              <span className="h1">Восстановление полиуретановых колес</span>
              <p>
                Зачастую колеса, у которых есть повреждения контактного слоя,
                выбрасываются. Большинство не знают, что существует
                восстановление полиуретановых колес и роликов, за счет чего
                мощно существенно сэкономить деньги на замену деталей и время на
                подбор подходящего комплектующего.
              </p>
              <p>
                Компания «СПЕЦМАШИНА» оказывает услуги по восстановлению
                полиуретанового покрытия на колесах для разнообразной складской
                техники – ричтраки, самоходные тележки, штабелёры,
                палетоперевозчики, роклы, комплектовщики заказов, узкопроходные
                штабелёры с высокой грузоподъемностью.
              </p>
            </div>
            <div className="polyurethane__hero-img">
              <picture className={"for-desktop"}>
                <source srcSet={`/images/polyurethane/wheels-1.png`} />
                <img
                  src={`/images/polyurethane/wheels-1.png`}
                  alt=""
                  decoding="async"
                />
              </picture>
              <picture>
                <source srcSet={`/images/polyurethane/naplavka.gif`} />
                <img
                  src={`/images/polyurethane/naplavka.gif`}
                  alt=""
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="achievements">
        <div className="container">
          <div className="section-title">
            <span className="h1">
              Как происходит <br className="for-desktop" /> наплавка
              полиуретаном?
            </span>
            <p>
              Восстановление полиуретановых роликов подразумевает механическую
              обработку изделий, которая предусматривает очистку детали от
              непригодного покрытия и нанесение нового слоя полиуретана.
              Зачастую эта процедура проводится в 4 этапа:
            </p>
          </div>
          <div className="row">
            <Achievement
              icon="/images/polyurethane/icon-01.png"
              title="Очистка колес"
              text="От старого полиуретанового или же резинового покрытия"
            />
            <Achievement
              icon="/images/polyurethane/icon-02.png"
              title="Предварительная подготовка"
              text="Наносится специальный клей, просушивается деталь в камере и прочее"
            />
            <Achievement
              icon="/images/polyurethane/icon-03.png"
              title="Полиуретановый слой"
              text="На поверхность изделия наносится полиуретановый слой"
            />
            <Achievement
              icon="/images/polyurethane/icon-04.png"
              title="Полимеризация"
              text="Данный этап нужен, чтобы новый слой на детали застыл"
            />
            <Cta
              title={"Оставьте заявку на восстановление!"}
              text={null}
              class={"inner columns"}
            />
          </div>
        </div>
      </section>
      <section className="polyurethane__col">
        <div className="container">
          <div className="row">
            <p>
              Изначально кажется, что наплавка полиуретаном это очень простой
              процесс, но на практике все не так легко, поскольку существуют
              различные марки полиуретана и для каждой необходимо использование
              определенной технологии, отдельная температура выдержки детали в
              печи. Также требуется своя температура застывания полиуретанового
              слоя. Если нарушить технологию, то полиуретан на молекулярном
              уровне потеряет свою эластичность и износоустойчивость.
            </p>
            <p>
              Следует знать, что молекулярная структура материала образуется на
              первых минутах смешивания из определенного количества
              полиуретановых составляющих. В целом, существует множество
              технологичных нюансов, поэтому стоит заказать восстановление
              полиуретановых колес у профессионалов, которые имеют многолетний
              опыт работы в данной сфере.
            </p>
          </div>
        </div>
      </section>
      <section className="polyurethane__col">
        <div className="container">
          <div className="row">
            <div className="polyurethane__text">
              <span className="h1">
                Преимущества наплавки колес полиуретаном
              </span>
              <p>
                Наплавка колес полиуретаном позволяет получить деталь, которая
                будет практически идентичной новой по многочисленным свойствам –
                нагрузка, внешний вид, период эксплуатации. Наплавка
                осуществляется по определенной технологии, а получаемое
                полиуретановое покрытие обладает превосходными эксплуатационными
                свойствами. Восстановление полиуретановых колес характеризуется
                несколькими положительными качествами.
              </p>
              <p>
                За счет нанесения полиуретанового покрытия на колеса удастся
                предотвратить скорый износ изделий, поскольку на их поверхности
                образуется защитный слой. Также данное покрытие уменьшит шум
                роликов и вибрацию во время эксплуатации. Высокая стойкость
                полиуретана к абразивному износу и отличные эксплуатационные
                качества (диапазон рабочего температурного режима составляет
                -60/+120 градусов С, стойкость к агрессивной среде, химическим
                средствам и высокому давлению) обеспечивают долгий срок службы
                роликам. Также это позволяет сэкономить на регулярной замене
                деталей.
              </p>
            </div>
            <div className="lead">
              <ul>
                <li>существенная экономия средств;</li>
                <li>небольшое время на реставрацию деталей;</li>
                <li>
                  нет необходимости покупать дорогие запчасти или искать
                  оригинальные комплектующие;
                </li>
                <li>
                  повышенный уровень адгезии полиуретана с поверхностью
                  нанесения;
                </li>
                <li>максимально однородное покрытие;</li>
                <li>
                  возможность наносить многослойное покрытие с разнообразной
                  степенью твердости;
                </li>
                <li>
                  полиуретановый слой прекрасно противостоит повышенным
                  нагрузкам;
                </li>
                <li>
                  нет риска отслойки защитного покрытия на протяжении долгого
                  времени.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="polyurethane__image">
        <div className="container">
          <picture>
            <source srcSet={`/images/advantage2.jpg`} />
            <img src={`/images/advantage2.jpg`} alt="" decoding="async" />
          </picture>
        </div>
      </section>
      <section className="polyurethane__col">
        <div className="container">
          <span className="h1 text-center">
            Где заказать качественное восстановление полиуретановых колес?
          </span>
          <div className="row">
            <p>
              Качественная наплавка полиуретана на ролики должна проводиться под
              контролем специалистов с использованием специального оборудования.
              Для получения качественной услуги по восстановлению
              полиуретанового слоя на деталях стоит обратиться в компанию
              «СПЕЦМАШИНА». Мы осуществляем наплавку полиуретана с разной
              степенью жесткости в соответствии с индивидуальными чертежами.
            </p>
            <p>
              Если Вас интересует цена восстановления полиуретановых колес, то
              на нашем сайте можете заполнить специальную форму с указанием всех
              необходимых характеристик изделия, и специалисты компании свяжутся
              с Вами в ближайшее время и скажут стоимость. Если у Вас остались
              какие-либо вопросы, то можете написать нашим менеджерам или
              заказать обратный звонок.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <picture>
            <source srcSet={`/images/polyurethane/after-before.png`} />
            <img
              src={`/images/polyurethane/after-before.png`}
              alt=""
              decoding="async"
            />
          </picture>
        </div>
      </section>
      <section className="leadcta">
        <div className="container">
          <div className="row">
            <div className="leadcta__text">
              <span className="h1">
                <p>Зачем покупать новые?</p>
                <p>Восстановите старые!</p>
                <mark>Экономия до 70%!</mark>
              </span>
              <p>
                Зачастую колеса, у которых есть повреждения контактного слоя,
                выбрасываются. Большинство не знают, что существует
                восстановление полиуретановых колес и роликов, за счет чего
                мощно существенно сэкономить деньги на замену деталей и время на
                подбор подходящего комплектующего.
              </p>
              <p>
                Компания «СПЕЦМАШИНА» оказывает услуги по восстановлению
                полиуретанового покрытия на колесах для разнообразной складской
                техники – ричтраки, самоходные тележки, штабелёры,
                палетоперевозчики, роклы, комплектовщики заказов, узкопроходные
                штабелёры с высокой грузоподъемностью.
              </p>
              {/*<Link className="button button__outline" href={""}>Перейти</Link>*/}
            </div>
            <div className="leadcta__video">
              <VideoBlock
                id={"57e9efd2ebc2bf490c9b34a530e1c9dd"}
                className={"title-hidden"}
              />
            </div>
          </div>
        </div>
      </section>
      <Articles limit={4} />
    </main>
  );
}
