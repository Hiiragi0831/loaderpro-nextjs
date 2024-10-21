"use client";

import { ProductItem } from "@/app/basket/components/ProductItem";
import { getPriceFormat } from "@/utils/getPriceFormat";
import { BasketForm } from "@/app/basket/components/BasketForm";
import { Empty } from "@/components/Empty";
import { useBasket } from "@/store/basket";
import { Product as ProductsType } from "@/common/types/Product";

export const BasketPage = ({ data }: { data: ProductsType[] }) => {
  const products = useBasket((state) => state.basket);
  let filteredProducts = [];

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

  return (
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
                    Итого:{" "}
                    <span>{getPriceFormat(totalFun(filteredProducts))} ₽</span>
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
  );
};
