import { Link } from "react-router-dom";

import Articles from "../../components/Articles";
import { Cta } from "../../components/Cta";
import { Hero } from "./components/Hero";
import { Slider } from "./components/Slider";
import { Types } from "./components/Types";

export const LeadAcid = () => {
  return (
    <main>
      <Hero />
      <Types />
      <section className="battery__leadacid">
        <div className="container">
          <div className="battery__leadacid-title">
            <h1>Свинцово-кислотные тяговые аккумуляторы LOADERPRO TRACTION BATTERY:</h1>
            <div>
              <a className="button button__primary"> Перейти в каталог</a>
            </div>
          </div>
          <q>
            <p>
              Вместе с батареями будет предоставлено профессиональное руководство по эксплуатации. Доступны как{" "}
              <b>сухие</b>, так и <b>залитые батареи</b>, выбор зависит от вас. В сухие батареи необходимо будет залить
              кислоту при получении батарей, для залитых батарей необходимо просто зарядить батареи перед
              использованием.
            </p>
          </q>
          <div class="battery__leadacid-specifications">
            <ul>
              <li>Высококачественная свинцово-кислотная батарея;</li>
              <li>Более длительный срок службы:</li>
              <li>1500-кратный срок службы при 80% DOD;</li>
              <li>Достаточная мощность: более высокая стабильность при достаточной мощности;</li>
              <li>Широкий диапазон размеров аккумуляторов PzS и PzB;</li>
              <li>Высокопроизводительные трубчатые положительные пластины;</li>
              <li>Автоматическая система полива воды - меньше обслуживания;</li>
              <li>Соответствует стандарту IEC 60254, CE, ISO9001 и ISO14001.</li>
            </ul>
            <picture>
              <source srcSet="/assets/images/battery/ce0c309ef31bf939a9ca4d068ca5c4f2.png" />
              <img src="/assets/images/battery/ce0c309ef31bf939a9ca4d068ca5c4f2.png" alt="" decoding="async" />
            </picture>
          </div>
          <q>
            <p>
              Чтобы лучше обеспечить безопасность батерей при транспортировке, мы упаковываем их{" "}
              <b>в экологически чистые, удобные и эффективные деревянные ящики.</b>
            </p>
          </q>
          <div className="battery__leadacid-attention">
            <picture>
              <source srcSet="/assets/images/battery/5d43bba877eb0f188daa01a07ff8a2ba.png" />
              <img src="/assets/images/battery/5d43bba877eb0f188daa01a07ff8a2ba.png" alt="" decoding="async" />
            </picture>
            <h2 className="h1">Обратите внимание</h2>
            <div class="row">
              <article>
                <span>
                  <i>
                    <b>1</b>
                  </i>{" "}
                  Используйте по назначению
                </span>
                <p>
                  Пожалуйста, используйте батарею вилочного погрузчика в соответствии с руководством по эксплуатации
                  LOADERPRO TRACTION BATTERY, не перезаряжайте и не разряжайте батарею чрезмерно, а также не заряжайте
                  батарею вилочного погрузчика недостаточно, пожалуйста, заряжайте батарею постоянным током регулярно, в
                  противном случае это уменьшит емкость батареи и её срок службы.
                </p>
              </article>
              <article>
                <span>
                  <i>
                    <b>2</b>
                  </i>{" "}
                  Проверяйте уровень емкости
                </span>
                <p>
                  Пожалуйста, проверяйте уровень емкости батареи каждую неделю, для проверки необходим профессиональный
                  инженер или рабочий. Убедитесь, что уровень электролита в аккумуляторе не ниже минимального уровня, в
                  противном случае это может привести к перегреву и сгоранию аккумулятора.
                </p>
              </article>
              <article>
                <span>
                  <i>
                    <b>3</b>
                  </i>{" "}
                  Необходима особая вода
                </span>
                <p>
                  Для заливки воды необходимо использовать подходящую воду для аккумулятора вилочного погрузчика. Если
                  смешать примеси, это может привести к саморазряду аккумулятора, перегреву или даже отравляющему газу.
                  Не заливайте слишком много воды и следите за тем, чтобы поверхность аккумулятора была чистой и сухой,
                  в противном случае это приведет к выходу электролита из батареи, короткому замыканию и т. д.
                </p>
              </article>
            </div>
          </div>
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
              <p>Тяговые аккумуляторы LOADERPRO</p>
              <Link to="/battery" className="button button__primary">
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
