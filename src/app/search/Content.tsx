"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { api } from "@/services/api";
import { ChangeEvent, useEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import Product from "@/components/Product";
import { IsMobile } from "@/utils/IsMobile";
import Pagination from "@mui/material/Pagination";
import { scrollToTop } from "@/utils/scrollToTop";

const Content = () => {
  const searchParams = useSearchParams();
  const [countPage, setCountPage] = useState(1);
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState<ProductType[]>([]);
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const loadSearch = async (params?: any) => {
    const param = params ? params : `?${searchParams}`;
    try {
      const fdata = await api.getSearchResult(param);
      setSearchData(fdata.results || []);
      setCountPage(fdata.total);
    } catch (error: any) {
      setSearchData([]);
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    params.set("page", String(value));
    setPage(value);
    replace(`${pathname}?${params.toString()}`);
    scrollToTop();
    loadSearch(`?${params.toString()}`);
  };

  useEffect(() => void loadSearch(), [searchParams]);

  return (
    <section className={"catalog__section"}>
      <div className="container">
        <div className="section-title">
          <span className="h1">
            Результат поиска по запросу: {searchParams.get("search")}
          </span>
        </div>
        <div className="row row-1">
          <div className="catalog__products">
            <div className="catalog__products-row">
              {searchData.map((post) => (
                <Product key={post.id} {...post} />
              ))}
            </div>
            <Pagination
              count={countPage}
              color="primary"
              page={page}
              onChange={handleChange}
              siblingCount={IsMobile() ? 1 : 2}
              boundaryCount={IsMobile() ? 1 : 3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
