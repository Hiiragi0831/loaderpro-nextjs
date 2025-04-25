"use client";

import React, { Suspense } from "react";
// import { SessionProvider } from "next-auth/react";
import Header from "@/components/header/Header";
import { MobileBar } from "@/components/header/MobileBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "@/utils/customTheme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import NextTopLoader from "nextjs-toploader";
import YandexMetrikaContainer from "@/components/YandexMetrikaContainer";
// import { useSession } from "next-auth/react";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  // const { data: session } = useSession();
  const cache = createCache({
    key: "loader",
    prepend: true,
  });
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CacheProvider value={cache}>
          <NextTopLoader color="#f8991d" />
          <Header />
          {children}
          <MobileBar />
          <Footer />
          <ToastContainer />
          <Suspense>
            <YandexMetrikaContainer />
          </Suspense>
        </CacheProvider>
      </ThemeProvider>
    </>
  );
};
