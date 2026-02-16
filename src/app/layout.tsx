import type { Metadata, Viewport } from "next";
import "../scss/main.scss";
import { Providers } from "@/components/Providers";
import { metaGen } from "@/utils/metaGen";

export const metadata: Metadata = metaGen();

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
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
      </head>
      <body>
        <div className="site">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
