import { Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 10 }}>
      <Stack
        spacing={2}
        sx={{
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 900 }}>
          404
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Page not found
        </Typography>

        <Typography color="text.secondary">
          The page you requested does not exist.
        </Typography>

        <Button component={RouterLink} to="/" variant="contained">
          Return home
        </Button>
      </Stack>
    </Container>
  );
}