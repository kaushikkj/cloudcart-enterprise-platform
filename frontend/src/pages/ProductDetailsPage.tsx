import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  Link as RouterLink,
  useNavigate,
  useParams,
} from "react-router-dom";

import ProductCard from "../components/products/ProductCard";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);

  const productId = Number(id);

  const product = products.find(
    (currentProduct) => currentProduct.id === productId,
  );

  useEffect(() => {
    setQuantity(1);
    setShowMessage(false);
  }, [productId]);

  if (!product) {
    return (
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Stack
          spacing={3}
          sx={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 900 }}>
            Product not found
          </Typography>

          <Typography color="text.secondary">
            The product you’re looking for doesn’t exist or may have been
            removed.
          </Typography>

          <Button
            component={RouterLink}
            to="/products"
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Back to products
          </Button>
        </Stack>
      </Container>
    );
  }

  const relatedProducts = products
    .filter(
      (relatedProduct) =>
        relatedProduct.category === product.category &&
        relatedProduct.id !== product.id,
    )
    .slice(0, 4);

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  const addSelectedQuantityToCart = () => {
    for (let count = 0; count < quantity; count += 1) {
      addToCart(product);
    }
  };

  const handleAddToCart = () => {
    addSelectedQuantityToCart();
    setShowMessage(true);
  };

  const handleBuyNow = () => {
    addSelectedQuantityToCart();
    navigate("/cart");
  };

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1),
    );
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Button
          component={RouterLink}
          to="/products"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4 }}
        >
          Back to products
        </Button>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "sticky",
                top: 96,
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: {
                    xs: 360,
                    sm: 480,
                    md: 560,
                  },
                  objectFit: "contain",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.paper",
                  p: {
                    xs: 2,
                    sm: 4,
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  flexWrap: "wrap",
                  rowGap: 1,
                }}
              >
                <Chip
                  label={product.category}
                  color="primary"
                  variant="outlined"
                />

                <Chip
                  label={product.subcategory}
                  variant="outlined"
                />

                {discountPercentage > 0 ? (
                  <Chip
                    label={`${discountPercentage}% off`}
                    color="error"
                  />
                ) : null}
              </Stack>

              <Box>
                <Typography
                  variant="overline"
                  color="text.secondary"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                  }}
                >
                  {product.brand}
                </Typography>

                <Typography
                  component="h1"
                  variant="h3"
                  sx={{
                    mt: 0.5,
                    fontWeight: 900,
                    lineHeight: 1.15,
                  }}
                >
                  {product.name}
                </Typography>
              </Box>

              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "center",
                  flexWrap: "wrap",
                  rowGap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "warning.main",
                  }}
                >
                  ★ {product.rating}
                </Typography>

                <Typography color="text.secondary">
                  Highly rated by customers
                </Typography>
              </Stack>

              <Divider />

              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "baseline",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h3"
                  color="primary"
                  sx={{ fontWeight: 900 }}
                >
                  ₹{product.price.toLocaleString("en-IN")}
                </Typography>

                {product.originalPrice !== undefined ? (
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      textDecoration: "line-through",
                    }}
                  >
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </Typography>
                ) : null}
              </Stack>

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  fontSize: "1.05rem",
                }}
              >
                {product.description}
              </Typography>

              <Card variant="outlined">
                <Box sx={{ p: 3 }}>
                  <Typography sx={{ fontWeight: 800 }}>
                    Quantity
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      mt: 2,
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      onClick={decreaseQuantity}
                      disabled={quantity === 1}
                      aria-label="decrease quantity"
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Typography
                      sx={{
                        minWidth: 48,
                        textAlign: "center",
                        fontWeight: 800,
                        fontSize: "1.1rem",
                      }}
                    >
                      {quantity}
                    </Typography>

                    <IconButton
                      onClick={increaseQuantity}
                      aria-label="increase quantity"
                    >
                      <AddIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Card>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  fullWidth
                  startIcon={<ShoppingCartOutlinedIcon />}
                  onClick={handleAddToCart}
                  sx={{ py: 1.5 }}
                >
                  Add to cart
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={handleBuyNow}
                  sx={{ py: 1.5 }}
                >
                  Buy now
                </Button>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                Free delivery available. Secure checkout and easy returns.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {relatedProducts.length > 0 ? (
          <Box sx={{ mt: 10 }}>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>
              Related products
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
              More products you may be interested in.
            </Typography>

            <Grid container spacing={3}>
              {relatedProducts.map((relatedProduct) => (
                <Grid
                  key={relatedProduct.id}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 4,
                    lg: 3,
                  }}
                >
                  <ProductCard product={relatedProduct} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : null}
      </Container>

      <Snackbar
        open={showMessage}
        autoHideDuration={2000}
        onClose={() => setShowMessage(false)}
        message={`${quantity} × ${product.name} added to cart`}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </>
  );
}