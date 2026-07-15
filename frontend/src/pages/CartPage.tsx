import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    subtotal,
  } = useCart();

  if (items.length === 0) {
    return (
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Stack
          spacing={3}
          sx={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ShoppingCartOutlinedIcon
            sx={{
              fontSize: 72,
              color: "text.secondary",
            }}
          />

          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Your cart is empty
          </Typography>

          <Typography color="text.secondary">
            Add some products to your cart and they’ll appear here.
          </Typography>

          <Button
            component={RouterLink}
            to="/products"
            variant="contained"
            size="large"
          >
            Browse products
          </Button>
        </Stack>
      </Container>
    );
  }

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
            Shopping cart
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {items.length} {items.length === 1 ? "product" : "products"} in your
            cart
          </Typography>
        </Box>

        <Button color="error" onClick={clearCart}>
          Clear cart
        </Button>
      </Stack>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={4}
        sx={{
          alignItems: "flex-start",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          {items.map(({ product, quantity }) => (
            <Card key={product.id} variant="outlined">
              <CardContent>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  sx={{
                    alignItems: {
                      xs: "stretch",
                      sm: "center",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={product.image}
                    alt={product.name}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: 140,
                      },
                      height: 110,
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {product.name}
                    </Typography>

                    <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                      {product.category}
                    </Typography>

                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{
                        mt: 1,
                        fontWeight: 800,
                      }}
                    >
                      ₹{product.price.toLocaleString("en-IN")}
                    </Typography>
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      alignItems: "center",
                      justifyContent: {
                        xs: "space-between",
                        sm: "flex-start",
                      },
                    }}
                  >
                    <IconButton
                      onClick={() => decreaseQuantity(product.id)}
                      aria-label={`decrease quantity of ${product.name}`}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Typography
                      sx={{
                        minWidth: 32,
                        textAlign: "center",
                        fontWeight: 700,
                      }}
                    >
                      {quantity}
                    </Typography>

                    <IconButton
                      onClick={() => increaseQuantity(product.id)}
                      aria-label={`increase quantity of ${product.name}`}
                    >
                      <AddIcon />
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`remove ${product.name} from cart`}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <Card
          variant="outlined"
          sx={{
            width: {
              xs: "100%",
              lg: 360,
            },
            position: {
              lg: "sticky",
            },
            top: {
              lg: 96,
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              Order summary
            </Typography>

            <Stack spacing={2} sx={{ mt: 3 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Typography color="text.secondary">Subtotal</Typography>

                <Typography sx={{ fontWeight: 700 }}>
                  ₹{subtotal.toLocaleString("en-IN")}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Typography color="text.secondary">Delivery</Typography>

                <Typography sx={{ fontWeight: 700 }}>Free</Typography>
              </Stack>

              <Divider />

              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  Total
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: 800 }}>
                  ₹{subtotal.toLocaleString("en-IN")}
                </Typography>
              </Stack>

              <Button
                component={RouterLink}
                to="/checkout"
                variant="contained"
                size="large"
                fullWidth
              >
                Proceed to checkout
              </Button>

              <Button
                component={RouterLink}
                to="/products"
                variant="outlined"
                fullWidth
              >
                Continue shopping
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}