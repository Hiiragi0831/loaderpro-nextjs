import { useState } from "preact/hooks";

export const Preference = ({ title, text, bg }) => {
  const [style, setStyle] = useState(null);
  const background = () => {
    switch (bg) {
      case "white":
        setStyle("white");
        return <div className="preference__bg white" />;

      case "primary":
        setStyle("primary");
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
    <div className={`preference ${style}`}>
      {background()}
      <div class="preference__title">{title}</div>
      <hr />
      <div class="preference__text">{text}</div>
    </div>
  );
};
