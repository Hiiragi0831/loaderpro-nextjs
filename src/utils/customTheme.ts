// import { createTheme } from "@mui/material";
import mediaQuery from "css-mediaquery";
import { Breakpoint, createTheme } from "@mui/material/styles";
type BreakpointOrNull = Breakpoint | null;
import useMediaQuery from "@mui/material/useMediaQuery";

const ssrMatchMedia = (query: string) => ({
  matches: mediaQuery.match(query, {
    width: 1024,
  }),
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: "'FiraSans', Arial, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#f8991d",
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: { ssrMatchMedia },
    },
  },
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: "'FiraSans', Arial, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#f8991d",
    },
  },
  components: {
    MuiUseMediaQuery: {
      // Change the default options of useMediaQuery
      defaultProps: { ssrMatchMedia },
    },
  },
});

export function useWidth() {
  // const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}
