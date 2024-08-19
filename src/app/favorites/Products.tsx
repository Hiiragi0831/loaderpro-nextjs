"use client";

import { useLayoutEffect, useState } from "react";
import { Product as ProductsType } from "@/common/types/Product";
import { useFavorite } from "@/store/favorite";
import { api } from "@/services/api";
import Product from "@/components/Product";

export default function Products() {
  const [data, setData] = useState<ProductsType[]>([]);
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
    <div className="row">
      {isLoading
        ? "Загрузка"
        : filteredProducts.map((post) => <Product key={post.id} {...post} />)}
    </div>
  );
}
