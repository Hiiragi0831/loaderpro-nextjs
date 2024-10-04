import { useWidth } from "@/utils/customTheme";

export function IsMobile() {
  return useWidth() === "sm";
}
