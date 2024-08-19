import { FC } from "react";

type Props = {
  title: string;
  text: string;
  bg: string;
};

const background = (bg: any) => {
  switch (bg) {
    case "white":
      return <div className="preference__bg white" />;
    case "primary":
      return <div className="preference__bg primary" />;
    default:
      return (
        <div className="preference__bg">
          <picture>
            <source srcSet={`/images/preference/${bg}.jpg`} />
            <img src={`/images/preference/${bg}.jpg`} alt="" decoding="async" />
          </picture>
        </div>
      );
  }
};

export const Preference: FC<Props> = ({ title, text, bg }) => {
  const style = () => {
    if (bg === "primary") {
      return "primary";
    } else {
      return "white";
    }
  };

  return (
    <div className={`preference ${style()}`}>
      {background(bg)}
      <div className="preference__title">{title}</div>
      <hr />
      <div className="preference__text">{text}</div>
    </div>
  );
};
