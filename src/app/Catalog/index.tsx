import { cloneDeep } from "lodash-es/lodash";
import { useLayoutEffect, useMemo, useState } from "preact/hooks";

import { Product as ProductType } from "../../common/types/Product";
import Product from "../../components/Product";
import { api } from "../../services/api";
import SelectBrand from "./components/SelectBrand";
import SortByKey, { SORT_PRODUCTS } from "./components/SortByKey";

const getFilteredProducts = (products: ProductType[], key: SORT_PRODUCTS): ProductType[] => {
  if (key === SORT_PRODUCTS.APRICE) {
    return products.sort((item1, item2) => (item1["price"] > item2["price"] ? 1 : -1));
  }
  if (key === SORT_PRODUCTS.DPRICE) {
    return products.sort((item1, item2) => (item1["price"] < item2["price"] ? 1 : -1));
  }
  return products.sort((item1, item2) => (item1["id"] > item2["id"] ? 1 : -1));
};

const Catalog = () => {
  const [data, setData] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortKey, setSortKey] = useState<SORT_PRODUCTS>(() => SORT_PRODUCTS.DEFAULT);
  const [brand, setBrand] = useState<number>(() => -1);

  const filteredProducts = useMemo(() => {
    const sort = brand !== -1 ? data?.filter((item) => item?.brand === brand) : data;
    return getFilteredProducts(cloneDeep(sort), sortKey);
  }, [data, sortKey, brand]);

  const loadProducts = async () => {
    try {
      const data = await api.getAllProducts();
      setData(cloneDeep(data));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <main>
      <section className="catalog__section">
        <div className="container">
          <div className="row">
            <div className="catalog__filters">
              <form className="form">
                <fieldset>
                  <legend>Фильтры</legend>
                </fieldset>
                <label className="form__select">
                  <SelectBrand value={brand} onChange={setBrand} />
                  <span>Бренд</span>
                </label>
                <label className="form__select">
                  <select name="category">
                    <option value="0" selected label="0" />
                    <option value="1" label="1" />
                    <option value="2" label="2" />
                  </select>
                  <span>Срок поставки</span>
                </label>
                <label className="form__select">
                  <select name="category">
                    <option value="-1" selected label="По умолчанию" />
                    <option value="0" label="Оригинал" />
                    <option value="1" label="Аналог" />
                  </select>
                  <span>Качество</span>
                </label>
                <button className="button button__primary" type="submit">
                  Применить
                </button>
              </form>
            </div>
            <div className="catalog__products">
              <SortByKey value={sortKey} onChange={setSortKey} />
              <div className="catalog__products-row">
                {isLoading ? "Загрузка" : filteredProducts.map((post) => <Product key={post.id} {...post} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
