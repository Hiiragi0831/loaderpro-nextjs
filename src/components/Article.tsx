import { Article as ArticleType } from "../common/types/Article";
import Link from "next/link";
import { FC } from "react";

type Props = Pick<
  ArticleType,
  "id" | "title" | "description" | "image" | "date" | "link"
>;

const Article: FC<Props> = ({ id, title, description, image, date, link }) => {
  // const currentDate = new Date(date)
  //   .toISOString()
  //   .slice(0, 10)
  //   .split("-")
  //   .reverse()
  //   .join(".");

  return (
    <div className="article">
      <div className="article__img">
        <picture>
          <source srcSet={`${image}`} />
          <img src={`${image}`} alt={title} decoding="async" />
        </picture>
      </div>
      <div className="article__title">
        <p>{title}</p>
      </div>
      <div className="article__date">
        <p>{date}</p>
      </div>
      <div className="article__description">
        <p>{description?.slice(0, 80)}...</p>
      </div>
      <div className="article__link">
        <Link href={link ? link : `/articles/${id}`} target={"_blank"}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default Article;
