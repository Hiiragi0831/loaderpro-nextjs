import FsLightbox from "fslightbox-react";
import delay from "lodash-es/delay";
import { useState } from "preact/hooks";
import { FC } from "react";

import { useVideo } from "../utils/hooks/useVideo";

type VideoBlockType = {
  id: string;
  className?: string;
};

export const VideoBlock: FC<VideoBlockType> = ({ id, className }) => {
  const [toggler, setToggler] = useState(false);
  const [productIndex, setProductIndex] = useState(0);
  const { video, isLoading } = useVideo(id);

  return (
    <div className={`videoblock ${className ? className : ""}`}>
      <button
        onClick={() => {
          setProductIndex(0);
          delay(() => setToggler(!toggler), 100);
        }}
      >
        <div class="videoblock__play">
          <svg>
            <use xlinkHref="/__spritemap#sprite-play-solid" />
          </svg>
        </div>
        <picture>
          <source srcSet={video.image} />
          <img src={video.image} alt={video.title} decoding="async" />
        </picture>
      </button>
      <p className="h1 videoblock__title">{video.title}</p>
      <FsLightbox toggler={toggler} sources={[video.link]} key={productIndex} />
    </div>
  );
};
