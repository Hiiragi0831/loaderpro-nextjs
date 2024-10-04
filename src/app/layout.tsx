import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/scss/main.scss";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title:
    "СПЕЦМАШИНА - маркетплейс с миллионами товаров для вилочных погрузчиков и складской техники",
  description:
    "В ассортименте нашего магазина вы найдете вилочные погрузчики и складскую технику, запчасти и комплектующие, шины и полиуретановые колеса, а также дополнительное оборудование и прочие услуги.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="loaderpro-theme">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
