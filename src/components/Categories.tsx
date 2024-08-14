import { api } from "@/services/api";
import Category from "./Category";
import {useLayoutEffect, useState} from "react";
import {Category as CategoryType} from "@/common/types/Category";

const Categories = () => {
  const [data, setData] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const data = await api.getAllCategory();
      setData(data);
      setIsLoading(false);
    } catch (error:any) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadProducts(), []);

  return (
    <section className="category__section">
      <div className="container">
        <div className="title">
          <span className="h1">Популярные категории</span>
        </div>
        <div className="row">{isLoading ? "Загрузка" : data.map((item) => <Category key={item.id} {...item} />)}</div>
      </div>
    </section>
  );
};

export default Categories;
