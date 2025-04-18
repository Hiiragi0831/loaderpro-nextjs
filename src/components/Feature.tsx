import IconHeart from "@/icons/heart.svg";
import IconPercent from "@/icons/percent.svg";
import IconCertificate from "@/icons/file-certificate.svg";
import IconSquareCheck from "@/icons/square-check.svg";
import IconChartPie from "@/icons/file-chart-pie.svg";

import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

const Feature = ({ text }: { text: string }) => {
  let color;
  let icon;
  let description;

  switch (text) {
    case "Возврат НДС":
      color = "purple";
      icon = <IconChartPie />;
      description =
        "Вы можете вернуть уплаченный при покупке НДС - право на возмещение имеют плательщики налога, которые применяют общую систему налогообложения (ОСНО).";
      break;
    case "Гарантия":
      color = "blue";
      icon = <IconSquareCheck />;
      description = (
        <React.Fragment>
          {"Техника - до 2 лет"} <br /> {"Запчасти - от 3 месяцев"} <br />
          {"Шины - до 5 лет"} <br /> {"Тяговые аккумуляторы - до 2 лет"}
        </React.Fragment>
      );
      break;
    case "Оригинал":
      color = "green";
      icon = <IconCertificate />;
      description =
        "Оригинальные запчасти - это запасные части, которые выпускаются под маркой завода-изготовителя техники.";
      break;
    case "Скидка за отзыв":
      color = "yellow";
      icon = <IconHeart />;
      description = (
        <React.Fragment>
          {"Оставьте отзыв о нашей работе в"}{" "}
          <a
            href="https://yandex.ru/maps/org/spetsmashina/64792251897/reviews"
            target="_blank"
          >
            {"Яндекс.Справочнике"}
          </a>{" "}
          {"и получите скидку 5% на любой заказ."}
        </React.Fragment>
      );
      break;
    case "Распродажа":
      color = "red";
      icon = <IconPercent />;
      description =
        "На товары этого бренда объявлена распродажа, не упустите момент для покупки товара по сниженной цене.";
      break;
    case "OEM":
      color = "gray";
      description =
        "Original Equipment Manufacturer - это запасные части, произведённые официальным поставщиком завода-изготовителя техники.\n";
      break;
    default:
      color = "gray";
      break;
  }

  return (
    <Tooltip
      title={description}
      key={text}
      placement="top"
      disableFocusListener
      enterTouchDelay={50}
    >
      <div className={`feature feature--${color}`}>
        {icon ? <div className="feature__icon">{icon}</div> : ""}
        <p>{text}</p>
      </div>
    </Tooltip>
  );
};

export default Feature;
