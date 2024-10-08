import dynamic from "next/dynamic";

const Products = dynamic(() => import("../components/Products"), {
  ssr: false,
});

export default function Favorites() {
  return <Products />;
}
