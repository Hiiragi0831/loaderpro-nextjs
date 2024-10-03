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
  const ssrMatchMedia = (query: string) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: 1024,
    }),
  });
  return ssrMatchMedia(theme.breakpoints.down("xs"));
}
