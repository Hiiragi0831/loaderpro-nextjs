import Advantages from "@/components/Advantages";
import Articles from "@/components/Articles";
import { Reviews } from "@/components/Reviews";
import dynamic from "next/dynamic";
import { Cta } from "@/components/Cta";
import { api } from "@/services/api";

const ProductInfo = dynamic(() => import("../components/ProductInfo"), {
  ssr: false,
});

export async function generateMetadata({ params }: { params: any }) {
  const slugArray = params.slug.split("-");
  const id = slugArray.pop();
  const post = await api.getProduct(id);
  console.log(post);

  return {
    title: `${post.productname}`,
    description: `${post.productname} ${post.brand} ${post.article} вы можете купить с доставкой в любую точку России с оплатой по безналичному расчету с НДС 20% или по карте.`,
  };
}

const Page = ({ params }: { params: any }) => {
  return (
    <main>
      <ProductInfo id={params} />
      <Reviews />
      <Cta />
      <Advantages />
      <Articles limit={4} />
    </main>
  );
};

export default Page;
