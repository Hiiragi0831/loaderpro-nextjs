import Articles from "@/components/Articles";
import { Clients } from "@/components/Clients";
import { Cta } from "@/components/Cta";
import { Preference } from "@/components/Preference";
import { Team } from "@/components/Team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании СПЕЦМАШИНА",
  description:
    "СПЕЦМАШИНА - эксперт в области складской техники. Мы обеспечиваем защиту работоспособности вашей техники и создали собственный бренд LOADERPRO, название которого является собирательным из слов LOADER и PROTECTION, что в переводе означает ЗАЩИТА ПОГРУЗЧИКА. Так и родился наш слоган - ВАША ТЕХНИКА ПОД НАДЕЖНОЙ ЗАЩИТОЙ.",
};

export default function About() {
  return (
    <main>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="about__hero">
              <h1>О нас</h1>
              <p>
                Добро пожаловать в &quot;СПЕЦМАШИНА&ldquo; – компанию, где
                профессионалы своего дела создают уникальную экосистему для
                эффективного и прозрачного взаимодействия с партнёрами. Мы
                являемся эксклюзивным дистрибьютором торгово-производственного
                бренда LOADERPRO, название которого является составным из слов
                «Loader» и «Protection», что в переводе означает «Защита
                погрузчика».
              </p>
              <h2 className="h1">Наша миссия</h2>
              <p>
                Наша миссия – создать экосистему эффективной защиты
                работоспособности техники, в которой всем нашим партнёрам легко
                и удобно работать, достигать своих целей и расти вместе с нами.
                Мы стремимся сделать сервис максимально простым, понятным и
                выгодным для всех участников.
              </p>
              <mark>
                <p>Ваша техника под надежной защитой!</p>
              </mark>
            </div>
            <picture className="about__pic">
              <source srcSet="/images/about/distributor.jpg" />
              <img src="/images/about/distributor.jpg" alt="О нас" />
            </picture>
          </div>
        </div>
      </section>
      <section className="about-preference">
        <div className="container">
          <div className="row">
            <Preference title="7 лет" text="опыт работы" bg="white" />
            <Preference title="55 000 000" text="товарных позиций" bg="1" />
            <Preference title="1 616" text="брендов в портфеле" bg="2" />
            <Preference title="6 000" text="довольных клиентов" bg="primary" />
            <Preference
              title="12 месяцев"
              text="средний срок гарантии"
              bg="white"
            />
            <Preference title="3" text="страны ввоза" bg="3" />
          </div>
        </div>
      </section>
      <Team />
      <Clients />
      <section className="about-requisite">
        <div className="container">
          <div className="section-title">
            <span className="h1">Реквизиты ООО «СПЕЦМАШИНА»</span>
          </div>
          <div className="table">
            <div className="table__item">
              <p>Наименование контрагента</p>
              <p>ООО «СПЕЦМАШИНА»</p>
            </div>
            <div className="table__item">
              <p>Юридический и почтовый адрес</p>
              <p>
                196240, г. Санкт-Петербург, ул. Кубинская, д. 75 к. 1 литера А,
                помещ. 3-Н, ком. 25 (Офис 216)
              </p>
            </div>
            <div className="table__item">
              <p>Фактический адрес</p>
              <p>
                198320, г. Санкт-Петербург, Красное село, ул. Юных Пионеров, д.
                38Б
              </p>
            </div>
            <div className="table__item">
              <p>Телефон</p>
              <p>8 (800) 55-11-996</p>
            </div>
            <div className="table__item">
              <p>e-mail</p>
              <p>buh@loaderpro.ru</p>
            </div>
            <div className="table__item">
              <p>ИНН/КПП</p>
              <p>7810959038 / 781001001</p>
            </div>
            <div className="table__item">
              <p>ОГРН</p>
              <p>1227800152590</p>
            </div>
            <div className="table__item">
              <p>ОКВЭД</p>
              <p>45.32</p>
            </div>
            <div className="table__item">
              <p>ОКПО</p>
              <p>54144451</p>
            </div>
            <div className="table__item">
              <p>ОКАТО</p>
              <p>40284000</p>
            </div>
            <div className="table__item">
              <p>БАНК</p>
              <p>в АО «Тинькофф Банк»</p>
            </div>
            <div className="table__item">
              <p>Р/С</p>
              <p>40702810710001237184</p>
            </div>
            <div className="table__item">
              <p>БИК</p>
              <p>044525974</p>
            </div>
            <div className="table__item">
              <p>К/С</p>
              <p>30101810145250000974</p>
            </div>
            <div className="table__item">
              <p>Генеральный директор</p>
              <p>Сокирка Юлия Виталиевна - действующий на основании Устава</p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
