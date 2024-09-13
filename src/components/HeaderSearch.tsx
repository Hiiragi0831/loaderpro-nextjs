"use client";

import IconMagnifying from "@/icons/magnifying-glass.svg";
import { useEffect, useRef, useState } from "react";
import { api } from "@/services/api";
import { debounce } from "lodash-es";
import { Product } from "@/common/types/Product";
import { useClickAway } from "react-use";
import Link from "next/link";

export const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState<Product[]>([]);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);

  const search = async (data: any) => {
    try {
      const fdata = await api.getSearchResult({ search: data });
      setSearchData(fdata || []);
    } catch (error: any) {
      setSearchData([]);
      console.error("Error fetching:", error.message);
      throw error;
    }
  };
  const debounced = useRef(debounce(search, 300));

  useClickAway(ref, () => {
    setFocused(false);
  });

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setSearchData([]);
  };

  useEffect(() => {
    debounced.current(searchQuery);
  }, [searchQuery]);

  // useDebounse задержка на отправку запроса чтобы не спамить
  // Очистить поисковую строку при клике на результат

  return (
    <div className="search" ref={ref}>
      <label>
        <input
          type="text"
          name="search"
          placeholder="Поиск товара"
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
  );
};
