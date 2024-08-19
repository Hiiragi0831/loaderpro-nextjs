"use client";

import { useLayoutEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import Product from "@/components/Product";
import { useFavorite } from "@/store/favorite";
import { api } from "@/services/api";

export default function Products() {
  const [data, setData] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts = [];
  const favorites = useFavorite((state) => state.favorite);

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

  // filteredProducts = data.filter((item) => item.like === true).slice(0);
  filteredProducts = data
    .filter((item) => favorites.indexOf(item.id) !== -1)
    .slice(0);

  useLayoutEffect(() => void loadProducts(), []);
  return (
    <div className="account__tab">
      <div className="account__title">
        <h1>Личный кабинет</h1>
        <small>Избранное</small>
      </div>
      <div className="account__favorite">
        {isLoading
          ? "Загрузка"
          : filteredProducts.map((post) => <Product key={post.id} {...post} />)}
      </div>
    </div>
  );
}
