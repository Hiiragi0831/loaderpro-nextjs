"use client";

import { FC } from "react";

import { Product as ProductType } from "../common/types/Product";
import { useBasket } from "@/store/basket";
import { getPriceFormat } from "@/utils/getPriceFormat";
import Link from "next/link";

export const BasketItem: FC<ProductType> = ({
  price,
  count = 0,
  image,
  productname,
  article,
  id,
}) => {
  const increment = useBasket((state) => state.increment);
  const decrement = useBasket((state) => state.decrement);
  const deleteItem = useBasket((state) => state.deleteProduct);

  return (
    <div className="basket-item">
      <Link href={`/products/${id}`}>
        <picture className="basket-item__img">
          <source srcSet={image} />
          <img src={image} alt={productname} decoding="async" />
        </picture>
      </Link>
      <div className="basket-item__info">
        <p>
          <Link href={`/products/${id}`}>{productname}</Link>
        </p>
        <span>
          Артикул: <mark>{article}</mark>
        </span>
      </div>
      <div className="basket-item__price">
        <p>{getPriceFormat(price)} ₽</p>
      </div>
      <div className="basket-item__count">
        <button
          className="basket-item__count-minus"
          onClick={() => decrement(id)}
        >
          -
        </button>
        <input
          type="number"
          name="count"
          value={count}
          onChange={(event) => {
            event.target;
          }}
          max="100"
        />
        <button
          className="basket-item__count-plus"
          onClick={() => increment(id)}
        >
          +
        </button>
      </div>
      <div className="basket-item__sum">
        <p>{getPriceFormat(price * count)} ₽</p>
      </div>
      <div className="basket-item__del">
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          <svg>
            <use xlinkHref="/__spritemap#sprite-trash-can" />
          </svg>
        </button>
      </div>
    </div>
  );
};
