"use client";

import { useLayoutEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import { useFavorite } from "@/store/favorite";
import { api } from "@/services/api";
import Product from "@/components/Product";
import { Empty } from "@/components/Empty";

export default function Favorites() {
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
            <Empty
              title={"Вы ещё не добавили товары в Избранное"}
              text={"Нажмите кнопку, чтобы продолжить покупки"}
            />
          )}
        </>
      )}
    </>
  );
}
