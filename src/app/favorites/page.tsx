'use client';

import { useLayoutEffect, useState } from "react";

import Product from "@/components/Product";
import { api } from "@/services/api";
import { useFavorite } from "@/store/favorite";
import {Product as ProductsType} from "@/common/types/Product";

export default function Favorites() {
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts = [];
  const favorites = useFavorite((state) => state.favorite);

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(data);
      setIsLoading(false);
    } catch (error:any) {
      console.error("Error fetching:", error.message);
      throw(error);
    }
  };

  // filteredProducts = data.filter((item) => item.like === true).slice(0);
  filteredProducts = data.filter((item) => favorites.indexOf(item.id) !== -1).slice(0);

  useLayoutEffect(() => void loadProducts(), []);
  return (
    <main>
      <section className="favorites">
        <div className="container">
          <h1 className="h1">Избранное</h1>
          <div className="row">
            {isLoading ? "Загрузка" : filteredProducts.map((post) => <Product key={post.id} {...post} />)}
          </div>
        </div>
      </section>
    </main>
  );
};
