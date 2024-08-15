export const History = () => {
  return (
    <div className="account__tab">
      <div className="account__title">
        <h1>Личный кабинет</h1>
        <small>История заказов</small>
      </div>
      <div className="account__history">
        <div className="account__history-select">
          <label className="form__select">
            <select name="status">
              <option value="0" label="Все заказы">
                0
              </option>
              <option value="1" label="Статус 2">
                1
              </option>
              <option value="2" label="Статус 3">
                2
              </option>
            </select>
            <span>Статус</span>
          </label>
        </div>
        <div className="order">
          <div className="order__title">Заказ № 124332345</div>
          <div className="order__row">
            <div className="order__col">
              <p>
                <svg>
                  <use xlinkHref="/__spritemap#sprite-pin" />
                </svg>
                <span>Доставка</span>
              </p>
              <ul>
                <li>Перевозчик: Деловые Линии</li>
                <li>Метод доставки: до дверей</li>
                <li>Адрес доставки: СПБ, Кубинская 75</li>
                <li>Приоритет отгрузки: отгрузить полностью</li>
              </ul>
            </div>
            <div className="order__col">
              <p>
                <svg>
                  <use xlinkHref="/__spritemap#sprite-user" />
                </svg>
                <span>Получатель</span>
              </p>
              <ul>
                <li>Имя: Алексей</li>
                <li>Фамилия: Привалов</li>
                <li>Телефон, +7 (960) 266-76-26</li>
                <li>E-mail: privalov@loaderpro.ru</li>
              </ul>
            </div>
            <div className="order__col">
              <p>
                <svg>
                  <use xlinkHref="/__spritemap#sprite-credit-card" />
                </svg>
                <span>Оплата</span>
              </p>
              <ul>
                <li>Оплата картой: ***********345</li>
              </ul>
            </div>
            <div className="order__col">
              <div className="order__status">
                <p>Статус:</p>
                <span>Отгружен</span>
              </div>
              <div className="order__button">
                <button className="button button__primary">Подробнее</button>
              </div>
            </div>
          </div>
          <div className="order__products is-hidden">
            <div className="basket__table">
              <div className="basket__table-body">
                <div className="basket__table-th">
                  <p>Название товара</p>
                  <p>Стоимость</p>
                  <p>Количество</p>
                  <p>Всего</p>
                </div>
                <div className="basket-item">
                  <picture className="basket-item__img">
                    <source srcSet="/assets/images/basket.jpg" />
                    <img src="/assets/images/basket.jpg" alt="" decoding="async" />
                  </picture>
                  <div className="basket-item__info">
                    <p>Название товара, пример текста</p>
                    <span>
                      Артикул: <mark>8776549823</mark>
                    </span>
                  </div>
                  <div className="basket-item__price">
                    <p>8 000 руб.</p>
                  </div>
                  <div className="basket-item__count">
                    <p>3</p>
                  </div>
                  <div className="basket-item__sum">
                    <p>16 000 руб.</p>
                  </div>
                </div>
                <div className="basket-item">
                  <picture className="basket-item__img">
                    <source srcSet="/assets/images/basket.jpg" />
                    <img src="/assets/images/basket.jpg" alt="" decoding="async" />
                  </picture>
                  <div className="basket-item__info">
                    <p>Название товара, пример текста</p>
                    <span>
                      Артикул: <mark>8776549823</mark>
                    </span>
                  </div>
                  <div className="basket-item__price">
                    <p>8 000 руб.</p>
                  </div>
                  <div className="basket-item__count">
                    <p>3</p>
                  </div>
                  <div className="basket-item__sum">
                    <p>16 000 руб.</p>
                  </div>
                </div>
                <div className="basket-item">
                  <picture className="basket-item__img">
                    <source srcSet="/assets/images/basket.jpg" />
                    <img src="/assets/images/basket.jpg" alt="" decoding="async" />
                  </picture>
                  <div className="basket-item__info">
                    <p>Название товара, пример текста</p>
                    <span>
                      Артикул: <mark>8776549823</mark>
                    </span>
                  </div>
                  <div className="basket-item__price">
                    <p>8 000 руб.</p>
                  </div>
                  <div className="basket-item__count">
                    <p>3</p>
                  </div>
                  <div className="basket-item__sum">
                    <p>16 000 руб.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order">
          <div className="order__title">Заказ № 124332345</div>
          <div className="order__row">
            <div className="order__col">
              <p>
                <svg>
                  <use xlinkHref="/__spritemap#sprite-pin" />
                </svg>
                <span>Доставка</span>
              </p>
              <ul>
                <li>Перевозчик: Деловые Линии</li>
                <li>Метод доставки: до дверей</li>
                <li>Адрес доставки: СПБ, Кубинская 75</li>
                <li>Приоритет отгрузки: отгрузить полностью</li>
              </ul>
            </div>
            <div className="order__col">
              <p>
                <svg>
                  <use xlinkHref="/__spritemap#sprite-user" />
                </svg>
                <span>Получатель</span>
              </p>
              <ul>
                <li>Имя: Алексей</li>
                <li>Фамилия: Привалов</li>
                <li>Телефон, +7 (960) 266-76-26</li>
                <li>E-mail: privalov@loaderpro.ru</li>
              </ul>
            </div>
            <div className="order__col">
              <p>
                <svg>
                  <use xlinkHref="/__spritemap#sprite-credit-card" />
                </svg>
                <span>Оплата</span>
              </p>
              <ul>
                <li>Оплата картой: ***********345</li>
              </ul>
            </div>
            <div className="order__col">
              <div className="order__status">
                <p>Статус:</p>
                <span>Отгружен</span>
              </div>
              <div className="order__button">
                <button className="button button__primary">Скрыть</button>
              </div>
            </div>
          </div>
          <div className="order__products is-active">
            <div className="basket__table">
              <div className="basket__table-body">
                <div className="basket__table-th">
                  <p>Название товара</p>
                  <p>Стоимость</p>
                  <p>Количество</p>
                  <p>Всего</p>
                </div>
                <div className="basket-item">
                  <picture className="basket-item__img">
                    <source srcSet="/assets/images/basket.jpg" />
                    <img src="/assets/images/basket.jpg" alt="" decoding="async" />
                  </picture>
                  <div className="basket-item__info">
                    <p>Название товара, пример текста</p>
                    <span>
                      Артикул: <mark>8776549823</mark>
                    </span>
                  </div>
                  <div className="basket-item__price">
                    <p>8 000 руб.</p>
                  </div>
                  <div className="basket-item__count">
                    <p>3</p>
                  </div>
                  <div className="basket-item__sum">
                    <p>16 000 руб.</p>
                  </div>
                </div>
                <div className="basket-item">
                  <picture className="basket-item__img">
                    <source srcSet="/assets/images/basket.jpg" />
                    <img src="/assets/images/basket.jpg" alt="" decoding="async" />
                  </picture>
                  <div className="basket-item__info">
                    <p>Название товара, пример текста</p>
                    <span>
                      Артикул: <mark>8776549823</mark>
                    </span>
                  </div>
                  <div className="basket-item__price">
                    <p>8 000 руб.</p>
                  </div>
                  <div className="basket-item__count">
                    <p>3</p>
                  </div>
                  <div className="basket-item__sum">
                    <p>16 000 руб.</p>
                  </div>
                </div>
                <div className="basket-item">
                  <picture className="basket-item__img">
                    <source srcSet="/assets/images/basket.jpg" />
                    <img src="/assets/images/basket.jpg" alt="" decoding="async" />
                  </picture>
                  <div className="basket-item__info">
                    <p>Название товара, пример текста</p>
                    <span>
                      Артикул: <mark>8776549823</mark>
                    </span>
                  </div>
                  <div className="basket-item__price">
                    <p>8 000 руб.</p>
                  </div>
                  <div className="basket-item__count">
                    <p>3</p>
                  </div>
                  <div className="basket-item__sum">
                    <p>16 000 руб.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
