import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Paper
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const initialCart = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 100,
    quantity: 1,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 200,
    quantity: 2,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 200,
    quantity: 2,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 200,
    quantity: 2,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70"
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 200,
    quantity: 2,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70"
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 200,
    quantity: 2,
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70"
  }
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  const handleQuantity = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity:
              type === "inc"
                ? item.quantity + 1
                : item.quantity > 1
                  ? item.quantity - 1
                  : 1
          }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryCharge = subtotal > 5000 ? 0 : 99;
  const total = subtotal + deliveryCharge;

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#F8FAFC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Paper sx={{ p: 5, textAlign: "center", borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={600}>
            Your cart is empty 😔
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: "25px",
              background:
                "linear-gradient(135deg, #6366F1, #06B6D4)"
            }}
          >
            Shop Now
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F1F5F9",
        p: 3,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          gap: 3
        }}
      >
        <Paper
          sx={{
            flex: 2,
            borderRadius: 3,
            overflow: "hidden"
          }}
        >
          <Box
            sx={{
              p: 2,
              fontWeight: 600,
              borderBottom: "1px solid #E5E7EB"
            }}
          >
            My Cart ({cart.length})
          </Box>

          {cart.map((item, index) => (
            <Box key={item.id} sx={{ p: 3 }}>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    bgcolor: "#F8FAFC",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "90%" }}
                  />
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={600}>
                    {item.name}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      fontWeight: 700,
                      color: "#111827"
                    }}
                  >
                    ₹{item.price}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 2,
                      gap: 2
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #E5E7EB",
                        borderRadius: "25px",
                        px: 1
                      }}
                    >
                      <IconButton
                        size="small"
                        onClick={() =>
                          handleQuantity(item.id, "dec")
                        }
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>

                      <Typography sx={{ px: 1 }}>
                        {item.quantity}
                      </Typography>

                      <IconButton
                        size="small"
                        onClick={() =>
                          handleQuantity(item.id, "inc")
                        }
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    <IconButton
                      onClick={() => handleRemove(item.id)}
                      sx={{ color: "#EF4444" }}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>

              {index !== cart.length - 1 && (
                <Divider sx={{ mt: 3 }} />
              )}
            </Box>
          ))}
        </Paper>

        <Paper
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 3,
            position: "sticky",
            top: 20,
            height: "fit-content"
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "#6B7280"
            }}
          >
            PRICE DETAILS
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="space-between">
            <Typography>Price ({cart.length})</Typography>
            <Typography>₹{subtotal}</Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            mt={1}
          >
            <Typography>Delivery</Typography>
            <Typography>
              {deliveryCharge === 0
                ? "FREE"
                : `₹${deliveryCharge}`}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={700}>
              Total
            </Typography>
            <Typography fontWeight={700}>
              ₹{total}
            </Typography>
          </Box>

          <Button
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: "25px",
              fontWeight: 600,
              background:
                "linear-gradient(135deg, #6366F1, #06B6D4)",
              color: "#fff",

              "&:hover": {
                boxShadow:
                  "0 5px 20px rgba(99,102,241,0.4)"
              }
            }}
          >
            Place Order
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default CartPage;