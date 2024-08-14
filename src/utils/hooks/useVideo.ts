import { useLayoutEffect, useMemo, useState } from "preact/hooks";

import { api } from "../../services/api";

export const useVideo = (id) => {
  const [data, setData] = useState(null);
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
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };
  useLayoutEffect(() => void loadVideos(), []);
  return { isLoading, video };
};
