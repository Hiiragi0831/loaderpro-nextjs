"use client";

import { useLayoutEffect, useState } from "react";

import Product from "@/components/Product";
import { api } from "@/services/api";
import { useFavorite } from "@/store/favorite";

export default function Favorites() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts = [];
  const favorites = useFavorite((state) => state.favorite);

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(data);
      setIsLoading(false);
    } catch (error) {
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
