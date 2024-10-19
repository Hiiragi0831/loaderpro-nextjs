"use client";

import { Skeleton } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { Product as ProductsType } from "@/common/types/Product";
import { api } from "@/services/api";

import { BasketPage } from "@/app/basket/components/BasketPage";

export const BasketProducts = () => {
  const [data, setData] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <>
      {isLoading ? (
        <section className="basket">
          <div className="container">
            <h1>
              <Skeleton variant={"rounded"} />
            </h1>
            <div className="row">
              <Skeleton height={154} variant={"rounded"} />
              <Skeleton height={350} variant={"rounded"} />
            </div>
          </div>
        </section>
      ) : (
        <BasketPage data={data} />
      )}
    </>
  );
};
