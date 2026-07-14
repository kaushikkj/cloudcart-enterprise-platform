import { Container, Typography } from "@mui/material";

export default function RegisterPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        Create account
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        The registration form will appear here.
      </Typography>
    </Container>
  );
}