"use client";

import Product from "@/components/Product";
import { api } from "@/services/api";
import { FC, useLayoutEffect, useState } from "react";
import { Product as ProductsType } from "@/common/types/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

type Props = {
  filter: string;
  title: string;
  link: string;
  limit: number;
};

const Products: FC<Props> = ({ filter, limit, title, link }) => {
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  let filteredProducts: any[];

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

  switch (filter) {
    case "popular":
      filteredProducts = data.slice(0, limit);
      break;
    case "inStock":
      filteredProducts = data
        .filter((item) => item.status.name === "В наличии")
        .slice(0, limit);
      break;
    default:
      filteredProducts = data;
      break;
  }

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <section className="product__section">
      <div className="container">
        <div className="section-title">
          <span className="h1">{title}</span>
          <Link href={link}>Все товары</Link>
        </div>
        <div className="row">
          {isLoading ? (
            "Загрузка"
          ) : (
            <Swiper
              slidesPerView={"auto"}
              breakpoints={{
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {filteredProducts.map((post) => (
                <SwiperSlide key={post.id}>
                  <Product key={post.id} {...post} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
