"use client";

import Product from "@/components/Product";
import { useLayoutEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import { api } from "@/services/api";
import CloneDeep from "lodash-es/cloneDeep";
import { Skeleton } from "@mui/material";

export default function CatalogProducts({ url }: { url?: string }) {
  const [data, setData] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const link = url ? url : "";

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts(link);
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
      {isLoading ? (
        <>
          <Skeleton height={440} variant={"rounded"}></Skeleton>
          <Skeleton height={440} variant={"rounded"}></Skeleton>
          <Skeleton height={440} variant={"rounded"}></Skeleton>
          <Skeleton height={440} variant={"rounded"}></Skeleton>
          <Skeleton height={440} variant={"rounded"}></Skeleton>
        </>
      ) : (
        data.map((post) => <Product key={post.id} {...post} />)
      )}
    </div>
  );
}
