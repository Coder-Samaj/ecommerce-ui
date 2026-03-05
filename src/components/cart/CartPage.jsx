import React, { useState } from "react";
import {
  Box,
  Grid,
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
          bgcolor: "#f1f3f6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Paper sx={{ p: 5, textAlign: "center" }}>
          <Typography variant="h6" fontWeight={600}>
            Your cart is empty!
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 3, bgcolor: "#2874f0" }}
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
        height: "100vh",
        bgcolor: "#f1f3f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          height: "90vh",
          display: "flex",
          gap: 3
        }}
      >
        {/* LEFT SIDE - SCROLLABLE PRODUCTS */}
        <Paper
          sx={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          <Box
            sx={{
              p: 2,
              borderBottom: "1px solid #eee",
              fontWeight: 600
            }}
          >
            My Cart ({cart.length})
          </Box>

          <Box
            sx={{
              flex: 1,
              overflowY: "auto"
            }}
          >
            {cart.map((item, index) => (
              <Box key={item.id} sx={{ p: 3 }}>
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Box sx={{ width: 120 }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={500}>
                      {item.name}
                    </Typography>

                    <Typography
                      sx={{ mt: 1, fontWeight: 600 }}
                    >
                      ₹{item.price}
                    </Typography>

                    {/* Quantity */}
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
                          border: "1px solid #ddd",
                          borderRadius: 1
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

                        <Typography sx={{ px: 2 }}>
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
                        color="error"
                        onClick={() =>
                          handleRemove(item.id)
                        }
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
          </Box>
        </Paper>

        {/* RIGHT SIDE - STICKY SUMMARY */}
        <Paper
          sx={{
            flex: 1,
            p: 3,
            height: "fit-content",
            alignSelf: "flex-start",
            position: "sticky",
            top: 0
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              color: "#878787"
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
            <Typography fontWeight={600}>
              Total
            </Typography>
            <Typography fontWeight={600}>
              ₹{total}
            </Typography>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              bgcolor: "#fb641b",
              py: 1.5,
              fontWeight: 600,
              "&:hover": { bgcolor: "#e55b17" }
            }}
          >
            PLACE ORDER
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default CartPage;