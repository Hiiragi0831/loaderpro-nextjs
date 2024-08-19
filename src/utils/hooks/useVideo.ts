"use client";

import { useLayoutEffect, useMemo, useState } from "react";

import { api } from "@/services/api";
type Props = {
  items: any;
};

export const useVideo = (id: string) => {
  const [data, setData] = useState<Props>();
  const [isLoading, setIsLoading] = useState(true);

  const video = useMemo(() => {
    if (data) {
      return {
        link: `https://www.youtube.com/watch?v=${data.items[0].id}`,
        image: data.items[0].snippet.thumbnails.maxres.url,
        title: data.items[0].snippet.title,
      };
    }
    return {};
  }, [data]);

  const loadVideos = async () => {
    try {
      const data = await api.getYoutubeVideo(id);
      setData(data);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
    }
  };
  useLayoutEffect(() => void loadVideos(), []);
  return { isLoading, video };
};
