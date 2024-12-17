"use client";

import { Key, useLayoutEffect, useState } from "react";
import { SingleProduct } from "@/common/types/Product";
import { useBasket } from "@/store/basket";
import { useQuery } from "@/store/query";
import { api } from "@/services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import Link from "next/link";
import { Modal } from "@/components/Modal";
import { notFound, useRouter } from "next/navigation";
import translit from "@/utils/translit";

const images = (items: []) => {
  if (items.length === 0) {
    return (
      <SwiperSlide>
        <picture>
          <source srcSet="/images/no-photo.jpg" />
          <img src="/images/no-photo.jpg" alt="" />
        </picture>
      </SwiperSlide>
    );
  }
  return items.map((item: any, index: Key | null | undefined) => (
    <SwiperSlide key={index}>
      <picture>
        <source srcSet={item} />
        <img src={item} alt="" />
      </picture>
    </SwiperSlide>
  ));
};

export default function ProductInfo(params: any) {
  // const id = prop.id;
  const slugArray = params.id.slug.split("-");
  const id = slugArray.pop();
  const slug = slugArray.join("-");
  const route = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<SingleProduct>({
    id: 0,
    productname: "",
    brand: "",
    article: "",
    price: 0,
    count: 0,
    image: [],
    status: {
      id: 0,
      name: "",
      value: "",
    },
    description: "",
    weight: "",
    options: [
      {
        name: "",
        value: "",
      },
    ],
  });

  const price =
    data.price === 0
      ? "Цена по запросу"
      : `${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`;
  const addToCart = useBasket((state) => state.addToBasket);
  const addToQuery = useQuery((state) => state.addToQuery);

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
      if (!props.id) {
        notFound();
      }

      setData(props);
      setIsLoading(false);

      if (slug !== translit(props.productname.replaceAll(" ", "-"))) {
        route.push(
          `/products/${translit(props.productname.replaceAll(" ", "-"))}-${props.id}`,
        );
      }
    } catch (error: any) {
      console.error("Error fetching:", error.message);
    }
  };

  useLayoutEffect(() => void loadArticle(), []);

  return (
    <>
      <section className="commodity__section">
        <div className="container">
          {isLoading ? (
            "Загрузка"
          ) : (
            <div className="row">
              <div className="commodity__head">
                <div className="commodity__title">
                  <h1>
                    {data.productname} {data.brand} {data.article}
                  </h1>
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
                    {data.count === 0 ? (
                      <div
                        className={`commodity__availability commodity__availability--green`}
                      >
                        <span />
                        <p>7-10 дней</p>
                      </div>
                    ) : (
                      <div
                        className={`commodity__availability commodity__availability--${data.status.value}`}
                      >
                        <span />
                        <p>{data.status.name}</p>
                      </div>
                    )}

                    <div className="commodity__specifications">
                      <div className="commodity__specification">
                        <p>Артикул</p>
                        <span>{data.article}</span>
                      </div>
                      <div className="commodity__specification">
                        <p>Бренд</p>
                        <span>{data.brand}</span>
                      </div>
                      <button onClick={() => setModalOpen(true)}>
                        Показать все характеристики
                      </button>
                    </div>
                  </div>
                  <div className="commodity__description">
                    {data.description ? (
                      <>
                        <h5>Описание</h5>
                        <p>{data.description}</p>
                      </>
                    ) : (
                      <>
                        <h5>Описание</h5>
                        <p>
                          {data.productname} {data.brand} {data.article} вы
                          можете купить с доставкой в любую точку России с
                          оплатой по безналичному расчету с НДС 20% или по
                          карте. Если у вас возникли сложности с выбором, вы
                          можете получить экспертную консультацию связавшись с
                          нами любым удобным способом со страницы{" "}
                          <Link href={"/contact"}> Контакты</Link>
                        </p>
                      </>
                    )}
                    <picture>
                      <source srcSet="/images/product/hero-2.png" />
                      <img src="/images/product/hero-2.png" alt="" />
                    </picture>
                  </div>
                  <div className="commodity__basket">
                    <div className="commodity__price">
                      <span>Цена:</span>
                      <p>{price}</p>
                    </div>
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
                    {data.count === 0 ? (
                      <>
                        <button
                          className="button button__primary"
                          onClick={() =>
                            addToQuery(data.article, quantity, data.brand)
                          }
                        >
                          Запросить
                        </button>
                        <p className="commodity__query">
                          *Цену и срок поставки необходимо запросить.
                        </p>
                      </>
                    ) : (
                      <button
                        className="button button__primary"
                        onClick={() => addToCart(data.id, quantity)}
                      >
                        В корзину
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Modal isShow={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="commodity-specification">
          {data.options?.map((option: any, id) => (
            <div className="commodity__specification" key={id}>
              <p>{option.name}</p>
              <span>{option.value}</span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
