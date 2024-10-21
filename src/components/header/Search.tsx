"use client";

import IconMagnifying from "@/icons/magnifying-glass.svg";
import { FC, useEffect, useRef, useState } from "react";
import { api } from "@/services/api";
import { debounce } from "lodash-es";
import { Product } from "@/common/types/Product";
import { useClickAway } from "react-use";
import Link from "next/link";
import { useSearchPanel } from "@/store/useSearchPanel";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

export const Search: FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState<Product[]>([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const { toggleShow } = useSearchPanel();
  const route = useRouter();

  const search = async (data: any) => {
    try {
      const fdata = await api.getSearchResult({ search: data });
      setSearchData(fdata || []);

      if (fdata.length === 0 && data.length > 0) {
        route.push("/request-parts");
      }
    } catch (error: any) {
      setSearchData([]);
      console.error("Error fetching:", error.message);
      throw error;
    }
  };
  const debounced = useRef(debounce(search, 500));

  useClickAway(ref, () => {
    setFocused(false);
    toggleShow(false);
  });

  const onClickItem = () => {
    setFocused(false);
    toggleShow(false);
    setSearchQuery("");
    setSearchData([]);
  };

  const onSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    debounced.current(searchQuery);
  }, [searchQuery]);

  return (
    <section className={`search ${className}`}>
      <div className={"search__bg"}></div>
      <div className={"search__row"} ref={ref}>
        <label>
          <input
            type="text"
            name="search"
            placeholder="Поиск товара"
            onFocus={() => setFocused(true)}
            value={searchQuery}
            onChange={onSearch}
          />
          <button type="submit">
            <IconMagnifying />
          </button>
        </label>
        {searchData.length > 0 && (
          <div className={`search__results ${focused ? "active" : ""}`}>
            <div className="search__wrapper">
              {searchData.map((item) => (
                <Link
                  onClick={onClickItem}
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="search__link"
                >
                  <picture>
                    <source
                      srcSet={
                        item.image
                          ? `https://my.loaderpro.ru/images/products/${item.image}`
                          : "https://my.loaderpro.ru/images/no-photo.svg"
                      }
                    />
                    <img
                      src={
                        item.image
                          ? `https://my.loaderpro.ru/images/products/${item.image}`
                          : "https://my.loaderpro.ru/images/no-photo.svg"
                      }
                      alt=""
                      decoding="async"
                    />
                  </picture>
                  <span>
                    {item.productname} {item.brand} {item.article}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
