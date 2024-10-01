"use client";
import IconHome from "@/icons/house-l.svg";
import IconShield from "@/icons/shield.svg";
import IconBox from "@/icons/box-l.svg";
import IconRectangle from "@/icons/rectangle-history-circle-plus-l.svg";
import Link from "next/link";
import { useSearchPanel } from "@/store/useSearchPanel";
import IconDesktop from "@/icons/desktop.svg";
import IconMagnifying from "@/icons/magnifying-glass.svg";

export const MobileBar = () => {
  const { isShow, toggleShow } = useSearchPanel();

  return (
    <div className="mobilebar">
      <Link href="/" className="mobilebar__item">
        <IconHome />
        <span>Домой</span>
      </Link>
      <Link href={"/spare-parts"} className="mobilebar__item">
        <IconBox />
        <span>Каталог</span>
      </Link>
      <span className="mobilebar__search" onClick={() => toggleShow(!isShow)}>
        <div className="front">
          <IconShield className="logo-icon" />
        </div>
        <div className="back">
          <IconMagnifying className="search-icon" />
        </div>
      </span>
      <Link href={"/request-parts"} className="mobilebar__item">
        <IconRectangle />
        <span>Запросы</span>
      </Link>
      <Link href={"/selection-parts"} className="mobilebar__item">
        <IconDesktop />
        <span>Подбор ЗЧ</span>
      </Link>
    </div>
  );
};
