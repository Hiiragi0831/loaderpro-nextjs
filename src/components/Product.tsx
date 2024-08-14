'use client';

import { FC } from "react";

import { Product as ProductType } from "../common/types/Product";
import { useBasket } from "@/store/basket";
import { useFavorite } from "@/store/favorite";
import { getPriceFormat } from "@/utils/getPriceFormat";
import { getProductStatus, getProductStatusColor } from "@/utils/getProductStatus";
import Link from "next/link";

type Props = Pick<ProductType, "price" | "status" | "id" | "image" | "title" | "article" | "like">;

const Product: FC<Props> = (data) => {
  const addToCart = useBasket((state) => state.addToBasket);
  const toggleFavorite = useFavorite((state) => state.toggleFavorite);
  const favorites = useFavorite((state) => state.favorite);

  return (
    <div className="product">
      <button
        className={`product__like ${favorites.indexOf(data.id) !== -1 ? "is-active" : ""}`}
        onClick={() => toggleFavorite(data.id)}
      >
        <svg className="heart">
          <use xlinkHref="/__spritemap#sprite-heart" />
        </svg>
        <svg className="heart-solid">
          <use xlinkHref="/__spritemap#sprite-heart-solid" />
        </svg>
      </button>
      <div className="product__img">
        <picture>
          <source srcSet={data.image} />
          <img src={data.image} alt="" decoding="async" />
        </picture>
      </div>
      <div className="product__info">
        <div className="product__price">
          <p>{getPriceFormat(data.price)} ₽</p>
        </div>
        <div className="product__article">
          <p>Артикул: {data.article}</p>
        </div>
      </div>
      <div className="product__main">
        <div className={`product__status product__status--${getProductStatusColor(data.status)}`}>
          <span />
          <p>{getProductStatus(data.status)}</p>
        </div>
        <div className="product__title">
          <Link href={`/catalog/${data.id}`}>{data.title}</Link>
        </div>
      </div>
      <div className="product__buttons">
        {data.status === 0 ? (
          <>
            <button className="button button__primary">Запросить</button>
          </>
        ) : (
          <>
            <button className="button button__primary button__icon" onClick={() => addToCart(data)}>
              <svg>
                <use xlinkHref="/__spritemap#sprite-shopping-cart" />
              </svg>
              В корзину
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
