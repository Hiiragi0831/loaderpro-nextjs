"use client";

import { Key, useLayoutEffect, useState } from "react";
import { SingleProduct } from "@/common/types/Product";
// import { Brand as BrandType } from "@/common/types/Brand";
import { useBasket } from "@/store/basket";
import { api } from "@/services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";

export default function ProductInfo(prop: any) {
  const id = prop.id;
  const [data, setData] = useState<SingleProduct>({
    id: 0,
    productname: "",
    price: 0,
    count: 0,
    description: "",
    image: [],
    article: "",
    weight: "",
    status: {
      id: 0,
      name: "",
      value: "",
    },
    brand: "",
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const addToCart = useBasket((state) => state.addToBasket);

  const handleInitialCountChange = (event: any) => {
    setQuantity(Number(event.target.value));
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const loadArticle = async () => {
    try {
      const props = await api.getProduct(id);
      setData(props);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
    }
  };

  const images = (items: []) => {
    return items.map((item: any, index: Key | null | undefined) => (
      <SwiperSlide key={index}>
        <picture>
          <source srcSet={`https://my.loaderpro.ru/images/products/${item}`} />
          <img
            src={`https://my.loaderpro.ru/images/products/${item}`}
            alt=""
            decoding="async"
          />
        </picture>
      </SwiperSlide>
    ));
  };

  useLayoutEffect(() => void loadArticle(), []);

  return (
    <section className="commodity__section">
      <div className="container">
        {isLoading ? (
          "Загрузка"
        ) : (
          <div className="row">
            <div className="commodity__head">
              <div className="commodity__title">
                <h1>{data.productname} {data.brand} {data.article}</h1>
              </div>
            </div>
            <div className="commodity__main">
              <div className="commodity__gallery">
                <div className="commodity__gallery-main">
                  <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Thumbs]}
                  >
                    {images(data.image)}
                  </Swiper>
                </div>
                <div className="commodity__gallery-thumb">
                  <Swiper
                    // @ts-expect-error @ts-expect-error
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Thumbs]}
                  >
                    {images(data.image)}
                  </Swiper>
                </div>
              </div>
              <div className="commodity__info">
                <div className="commodity__info-box">
                  <div
                    className={`commodity__availability commodity__availability--${data.status.value}`}
                  >
                    <span />
                    <p>{data.status.name}</p>
                  </div>
                  <div className="commodity__specifications">
                    <div className="commodity__specification">
                      <p>Артикул</p>
                      <span>{data.article}</span>
                    </div>
                    <div className="commodity__specification">
                      <p>Бренд</p>
                      <span>{data.brand}</span>
                    </div>
                    {data.options?.map((option: any) => (
                      <div className="commodity__specification" key={option.id}>
                        <p>{option.name}</p>
                        <span>{option.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="commodity__description">
                  {data.description ? (
                    <>
                      <h5>Описание</h5>
                      <p>{data.description}</p>
                    </>
                  ) : (
                    ""
                  )}
                  <picture>
                    <source srcSet="/images/product/hero.png" />
                    <img
                      src="/images/product/hero.png"
                      alt=""
                      decoding="async"
                    />
                  </picture>
                </div>
                <div className="commodity__basket">
                  <div className="commodity__price">
                    <span>Цена:</span>
                    <p>{price} ₽</p>
                  </div>
                  {data.status.name === "Нет в наличии" ? (
                    <>
                      <label className="commodity__input">
                        <input type="email" name="email" placeholder="Email" />
                      </label>
                      <button className="button button__primary">
                        Запросить
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="commodity__count">
                        <button
                          className="commodity__count-minus"
                          onClick={() => decrement()}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          name="count"
                          value={quantity}
                          onChange={handleInitialCountChange}
                        />
                        <button
                          className="commodity__count-plus"
                          onClick={() => increment()}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="button button__primary"
                        onClick={() => addToCart(data.id, quantity)}
                      >
                        В корзину
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
