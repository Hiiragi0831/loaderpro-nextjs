import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { Hero } from "../components/Hero";
// import { PhotoSlider } from "../components/PhotoSlider";
import { Types } from "../components/Types";
import Link from "next/link";
import type { Metadata } from "next";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen(
  "Тяговые свинцовые аккумуляторы в Санкт-Петербурге",
  "На этой странице вы найдёте подробную информацию о свинцовых тяговых аккумуляторах. Мы расскажем об их особенностях, характеристиках и применении. Вы узнаете, как выбрать подходящий аккумулятор для ваших нужд и обеспечить его долгую и надёжную работу.",
);

export default function leadAcid() {
  return (
    <main>
      <Hero />
      <Types />
      <section className="battery__leadacid">
        <div className="container">
          <div className="battery__leadacid-title">
            <h1>
              Свинцово-кислотные тяговые аккумуляторы LOADERPRO TRACTION
              BATTERY:
            </h1>
            <div>
              <a className="button button__primary"> Перейти в каталог</a>
            </div>
          </div>
          <q>
            <p>
              Вместе с батареями будет предоставлено профессиональное
              руководство по эксплуатации. Доступны как <b>сухие</b>, так и{" "}
              <b>залитые батареи</b>, выбор зависит от вас. В сухие батареи
              необходимо будет залить кислоту при получении батарей, для залитых
              батарей необходимо просто зарядить батареи перед использованием.
            </p>
          </q>
          <div className="battery__leadacid-specifications">
            <ul>
              <li>Высококачественная свинцово-кислотная батарея;</li>
              <li>Более длительный срок службы:</li>
              <li>1500-кратный срок службы при 80% DOD;</li>
              <li>
                Достаточная мощность: более высокая стабильность при достаточной
                мощности;
              </li>
              <li>Широкий диапазон размеров аккумуляторов PzS и PzB;</li>
              <li>Высокопроизводительные трубчатые положительные пластины;</li>
              <li>Автоматическая система полива воды - меньше обслуживания;</li>
              <li>
                Соответствует стандарту IEC 60254, CE, ISO9001 и ISO14001.
              </li>
            </ul>
            <picture>
              <source srcSet="/images/battery/ce0c309ef31bf939a9ca4d068ca5c4f2.png" />
              <img
                src="/images/battery/ce0c309ef31bf939a9ca4d068ca5c4f2.png"
                alt="battery"
              />
            </picture>
          </div>
          <q>
            <p>
              Чтобы лучше обеспечить безопасность батерей при транспортировке,
              мы упаковываем их{" "}
              <b>
                в экологически чистые, удобные и эффективные деревянные ящики.
              </b>
            </p>
          </q>
          <div className="battery__leadacid-attention">
            <picture>
              <source srcSet="/images/battery/5d43bba877eb0f188daa01a07ff8a2ba.png" />
              <img
                src="/images/battery/5d43bba877eb0f188daa01a07ff8a2ba.png"
                alt="battery"
              />
            </picture>
            <h2 className="h1">Обратите внимание</h2>
            <div className="row">
              <article>
                <span>
                  <i>
                    <b>1</b>
                  </i>{" "}
                  Используйте по назначению
                </span>
                <p>
                  Пожалуйста, используйте батарею вилочного погрузчика в
                  соответствии с руководством по эксплуатации LOADERPRO TRACTION
                  BATTERY, не перезаряжайте и не разряжайте батарею чрезмерно, а
                  также не заряжайте батарею вилочного погрузчика недостаточно,
                  пожалуйста, заряжайте батарею постоянным током регулярно, в
                  противном случае это уменьшит емкость батареи и её срок
                  службы.
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
                  Пожалуйста, проверяйте уровень емкости батареи каждую неделю,
                  для проверки необходим профессиональный инженер или рабочий.
                  Убедитесь, что уровень электролита в аккумуляторе не ниже
                  минимального уровня, в противном случае это может привести к
                  перегреву и сгоранию аккумулятора.
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
                  Для заливки воды необходимо использовать подходящую воду для
                  аккумулятора вилочного погрузчика. Если смешать примеси, это
                  может привести к саморазряду аккумулятора, перегреву или даже
                  отравляющему газу. Не заливайте слишком много воды и следите
                  за тем, чтобы поверхность аккумулятора была чистой и сухой, в
                  противном случае это приведет к выходу электролита из батареи,
                  короткому замыканию и т. д.
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
                <source srcSet="/images/battery/lithium-ion_traction_batteries.png" />
                <img
                  src="/images/battery/lithium-ion_traction_batteries.png"
                  alt="battery"
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
