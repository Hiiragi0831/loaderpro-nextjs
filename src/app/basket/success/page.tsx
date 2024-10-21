"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const num = searchParams.get("num");

  return (
    <main>
      <section className="empty">
        <div className="container">
          <h1>Ваша заказ оформлен</h1>
          <h3>
            Номер заказа <mark>{num}</mark>
          </h3>
          <p>
            Ваш заказ находится в обработке. После того как он будет обработан,
            мы отправим вам счет на оплату.
          </p>
          <Link href={"/"} className={"button button__primary"}>
            На главную
          </Link>
        </div>
      </section>
    </main>
  );
}
