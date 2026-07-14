import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { getTheme, type ThemeMode } from "./theme/theme";

function Root() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem("cloudcart-theme");

    return savedMode === "dark" ? "dark" : "light";
  });

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((currentMode) => {
      const nextMode = currentMode === "light" ? "dark" : "light";

      localStorage.setItem("cloudcart-theme", nextMode);

      return nextMode;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <App mode={mode} onToggleTheme={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);