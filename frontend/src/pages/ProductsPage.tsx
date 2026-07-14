import { Container, Typography } from "@mui/material";

export default function ProductsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        Products
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        The complete product catalog will appear here.
      </Typography>
    </Container>
  );
}