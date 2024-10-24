"use client";
import { useSearchParams } from "next/navigation";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import Product from "@/components/Product";

const Content = () => {
  const searchQuery = useSearchParams().get("search");
  const [searchData, setSearchData] = useState<ProductType[]>([]);

  const loadSearch = async () => {
    try {
      const fdata = await api.getSearchResult({
        search: searchQuery,
      });
      setSearchData(fdata || []);
    } catch (error: any) {
      setSearchData([]);
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  useEffect(() => void loadSearch(), [searchQuery]);

  return (
    <section className={"catalog__section"}>
      <div className="container">
        <div className="section-title">
          <span className="h1">Результат поиска по запросу: {searchQuery}</span>
        </div>
        <div className="row row-1">
          <div className="catalog__products">
            <div className="catalog__products-row">
              {searchData.map((post) => (
                <Product key={post.id} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
