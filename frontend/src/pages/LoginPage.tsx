import { Container, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        Login
      </Typography>

      <Typography color="text.secondary" sx={{ mt: 1 }}>
        The login form will appear here.
      </Typography>
    </Container>
  );
}