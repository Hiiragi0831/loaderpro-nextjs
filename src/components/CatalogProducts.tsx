"use client";

import Product from "@/components/Product";
import { ChangeEvent, useLayoutEffect, useState, useCallback } from "react";
import { Product as ProductType } from "@/common/types/Product";
import { api } from "@/services/api";
import { Skeleton } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { IsMobile } from "@/utils/IsMobile";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { scrollToTop } from "@/utils/scrollToTop";
import { Suspense } from "react";

const CatalogProductsContent = ({
  url,
  brand,
}: {
  url?: string;
  brand?: boolean;
}) => {
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

  const loadProducts = useCallback(
    async (page?: number) => {
      const count = page || 1;
      const href = brand
        ? api.getPageBrand(`${link}/?page=${count}`)
        : api.getAllProductsLink(`${link}/?page=${count}`);
      try {
        const res = await href;
        setCountPage(res.total);
        setData(res.results);
        setPage(count);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error fetching:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [brand, link],
  );

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    params.set("page", String(value));
    setPage(value);
    loadProducts(value);
    scrollToTop();
    replace(`${pathname}?${params.toString()}`);
  };

  useLayoutEffect(() => {
    loadProducts(numPage);
  }, [numPage, loadProducts]);

  return (
    <>
      <div className="catalog__products-row">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} height={440} variant="rounded" />
            ))
          : data.map((post) => <Product key={post.id} {...post} />)}
      </div>
      {countPage > 0 && (
        <Pagination
          count={countPage}
          color="primary"
          page={page}
          onChange={handleChange}
          siblingCount={IsMobile() ? 1 : 2}
          boundaryCount={IsMobile() ? 1 : 3}
        />
      )}
    </>
  );
};

export default function CatalogProducts({
  url,
  brand,
}: {
  url?: string;
  brand?: boolean;
}) {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <CatalogProductsContent url={url} brand={brand} />
    </Suspense>
  );
}
