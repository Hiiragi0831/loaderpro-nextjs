"use client";

import { useLayoutEffect, useState } from "react";
import { useBasket } from "@/store/basket";
import { useForm } from "react-hook-form";
import { getPriceFormat } from "@/utils/getPriceFormat";
import { BasketItem } from "@/components/BasketItem";
import { Product as ProductsType } from "@/common/types/Product";
import { api } from "@/services/api";
import {toast} from "react-toastify";

// const BasketItems = dynamic(() => import("./BasketItems"), {
//   ssr: false,
// });

export default function Basket() {
  const [delivery, setDelivery] = useState(false);
  const [data, setData] = useState<ProductsType[]>([]);
  const [status, setStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);
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

  const loadBasketStatus = async () => {
    try {
      const data = await api.getBasketStatus();
      setStatus(data);
      setIsLoadingStatus(false);
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
    try {
      const fdata = await api.postBasket(fd);
      if (fdata.ok) {
        toast.success("Заказ успешно создан");
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  const select = (name: string) => {
    type status = {
      name: string;
      title: string;
      options: [
        {
          id: number;
          label: string;
        },
      ];
    };

    const item: any = status.find((item: status) => item.name == name);

    if (name === "delivery") {
      return (
        <label className="form__select">
          <select
            {...register(item.name, { required: true })}
            onChange={(e) => {
              if (Number(e.target.value) === 4) {
                setDelivery(true);
              } else {
                setDelivery(false);
              }
            }}
          >
            {item.options.map((option: any) => (
              <option key={option.id} value={option.id} label={option.label} />
            ))}
          </select>
          <span>{item.title}</span>
        </label>
      );
    }

    if (item) {
      return (
        <label className="form__select">
          <select {...register(item.name, { required: true })}>
            {item.options.map((option: any) => (
              <option key={option.id} value={option.id} label={option.label} />
            ))}
          </select>
          <span>{item.title}</span>
        </label>
      );
    }
  };

  useLayoutEffect(() => void loadProducts(), []);
  useLayoutEffect(() => void loadBasketStatus(), []);

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
                {isLoadingStatus ? "" : select("pay")}
                {isLoadingStatus ? "" : select("delivery")}
                {delivery && (
                  <>
                    {isLoadingStatus ? "" : select("transport")}
                    {isLoadingStatus ? "" : select("methoddelivery")}
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
                {isLoadingStatus ? "" : select("priority")}
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
