import { Achievement } from "@/components/Achievement";
import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { VideoBlock } from "@/components/VideoBlock";

export default function RepairMaintenance() {
  return (
    <main>
      <section className="repairmaintenance__hero">
        <div className="container">
          <picture className="for-desktop">
            <source srcSet={`/images/repairmaintenance/hero.jpg`} />
            <img
              src={`/images/repairmaintenance/hero.jpg`}
              alt="repairmaintenance"
            />
          </picture>
          <picture className="for-devices">
            <source srcSet={`/images/repairmaintenance/hero-m.jpg`} />
            <img
              src={`/images/repairmaintenance/hero-m.jpg`}
              alt="repairmaintenance"
            />
          </picture>
        </div>
      </section>
      <section className="repairmaintenance__about">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <h1 className="h1">
                Ремонт и техобслуживание автопогрузчиков и внутрискладской
                техники в СПБ
              </h1>
              <p>
                Наши специалисты помогут с&nbsp;поломкой любой сложности,
                проведут диагностику технического состояния техники от&nbsp;всех
                производителей. Мы&nbsp;предлагаем выезд и&nbsp;техническое
                обслуживание погрузчиков с&nbsp;гарантией выполненных работ,
                а&nbsp;также скидки для крупных автопарков.
              </p>
              <Cta
                title={"Заказать консультацию"}
                text={"Получите восстановленные колёса уже на этой неделе!"}
                class={"inner columns"}
              />
            </div>
            <div className="image">
              <picture>
                <source srcSet={`/images/repairmaintenance/about.png`} />
                <img src={`/images/repairmaintenance/about.png`} alt="about" />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section className="repairmaintenance__express">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <span className="h1">
                Квалифицированный ремонт вилочных погрузчиков в СПБ
              </span>
              <p>
                Своевременное обслуживание погрузчиков минимизирует простой
                техники и&nbsp;продлевает её&nbsp;эксплуатацию без ремонта.
                Соблюдение правил и&nbsp;регулярное техобслуживание
                по&nbsp;рекомендациям производителя позволяет избежать
                экстренных ситуаций и&nbsp;заранее планировать ремонт. Это даёт
                возможность своевременно обнаружить износ деталей, найти
                проблемные места и&nbsp;провести профилактику, исключая отказ
                оборудования и&nbsp;повышая безопасность работы.
              </p>
              <p>
                Срок эксплуатации вилочных погрузчиков зависит не&nbsp;только
                от&nbsp;их&nbsp;качества, но&nbsp;и&nbsp;от&nbsp;своевременного
                ухода. При возникновении неисправностей лучше всего обратиться
                к&nbsp;профессионалам с&nbsp;многолетним опытом. Наши
                специалисты проведут квалифицированный ремонт вилочных
                погрузчиков в&nbsp;Санкт-Петербурге, устраняя поломки любой
                сложности и&nbsp;проводя диагностику техники всех
                производителей, чтобы техника как можно скорее была готова
                к&nbsp;работе.
              </p>
            </div>
            <div className="image">
              <VideoBlock
                id={"16c0f9067cd5d466d617ec313c0a535a"}
                className={"title-hidden"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="achievements">
        <div className="container">
          <div className="section-title">
            <span className="h1">
              Сервис вилочных <br className="for-desktop" /> погрузчиков
            </span>
            <p>
              Компания &laquo;СПЕЦМАШИНА&raquo; предлагает плановый
              и&nbsp;срочный ремонт вилочных погрузчиков на&nbsp;территории
              клиента. Мы работаем с&nbsp;дизельными, электрическими
              и&nbsp;газобензиновыми погрузчиками всех марок.
            </p>
          </div>
          <div className="row">
            <Achievement
              icon="/images/repairmaintenance/icon-01.png"
              title="Весь список деталей"
              text="Ремонт мачт, управляемых мостов и других деталей от разных производителей"
            />
            <Achievement
              icon="/images/repairmaintenance/icon-02.png"
              title="Любые виды ремонта"
              text="От мелких до капитальных"
            />
            <Achievement
              icon="/images/repairmaintenance/icon-03.png"
              title="Опытная команда"
              text="Способная восстановить даже самые изношенные узлы техники"
            />
            <Achievement
              icon="/images/repairmaintenance/icon-04.png"
              title="Плановая замена"
              text="Продажа и установка запчастей для плановой замены"
            />
            <Cta
              title={null}
              text={
                "Наши клиенты ценят наше сотрудничество за экономию времени и денег. \n" +
                "Стоимость ремонта можно уточнить после консультации и осмотра техники специалистом."
              }
              class={"inner columns"}
            />
          </div>
        </div>
      </section>
      <section className="repairmaintenance__express">
        <div className="container">
          <div className="row col-2">
            <div className="image">
              <picture>
                <source srcSet={`/images/repairmaintenance/reglament.png`} />
                <img
                  src={`/images/repairmaintenance/reglament.png`}
                  alt="reglament"
                />
              </picture>
            </div>
            <div className="text">
              <span className="h1">Регламент обслуживания погрузчика</span>
              <p>
                Регулярное техническое обслуживание вилочных погрузчиков
                позволит технике служить верой и правдой на протяжении многих
                лет. Данное оборудование, как и обычный автомобиль, требует
                регулярной замены масла, фильтров, смазывания цепей и прочих
                манипуляций. Сервисное обслуживание погрузчиков проводится по
                определенному регламенту:
              </p>
              <div className="lead">
                <span className="h1">ТО 250</span>
                <p>
                  мелкий технический осмотр каждые 250 часов эксплуатации
                  техники.
                </p>
              </div>
              <div className="lead">
                <span className="h1">ТО 500</span>
                <p>
                  промежуточное ТО, подразумевающее проверку безопасности работы
                  погрузчиков каждые 3-6 месяцев работы или спустя 500 часов
                  использования.
                </p>
              </div>
              <div className="lead">
                <span className="h1">ТО 1000</span>
                <p>
                  капитальное ТО, которое необходимо проводить спустя 1000 часов
                  работы или не позже одного года после прошлого ТО.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="repairmaintenance__maintenance">
        <div className="container">
          <div className="row col-2">
            <div className="text">
              <span className="h1">Обслуживание дизельного погрузчика</span>
              <p>
                Обслуживание подразумевает проверку всех главных узлов
                оборудования. Наибольшего внимания во время ТО погрузочной
                техники требуют следующие элементы:
              </p>
              <span className="h3">Двигатель</span>
              <p>
                Проводится замена масла, масляного фильтра, очищается система
                охлаждения мотора, проверяются индикаторы, шум двигателя, цвет
                выхлопного газа, регулируются обороты и т.д.
              </p>
              <span className="h3">Тяговая батарея</span>
              <p>
                Обслуживание АКБ погрузчиков подразумевает очистку аккумулятора,
                проверку корпуса на целостность и отсутствие повреждений,
                измерение концентрации электролита и прочее. Также во время ТО
                необходимо проверять исправность зарядного устройства для АКБ.
              </p>
              <span className="h3">Колеса</span>
              <p>
                Проверяется нет ли повреждений, деформации колес, при
                необходимости ставятся новые пневматические шины. Если
                повреждений нет, то нужно проверить давление, не изношен ли
                слишком протектор, нет ли зазора на подшипниках ступиц, а также
                заменить смазку на них.
              </p>
              <span className="h3">Тормозная система</span>
              <p>
                Удостоверьтесь, что тормозная система исправна и срабатывает
                правильно. В случае нужды проводится регулировка, доливается
                тормозная жидкость, проверяются тормозные накладки, барабаны и
                прочее.
              </p>
              <span className="h3">Гидравлическая система</span>
              <p>
                Проверяются клапаны, цилиндры, насосы, распределитель,
                концентрация и чистота гидравлического масла, прочность фитингов
                и соединительных муфт и многое другое.
              </p>
              <p>
                Мелкое ТО включает определенный список задач, которые
                выполняются повторно с дополнительными манипуляциями во время
                промежуточного. А капитальное обслуживание аккумуляторов
                погрузчика и прочих элементов техники подразумевает повторное
                выполнение всех действий мелкого и промежуточного ТО.
              </p>
              <p className="for-devices">
                Проведение данных процедур стоит доверить профессионалам,
                которые имеют опыт работы в данной сфере и будут придерживаться
                всех требований.
              </p>
            </div>
            <div className="image">
              <picture>
                <source srcSet={`/images/repairmaintenance/maintenance.jpg`} />
                <img
                  src={`/images/repairmaintenance/maintenance.jpg`}
                  alt="maintenance"
                />
              </picture>
              <p className="for-desktop">
                Проведение данных процедур стоит доверить профессионалам,
                которые имеют опыт работы в данной сфере и будут придерживаться
                всех требований.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="repairmaintenance__price">
        <div className="container">
          <div className="row col-2">
            <div className="image">
              <picture>
                <source srcSet={`/images/repairmaintenance/price.jpg`} />
                <img src={`/images/repairmaintenance/price.jpg`} alt="price" />
              </picture>
            </div>
            <div className="text">
              <span className="h1">
                В какую цену обойдется ремонт автопогрузчиков?
              </span>
              <p>
                Основным преимуществом компании «СПЕЦМАШИНА», помимо бригады
                профессионалов, является то, что во время ремонта мы используем
                оригинальные комплектующие для вилочных погрузчиков или аналоги
                от проверенных брендов (перед починкой мы согласовываем с
                клиентом, какие запчасти использовать). Все запчасти у нас в
                наличии, поэтому ремонт автопогрузчиков в Спб займет минимум
                времени. Цены на ремонт вилочных погрузчиков от нашей компании
                следующие:
              </p>
              <div className="lead">
                <p>
                  <span>Выезд бригады в пределах КАД</span>{" "}
                  <span>1200 руб.</span>
                </p>
              </div>
              <div className="lead">
                <p>
                  <span>За пределы города</span> <span>25 руб./км</span>
                </p>
              </div>
              <div className="lead">
                <p>
                  <span>Диагностика</span> <span>1200 руб.</span>
                </p>
              </div>
              <div className="lead">
                <p>
                  <span>Нормочас</span> <span>1200 руб.</span>
                </p>
              </div>
              <p>
                Обычно обслуживание проводится на месте эксплуатации
                оборудования, а ремонт газового погрузчика и прочей складской
                техники утверждается в зависимости от сложности поломки.
                Небольшие неисправности можно устранить сразу на месте за нашей
                сервисной бригадой, а уже серьезные ремонтные работы могут
                потребовать больше времени и использования определенных деталей.
              </p>
              <p>
                Отдавайте предпочтение профессионалам компании «СПЕЦМАШИНА»,
                только так Вы можете быть уверенными на все 100% в качестве
                обслуживания и минимальном простое оборудования.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <Articles limit={4} />
    </main>
  );
}
