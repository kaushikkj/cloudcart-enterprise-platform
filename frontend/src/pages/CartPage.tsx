import { Container, Typography } from "@mui/material";

export default function CartPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        Shopping cart
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Your cart items will appear here.
      </Typography>
    </Container>
  );
}