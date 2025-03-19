"use client";

import IconMagnifying from "@/icons/magnifying-glass.svg";
import { FC, useEffect, useRef, useState } from "react";
import { api } from "@/services/api";
import { debounce } from "lodash-es";
import { Product as ProductType } from "@/common/types/Product";
import { useClickAway } from "react-use";
import Link from "next/link";
import { useSearchPanel } from "@/store/useSearchPanel";
import { useRouter } from "next/navigation";

type Props = {
  className?: string;
};

export const Search: FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState<ProductType[]>([]);
  const [totalResult, setTotalResult] = useState(0);
  const [focused, setFocused] = useState(false);
  const ref = useRef(null);
  const { toggleShow } = useSearchPanel();
  const route = useRouter();

  const search = async (data: any) => {
    try {
      const fdata = await api.getSearchResult(`?search=${data}`);
      setSearchData(fdata.results || []);
      setTotalResult(fdata.total);
    } catch (error: any) {
      setSearchData([]);
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  const debounced = useRef(debounce(search, 100));

  const close = () => {
    setFocused(false);
    toggleShow(false);
  };

  useClickAway(ref, () => {
    close();
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

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    if (searchData.length === 0 && searchQuery.length > 1) {
      route.push("/request-parts");
    } else {
      route.push(`/search?search=${searchQuery}`);
    }
    close();
  };

  useEffect(() => {
    if (searchQuery.length > 1) {
      debounced.current(searchQuery);
    }
  }, [searchQuery]);

  return (
    <section className={`search ${className}`}>
      <div className={"search__bg"}></div>
      <form
        className={"search__row"}
        ref={ref}
        onSubmit={onSubmit}
        action={"#"}
      >
        <button type="submit" className="search__button-pc">
          <IconMagnifying />
        </button>
        <label>
          <input
            type="text"
            name="search"
            placeholder="Введите артикул или название товара"
            onFocus={() => setFocused(true)}
            value={searchQuery}
            onChange={onSearch}
          />
          <button type="submit" className="search__button-m">
            <IconMagnifying />
          </button>
        </label>
        {searchData.length > 0 && (
          <div className={`search__results ${focused ? "active" : ""}`}>
            <div className="search__wrapper">
              {searchData.slice(0, 8).map((item) => (
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
                          ? `${item.image}`
                          : "https://my.loaderpro.ru/images/no-photo.svg"
                      }
                    />
                    <img
                      src={
                        item.image
                          ? `${item.image}`
                          : "https://my.loaderpro.ru/images/no-photo.svg"
                      }
                      alt=""
                    />
                  </picture>
                  <span>
                    {item.productname} {item.brand} {item.article}
                  </span>
                </Link>
              ))}
              {searchData.length > 8 ? (
                <Link
                  onClick={onClickItem}
                  href={`/search?search=${searchQuery}`}
                  className={"search__more"}
                >
                  <span className={"search__more-text"}>
                    Найдено {totalResult * 50}+ результатов
                  </span>
                  <span className={"search__more-button"}>Показать все</span>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </form>
      <span onClick={close} className="search__close">
        Закрыть
      </span>
    </section>
  );
};
