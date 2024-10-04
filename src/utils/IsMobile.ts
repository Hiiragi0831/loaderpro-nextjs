import { useWidth } from "@/utils/customTheme";

export function IsMobile() {
  const width = useWidth();
  if (width === "sm") {
    return true;
  } else if (width === "xs") {
    return true;
  }
  return false;
}
