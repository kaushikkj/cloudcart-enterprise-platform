import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 4,
        backgroundColor: "background.paper",
        color: "text.primary",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ fontWeight: 700 }}>
          CloudCart
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Enterprise cloud-native e-commerce platform.
        </Typography>
      </Container>
    </Box>
  );
}