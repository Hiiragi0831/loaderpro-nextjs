"use client";

import { useLayoutEffect, useState } from "react";
import { Product as ProductsType } from "@/common/types/Product";
import { useFavorite } from "@/store/favorite";
import { api } from "@/services/api";
import Product from "@/components/Product";
import Link from "next/link";

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
    <>
      {isLoading ? (
        "Загрузка"
      ) : (
        <>
          {filteredProducts.length > 0 ? (
            <section className={"favorites"}>
              <div className="container">
                <h1>Избранное</h1>
                <div className="row">
                  {filteredProducts.map((post) => (
                    <Product key={post.id} {...post} />
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="favorites__empty">
              <div className="container">
                <h1>Вы ещё не добавили товары в Избранное</h1>
                <p>Нажмите кнопку, чтобы продолжить покупки</p>
                <Link
                  href={"/spare-parts"}
                  className={"button button__primary"}
                >
                  В каталог
                </Link>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
