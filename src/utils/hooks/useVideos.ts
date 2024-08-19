"use client";

import { useLayoutEffect, useMemo, useState } from "react";

import { api } from "@/services/api";

export const useVideos = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videos = useMemo(
    () =>
      // @ts-expect-error @ts-ignore
      data?.map((item: any) => {
        return {
          link: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
          image: item.snippet.thumbnails.standard.url,
          title: item.snippet.title,
        };
      }) || [],
    [data],
  );

  const loadVideos = async () => {
    try {
      const data = await api.getYoutubeVideos();
      setData(data.items);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
      throw error;
    }
  };
  useLayoutEffect(() => void loadVideos(), []);
  return { isLoading, videos };
};
