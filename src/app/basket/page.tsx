"use client";

import { useLayoutEffect, useState } from "react";
import { useBasket } from "@/store/basket";
import { useForm } from "react-hook-form";
import { getPriceFormat } from "@/utils/getPriceFormat";
import { BasketItem } from "@/components/BasketItem";
import { Product as ProductsType } from "@/common/types/Product";
import { api } from "@/services/api";

// const BasketItems = dynamic(() => import("./BasketItems"), {
//   ssr: false,
// });

export default function Basket() {
  const [delivery, setDelivery] = useState(false);
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const products = useBasket((state) => state.basket);
  let total = 0;
  let filteredProducts = [];

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      phone: "",
      pay: "",
      delivery: "",
      transport: "",
      methoddelivery: "",
      city: "",
      address: "",
      priority: "",
    },
  });

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(data);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  const totalFun = (items: any) => {
    let sum = 0;
    items.forEach((item: any) => {
      const product = products.find(
        (element: { id: number }) => element.id === item.id,
      );
      sum += item.price * product.quantity;
    });
    return Number(sum);
  };

  filteredProducts = data
    .filter((item) =>
      products.find((element: { id: number }) => element.id === item.id),
    )
    .slice(0);

  total = totalFun(filteredProducts);

  const onSubmit = async (data: any) => {
    const fd = Object.assign({ goods: products }, data);
    console.log(fd);
  };

  useLayoutEffect(() => void loadProducts(), []);

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
                {isLoading
                  ? "Загрузка"
                  : filteredProducts.map((item) => (
                      <BasketItem key={item.id} {...item} />
                    ))}
              </div>
            </div>
            <form className="basket__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="basket__form-sum">
                <b>
                  Итого: <span>{getPriceFormat(total)} ₽</span>
                </b>
                {/*<b>*/}
                {/*  Итого со скидкой: <span>10 000 руб</span>*/}
                {/*</b>*/}
              </div>
              <div className="basket__form-data">
                <label className="form__input">
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  <span>Email</span>
                </label>
                <label className="form__input">
                  <input
                    type="text"
                    placeholder="Телефон"
                    {...register("phone", { required: true })}
                  />
                  <span>Телефон</span>
                </label>
                <label className="form__select">
                  <select {...register("pay", { required: true })}>
                    <option value="0" label="Оплата по счету" />
                    <option value="1" label="Оплата картой" />
                  </select>
                  <span>Способ оплаты</span>
                </label>
                <label className="form__select">
                  <select
                    {...register("delivery", { required: true })}
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
                      <select {...register("transport", { required: true })}>
                        <option value="0" label="Деловые линии" />
                        <option value="1" label="СДЭК" />
                      </select>
                      <span>Перевозчик</span>
                    </label>
                    <label className="form__select">
                      <select
                        {...register("methoddelivery", { required: true })}
                      >
                        <option value="0" label="До дверей" />
                        <option value="1" label="До терминала" />
                      </select>
                      <span>Метод доставки</span>
                    </label>
                    <label className="form__input">
                      <input
                        type="text"
                        placeholder="Город"
                        {...register("city", { required: true })}
                      />
                      <span>Город</span>
                    </label>
                    <label className="form__input">
                      <input
                        type="text"
                        placeholder="Адрес"
                        {...register("address", { required: true })}
                      />
                      <span>Адрес</span>
                    </label>
                  </>
                )}
                <label className="form__select">
                  <select
                    defaultValue="0"
                    {...register("priority", { required: true })}
                  >
                    <option value="0" label="Отправить имеющееся в наличии" />
                    <option value="1" label="Укомплектовать полностью" />
                  </select>
                  <span>Приоритет отгрузки</span>
                </label>
                <button className="button button__primary">
                  Оформить заказ
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
