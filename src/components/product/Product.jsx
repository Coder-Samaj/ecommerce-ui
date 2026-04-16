import React from 'react'
import { Box, Typography, Card } from "@mui/material";

const Product = ({ product }) => {
  // console.log(product);
  return (
    <Card
      sx={{
        display: "flex",
        gap: 3,
        p: 2,
        mb: 2,
        borderRadius: 2,
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer",

        "&:hover": {
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          transform: "translateY(-3px)",
        },
      }}
    >
      <Box
        sx={{
          width: 220,
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#F8FAFC",
          borderRadius: 2,
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          sx={{
            width: "90%",
            height: "90%",
            objectFit: "contain",
          }}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#111827",
            mb: 1,
          }}
        >
          {product.name}
        </Typography>

        <Box component="ul" sx={{ pl: 2, color: "#4B5563" }}>
          {product.specs.map((spec, index) => (
            <li key={index}>
              <Typography variant="body2">{spec}</Typography>
            </li>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#111827",
          }}
        >
          {product.price}
        </Typography>

        <Typography
          sx={{
            color: "#16A34A",
            fontSize: 14,
            mt: 1,
          }}
        >
          {product.exchangeOffer}
        </Typography>

        <Typography
          sx={{
            color: "#16A34A",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          {product.bankOffer}
        </Typography>
      </Box>
    </Card>
  )
}

export default Product
