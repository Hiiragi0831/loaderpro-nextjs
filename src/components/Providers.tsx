"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/header/Header";
import { MobileBar } from "@/components/header/MobileBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme } from "@/utils/customTheme";
// import { useSession } from "next-auth/react";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  // const { data: session } = useSession();

  return (
    <SessionProvider>
      <NextUIProvider>
        <div className="site">
          <Header />
          {children}
          <MobileBar />
          <Footer />
          <ToastContainer />
        </div>
      </NextUIProvider>
    </SessionProvider>
  );
};
