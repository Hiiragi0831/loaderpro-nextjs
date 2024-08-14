import { useLockBodyScroll } from "@uidotdev/usehooks";

export const Modal = ({ onClose, children }) => {
  useLockBodyScroll();
  const onWrapperClick = (evt) => {
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
