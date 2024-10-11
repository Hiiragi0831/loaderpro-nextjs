"use client";
// import FsLightbox from "fslightbox-react";
// import delay from "lodash-es/delay";
// import IconPlaySolid from "@/icons/play-solid.svg";

import { FC } from "react";
import { useVideoLocal } from "@/utils/hooks/useVideoLocal";
import { Skeleton } from "@mui/material";

type VideoBlockType = {
  id: string;
  className?: string;
};

export const VideoBlock: FC<VideoBlockType> = ({ id, className }) => {
  const { video, isLoading } = useVideoLocal(id);

  return (
    <div className={`videoblock ${className ? className : ""}`}>
      {isLoading ? (
        <Skeleton height={"100%"} variant={"rounded"} />
      ) : (
        <iframe src={video.link} />
      )}
    </div>
  );
};

// export const VideoBlock: FC<VideoBlockType> = ({ id, className }) => {
//   const [toggler, setToggler] = useState(false);
//   const [productIndex, setProductIndex] = useState(0);
//   const { video, isLoading } = useVideoLocal(id);
//   const iframe = <iframe src={video.link} />;
//   const sources: any = [iframe];
//
//   return (
//     <div className={`videoblock ${className ? className : ""}`}>
//       {isLoading ? (
//         <Skeleton height={"100%"} variant={"rounded"} />
//       ) : (
//         <>
//           <button
//             onClick={() => {
//               setProductIndex(0);
//               delay(() => setToggler(!toggler), 100);
//             }}
//           >
//             <div className="videoblock__play">
//               <IconPlaySolid />
//             </div>
//             <picture>
//               <source srcSet={video.image} />
//               <img src={video.image} alt={video.title} decoding="async" />
//             </picture>
//           </button>
//           <p className="h1 videoblock__title">{video.title}</p>
//           <FsLightbox
//             toggler={toggler}
//             sources={[sources[productIndex]]}
//             key={productIndex}
//           />
//         </>
//       )}
//     </div>
//   );
// };
