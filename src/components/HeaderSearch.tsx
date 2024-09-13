"use client";

import IconMagnifying from "@/icons/magnifying-glass.svg";
import { useEffect, useRef, useState } from "react";
import { api } from "@/services/api";
import { debounce } from "lodash-es";
import { Product } from "@/common/types/Product";

export const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = async (data: any) => {
    try {
      const fdata = await api.getSearchResult({ search: data });
      if (fdata.length < 1) {
        setIsLoading(true);
        setSearchData([]);
      } else {
        setSearchData(fdata || []);
      }
    } catch (error: any) {
      setSearchData([]);
      console.error("Error fetching:", error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  const debounced = useRef(debounce(search, 500));

  useEffect(() => {
    debounced.current(searchQuery);
  }, [searchQuery]);

  // useDebounse задержка на отправку запроса чтобы не спамить
  // Очистить поисковую строку при клике на результат

  return (
    <div className="header__search">
      <label>
        <input
          type="text"
          name="search"
          placeholder="Поиск товара"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">
          <IconMagnifying />
        </button>
      </label>
      <div>
        {isLoading ? (
          "Загрузка"
        ) : (
          <div>
            {searchData.map((item: Product, index) => (
              <p key={index}>
                {item?.id} - {item?.productname}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
