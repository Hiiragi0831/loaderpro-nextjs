"use client";

import React, { Suspense } from "react";
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

const emotionCache = createCache({ key: "loader", prepend: true });

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  // const { data: session } = useSession();

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CacheProvider value={emotionCache}>
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
