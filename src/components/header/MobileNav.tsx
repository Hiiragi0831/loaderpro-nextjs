import Link from "next/link";
import IconVk from "@/icons/vk.svg";
import IconTg from "@/icons/tg.svg";
import IconWt from "@/icons/wt.svg";
import IconYoutube from "@/icons/youtube.svg";

export function MobileNav({ className }: any) {
  return (
    <nav className={`mobilenav ${className}`}>
      <div className="mobilenav__wrapper">
        <div className="mobilenav__item">
          <p className="mobilenav__title">Партнерам</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href="/">Главная</Link>
              <Link href={"/vacancy"}>Вакансии</Link>
              <Link href={"/about"}>О компании</Link>
              <Link href={"/suppliers"}>Поставщикам</Link>
            </div>
            <div className="mobilenav__col">
              <Link href={"/dealer"}>Дилерам</Link>
              <Link href={"/privacy-policy"}>Конфиденциальность</Link>
              <Link href={"/delivery-payment"}>Оплата и доставка</Link>
              <Link href={"/contact"}>Контакты</Link>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <p className="mobilenav__title">Товары</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href={"/warehouse-equipment"}>Складская техника</Link>
              <Link href={"/spare-parts"}>Запасные части</Link>
              <Link href={"/battery"}>Тяговые аккумуляторы</Link>
            </div>
            <div className="mobilenav__col">
              <Link href={"/tires-rims"}>Шины и диски</Link>
              <Link href={"/oils-lubricants"}>Масла и смазки</Link>
              <Link href={"/polyurethane-wheels"}>Полиуретановые колеса</Link>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <p className="mobilenav__title">Услуги</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href={"/selection-parts"}>Подбор запчастей</Link>
              <Link href={"/request-parts"}>Запрос на запчасти</Link>
            </div>
            <div className="mobilenav__col">
              <Link href={"/tire-service"}>Шиномонтаж</Link>
              <Link href={"/polyurethane-surfacing"}>Восстановление колес</Link>
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
            <a href="https://vk.com/loaderproru">
              <IconVk />
            </a>
            <a href="https://t.me/loaderpro">
              <IconTg />
            </a>
            <a href="https://wa.me/79643421256">
              <IconWt />
            </a>
            <a href="https://www.youtube.com/@loaderpro">
              <IconYoutube />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
