"use client";

import { Product as ProductsType } from "@/common/types/Product";
import { ProductItem } from "./ProductItem";
import { useBasket } from "@/store/basket";
import { useLayoutEffect, useState } from "react";
import { api } from "@/services/api";
import { Skeleton } from "@mui/material";

export default function ProductItems() {
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts = [];
  const products = useBasket((state) => state.basket);
  const total = useBasket((state) => state.total);

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

  const loadedProducts = () => {
    total(filteredProducts);
  };

  useLayoutEffect(() => void loadProducts(), []);
  useLayoutEffect(() => void loadedProducts(), [data]);

  return (
    <>
      {isLoading ? (
        <Skeleton height={154} variant={"rounded"} />
      ) : (
        filteredProducts?.map((item) => <ProductItem key={item.id} {...item} />)
      )}
    </>
  );
}
