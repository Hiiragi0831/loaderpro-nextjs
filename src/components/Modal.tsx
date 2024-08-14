import { useLockBodyScroll } from "@uidotdev/usehooks";
import {FC, ReactNode} from "react";

type Props = {
  onClose: () => void;
  children?: ReactNode | undefined;
};

export const Modal: FC<Props> = ({ onClose, children }) => {
  useLockBodyScroll();
  const onWrapperClick = (evt:any) => {
    if (evt.target.classList.contains("modal__wrapper")) onClose();
  };
  return (
    <div className="modal">
      <div className="modal__wrapper" onClick={onWrapperClick}>
        <div className="modal__content">
          <div className="modal__close" onClick={() => onClose()}>
            <svg>
              <use xlinkHref="/__spritemap#sprite-xmark-solid"/>
            </svg>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
