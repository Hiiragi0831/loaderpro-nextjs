"use client";

import Product from "@/components/Product";
import { ChangeEvent, useLayoutEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import { api } from "@/services/api";
import { Skeleton } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { IsMobile } from "@/utils/IsMobile";
import {notFound, usePathname, useRouter, useSearchParams} from "next/navigation";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0 });
}

export default function CatalogProducts({
  url,
  brand,
}: {
  url?: string;
  brand?: boolean;
}) {
  const [data, setData] = useState<ProductType[]>([]);
  const [countPage, setCountPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const link = url ? url : "";
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const numPage = Number(params.get("page"));

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    params.set("page", String(value));
    setPage(value);
    loadProducts(value);
    scrollToTop();
    replace(`${pathname}?${params.toString()}`);
  };

  const loadProducts = async (page?: number) => {
    const count = page ? page : 1;
    const href = brand
      ? api.getPageBrand(`${link}/?page=${count}`)
      : api.getAllProductsLink(`${link}/?page=${count}`);
    try {
      const res = await href;
      setCountPage(res.total);
      setData(res.results);
      setIsLoading(false);
      setPage(count);
    } catch (error) {
      // @ts-expect-error @ts-ignore
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadProducts(numPage), []);
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
        siblingCount={IsMobile() ? 1 : 2}
        boundaryCount={IsMobile() ? 1 : 3}
      />
    </>
  );
}
