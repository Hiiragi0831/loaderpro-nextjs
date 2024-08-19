import { FC } from "react";

type Props = {
  icon: string;
  title: string;
  text: string;
};

export const Achievement: FC<Props> = ({ icon, title, text }) => {
  return (
    <div className="achievement">
      <picture className="achievement__icon">
        <source srcSet={icon} />
        <img src={icon} alt={title} decoding="async" />
      </picture>
      <div className="achievement__title">{title}</div>
      <div className="achievement__text">
        <p>{text}</p>
      </div>
    </div>
  );
};
