import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import ProductCard from "../components/products/ProductCard";
import { products } from "../data/products";

const categories = [
  "Electronics",
  "Audio",
  "Wearables",
  "Computers",
  "Home",
  "Accessories",
];

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, #FFF8EC 0%, #FFFDF8 48%, #F3EFE7 100%)"
              : "linear-gradient(135deg, #2B241F 0%, #1E1B18 55%, #382D25 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={3} sx={{ maxWidth: 720 }}>
                <Chip
                  label="New season collection"
                  color="primary"
                  variant="outlined"
                  sx={{
                    alignSelf: "flex-start",
                    px: 1,
                    fontWeight: 700,
                  }}
                />

                <Typography
                  component="h1"
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.08,
                    letterSpacing: "-0.04em",
                    color: "text.primary",
                  }}
                >
                  Shop smarter.
                  <br />
                  Live better.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    maxWidth: 640,
                    lineHeight: 1.7,
                  }}
                >
                  Discover thoughtfully selected electronics, lifestyle
                  products, home essentials and everyday favourites in one
                  simple shopping experience.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{
                    alignItems: {
                      xs: "stretch",
                      sm: "center",
                    },
                  }}
                >
                  <Button
                    component={RouterLink}
                    to="/products"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.4,
                      boxShadow: "none",
                    }}
                  >
                    Shop now
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/register"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.4,
                    }}
                  >
                    Create account
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  spacing={4}
                  sx={{
                    pt: 2,
                    flexWrap: "wrap",
                    rowGap: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "text.primary",
                      }}
                    >
                      10K+
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Happy customers
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "text.primary",
                      }}
                    >
                      5K+
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Products
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        color: "text.primary",
                      }}
                    >
                      24×7
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Customer support
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 320, md: 430 },
                  borderRadius: 6,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: (theme) =>
                    theme.palette.mode === "light"
                      ? "0 24px 60px rgba(112, 78, 49, 0.14)"
                      : "0 24px 60px rgba(0, 0, 0, 0.32)",
                  backgroundImage:
                    "url(https://picsum.photos/seed/cloudcart-hero/900/900)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02) 35%, rgba(0,0,0,0.58) 100%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: 28,
                    right: 28,
                    bottom: 28,
                    p: 3,
                    borderRadius: 4,
                    color: "white",
                    backgroundColor: "rgba(20, 18, 16, 0.55)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Typography variant="overline" sx={{ opacity: 0.8 }}>
                    Limited offer
                  </Typography>

                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    Up to 40% off selected products
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: 3,
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              overflowX: "auto",
              pb: 0.5,
              "&::-webkit-scrollbar": {
                height: 4,
              },
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                variant="outlined"
                sx={{
                  flexShrink: 0,
                  px: 1,
                  backgroundColor: "background.default",
                  borderColor: "divider",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              />
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 7 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            mb: 4,
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "text.primary",
              }}
            >
              Featured products
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Handpicked products customers are loving right now.
            </Typography>
          </Box>

          <Button component={RouterLink} to="/products">
            View all products
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ pb: 8 }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 6,
              border: "1px solid",
              borderColor: "divider",
              background: (theme) =>
                theme.palette.mode === "light"
                  ? "linear-gradient(135deg, #F9EFE1 0%, #FFFDF8 100%)"
                  : "linear-gradient(135deg, #332820 0%, #25201C 100%)",
            }}
          >
            <Grid container spacing={4} sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "text.primary",
                  }}
                >
                  Join CloudCart and save more.
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    maxWidth: 650,
                    lineHeight: 1.7,
                  }}
                >
                  Create an account to save products, track orders, receive
                  personalised offers and enjoy a faster checkout experience.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Stack
                  direction={{ xs: "column", sm: "row", md: "column" }}
                  spacing={2}
                >
                  <Button
                    component={RouterLink}
                    to="/register"
                    variant="contained"
                    size="large"
                    fullWidth
                  >
                    Create free account
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/login"
                    variant="outlined"
                    size="large"
                    fullWidth
                  >
                    Sign in
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}