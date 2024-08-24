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
              <Link href="#">Главная</Link>
              <Link href="#">Вакансии</Link>
              <Link href="#">О компании</Link>
              <Link href="#">Поставщикам</Link>
            </div>
            <div className="mobilenav__col">
              <Link href="#">Дилерам</Link>
              <Link href="#">Конфиденциальность</Link>
              <Link href="#">Оплата и доставка</Link>
              <Link href="#">Контакты</Link>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <p className="mobilenav__title">Товары</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href="#">Складская техника</Link>
              <Link href="#">Запасные части</Link>
              <Link href="#">Тяговые аккумуляторы</Link>
            </div>
            <div className="mobilenav__col">
              <Link href="#">Шины и диски</Link>
              <Link href="#">Масла и смазки</Link>
              <Link href="#">Полиуретановые колеса</Link>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <p className="mobilenav__title">Услуги</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href="#">Подбор запчастей</Link>
              <Link href="#">Запрос на запчасти</Link>
            </div>
            <div className="mobilenav__col">
              <Link href="#">Шиномонтаж</Link>
              <Link href="#">Восстановление колес</Link>
            </div>
          </div>
        </div>
        <div className="mobilenav__item">
          <p className="mobilenav__title">Контакты</p>
          <div className="mobilenav__row">
            <div className="mobilenav__col">
              <Link href="#" className="mobilenav__contact">
                8 (800) 551-19-96
              </Link>
              <Link href="#" className="mobilenav__contact">
                <small>Для заявок:</small>
                zakaz@loaderpro.ru
              </Link>
            </div>
            <div className="mobilenav__col">
              <Link href="#" className="mobilenav__contact">
                +7 (812) 642-12-56
              </Link>
              <Link href="#" className="mobilenav__contact">
                <small>Сотрудничество:</small>
                zakup@loaderpro.ru
              </Link>
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
