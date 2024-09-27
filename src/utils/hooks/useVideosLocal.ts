"use client";

import { useLayoutEffect, useMemo, useState } from "react";
import { api } from "@/services/api";

export const useVideosLocal = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videos = useMemo(
    () =>
      // @ts-expect-error @ts-ignore
      data?.map((item: any) => {
        return {
          link: `https://rutube.ru/play/embed/${item.id}`,
          image: item.thumbnail_url,
          title: item.title,
        };
      }) || [],
    [data],
  );

  const loadVideos = async () => {
    try {
      const data = await api.getLocalVideos();
      setData(data.results);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };
  useLayoutEffect(() => void loadVideos(), []);
  return { isLoading, videos };
};

// https://rutube.ru/api/playlist/custom/595683/videos/
