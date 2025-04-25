import Advantages from "@/components/Advantages";
import Articles from "@/components/Articles";
import { Reviews } from "@/components/Reviews";
import { Cta } from "@/components/Cta";
import { api } from "@/services/api";
import ProductInfo from "@/app/products/components/ProductInfo";
import { metaGen } from "@/utils/metaGen";

export async function generateMetadata(props: { params: Promise<any> }) {
  const params = await props.params;
  const slugArray = params.slug.split("-");
  const id = slugArray.pop();
  const post = await api.getProduct(id);

  return metaGen(
    `${post.productname} ${post.brand} ${post.article}`,
    `${post.productname} ${post.brand} ${post.article} вы можете купить с доставкой в любую точку России с оплатой по безналичному расчету с НДС 20% или по карте.`,
    `${post.image[0] ? post.image[0] : ""}`,
  );
}

export const revalidate = 3600;

const Page = async (props: { params: Promise<any> }) => {
  const params = await props.params;
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
