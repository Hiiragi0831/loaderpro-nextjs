import IconMagnifying from "@/icons/magnifying-glass.svg";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const search = async (data: any) => {
    try {
      const fdata = await api.getSearchResult({ search: data });
      if (fdata.length < 1) {
        setIsLoading(true);
        throw new Error("No results found");
      } else {
        setIsLoading(false);
        return fdata;
      }
    } catch (error: any) {
      setSearchData([]);
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    search(searchQuery).then((items: any) => {
      setSearchData(items);
    });
  }, [searchQuery]);

  console.log(searchData);

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
            {/*{searchData.map((item, index) => (*/}
            {/*  <p key={index}>{item}</p>*/}
            {/*))}*/}
          </div>
        )}
      </div>
    </div>
  );
};
