"use client";

import { BasketItem } from "@/components/BasketItem";
import { useBasket } from "@/store/basket";

export default function BasketItems() {
  const data = useBasket((state) => state.basket);
  return (
    <>
      {data.map((item) => (
        <BasketItem key={item.id} {...item} />
      ))}
    </>
  );
}
