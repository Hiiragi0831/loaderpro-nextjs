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
import { useQuery } from "@/store/query";
import Image from "next/image";
import ym from "react-yandex-metrika";
import Feature from "@/components/Feature";

type Props = Pick<
  ProductType,
  | "price"
  | "status"
  | "id"
  | "image"
  | "productname"
  | "article"
  | "brand"
  | "count"
>;

const Product: FC<Props> = (data) => {
  const addToQuery = useQuery((state) => state.addToQuery);
  const addToCart = useBasket((state) => state.addToBasket);
  const toggleFavorite = useFavorite((state) => state.toggleFavorite);
  const favorites = useFavorite((state) => state.favorite);
  const href = `/products/${translit(data.productname.replaceAll(" ", "-"))}-${data.id}`;

  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  const features = () => {
    const component: any = [];

    switch (data.brand) {
      case "JUNGHEINRICH (269)":
      case "LINDE (400)":
      case "STILL (255)":
      case "HYSTER (001)":
      case "YALE (003)":
      case "BT (268)":
        component.push("OEM", "Распродажа");
        break;
      case "KALMAR (546)":
      case "MERLO (A24)":
      case "BOBCAT (274)":
      case "COMBILIFT (AY7)":
      case "CLARK (007)":
        component.push("Скидка за отзыв");
        break;
      case "HELI (U88)":
      case "HANGCHA Forklift (DG5)":
      case "EP (BB8)":
      case "JAC (IM5)":
        component.push("Оригинал");
        break;
    }

    return component.map((item: any, id: any) => (
      <Feature text={item} key={id} />
    ));
  };
  const srcImage = () => {
    if (data.image) {
      if (data.image === "Array") {
        return "https://my.loaderpro.ru/images/no-photo.svg";
      }
      return data.image;
    } else {
      return "https://my.loaderpro.ru/images/no-photo.svg";
    }
  };

  return (
    <div className="product" itemScope itemType="https://schema.org/Product">
      <button
        className={`product__like ${favorites.indexOf(data.id) !== -1 ? "active" : ""}`}
        onClick={() => toggleFavorite(data.id)}
        aria-label="Добавить в избранное"
      >
        <IconHeart className="heart" />
        <IconHeartSolid className="heart-solid" />
      </button>
      <div className="product__features">{features()}</div>
      <div className="product__img">
        <Link href={href}>
          <Image
            width={190}
            height={150}
            sizes={"100%"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            loading="lazy"
            blurDataURL={rgbDataURL(255, 255, 255)}
            placeholder={"blur"}
            itemProp="image"
            src={srcImage()}
            alt={data.productname}
          />
        </Link>
      </div>
      <div className="product__info">
        <div
          className="product__price"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="price" content={String(data.price)} />
          <meta itemProp="priceCurrency" content="RUB" />
          <link itemProp="availability" href="http://schema.org/InStock" />
          <p itemProp="price">
            {data.price === 0
              ? "Цена по запросу"
              : `${getPriceFormat(data.price)} ₽`}
          </p>
        </div>
        <div className="product__article">
          <p>Артикул: {data.article}</p>
        </div>
      </div>
      <div className="product__main">
        {data.count === 0 ? (
          <div className={`product__status product__status--green`}>
            <span />
            <p>7-10 дней</p>
          </div>
        ) : (
          <div
            className={`product__status product__status--${data.status.value}`}
          >
            <span />
            <p>{data.status.name}</p>
          </div>
        )}
        <div className="product__title">
          <Link href={href} itemProp="name">
            {data.productname}
          </Link>
        </div>
      </div>
      <div className="product__buttons">
        {data.price === 0 ? (
          <>
            <button
              className="button button__primary"
              onClick={() => addToQuery(data.article, 1, data.brand)}
            >
              Запросить
            </button>
          </>
        ) : (
          <>
            <button
              className="button button__primary button__icon"
              onClick={() => {
                addToCart(data.id, 1);
                ym("reachGoal", "addToBasket");
              }}
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
