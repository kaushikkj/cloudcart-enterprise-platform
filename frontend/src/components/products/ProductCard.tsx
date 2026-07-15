import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowMessage(true);
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 160ms ease, box-shadow 160ms ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component={RouterLink}
          to={`/products/${product.id}`}
          image={product.image}
          title={product.name}
          sx={{
            height: 210,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: "background.paper",
            cursor: "pointer",
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Chip
            label={product.category}
            size="small"
            sx={{
              alignSelf: "flex-start",
              mb: 1,
            }}
          />

          <Typography
            component={RouterLink}
            to={`/products/${product.id}`}
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              textDecoration: "none",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {product.name}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            ★ {product.rating}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 2,
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 800 }}
            >
              ₹{product.price.toLocaleString("en-IN")}
            </Typography>

            {product.originalPrice !== undefined ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </Typography>
            ) : null}
          </Stack>

          <Stack spacing={1.5} sx={{ mt: "auto", pt: 2 }}>
            <Button
              component={RouterLink}
              to={`/products/${product.id}`}
              variant="outlined"
              fullWidth
            >
              View details
            </Button>

            <Button
              variant="contained"
              fullWidth
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Snackbar
        open={showMessage}
        autoHideDuration={1800}
        onClose={() => setShowMessage(false)}
        message={`${product.name} added to cart`}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </>
  );
}