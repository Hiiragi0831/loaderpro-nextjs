import { FC } from "react";
import { Link } from "react-router-dom";

import { Category as CategoryType } from "../common/types/Category";

type Props = Pick<CategoryType, "title" | "image" | "link">;

const Category: FC<Props> = (data) => {
  return (
    <Link className="category" to={data.link ? data.link : "#"}>
      <div className="category__bg">
        <picture>
          <source srcSet={data.image} />
          <img src={data.image} alt={data.title} decoding="async" />
        </picture>
      </div>
      <div className="category__info">
        <div className="category__title">{data.title}</div>
        <button className="category__button">
          <span>Перейти</span>
          <svg>
            <use xlinkHref="/__spritemap#sprite-right-arrow" />
          </svg>
        </button>
      </div>
    </Link>
  );
};

export default Category;
