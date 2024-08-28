"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { Product as ProductType } from "@/common/types/Product";
import { Brand as BrandType } from "@/common/types/Brand";
import { useBasket } from "@/store/basket";
import { api } from "@/services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import {
  getProductStatus,
  getProductStatusColor,
} from "@/utils/getProductStatus";

export default function ProductInfo(prop: any) {
  const id = prop.id;
  const [data, setData] = useState<ProductType>({
    id: 0,
    productname: "",
    price: 0,
    count: 0,
    description: "",
    image: "",
    article: 0,
    weight: 0,
    status: "Нет в наличии",
    brand: -1,
  });
  const [brand, setBrand] = useState<BrandType>({
    id: -1,
    name: "",
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

  const loadBrands = async () => {
    if (data.brand === -1) {
      return;
    }
    try {
      const props = await api.getBrand(data.brand);
      setBrand(props);
    } catch (error) {
      // @ts-expect-error @ts-expect-error
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadArticle(), []);
  useEffect(() => void loadBrands(), [data.brand]);

  return (
    <section className="commodity__section">
      <div className="container">
        {isLoading ? (
          "Загрузка"
        ) : (
          <div className="row">
            <div className="commodity__head">
              <div className="commodity__title">
                <h1>{data.productname}</h1>
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
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
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
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture>
                        <source srcSet="/images/image_1.png" />
                        <img
                          src="/images/image_1.png"
                          alt=""
                          decoding="async"
                        />
                      </picture>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="commodity__info">
                <div className="commodity__info-box">
                  <div
                    className={`commodity__availability commodity__availability--${getProductStatusColor(data.status)}`}
                  >
                    <span />
                    <p>{getProductStatus(data.status)}</p>
                  </div>
                  <div className="commodity__specifications">
                    <div className="commodity__specification">
                      <p>Артикул</p>
                      <span>{data.article}</span>
                    </div>
                    <div className="commodity__specification">
                      <p>Бренд</p>
                      <span>{brand.name}</span>
                    </div>
                    <div className="commodity__specification">
                      <p>Бренд</p>
                      <span>JUNGHEINRICH</span>
                    </div>
                    <div className="commodity__specification">
                      <p>Бренд</p>
                      <span>JUNGHEINRICH</span>
                    </div>
                  </div>
                </div>
                <div className="commodity__description">
                  <h5>Описание</h5>
                  <p>{data.description}</p>
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
                  {getProductStatus(data.status) === "Нет в наличии" ? (
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
