import { Link } from "react-router-dom";

import Articles from "../../components/Articles";
import { Cta } from "../../components/Cta";
import { Categories } from "./components/Categories";
import { Hero } from "./components/Hero";
import { Slider } from "./components/Slider";
import { Types } from "./components/Types";

const Battery = () => {
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
                Тяговые аккумуляторы <b>LOADERPRO</b> используются в транспортных средствах с электрическим приводом,
                таких как электрические погрузчики, ричтраки, штабелей, электрические тележки, подъемные платформы и
                другой промышленной технике.
              </p>
              <p>
                Тяговые аккумуляторные батареи <b>LOADERPRO</b> соответствуют стандартам BS и DIN.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Types />
      <section className="battery__which">
        <div className="container">
          <span className="h1 text-center d-block">Какой аккумулятор используется в вилочном погрузчике?</span>
          <div className="battery__which-intro">
            <div>
              <p>
                В сфере складирования преобладающий выбор аккумуляторов для вилочных погрузчиков часто сводится к двум
                вариантам: <b>литий-ионные (Li-Ion) аккумуляторы и свинцово-кислотные аккумуляторы</b>.
              </p>
              <p>
                Эти два типа аккумуляторов являются краеугольным камнем для питания огромного количества вилочных
                погрузчиков, используемых на складах по всему миру.
              </p>
            </div>
            <div>
              <p>
                Их отличительные характеристики и характеристики производительности делают их идеальным выбором для
                удовлетворения жестких требований задач по погрузочно-разгрузочным работам на складах.
              </p>
              <button className="button button__primary">Перейти в каталог</button>
            </div>
          </div>
          <picture>
            <source srcSet="/assets/images/battery/akb-type.png" />
            <img src="/assets/images/battery/akb-type.png" alt="" decoding="async" />
          </picture>
        </div>
      </section>
      <section className="direction">
        <div className="container">
          <div className="row">
            <div className="direction__item">
              <picture>
                <source srcSet="/assets/images/battery/lead-acid_traction_batteries.png" />
                <img src="/assets/images/battery/lead-acid_traction_batteries.png" alt="" decoding="async" />
              </picture>
              <p>Свинцово-кислотные тяговые аккумуляторы </p>
              <Link to="/battery/lead-acid" className="button button__primary">
                Перейти
              </Link>
            </div>
            <div className="direction__item">
              <picture>
                <source srcSet="/assets/images/battery/lithium-ion_traction_batteries.png" />
                <img src="/assets/images/battery/lithium-ion_traction_batteries.png" alt="" decoding="async" />
              </picture>
              <p>Литий-ионные тяговые аккумуляторы</p>
              <Link to="/battery/lithium-ion" className="button button__primary">
                Перейти
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Slider />
      <Articles limit={4} />
    </main>
  );
};

export default Battery;
