import { FC, ReactNode } from "react";
import IconXmark from "@/icons/xmark-solid.svg";

type Props = {
  onClose: () => void;
  isShow: boolean;
  children?: ReactNode | undefined;
};

export const Modal: FC<Props> = ({ isShow, onClose, children }) => {
  const onWrapperClick = (evt: any) => {
    if (evt.target.classList.contains("modal__wrapper")) onClose();
  };
  return (
    isShow && (
      <div className="modal">
        <div className="modal__wrapper" onClick={onWrapperClick}>
          <div className="modal__content">
            <div className="modal__close" onClick={() => onClose()}>
              <IconXmark />
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  );
};
