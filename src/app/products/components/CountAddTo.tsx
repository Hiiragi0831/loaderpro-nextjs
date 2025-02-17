"use client";

import { useBasket } from "@/store/basket";
import { useQuery } from "@/store/query";
import { useState } from "react";
import ym from "react-yandex-metrika";

export default function CountAddTo({
  id,
  article,
  count,
  brand,
}: {
  id: number;
  article: string;
  count: any;
  brand: string;
}) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = useBasket((state) => state.addToBasket);
  const addToQuery = useQuery((state) => state.addToQuery);

  const handleInitialCountChange = (event: any) => {
    setQuantity(Number(event.target.value));
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="commodity__count">
        <button className="commodity__count-minus" onClick={() => decrement()}>
          -
        </button>
        <input
          type="number"
          name="count"
          value={quantity}
          onChange={handleInitialCountChange}
        />
        <button className="commodity__count-plus" onClick={() => increment()}>
          +
        </button>
      </div>
      {count === 0 ? (
        <>
          <button
            className="button button__primary"
            onClick={() => addToQuery(article, quantity, brand)}
          >
            Запросить
          </button>
          <p className="commodity__query">
            *Цену и срок поставки необходимо запросить.
          </p>
        </>
      ) : (
        <button
          className="button button__primary"
          onClick={() => {
            addToCart(id, quantity);
            ym("reachGoal", "addToBasket");
          }}
        >
          В корзину
        </button>
      )}
    </>
  );
}
