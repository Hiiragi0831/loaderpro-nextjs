import type { Metadata } from "next";
import "../scss/main.scss";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title:
    "Запчасти для погрузчиков от лучших мировых производителей и поставщиков",
  description:
    "Купить запчасти для вилочных погрузчиков бренда LOADERPRO в компании СПЕЦМАШИНА - это выбор людей которые ценят высокий уровень сервиса и внимание к мелочам. Работая на рынке с 2017 года мы развиваем продукт с высокими стандартами качества, которые предъявляем для всех участников нашей деятельности.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="23b6971cb65615ee" />
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
