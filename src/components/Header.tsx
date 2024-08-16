import Link from "next/link";
import IconLogo from "@/icons/logo.svg";
import IconMail from "@/icons/mail.svg";
import IconPhone from "@/icons/phone.svg";
import IconMagnifying from "@/icons/magnifying-glass.svg";
import IconRectangle from "@/icons/rectangle-history-circle-plus.svg";
import IconHeart from "@/icons/heart.svg";
import IconCart from "@/icons/cart-shopping.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="header__top-links">
              <Link href={"/dealer"}>Дилерам</Link>
              <Link href={"/suppliers"}>Поставщикам</Link>
              <Link href={"/account"}>Личный кабинет</Link>
            </div>
            <p className="text-uppercase">Ваша техника под надежной защитой</p>
            <div className="header__top-contacts">
              <a href="mailto:zakaz@loaderpro.ru">
                <div className="svg">
                  <IconMail />
                </div>
                zakaz@loaderpro.ru
              </a>
              <a href="tel:+78005511996">
                <div className="svg">
                  <IconPhone />
                </div>
                8 (800) 551-19-96
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header__main">
        <div className="container">
          <div className="row">
            <Link className="header__logo" href="/">
              <IconLogo />
            </Link>
            <form className="header__search">
              <label>
                <input type="text" name="search" placeholder="Поиск товара" />
                <button type="submit">
                  <IconMagnifying />
                </button>
              </label>
            </form>
            <div className="header__action">
              <Link href={"/selectionparts"}>
                <IconRectangle />
                <span>Запросы</span>
              </Link>
              <Link href={"/favorites"}>
                <IconHeart />
                <span>Избранное</span>
              </Link>
              <Link href={"/basket"}>
                <IconCart />
                <span>Корзина</span>
              </Link>
            </div>
            <div className="header__burger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div className="header__nav">
        <div className="container">
          <div className="row">
            <nav>
              <Link href={"/warehouse-equipment"} title="Складская техника">
                Складская техника
              </Link>
              <Link href={"/spare-parts"} title="Запасные части">
                Запасные части
              </Link>
              <Link href={"/tires-rims"} title="Шины и диски">
                Шины и диски
              </Link>
              <Link href={"/battery"} title="Тяговые аккумуляторы">
                Тяговые аккумуляторы
              </Link>
              <Link href={"/polyurethane-wheels"} title="Полиуретановые колеса">
                Полиуретановые колеса
              </Link>
              <Link
                href={"/polyurethane-surfacing"}
                title="Восстановление колес"
              >
                Восстановление колес
              </Link>
              <Link href={"/contact"} title="Контакты">
                Контакты
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
