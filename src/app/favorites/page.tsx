import dynamic from "next/dynamic";

const Page = dynamic(() => import("./Favorites"), {
  ssr: false,
});

export default function Favorites() {
  return (
    <main>
      <Page />
    </main>
  );
}
