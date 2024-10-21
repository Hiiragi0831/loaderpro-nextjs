import Advantages from "@/components/Advantages";
import Articles from "@/components/Articles";
import { Reviews } from "@/components/Reviews";
import dynamic from "next/dynamic";
import { Cta } from "@/components/Cta";

const ProductInfo = dynamic(() => import("../components/ProductInfo"), {
  ssr: false,
});

const Page = ({ params }: { params?: any }) => {
  return (
    <main>
      {/*<h1>Post: {params.productname}</h1>*/}
      <ProductInfo id={params.slug} />
      <Reviews />
      <Cta />
      <Advantages />
      <Articles limit={4} />
    </main>
  );
};

export default Page;
