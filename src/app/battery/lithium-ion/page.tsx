import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { Hero } from "../components/Hero";
import { Types } from "../components/Types";
import Link from "next/link";
import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen(
  "Преимущества использования литий-ионной тяговой батареи.",
  "На этой странице вы найдёте подробную информацию о литий-ионных тяговых батареях. Мы расскажем об их особенностях, характеристиках и применении в различных областях. Вы узнаете, как выбрать подходящую батарею для ваших нужд и обеспечить её долгую и надёжную работу.",
);

export default function lithiumIon() {
  return (
    <main>
      <Hero />
      <Types />
      <section className="battery__lithiumion">
        <div className="container">
          <div className="battery__lithiumion-info">
            <div>
              <h1>Литий-ионные тяговые аккумуляторы</h1>
              <blockquote>
                <p>
                  LOADERPRO TRACTION BATTERY, преобразованные из
                  свинцово-кислотных в литий-ионные, представляют собой
                  экономичное решение, повышающее производительность.
                </p>
                <p>
                  Переходя от традиционных свинцово-кислотных аккумуляторов к
                  литий-ионным, предприятия могут получить выгоду от повышения
                  эффективности, увеличения срока службы и снижения затрат на
                  техническое обслуживание.
                </p>
                <p>
                  Эти аккумуляторы позволяют увеличить время безотказной работы
                  и повысить производительность техники на электрической тяге,
                  что в конечном итоге приводит к повышению производительности и
                  эксплуатационной эффективности.
                </p>
              </blockquote>
              <a className="button button__primary">Перейти в каталог</a>
            </div>
            <picture>
              <source srcSet="/images/battery/87f3a6404c391a24d4b1dfac012a6d01.png" />
              <img
                src="/images/battery/87f3a6404c391a24d4b1dfac012a6d01.png"
                alt="battery"
              />
            </picture>
          </div>
          <div className="battery__lithiumion-advantages">
            <p className="h1">Индивидуальные преимущества</p>
            <div className="row">
              <div className="battery__lithiumion-advantage">
                <span className="h1">Доступна индивидуальная настройка</span>
                <p>
                  Для особых нужд мы предлагаем варианты индивидуальной
                  настройки, включая решения высокой емкости, такие как 48 В,
                  500 Ач и выше.
                </p>
              </div>
              <div className="battery__lithiumion-advantage">
                <span className="h1">Защита окружающей среды</span>
                <p>
                  В наших батареях используется технология LiFePO4, известная
                  своей экологичностью. Они нетоксичны, не загрязняют окружающую
                  среду и не содержат редкоземельных металлов, что соответствует
                  современным тенденциям обеспечения более чистой окружающей
                  среды.
                </p>
              </div>
              <div className="battery__lithiumion-advantage">
                <span className="h1">Комплексные преимущества</span>
                <p>
                  Ощутите многочисленные преимущества, включая экономию средств,
                  увеличенный срок службы, повышенную безопасность и
                  экологическую устойчивость. Наши аккумуляторы отличаются
                  высокой плотностью энергии и превосходной эффективностью
                  системы, что обеспечивает быструю зарядку и снижение затрат на
                  техническое обслуживание.
                </p>
              </div>

              <div className="battery__lithiumion-advantage">
                <mark>
                  Кроме того, попрощайтесь с хлопотами долива электролита,
                  типичными для свинцово-кислотных альтернатив.
                </mark>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="direction">
        <div className="container">
          <div className="row">
            <div className="direction__item">
              <picture>
                <source srcSet="/images/battery/lead-acid_traction_batteries.png" />
                <img
                  src="/images/battery/lead-acid_traction_batteries.png"
                  alt="battery"
                />
              </picture>
              <p>Тяговые аккумуляторы LOADERPRO</p>
              <Link href={"/battery"} className="button button__primary">
                Перейти
              </Link>
            </div>
            <div className="direction__item">
              <picture>
                <source srcSet="/images/battery/lead-acid_traction_batteries.png" />
                <img
                  src="/images/battery/lead-acid_traction_batteries.png"
                  alt="battery"
                />
              </picture>
              <p>Свинцово-кислотные тяговые аккумуляторы </p>
              <Link
                href={"/battery/lead-acid"}
                className="button button__primary"
              >
                Перейти
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      {/*<PhotoSlider />*/}
      <Articles limit={4} />
    </main>
  );
}
