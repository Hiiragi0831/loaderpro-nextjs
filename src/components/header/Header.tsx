"use client";
import Link from "next/link";
import IconLogo from "@/icons/logo.svg";
import IconMail from "@/icons/mail.svg";
import IconPhone from "@/icons/phone.svg";
import IconRectangle from "@/icons/rectangle-history-circle-plus.svg";
import IconHeart from "@/icons/heart.svg";
import IconCart from "@/icons/cart-shopping.svg";
import IconDesktop from "@/icons/desktop.svg";
import { MobileNav } from "./MobileNav";
import { useLockBodyScroll } from "react-use";
// import { ProfileButton } from "@/components/ProfileButton";
// import { AuthModal } from "@/components/AuthModal";
import { Search } from "./Search";
// import { useState } from "react";
import { useSearchPanel } from "@/store/useSearchPanel";
import { useMobileNav } from "@/store/useMobileNav";

const Header = () => {
  // const [modalOpen, setModalOpen] = useState(false);
  const { isShow } = useSearchPanel();
  const stateMobileNav = useMobileNav();

  const onClickItem = () => {
    stateMobileNav.toggleShow(false);
  };

  useLockBodyScroll(stateMobileNav.isShow);

  return (
    <>
      {/*<AuthModal isShow={modalOpen} onClose={() => setModalOpen(false)} />*/}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="header__top-links">
                <Link href={"/dealer"}>Дилерам</Link>
                <Link href={"/suppliers"}>Поставщикам</Link>
                {/*<ProfileButton*/}
                {/*  onClickSignIn={() => setModalOpen(true)}*/}
                {/*  className={"is-hide"}*/}
                {/*/>*/}
              </div>
              <p className="text-uppercase">
                Ваша техника под надежной защитой
              </p>
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
              <Link className="header__logo" href="/" onClick={onClickItem}>
                <IconLogo />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/*<img src={"/images/logo-winter.svg"} alt="LoaderPro" />*/}
              </Link>
              <Search className={`${isShow ? "active" : ""}`} />
              <div className="header__action">
                <Link href={"/request-parts"} className={"for-desktop"}>
                  <IconRectangle />
                  <span>Запросы</span>
                </Link>
                <Link href={"/selection-parts"} className={"for-desktop"}>
                  <IconDesktop />
                  <span>Подбор ЗЧ</span>
                </Link>
                <Link href={"/favorites"} onClick={onClickItem}>
                  <IconHeart />
                  <span>Избранное</span>
                </Link>
                <Link href={"/basket"} onClick={onClickItem}>
                  <IconCart />
                  <span>Корзина</span>
                </Link>
              </div>
              <div
                className={`header__burger ${stateMobileNav.isShow ? "active" : ""}`}
                onClick={() =>
                  stateMobileNav.toggleShow(!stateMobileNav.isShow)
                }
              >
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
                <Link href={"/"} title="Главная">
                  Главная
                </Link>
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
                <Link
                  href={"/polyurethane-wheels"}
                  title="Полиуретановые колеса"
                >
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
      <MobileNav />
    </>
  );
};

export default Header;
