import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <svg>
              <use xlinkHref="/__spritemap#sprite-logo" />
            </svg>
          </div>
          <div className="footer__ya">
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/144706740321?type=rating&theme=dark"
              width="150"
              height="50"
              frameborder="0"
            />
          </div>
          <div className="footer__phone">
            <svg>
              <use xlinkHref="/__spritemap#sprite-phone" />
            </svg>
            <p>
              <a href="tel:88005511996">8 (800) 551-19-96</a> |{" "}
              <a href="tel:+78126421256">+7 (812) 642-12-56</a>
            </p>
          </div>
          <div className="footer__mail">
            <svg>
              <use xlinkHref="/__spritemap#sprite-mail" />
            </svg>
            <p>
              <a href="mailto:zakaz@loaderpro.ru">zakaz@loaderpro.ru</a>
            </p>
          </div>
          <div className="footer__socials">
            <a className="footer__social" href="https://vk.com/loaderproru">
              <svg>
                <use xlinkHref="/__spritemap#sprite-vk" />
              </svg>
            </a>
            <a className="footer__social" href="https://t.me/loaderpro">
              <svg>
                <use xlinkHref="/__spritemap#sprite-tg" />
              </svg>
            </a>
            <a className="footer__social" href="https://wa.me/79643421256">
              <svg>
                <use xlinkHref="/__spritemap#sprite-wt" />
              </svg>
            </a>
            <a className="footer__social" href="https://www.youtube.com/@loaderpro">
              <svg>
                <use xlinkHref="/__spritemap#sprite-youtube" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__main">
          <div className="footer__links">
            <p className="footer__links-head">Партнёрам</p>
            <div className="footer__links-row">
              <Link className="footer__link" to="/">
                Главная
              </Link>
              <Link className="footer__link" to="/vacancy">
                Вакансии
              </Link>
              <Link className="footer__link" to="/about">
                О компании
              </Link>
              <Link className="footer__link" to="/privacy-policy">
                Конфиденциальность
              </Link>
              <Link className="footer__link" to="/delivery-payment">
                Оплата и доставка
              </Link>
              <Link className="footer__link" to="/contact">
                Контакты
              </Link>
            </div>
          </div>
          <div className="footer__links">
            <p className="footer__links-head">Товары</p>
            <div className="footer__links-row">
              <Link className="footer__link" to="/warehouse-equipment">
                Складская техника
              </Link>
              <Link className="footer__link" to="/spare-parts">
                Запасные части
              </Link>
              <Link className="footer__link" to="/battery">
                Тяговые аккумуляторы
              </Link>
              <Link className="footer__link" to="/tires-rims">
                Шины и диски
              </Link>
              <Link className="footer__link" to="/oils-lubricants">
                Масла и смазки
              </Link>
              <Link className="footer__link" to="/polyurethane-wheels">
                Полиуретановые колеса
              </Link>
            </div>
          </div>
          <div className="footer__links">
            <p className="footer__links-head">Услуги</p>
            <div className="footer__links-row footer__links-row--1">
              <Link className="footer__link" to="#">
                Подбор запасных частей
              </Link>
              <Link className="footer__link" to="/tire-service">
                Шиномонтаж
              </Link>
              <Link className="footer__link" to="/polyurethane-surfacing">
                Восстановление колес
              </Link>
              {/*<Link className="footer__link" to="/repair-maintenance">*/}
              {/*  Ремонт и обслуживание*/}
              {/*</Link>*/}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Все права защищены. 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
