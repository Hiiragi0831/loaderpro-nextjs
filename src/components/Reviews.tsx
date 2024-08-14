'use client';
import {useLayoutEffect, useState} from "react";
import Product from "@/components/Product";

export const Reviews = () => {
  const [status, setStatus] = useState(0);
  useLayoutEffect(() => setStatus(1), []);
  const reviewLab = () => {
    return (
      <>
        {/*// @ts-expect-error */}
        <review-lab data-widgetid="615460382f94086a47cb9ca9"/>
        <script src="https://app.reviewlab.ru/widget/index-es2015.js" async/>
      </>
    )
  }

  return (
    <section className="reviews">
      <div className="container">
        <div className="title">
          <span className="h1">Что говорят о нас</span>
        </div>
        {status ? reviewLab() : "Загрузка отзывов"}
      </div>
    </section>
  );
};
