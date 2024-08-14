import { FC } from "react";

import { Category as CategoryType } from "../common/types/Category";
import Link from "next/link";

type Props = Pick<CategoryType, "title" | "image" | "link">;

const Category: FC<Props> = (data) => {
  return (
    <Link className="category" href={data.link ? data.link : "#"}>
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
