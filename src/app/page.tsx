import HomeSlider from "@/components/HomeSlider";
import { Brands } from "@/components/Brands";
import Advantages from "@/components/Advantages";
import { Reviews } from "@/components/Reviews";
import { MapSending } from "@/components/MapSending";
import { Team } from "@/components/Team";
import { VideoGallery } from "@/components/VideoGallery";
import Articles from "@/components/Articles";
import dynamic from "next/dynamic";

const Products = dynamic(() => import("@/components/Products"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <HomeSlider />
      <section>
        <div className="container">
          <picture>
            <source srcSet="/images/home/kat.png" />
            <img src="/images/home/kat.png" alt="" />
          </picture>
        </div>
      </section>
      <Brands />
      <Products
        limit={5}
        filter={"inStock"}
        title={"В наличии"}
        link={"/spare-parts"}
      />
      <Products
        limit={5}
        filter={"popular"}
        title={"Спецпредложения"}
        link={"/tires-rims"}
      />
      <Advantages />
      <Reviews />
      <MapSending />
      <Team />
      <VideoGallery />
      <Articles limit={4} />
    </main>
  );
}
