"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: "'FiraSans', Arial, sans-serif",
    },
    palette: {
      primary: {
        main: "#fab84f",
      },
    },
  });

  return (
    <>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <Header />
          {children}
          <MobileBar />
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};
