"use client";

import { useLayoutEffect, useMemo, useState, useCallback } from "react";
import { api } from "@/services/api";

type Props = {
  id: string;
  thumbnail_url: string;
  title: string;
};

export const useVideoLocal = (id: string) => {
  const [data, setData] = useState<Props>();
  const [isLoading, setIsLoading] = useState(true);

  const video = useMemo(() => {
    if (data) {
      return {
        link: `https://rutube.ru/play/embed/${data.id}`,
        image: data.thumbnail_url,
        title: data.title,
      };
    }
    return {};
  }, [data]);

  const loadVideos = useCallback(async () => {
    try {
      const data = await api.getLocalVideos();
      setData(
        data.results.find((element: { id: string }) => element.id === id),
      );
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error fetching:", error.message);
    }
  }, [id]);

  useLayoutEffect(() => {
    void loadVideos();
  }, [loadVideos]);

  return { isLoading, video };
};
