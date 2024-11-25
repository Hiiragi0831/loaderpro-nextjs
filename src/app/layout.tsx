import type { Metadata } from "next";
import "../scss/main.scss";
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
    <html lang="ru">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <div className="site">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
