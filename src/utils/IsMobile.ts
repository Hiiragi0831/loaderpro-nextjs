import { createTheme } from "@mui/material";
import mediaQuery from "css-mediaquery";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 1024,
      sm: 1366,
      md: 1440,
      lg: 1680,
      xl: 1920,
    },
  },
});

export function IsMobile() {
  return mediaQuery(theme.breakpoints.down("xs"), { noSsr: true });
}
