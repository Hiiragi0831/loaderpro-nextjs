import type { Metadata } from "next";
import "../scss/main.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

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
      <body>
        <div className="site">
          <SessionProvider>
            <Header />
            {children}
            <MobileBar />
            <Footer />
            <ToastContainer />
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
