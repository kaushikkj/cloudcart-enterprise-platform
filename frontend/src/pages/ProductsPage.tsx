import {
  Box,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ProductCard from "../components/products/ProductCard";
import { products } from "../data/products";

export default function ProductsPage() {
  const categories = Array.from(
    new Set(products.map((product) => product.category)),
  );

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
          {products.length} products available
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
          label="All products"
          color="primary"
          sx={{
            flexShrink: 0,
            fontWeight: 700,
          }}
        />

        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            variant="outlined"
            sx={{
              flexShrink: 0,
            }}
          />
        ))}
      </Stack>

      <Grid container spacing={3}>
        {products.map((product) => (
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
    </Container>
  );
}