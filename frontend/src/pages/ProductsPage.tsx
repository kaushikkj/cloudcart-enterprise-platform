import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

import ProductCard from "../components/products/ProductCard";
import { products } from "../data/products";

const ALL_PRODUCTS = "All products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState(ALL_PRODUCTS);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(products.map((product) => product.category)),
      ).sort(),
    [],
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === ALL_PRODUCTS) {
      return products;
    }

    return products.filter(
      (product) => product.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          mb: 4,
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Products
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Browse our complete catalog of {products.length} products.
          </Typography>
        </Box>

        <Typography color="text.secondary">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"} available
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          mb: 4,
          overflowX: "auto",
          pb: 1,
          "&::-webkit-scrollbar": {
            height: 4,
          },
        }}
      >
        <Chip
          label={ALL_PRODUCTS}
          clickable
          color={
            selectedCategory === ALL_PRODUCTS ? "primary" : "default"
          }
          variant={
            selectedCategory === ALL_PRODUCTS ? "filled" : "outlined"
          }
          onClick={() => setSelectedCategory(ALL_PRODUCTS)}
          sx={{
            flexShrink: 0,
            fontWeight:
              selectedCategory === ALL_PRODUCTS ? 700 : 500,
          }}
        />

        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <Chip
              key={category}
              label={category}
              clickable
              color={isSelected ? "primary" : "default"}
              variant={isSelected ? "filled" : "outlined"}
              onClick={() => setSelectedCategory(category)}
              sx={{
                flexShrink: 0,
                fontWeight: isSelected ? 700 : 500,
              }}
            />
          );
        })}
      </Stack>

      {filteredProducts.length === 0 ? (
        <Box
          sx={{
            py: 10,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            No products found
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Try selecting a different category.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid
              key={product.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}