"use client";

import { FC } from "react";

import IconHeart from "@/icons/heart.svg";
import IconHeartSolid from "@/icons/heart-solid.svg";
import IconShoppingCart from "@/icons/shopping-cart.svg";

import { Product as ProductType } from "../common/types/Product";
import { useBasket } from "@/store/basket";
import { useFavorite } from "@/store/favorite";
import { getPriceFormat } from "@/utils/getPriceFormat";
import {
  getProductStatus,
  getProductStatusColor,
} from "@/utils/getProductStatus";
import Link from "next/link";

type Props = Pick<
  ProductType,
  "price" | "status" | "id" | "image" | "productname" | "article"
>;

const Product: FC<Props> = (data) => {
  const addToCart = useBasket((state) => state.addToBasket);
  const toggleFavorite = useFavorite((state) => state.toggleFavorite);
  const favorites = useFavorite((state) => state.favorite);

  return (
    <div className="product">
      <button
        className={`product__like ${favorites.indexOf(data.id) !== -1 ? "active" : ""}`}
        onClick={() => toggleFavorite(data.id)}
      >
        <IconHeart className="heart" />
        <IconHeartSolid className="heart-solid" />
      </button>
      <div className="product__img">
        <Link href={`/products/${data.id}`}>
          <picture>
            <source
              srcSet={`https://my.loaderpro.ru/images/products/${data.image}`}
            />
            <img
              src={`https://my.loaderpro.ru/images/products/${data.image}`}
              alt=""
              decoding="async"
            />
          </picture>
        </Link>
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
        <div
          className={`product__status product__status--${getProductStatusColor(data.status)}`}
        >
          <span />
          <p>{getProductStatus(data.status)}</p>
        </div>
        <div className="product__title">
          <Link href={`/products/${data.id}`}>{data.productname}</Link>
        </div>
      </div>
      <div className="product__buttons">
        {data.status === "Нет в наличии" ? (
          <>
            <button className="button button__primary">Запросить</button>
          </>
        ) : (
          <>
            <button
              className="button button__primary button__icon"
              onClick={() => addToCart(data.id, 1)}
            >
              <IconShoppingCart />В корзину
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
