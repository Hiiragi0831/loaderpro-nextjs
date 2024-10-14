import Link from "next/link";

export const Empty = ({ title, text }: { title: string; text: string }) => {
  return (
    <section className="empty">
      <div className="container">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link href={"/spare-parts"} className={"button button__primary"}>
          В каталог
        </Link>
      </div>
    </section>
  );
};
