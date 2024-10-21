"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Content = () => {
  const searchParams = useSearchParams();
  const sNum = searchParams.get("num");
  const sPage = searchParams.get("page");
  const page = [
    {
      name: "basket",
      title: "Ваш заказ оформлен",
      subTitle: `Номер заказа`,
      text: "Ваш заказ находится в обработке. После того как он будет обработан,мы отправим вам счет на оплату.",
    },
    {
      name: "query",
      title: "Ваш запрос отправлен",
      subTitle: `Номер запроса`,
      text: "После того как запрос будет обработан, мы отправим вам коммерческое предложение.",
    },
    {
      name: "call",
      title: "Ваш запрос на обратный звонок отправлен",
      subTitle: `Номер запроса`,
      text: "Мы вам перезвоним в ближайшее время.",
    },
  ];

  const data = page.find((page) => page.name === sPage);

  return (
    <div className="container">
      <h1>{data?.title}</h1>
      <h3>
        {data?.subTitle} <mark>{sNum}</mark>
      </h3>
      <p>{data?.text}</p>
      <Link href={"/"} className={"button button__primary"}>
        На главную
      </Link>
    </div>
  );
};

export default Content;
