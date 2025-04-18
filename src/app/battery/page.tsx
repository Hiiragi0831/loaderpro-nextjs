import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { Categories } from "./components/Categories";
import { Hero } from "./components/Hero";
// import { PhotoSlider } from "./components/PhotoSlider";
import { Types } from "./components/Types";
import Link from "next/link";
import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen(
  "Тяговые аккумуляторы для погрузчиков в Санкт-Петербурге",
  "Купить тяговый аккумулятор для погрузчика вы можете на маркетплейсе СПЕЦМАШИНА. Мы предлагаем тяговые батареи под собственным брендом LOADERPRO TRACTION BATTERY произведенные на лучшем контрактном заводе Китая. В ассортименте батареи для электрических вилочных погрузчиков, электрических тележек, штабелеров, ричтраков и другой складской техники.",
);

export default function battery() {
  return (
    <main>
      <Hero />
      <Categories />
      <section className="battery__intro">
        <div className="container">
          <div className="row">
            <h1 className="h1 text-center">Тяговые аккумуляторы LOADERPRO</h1>
            <div className="battery__intro-box">
              <p>
                Тяговые аккумуляторы <b>LOADERPRO</b> используются в
                транспортных средствах с электрическим приводом, таких как
                электрические погрузчики, ричтраки, штабелеры, электрические
                тележки, подъемные платформы и другой промышленной технике.
              </p>
              <p>
                Тяговые аккумуляторные батареи <b>LOADERPRO</b> соответствуют
                стандартам BS и DIN. Покупая LOADERPRO TRACTION BATTERY, вы
                покупаете качественный продукт, соответсвующий современным
                стандартам и высоким требованиям мировых производителей и
                пользователей.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Types />
      <section className="battery__which">
        <div className="container">
          <span className="h1 text-center d-block">
            Какой аккумулятор используется в вилочном погрузчике?
          </span>
          <div className="battery__which-intro">
            <div>
              <p>
                В сфере складирования преобладающий выбор аккумуляторов для
                вилочных погрузчиков часто сводится к двум вариантам:{" "}
                <b>
                  литий-ионные (Li-Ion) аккумуляторы и свинцово-кислотные
                  аккумуляторы
                </b>
                .
              </p>
              <p>
                Эти два типа аккумуляторов являются краеугольным камнем для
                питания огромного количества вилочных погрузчиков, используемых
                на складах по всему миру.
              </p>
            </div>
            <div>
              <p>
                Их отличительные характеристики и характеристики
                производительности делают их идеальным выбором для
                удовлетворения жестких требований задач по
                погрузочно-разгрузочным работам на складах.
              </p>
              <button className="button button__primary">
                Перейти в каталог
              </button>
            </div>
          </div>
          <picture>
            <source srcSet="/images/battery/akb-type.png" />
            <img src="/images/battery/akb-type.png" alt="battery" />
          </picture>
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
                  alt="Свинцово-кислотные тяговые аккумуляторы"
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
            <div className="direction__item">
              <picture>
                <source srcSet="/images/battery/lithium-ion_traction_batteries.png" />
                <img
                  src="/images/battery/lithium-ion_traction_batteries.png"
                  alt="Литий-ионные тяговые аккумуляторы"
                />
              </picture>
              <p>Литий-ионные тяговые аккумуляторы</p>
              <Link
                href={"/battery/lithium-ion"}
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
