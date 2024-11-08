"use client";
import IconHome from "@/icons/house-l.svg";
import IconShield from "@/icons/shield.svg";
import IconBox from "@/icons/box-l.svg";
import IconRectangle from "@/icons/rectangle-history-circle-plus-l.svg";
import Link from "next/link";
import { useSearchPanel } from "@/store/useSearchPanel";
import IconDesktop from "@/icons/desktop.svg";
import IconMagnifying from "@/icons/magnifying-glass.svg";
import { useMobileNav } from "@/store/useMobileNav";

export const MobileBar = () => {
  const { isShow, toggleShow } = useSearchPanel();
  const stateMobileNav = useMobileNav();

  const onClickItem = () => {
    stateMobileNav.toggleShow(false);
  };

  return (
    <div className="mobilebar">
      <Link href="/" className="mobilebar__item" onClick={onClickItem}>
        <IconHome />
        <span>Домой</span>
      </Link>
      <Link
        href={"/spare-parts"}
        className="mobilebar__item"
        onClick={onClickItem}
      >
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
      <Link
        href={"/request-parts"}
        className="mobilebar__item"
        onClick={onClickItem}
      >
        <IconRectangle />
        <span>Запросы</span>
      </Link>
      <Link
        href={"/selection-parts"}
        className="mobilebar__item"
        onClick={onClickItem}
      >
        <IconDesktop />
        <span>Подбор ЗЧ</span>
      </Link>
    </div>
  );
};
