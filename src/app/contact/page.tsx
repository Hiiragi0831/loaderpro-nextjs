import Articles from "@/components/Articles";
import { Cta } from "@/components/Cta";
import { VideoGallery } from "@/components/VideoGallery";

export default function Contact() {
  return (
    <main>
      <section className="contact">
        <div className="container">
          <div className="contact__title">
            <h1>Контакты</h1>
          </div>
          <div className="row">
            <div className="contact__info">
              <div className="contact__item">
                <small>Телефон:</small>
                <a href="tel:+78005511996">8 (800) 551-19-96</a>
              </div>
              <div className="contact__item">
                <small>Для заявок:</small>
                <a href="mailto:zakaz@loaderpro.ru">zakaz@loaderpro.ru</a>
              </div>
              <div className="contact__item">
                <small>Сотрудничество:</small>
                <a href="mailto:zakup@loaderpro.ru">zakup@loaderpro.ru</a>
              </div>
              <div className="contact__info-social">
                <a
                  href="https://wa.me/79643421256"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture>
                    <source srcSet="/images/contact/wh.png" />
                    <img src="/images/contact/wh.png" alt="wh" />
                  </picture>
                </a>
                <a
                  href="https://t.me/loaderpro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture>
                    <source srcSet="/images/contact/tg.png" />
                    <img src="/images/contact/tg.png" alt="tg" />
                  </picture>
                </a>
                <a
                  href="https://vk.com/loaderproru"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture>
                    <source srcSet="/images/contact/vk.png" />
                    <img src="/images/contact/vk.png" alt="vk" />
                  </picture>
                </a>
                <a
                  href="https://www.youtube.com/@loaderpro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <picture>
                    <source srcSet="/images/contact/youtube.png" />
                    <img src="/images/contact/youtube.png" alt="youtube" />
                  </picture>
                </a>
              </div>
            </div>
            <div className="contact__social">
              <a
                className="contact__qr"
                href="https://wa.me/79643421256"
                target="_blank"
                rel="noreferrer"
              >
                <picture>
                  <source srcSet="/images/contact/qr-w.png" />
                  <img src="/images/contact/qr-w.png" alt="qr-w" />
                </picture>
                <p>
                  Ответы на
                  <br /> любые вопросы
                </p>
              </a>
              <a
                className="contact__qr"
                href="https://t.me/loaderpro"
                target="_blank"
                rel="noreferrer"
              >
                <picture>
                  <source srcSet="/images/contact/qr-t.png" />
                  <img src="/images/contact/qr-t.png" alt="qr-t" />
                </picture>
                <p>Акции, скидки, чат профессионалов</p>
              </a>
              <a
                className="contact__qr"
                href="https://vk.com/loaderproru"
                target="_blank"
                rel="noreferrer"
              >
                <picture>
                  <source srcSet="/images/contact/qr-v.png" />
                  <img src="/images/contact/qr-v.png" alt="qr-v" />
                </picture>
                <p>Полезная информация, жизнь компании и новости</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="contact__pickup">
        <div className="container">
          <div className="row">
            <picture>
              <source srcSet="/images/contact/pickup-01.jpg" />
              <img src="/images/contact/pickup-01.jpg" alt="photo" />
            </picture>
            <div className="contact__pickup-text">
              <p>Самовывоз осуществляется по адресу:</p>
              <p>
                <span>
                  г. Санкт-Петербург, Красное Село, улица Юных Пионеров, 38Б
                </span>
              </p>
              <small>Пн-Пт 09:00-17:00</small>
              <small>Отправки по России осуществляются ежедневно!</small>
            </div>
            <picture>
              <source srcSet="/images/contact/pickup-02.jpg" />
              <img src="/images/contact/pickup-02.jpg" alt="photo" />
            </picture>
          </div>
        </div>
      </section>
      <Cta />
      <VideoGallery />
      <Articles limit={4} />
    </main>
  );
}
