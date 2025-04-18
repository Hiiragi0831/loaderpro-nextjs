"use client";

import React, { useCallback, useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";
import { Router } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";

const YM_COUNTER_ID = 98894044;

const YandexMetrikaContainer = () => {
  // const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hit = useCallback((url: string) => {
    ym("hit", url);
  }, []);

  useEffect(() => {
    hit(`${pathname}?${searchParams}`);
    Router.events.on("routeChangeComplete", (url: string) => hit(url));
  }, [hit, pathname, searchParams]);

  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      }}
      version="2"
    />
  );
};

export default YandexMetrikaContainer;
