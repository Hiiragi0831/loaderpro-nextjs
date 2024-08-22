"use client";

import { Product as ProductsType } from "@/common/types/Product";
import { BasketItem } from "@/components/BasketItem";
import { useBasket } from "@/store/basket";
import { useLayoutEffect, useState } from "react";
import { api } from "@/services/api";

export default function BasketItems() {
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts = [];
  const products = useBasket((state) => state.basket);

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

  filteredProducts = data
    .filter((item) =>
      products.find((element: { id: number }) => element.id === item.id),
    )
    .slice(0);

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <>
      {isLoading
        ? "Загрузка"
        : filteredProducts.map((item) => (
            <BasketItem key={item.id} {...item} />
          ))}
    </>
  );
}
