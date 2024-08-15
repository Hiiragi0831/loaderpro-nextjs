'use client';

import Product from "@/components/Product";
import { api } from "@/services/api";
import {FC, useLayoutEffect, useState} from "react";
import {Product as ProductsType} from "@/common/types/Product";

type Props = {
  filter: string;
  limit: number;
};

const Products: FC<Props> = ({ filter, limit }) => {
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts = [];

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

  switch (filter) {
    case "popular":
      filteredProducts = data.slice(0, limit);
      break;
    case "inStock":
      filteredProducts = data.filter((item:any) => item.status === 1).slice(0, limit);
      break;
    default:
      filteredProducts = data;
      break;
  }

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <section className="product__section">
      <div className="container">
        <div className="title">
          <span className="h1">Часто ищут</span>
          <a href="#">Все товары</a>
        </div>
        <div className="row">
          {isLoading ? "Загрузка" : filteredProducts.map((post:any) => <Product key={post.id} {...post} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
