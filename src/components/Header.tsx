import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="header__top-links">
              <Link href="/dealer">Дилерам</Link>
              <Link href="/suppliers">Поставщикам</Link>
              <Link href="/account/user">Личный кабинет</Link>
            </div>
            <p className="text-uppercase">Ваша техника под надежной защитой</p>
            <div class="header__top-contacts">
              <a href="mailto:zakaz@loaderpro.ru">
                <div class="svg">
                  <svg>
                    <use xlinkHref="/__spritemap#sprite-mail" />
                  </svg>
                </div>
                zakaz@loaderpro.ru
              </a>
              <a href="tel:+78005511996">
                <div class="svg">
                  <svg>
                    <use xlinkHref="/__spritemap#sprite-phone" />
                  </svg>
                </div>
                8 (800) 551-19-96
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="header__main">
        <div class="container">
          <div class="row">
            <Link class="header__logo" to="/">
              <svg>
                <use xlinkHref="/__spritemap#sprite-logo" />
              </svg>
            </Link>
            <form class="header__search">
              <label>
                <input type="text" name="search" placeholder="Поиск товара" />
                <button type="submit">
                  <svg>
                    <use xlinkHref="/__spritemap#sprite-magnifying-glass" />
                  </svg>
                </button>
              </label>
            </form>
            <div class="header__action">
              <Link href="/selectionparts">
                <svg>
                  <use xlinkHref="/__spritemap#sprite-rectangle-history-circle-plus" />
                </svg>
                <span>Запросы</span>
              </Link>
              <Link href="/favorites">
                <svg>
                  <use xlinkHref="/__spritemap#sprite-heart" />
                </svg>
                <span>Избранное</span>
              </Link>
              <Link href="/basket">
                <svg>
                  <use xlinkHref="/__spritemap#sprite-cart-shopping" />
                </svg>
                <span>Корзина</span>
              </Link>
            </div>
            <div class="header__burger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div class="header__nav">
        <div class="container">
          <div class="row">
            <nav>
              <Link href="/warehouse-equipment" title="Складская техника">
                Складская техника
              </Link>
              <Link href="/catalog" title="Запасные части">
                Запасные части
              </Link>
              <Link href="/tires-rims" title="Шины и диски">
                Шины и диски
              </Link>
              <Link href="/battery" title="Тяговые аккумуляторы">
                Тяговые аккумуляторы
              </Link>
              <Link href="/polyurethane-wheels" title="Полиуретановые колеса">
                Полиуретановые колеса
              </Link>
              <Link href="/polyurethane-surfacing" title="Восстановление колес">
                Восстановление колес
              </Link>
              <Link href="/contact" title="Контакты">
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
