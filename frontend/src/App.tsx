import { Route, Routes } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import RegisterPage from "./pages/RegisterPage";
import type { ThemeMode } from "./theme/theme";

interface AppProps {
  mode: ThemeMode;
  onToggleTheme: () => void;
}

export default function App({
  mode,
  onToggleTheme,
}: AppProps) {
  return (
    <Routes>
      <Route
        element={
          <AppLayout
            mode={mode}
            onToggleTheme={onToggleTheme}
          />
        }
      >
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}