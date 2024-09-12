import IconMagnifying from "@/icons/magnifying-glass.svg";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const search = async (data: any) => {
    const fd = {
      search: data,
    };
    try {
      const fdata = api.getSearchResult(fd);
      console.log(fdata);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    search(searchQuery);
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
    </div>
  );
};
