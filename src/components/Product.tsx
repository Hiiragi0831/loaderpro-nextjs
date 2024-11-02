"use client";

import { FC } from "react";

import IconHeart from "@/icons/heart.svg";
import IconHeartSolid from "@/icons/heart-solid.svg";
import IconShoppingCart from "@/icons/shopping-cart.svg";

import { Product as ProductType } from "../common/types/Product";
import { useBasket } from "@/store/basket";
import { useFavorite } from "@/store/favorite";
import { getPriceFormat } from "@/utils/getPriceFormat";
import Link from "next/link";
import translit from "@/utils/translit";
import Image from "next/image";

type Props = Pick<
  ProductType,
  "price" | "status" | "id" | "image" | "productname" | "article"
>;

const Product: FC<Props> = (data) => {
  const addToCart = useBasket((state) => state.addToBasket);
  const toggleFavorite = useFavorite((state) => state.toggleFavorite);
  const favorites = useFavorite((state) => state.favorite);
  const href = `/products/${translit(data.productname.replaceAll(" ", "-"))}-${data.id}`;

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
        <Link href={href}>
          <picture>
            <source
              srcSet={
                data.image
                  ? `${data.image}`
                  : "https://my.loaderpro.ru/images/no-photo.svg"
              }
            />
            {/*<Image*/}
            {/*  width={190}*/}
            {/*  height={150}*/}
            {/*  sizes={"100%"}*/}
            {/*  style={{*/}
            {/*    width: "100%",*/}
            {/*    height: "100%",*/}
            {/*  }}*/}
            {/*  src={*/}
            {/*    data.image*/}
            {/*      ? `${data.image}`*/}
            {/*      : "https://my.loaderpro.ru/images/no-photo.svg"*/}
            {/*  }*/}
            {/*  alt={data.productname}*/}
            {/*/>*/}
            <img
              src={
                data.image
                  ? `${data.image}`
                  : "https://my.loaderpro.ru/images/no-photo.svg"
              }
              alt={data.productname}
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
          className={`product__status product__status--${data.status.value}`}
        >
          <span />
          <p>{data.status.name}</p>
        </div>
        <div className="product__title">
          <Link href={href}>{data.productname}</Link>
        </div>
      </div>
      <div className="product__buttons">
        {data.status.name === "Нет предложений" ||
        data.status.name === "В идентификации" ? (
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
