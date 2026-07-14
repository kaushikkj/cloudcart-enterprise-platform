import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
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
        component="img"
        height="210"
        image={product.image}
        alt={product.name}
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

        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {product.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
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

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
          }}
        >
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}