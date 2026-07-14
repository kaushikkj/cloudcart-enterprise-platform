import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import type { ThemeMode } from "../../theme/theme";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface AppLayoutProps {
  mode: ThemeMode;
  onToggleTheme: () => void;
}

export default function AppLayout({
  mode,
  onToggleTheme,
}: AppLayoutProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar
        mode={mode}
        onToggleTheme={onToggleTheme}
      />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}