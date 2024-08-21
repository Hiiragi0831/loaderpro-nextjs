"use client";

import Product from "@/components/Product";
import { useLayoutEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import { api } from "@/services/api";
import CloneDeep from "lodash-es/cloneDeep";

export default function CatalogProducts() {
  const [data, setData] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(CloneDeep(data));
      setIsLoading(false);
    } catch (error) {
      // @ts-expect-error @ts-ignore
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadProducts(), []);
  return (
    <div className="catalog__products-row">
      {isLoading
        ? "Загрузка"
        : data.map((post) => <Product key={post.id} {...post} />)}
    </div>
  );
}
