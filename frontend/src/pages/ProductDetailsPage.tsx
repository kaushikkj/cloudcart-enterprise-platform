import { Container, Typography } from "@mui/material";

export default function ProductDetailsPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        Product details
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Product information will appear here.
      </Typography>
    </Container>
  );
}