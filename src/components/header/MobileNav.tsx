import Link from "next/link";
import IconVk from "@/icons/vk.svg";
import IconTg from "@/icons/tg.svg";
import IconWt from "@/icons/wt.svg";
import IconYoutube from "@/icons/youtube.svg";
import { useMobileNav } from "@/store/useMobileNav";

export function MobileNav() {
  const stateMobileNav = useMobileNav();

  const onClickItem = () => {
    stateMobileNav.toggleShow(false);
  };

  return (
    <nav className={`mobilenav ${stateMobileNav.isShow ? "active" : ""}`}>
      <div className="mobilenav__wrapper">
        <div className="mobilenav__item">
          <p className="mobilenav__title">Партнерам</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href={"/"} onClick={onClickItem}>
                Главная
              </Link>
              <Link href={"/vacancy"} onClick={onClickItem}>
                Вакансии
              </Link>
              <Link href={"/about"} onClick={onClickItem}>
                О компании
              </Link>
              <Link href={"/suppliers"} onClick={onClickItem}>
                Поставщикам
              </Link>
            </div>
            <div className="mobilenav__col">
              <Link href={"/dealer"} onClick={onClickItem}>
                Дилерам
              </Link>
              <Link href={"/privacy-policy"} onClick={onClickItem}>
                Конфиденциальность
              </Link>
              <Link href={"/delivery-payment"} onClick={onClickItem}>
                Оплата и доставка
              </Link>
              <Link href={"/contact"} onClick={onClickItem}>
                Контакты
              </Link>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <p className="mobilenav__title">Товары</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href={"/warehouse-equipment"} onClick={onClickItem}>
                Складская техника
              </Link>
              <Link href={"/spare-parts"} onClick={onClickItem}>
                Запасные части
              </Link>
              <Link href={"/battery"} onClick={onClickItem}>
                Тяговые аккумуляторы
              </Link>
            </div>
            <div className="mobilenav__col">
              <Link href={"/tires-rims"} onClick={onClickItem}>
                Шины и диски
              </Link>
              <Link href={"/oils-lubricants"} onClick={onClickItem}>
                Масла и смазки
              </Link>
              <Link href={"/polyurethane-wheels"} onClick={onClickItem}>
                Полиуретановые колеса
              </Link>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <p className="mobilenav__title">Услуги</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href={"/request-parts"} onClick={onClickItem}>
                Подбор запчастей
              </Link>
              <Link href={"/selection-parts"} onClick={onClickItem}>
                Запрос на запчасти
              </Link>
            </div>
            <div className="mobilenav__col">
              <Link href={"/tire-service"} onClick={onClickItem}>
                Шиномонтаж
              </Link>
              <Link href={"/polyurethane-surfacing"} onClick={onClickItem}>
                Восстановление колес
              </Link>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <p className="mobilenav__title">Контакты</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <a href="tel:88005511996" className="mobilenav__contact">
                8 (800) 551-19-96
              </a>
              <a
                href="mailto:zakaz@loaderpro.ru"
                className="mobilenav__contact"
              >
                <small>Для заявок:</small>
                zakaz@loaderpro.ru
              </a>
            </div>
            <div className="mobilenav__col">
              <a href="tel:+78126421256" className="mobilenav__contact">
                +7 (812) 642-12-56
              </a>
              <a
                href="mailto:zakup@loaderpro.ru"
                className="mobilenav__contact"
              >
                <small>Сотрудничество:</small>
                zakup@loaderpro.ru
              </a>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <div className="mobilenav__socials">
            <Link href="https://vk.com/loaderproru" target={"_blank"}>
              <IconVk />
            </Link>
            <Link href="https://t.me/loaderpro" target={"_blank"}>
              <IconTg />
            </Link>
            <Link href="https://wa.me/79643421256" target={"_blank"}>
              <IconWt />
            </Link>
            <Link href="https://www.youtube.com/@loaderpro" target={"_blank"}>
              <IconYoutube />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
