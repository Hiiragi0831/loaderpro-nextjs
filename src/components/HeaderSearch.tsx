import IconMagnifying from "@/icons/magnifying-glass.svg";

export const HeaderSearch = () => {
  return (
    <div className="header__search">
      <label>
        <input type="text" name="search" placeholder="Поиск товара" />
        <button type="submit">
          <IconMagnifying />
        </button>
      </label>
    </div>
  );
};
