"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const BasketItems = dynamic(() => import("./BasketItems"), {
  ssr: false,
});

export default function Basket() {
  const [delivery, setDelivery] = useState(false);

  return (
    <main>
      <section className="basket">
        <div className="container">
          <h1>Корзина</h1>
          <div className="row">
            <div className="basket__table">
              <div className="basket__table-body">
                <div className="basket__table-th">
                  <p></p>
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
                  <select name="pay">
                    <option value="0" label="Оплата по счету" />
                    <option value="1" label="Оплата картой" />
                  </select>
                  <span>Способ оплаты</span>
                </label>
                <label className="form__select">
                  <select
                    name="delivery"
                    defaultValue="0"
                    onChange={(e) => {
                      if (Number(e.target.value) === 1) {
                        setDelivery(true);
                      } else {
                        setDelivery(false);
                      }
                    }}
                  >
                    <option value="0" label="Самовывоз Санкт-Петербург" />
                    <option value="1" label="Доставка" />
                  </select>
                  <span>Доставка</span>
                </label>
                {delivery && (
                  <>
                    <label className="form__select">
                      <select name="transport" defaultValue="0">
                        <option value="0" label="Деловые линии" />
                        <option value="1" label="СДЭК" />
                      </select>
                      <span>Перевозчик</span>
                    </label>
                    <label className="form__select">
                      <select name="method" defaultValue="0">
                        <option value="0" label="До дверей" />
                        <option value="1" label="До терминала" />
                      </select>
                      <span>Метод доставки</span>
                    </label>
                    <label className="form__input">
                      <input type="text" placeholder="Город" name="city" />
                      <span>Город</span>
                    </label>
                    <label className="form__input">
                      <input type="text" placeholder="Адрес" name="address" />
                      <span>Адрес</span>
                    </label>
                  </>
                )}
                <label className="form__select">
                  <select name="method" defaultValue="0">
                    <option value="0" label="Отправить имеющееся в наличии" />
                    <option value="1" label="Укомплектовать полностью" />
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
