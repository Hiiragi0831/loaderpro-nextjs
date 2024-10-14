"use client";

import { getPriceFormat } from "@/utils/getPriceFormat";
import { useBasket } from "@/store/basket";
import { BasketForm } from "@/app/basket/components/BasketForm";
import { Skeleton } from "@mui/material";
import { ProductItem } from "@/app/basket/components/ProductItem";
import { useLayoutEffect, useState } from "react";
import { Product as ProductsType } from "@/common/types/Product";
import { api } from "@/services/api";
import { Empty } from "@/components/Empty";

export const BasketProducts = () => {
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts = [];
  const products = useBasket((state) => state.basket);
  let total = 0;

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

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <>
      {isLoading ? (
        <section className="basket">
          <div className="container">
            <h1>
              <Skeleton variant={"rounded"} />
            </h1>
            <div className="row">
              <Skeleton height={154} variant={"rounded"} />
              <Skeleton height={350} variant={"rounded"} />
            </div>
          </div>
        </section>
      ) : (
        <>
          {filteredProducts.length > 0 ? (
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
                      {filteredProducts?.map((item) => (
                        <ProductItem key={item.id} {...item} />
                      ))}
                    </div>
                  </div>
                  <div className="basket__form">
                    <div className="basket__form-sum">
                      <b>
                        Итого: <span>{getPriceFormat(total)} ₽</span>
                      </b>
                    </div>
                    <BasketForm products={products} />
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <Empty
              title={"Ваша корзина пуста"}
              text={"Нажмите кнопку, чтобы продолжить покупки"}
            />
          )}
        </>
      )}
    </>
  );
};
