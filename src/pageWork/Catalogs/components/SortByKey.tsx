export enum SORT_PRODUCTS {
  DEFAULT = "default",
  APRICE = "aprice",
  DPRICE = "dprice",
}

const VALUES: Record<SORT_PRODUCTS, string> = {
  [SORT_PRODUCTS.DEFAULT]: "По умолчанию",
  [SORT_PRODUCTS.APRICE]: "Сначала дешевые",
  [SORT_PRODUCTS.DPRICE]: "Сначала дорогие",
};

type Props = {
  value: SORT_PRODUCTS;
  onChange: (key: SORT_PRODUCTS) => void;
};

const SortByKey = ({ value, onChange }: Props) => {
  return (
    <>
      <div className="catalog__sort">
        <div className="catalog__sort-wrapper">
          <p className="catalog__sort-title">Сортировка:</p>
          {Object.values(SORT_PRODUCTS)?.map((key, id) => (
            <button
              key={id}
              className={`catalog__sort-item ${key === value ? "is-active" : ""}`}
              title={VALUES[key]}
              onClick={() => onChange(key)}
              disabled={key === value}
            >
              {VALUES[key]}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SortByKey;
