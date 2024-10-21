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
          <h1>Ваша запрос отправлен</h1>
          <h3>
            Номер запроса <mark>{num}</mark>
          </h3>
          <p>
            После того как запрос будет обработан, мы отправим вам коммерческое
            предложение.
          </p>
          <Link href={"/"} className={"button button__primary"}>
            На главную
          </Link>
        </div>
      </section>
    </main>
  );
}
