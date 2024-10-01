import Advantages from "@/components/Advantages";
import Articles from "@/components/Articles";
import { Reviews } from "@/components/Reviews";
import dynamic from "next/dynamic";
import { Cta } from "@/components/Cta";

const ProductInfo = dynamic(() => import("../components/ProductInfo"), {
  ssr: false,
});

export default function Products({ params }: { params?: any }) {
  return (
    <main>
      <ProductInfo id={params.productId} />
      <Reviews />
      <Cta />
      <Advantages />
      <Articles limit={4} />
    </main>
  );
}
