"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header/Header";
import { MobileBar } from "@/components/header/MobileBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "@/utils/customTheme";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
// import { useSession } from "next-auth/react";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  // const { data: session } = useSession();
  const cache = createCache({
    key: "loader",
    prepend: true,
  });
  return (
    <>
      <SessionProvider>
        <ThemeProvider theme={lightTheme}>
          <CacheProvider value={cache}>
            <Header />
            {children}
            <MobileBar />
            <Footer />
            <ToastContainer />
          </CacheProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};
