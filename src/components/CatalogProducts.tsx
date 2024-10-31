"use client";

import Product from "@/components/Product";
import { ChangeEvent, useLayoutEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import { api } from "@/services/api";
import { Skeleton } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0 });
}

export default function CatalogProducts({ url }: { url?: string }) {
  const [data, setData] = useState<ProductType[]>([]);
  const [countPage, setCountPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const link = url ? url : "";
  const [page, setPage] = useState(1);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    loadProducts(value);
    scrollToTop();
  };

  const loadProducts = async (page?: number) => {
    const count = page ? page : 1;
    try {
      const res = await api.getAllProductsLink(`${link}/?page=${count}`);
      setCountPage(res.total);
      setData(res.results);
      setIsLoading(false);
    } catch (error) {
      // @ts-expect-error @ts-ignore
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadProducts(), []);
  return (
    <>
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
      <Pagination
        count={countPage}
        color="primary"
        page={page}
        onChange={handleChange}
        siblingCount={2}
        boundaryCount={3}
      />
    </>
  );
}
