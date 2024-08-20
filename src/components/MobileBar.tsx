import IconHome from "@/icons/house-l.svg";
import IconShield from "@/icons/shield.svg";
import IconBox from "@/icons/box-l.svg";
import IconRectangle from "@/icons/rectangle-history-circle-plus-l.svg";
import IconUser from "@/icons/user-l.svg";
import Link from "next/link";

export const MobileBar = () => {
  return (
    <div className="mobilebar">
      <Link href="/" className="mobilebar__item">
        <IconHome />
        <span>Домой</span>
      </Link>
      <a href="#" className="mobilebar__item">
        <IconBox />
        <span>Каталог</span>
      </a>
      <a href="#" className="mobilebar__search">
        <IconShield />
      </a>
      <a href="#" className="mobilebar__item">
        <IconRectangle />
        <span>Подбор</span>
      </a>
      <a href="#" className="mobilebar__item">
        <IconUser />
        <span>Аккаунт</span>
      </a>
    </div>
  );
};
