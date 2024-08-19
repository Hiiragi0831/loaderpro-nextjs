"use client";
import { useLayoutEffect, useState } from "react";

const reviewLab = () => {
  return (
    <>
      {/* @ts-expect-error @ts-ignore */}
      <review-lab data-widgetid="615460382f94086a47cb9ca9" />
      <script src="https://app.reviewlab.ru/widget/index-es2015.js" async />
    </>
  );
};

export const Reviews = () => {
  const [status, setStatus] = useState(0);
  useLayoutEffect(() => setStatus(1), []);

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
