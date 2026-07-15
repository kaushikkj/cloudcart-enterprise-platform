import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import type { ThemeMode } from "../../theme/theme";

interface NavbarProps {
  mode: ThemeMode;
  onToggleTheme: () => void;
}

export default function Navbar({
  mode,
  onToggleTheme,
}: NavbarProps) {
  const isLight = mode === "light";
  const { cartCount } = useCart();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        backdropFilter: "blur(12px)",
        backgroundColor: isLight
          ? "rgba(255, 253, 248, 0.94)"
          : "rgba(30, 27, 24, 0.94)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ gap: 3, minHeight: 72 }}>
          <Typography
            component={RouterLink}
            to="/"
            variant="h5"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            CloudCart
          </Typography>

          <TextField
            size="small"
            placeholder="Search products, brands and categories"
            sx={{
              flexGrow: 1,
              maxWidth: 650,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                backgroundColor: "background.paper",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              component={RouterLink}
              to="/products"
              color="inherit"
            >
              Products
            </Button>

            <Button
              component={RouterLink}
              to="/login"
              color="inherit"
            >
              Login
            </Button>

            <Tooltip
              title={
                isLight
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              <IconButton
                onClick={onToggleTheme}
                color="inherit"
                aria-label="toggle color mode"
              >
                {isLight ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            </Tooltip>

            <IconButton
              component={RouterLink}
              to="/cart"
              color="inherit"
              aria-label={`shopping cart with ${cartCount} items`}
            >
              <Badge
                badgeContent={cartCount}
                color="secondary"
                showZero
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}