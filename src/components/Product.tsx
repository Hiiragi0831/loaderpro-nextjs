"use client";

import { FC, useCallback, useMemo } from "react";

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
import { rgbDataURL } from "@/utils/image";
import FeatureList from "@/components/FeatureList";

type Props = Pick<
  ProductType,
  | "id"
  | "image"
  | "productname"
  | "article"
  | "brand"
  | "price"
  | "status"
  | "count"
>;

const DEFAULT_IMG = "https://my.loaderpro.ru/images/no-photo.svg";

const Product: FC<Props> = ({
  id,
  image,
  productname,
  article,
  brand,
  price,
  status,
  count,
}) => {
  const addToQuery = useQuery((s) => s.addToQuery);
  const addToCart = useBasket((s) => s.addToBasket);
  const toggleFav = useFavorite((s) => s.toggleFavorite);
  const favorites = useFavorite((s) => s.favorite);
  const href = useMemo(
    () => `/products/${translit(productname)}-${id}`,
    [productname, id],
  );

  const isFav = favorites.includes(id);

  const src = useMemo(
    () => (image && image !== "Array" ? image : DEFAULT_IMG),
    [image],
  );

  const handleFav = useCallback(() => toggleFav(id), [id, toggleFav]);
  const handleAdd = useCallback(() => {
    addToCart(id, 1);
    ym("reachGoal", "addToBasket");
  }, [addToCart, id]);

  // <ProductCard>
  //   <FavoriteToggle isFav={isFav} onClick={handleFav} />
  //   <FeatureList brand={brand} extraFeatures={…} />
  //   <ProductImage src={src} alt={productname} href={href}/>
  //   <ProductInfo>
  //     <ProductPrice price={price} />
  //     <ProductArticle article={article} />
  //   </ProductInfo>
  //   <ProductStatus status={status} count={count}/>
  //   <ProductButtons
  //     isRequest={isRequest}
  //     onRequest={() => addToQuery(article, 1, brand)}
  //     onBuy={handleAdd}
  //   />
  // </ProductCard>

  return (
    <div className="product" itemScope itemType="https://schema.org/Product">
      <button
        className={`product__like ${isFav ? "active" : ""}`}
        onClick={handleFav}
        aria-label="Добавить в избранное"
      >
        <IconHeart className="heart" />
        <IconHeartSolid className="heart-solid" />
      </button>
      <div className="product__features">
        <FeatureList brand={brand} />
      </div>
      <div className="product__img">
        <Link href={href}>
          <Image
            width={190}
            height={150}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            placeholder="blur"
            blurDataURL={rgbDataURL(255, 255, 255)}
            src={src}
            alt={productname}
            loading="lazy"
            itemProp="image"
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
          <meta itemProp="price" content={String(price)} />
          <meta itemProp="priceCurrency" content="RUB" />
          <link itemProp="availability" href="http://schema.org/InStock" />
          <p itemProp="price">
            {price === 0 ? "Цена по запросу" : `${getPriceFormat(price)} ₽`}
          </p>
        </div>
        <p className="product__article">Артикул: {article}</p>
      </div>
      <div className="product__main">
        <div
          className={`product__status product__status--${
            count === 0 ? "green" : status.value
          }`}
        >
          <span />
          <p>{count === 0 ? "7-10 дней" : status.name}</p>
        </div>
        <div className="product__title" itemProp="name">
          <Link href={href}>{productname}</Link>
        </div>
      </div>
      <div className="product__buttons">
        {count === 0 ? (
          <>
            <button
              className="button button__primary"
              onClick={() => addToQuery(article, 1, brand)}
            >
              Запросить
            </button>
          </>
        ) : (
          <>
            <button
              className="button button__primary button__icon"
              onClick={handleAdd}
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
