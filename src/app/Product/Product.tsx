"use client";

import { useLayoutEffect, useState, useEffect } from "react";

import { Brand as BrandType } from "@/common/types/Brand";
import { Product as ProductType } from "@/common/types/Product";
import Advantages from "@/components/Advantages";
import Articles from "@/components/Articles";
import { Reviews } from "@/components/Reviews";
import { api } from "@/services/api";
import { useBasket } from "@/store/basket";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";

export default function Product() {
  const { id } = useParams();
  const [data, setData] = useState<ProductType>({
    id: 0,
    title: "",
    price: 0,
    count: 0,
    description: "",
    image: "",
    article: 0,
    weight: 0,
    like: false,
    status: 0,
    brand: -1,
  });
  const [brand, setBrand] = useState<BrandType>({
    id: -1,
    name: "",
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const price = data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const price = data.price;
  let status: string;
  let statusColor: string;
  const addToCart = useBasket((state) => state.addToBasket);

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
      console.error("Error fetching:", error.message);
    }
  };

  const counter = (method: string) => {
    const dataCount = Object.assign({}, data);
    switch (method) {
      case "increment":
        dataCount.count += 1;
        break;
      case "decrement":
        if (dataCount.count <= 1) {
          dataCount.count = 1;
        } else {
          dataCount.count -= 1;
        }
    }
    setData(dataCount);
  };

  useLayoutEffect(() => void loadArticle(), []);
  useEffect(() => void loadBrands(), [data.brand]);

  switch (data.status) {
    case 1:
      status = "В наличии";
      statusColor = "green";
      break;
    case 2:
      status = "2-3 недели";
      statusColor = "orange";
      break;
    default:
      status = "Нет в наличии";
      statusColor = "red";
  }

  return (
    <main>
      <section className="commodity__section">
        <div className="container">
          {isLoading ? (
            "Загрузка"
          ) : (
            <div className="row">
              <div className="commodity__head">
                <div className="commodity__title">
                  <h1>{data.title}</h1>
                </div>
              </div>
              <div className="commodity__main">
                <div className="commodity__gallery">
                  <div className="commodity__gallery-main">
                    <Swiper spaceBetween={10} thumbs={{ swiper: thumbsSwiper }}>
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
                      // onSwiper={setThumbsSwiper}
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
                      className={`commodity__availability commodity__availability--${statusColor}`}
                    >
                      <span />
                      <p>{status}</p>
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
                  </div>
                  <div className="commodity__basket">
                    <div className="commodity__price">
                      <span>Цена:</span>
                      <p>{price} ₽</p>
                    </div>
                    {data.status === 0 ? (
                      <>
                        <label className="commodity__input">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value=""
                          />
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
                            onClick={() => counter("decrement")}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            name="count"
                            value={data.count}
                          />
                          <button
                            className="commodity__count-plus"
                            onClick={() => counter("increment")}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="button button__primary"
                          onClick={() => addToCart(data)}
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
      <Reviews />
      <Advantages />
      <Articles limit={4} />
    </main>
  );
}
