import Category from "./Category";
import { Category as CategoryType } from "@/common/types/Category";

const Categories = () => {
  const data = [
    {
      id: 1,
      title: "Запасные части",
      image: "/assets/images/cat-01.jpg",
      popular: true,
    },
    {
      id: 2,
      title: "Шины и диски",
      image: "/assets/images/cat-02.jpg",
      popular: true,
    },
    {
      id: 3,
      title: "Ремонт и обслуживание",
      image: "/assets/images/cat-03.jpg",
      popular: true,
    },
    {
      id: 4,
      title: "Подбор запчастей",
      image: "/assets/images/cat-04.jpg",
      popular: true,
    },
    {
      id: 5,
      title: "Фильтры",
      image: "/assets/images/cat-05.jpg",
      popular: true,
    },
  ];

  return (
    <section className="category__section">
      <div className="container">
        <div className="title">
          <span className="h1">Популярные категории</span>
        </div>
        <div className="row">
          {data.map((item: CategoryType) => (
            <Category key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
