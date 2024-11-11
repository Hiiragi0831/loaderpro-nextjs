import { FC } from "react";

import { Category as CategoryType } from "../common/types/Category";
import Link from "next/link";
import IconRightArrow from "@/icons/right-arrow.svg";

type Props = Pick<CategoryType, "title" | "image" | "link">;

const Category: FC<Props> = (data) => {
  return (
    <Link className="category" href={data.link ? data.link : "#"}>
      <div className="category__bg">
        <picture>
          <source srcSet={data.image} />
          <img src={data.image} alt={data.title} />
        </picture>
      </div>
      <div className="category__info">
        <div className="category__title">{data.title}</div>
        <button className={`category__button ${data.link ? "" : "is-hidden"}`}>
          <span>Перейти</span>
          <IconRightArrow />
        </button>
      </div>
    </Link>
  );
};

export default Category;
