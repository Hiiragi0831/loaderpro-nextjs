import dynamic from "next/dynamic";

const BasketItems = dynamic(() => import("./BasketItems"), {
  ssr: false,
});

export default function Basket() {
  return (
    <main>
      <section className="basket">
        <div className="container">
          <h1>Корзина</h1>
          <div className="row">
            <div className="basket__table">
              <div className="basket__table-body">
                <div className="basket__table-th">
                  <p>Название товара</p>
                  <p>Стоимость</p>
                  <p>Количество</p>
                  <p>Всего</p>
                  <p />
                </div>
                <BasketItems />
              </div>
            </div>
            <div className="basket__form">
              <div className="basket__form-sum">
                <p>
                  Итого: <span>11500 руб</span>
                </p>
                <b>
                  Итого со скидкой: <span>10 000 руб</span>
                </b>
              </div>
              <div className="basket__form-data">
                <label className="form__select">
                  <select name="pay" defaultValue="0">
                    <option value="0" label="Оплата 1">
                      0
                    </option>
                    <option value="1" label="Оплата 2">
                      1
                    </option>
                    <option value="2" label="Оплата 3">
                      2
                    </option>
                  </select>
                  <span>Способ оплаты</span>
                </label>
                <label className="form__select">
                  <select name="delivery" defaultValue="0">
                    <option value="0" label="Доставка 1">
                      0
                    </option>
                    <option value="1" label="Доставка 2">
                      1
                    </option>
                    <option value="2" label="Доставка 3">
                      2
                    </option>
                  </select>
                  <span>Доставка</span>
                </label>
                <label className="form__select">
                  <select name="transport" defaultValue="0">
                    <option value="0" label="Перевозчик 1">
                      0
                    </option>
                    <option value="1" label="Перевозчик 2">
                      1
                    </option>
                    <option value="2" label="Перевозчик 3">
                      2
                    </option>
                  </select>
                  <span>Перевозчик</span>
                </label>
                <label className="form__select">
                  <select name="method" defaultValue="0">
                    <option value="0" label="Метод доставки 1">
                      0
                    </option>
                    <option value="1" label="Метод доставки 2">
                      1
                    </option>
                    <option value="2" label="Метод доставки 3">
                      2
                    </option>
                  </select>
                  <span>Метод доставки</span>
                </label>
                <label className="form__input">
                  <input
                    type="text"
                    placeholder="Адрес"
                    name="address"
                    defaultValue="Санкт-Петербург, Херсонская 2"
                  />
                  <span>Адрес</span>
                </label>
                <label className="form__select">
                  <select name="method" defaultValue="0">
                    <option value="0" label="Приоритет отгрузки 1">
                      0
                    </option>
                    <option value="1" label="Приоритет отгрузки 2">
                      1
                    </option>
                    <option value="2" label="Приоритет отгрузки 3">
                      2
                    </option>
                  </select>
                  <span>Приоритет отгрузки</span>
                </label>
                <button className="button button__primary">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
