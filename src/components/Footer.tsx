import Link from "next/link";
import IconLogo from "@/icons/logo.svg"
import IconPhone from "@/icons/phone.svg"
import IconMail from "@/icons/mail.svg"
import IconVk from "@/icons/vk.svg"
import IconTg from "@/icons/tg.svg"
import IconWt from "@/icons/wt.svg"
import IconYoutube from "@/icons/youtube.svg"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <IconLogo />
          </div>
          <div className="footer__ya">
            <iframe
              src="https://yandex.ru/sprav/widget/rating-badge/144706740321?type=rating&theme=dark"
              width="150"
              height="50"
            />
          </div>
          <div className="footer__phone">
            <IconPhone />
            <p>
              <a href="tel:88005511996">8 (800) 551-19-96</a> |{" "}
              <a href="tel:+78126421256">+7 (812) 642-12-56</a>
            </p>
          </div>
          <div className="footer__mail">
            <IconMail />
            <p>
              <a href="mailto:zakaz@loaderpro.ru">zakaz@loaderpro.ru</a>
            </p>
          </div>
          <div className="footer__socials">
            <a className="footer__social" href="https://vk.com/loaderproru">
              <IconVk />
            </a>
            <a className="footer__social" href="https://t.me/loaderpro">
              <IconTg />
            </a>
            <a className="footer__social" href="https://wa.me/79643421256">
              <IconWt />
            </a>
            <a className="footer__social" href="https://www.youtube.com/@loaderpro">
              <IconYoutube />
            </a>
          </div>
        </div>
        <div className="footer__main">
          <div className="footer__links">
            <p className="footer__links-head">Партнёрам</p>
            <div className="footer__links-row">
              <Link className="footer__link" href="/">
                Главная
              </Link>
              <Link className="footer__link" href="/vacancy">
                Вакансии
              </Link>
              <Link className="footer__link" href="/about">
                О компании
              </Link>
              <Link className="footer__link" href="/privacy-policy">
                Конфиденциальность
              </Link>
              <Link className="footer__link" href="/delivery-payment">
                Оплата и доставка
              </Link>
              <Link className="footer__link" href="/contact">
                Контакты
              </Link>
            </div>
          </div>
          <div className="footer__links">
            <p className="footer__links-head">Товары</p>
            <div className="footer__links-row">
              <Link className="footer__link" href="/warehouse-equipment">
                Складская техника
              </Link>
              <Link className="footer__link" href="/spare-parts">
                Запасные части
              </Link>
              <Link className="footer__link" href="/battery">
                Тяговые аккумуляторы
              </Link>
              <Link className="footer__link" href="/tires-rims">
                Шины и диски
              </Link>
              <Link className="footer__link" href="/oils-lubricants">
                Масла и смазки
              </Link>
              <Link className="footer__link" href="/polyurethane-wheels">
                Полиуретановые колеса
              </Link>
            </div>
          </div>
          <div className="footer__links">
            <p className="footer__links-head">Услуги</p>
            <div className="footer__links-row footer__links-row--1">
              <Link className="footer__link" href="#">
                Подбор запасных частей
              </Link>
              <Link className="footer__link" href="/tire-service">
                Шиномонтаж
              </Link>
              <Link className="footer__link" href="/polyurethane-surfacing">
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
