import {FC} from "react";

type Props = {
  title: string,
  text: string,
  bg: string,
};

export const Preference: FC<Props> = ({ title, text, bg }) => {
  let style = () => {
    if (bg === "primary") {
      return "primary"
    } else {
      return "white"
    }
  }

  const background = () => {
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
              <img src={`/images/preference/${bg}.jpg`} alt={title} decoding="async" />
            </picture>
          </div>
        );
    }
  };

  return (
    <div className={`preference ${style()}`}>
      {background()}
      <div className="preference__title">{title}</div>
      <hr />
      <div className="preference__text">{text}</div>
    </div>
  );
};
