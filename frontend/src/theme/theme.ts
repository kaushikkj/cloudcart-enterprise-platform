import { createTheme } from "@mui/material/styles";

export type ThemeMode = "light" | "dark";

export function getTheme(mode: ThemeMode) {
  const isLight = mode === "light";

  return createTheme({
    palette: {
      mode,

      primary: {
        main: isLight ? "#B7793F" : "#D9A066",
        dark: isLight ? "#8F5B31" : "#B7793F",
        light: isLight ? "#D7B18E" : "#E8C39D",
      },

      secondary: {
        main: isLight ? "#D99A5B" : "#F0B678",
      },

      background: {
        default: isLight ? "#FFFDF8" : "#1E1B18",
        paper: isLight ? "#FFFFFF" : "#29241F",
      },

      text: {
        primary: isLight ? "#3F2F23" : "#F6EFE7",
        secondary: isLight ? "#806C5B" : "#C9B8A8",
      },

      divider: isLight ? "#E8DDCF" : "#453B33",
    },

    shape: {
      borderRadius: 16,
    },

    typography: {
      fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',

      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition:
              "background-color 180ms ease, color 180ms ease",
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${
              isLight ? "#EFE5DA" : "#453B33"
            }`,
            boxShadow: isLight
              ? "0 8px 24px rgba(112, 78, 49, 0.08)"
              : "0 8px 24px rgba(0, 0, 0, 0.22)",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });
}