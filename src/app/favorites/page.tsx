import dynamic from "next/dynamic";

const Products = dynamic(() => import("./Products"), {
  ssr: false,
});

export default function Favorites() {
  return (
    <main>
      <section className="favorites">
        <div className="container">
          <h1 className="h1">Избранное</h1>
          <Products />
        </div>
      </section>
    </main>
  );
}
