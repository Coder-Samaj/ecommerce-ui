import React, { useState } from "react";
import { useParams } from "react-router-dom";
  import {
    Box,
    Typography,
    Paper,
    Button,
    Rating,
    Divider,
    Chip
  } from "@mui/material";

const CategoryPage = () => {

  const { categoryName } = useParams();

  const products = {

  Product_1: {
    name: "Sneakers",
    price: 699,
    originalPrice: 3299,
    discount: 79,
    description: "High-top stylish sneakers",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    ],
    sizes: [6,7,8,9]
  },

  Product_2: {
    name: "T-Shirt",
    price: 499,
    originalPrice: 999,
    discount: 50,
    description: "Comfort cotton T-shirt",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
    ],
    sizes: ["S","M","L"]
  },

  Product_3: {
    name: "Running Shoes",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    description: "Lightweight running shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    ],
    sizes: [7,8,9,10]
  },

  Product_4: {
    name: "Jeans",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    description: "Slim fit denim jeans",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1514996937319-344454492b37"
    ],
    sizes: ["30","32","34"]
  },

  Product_5: {
    name: "Watch",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    description: "Stylish analog watch",
    images: [
      "https://images.unsplash.com/photo-1511389026070-a14ae610a1be",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
    ],
    sizes: ["Free Size"]
  },

  Product_6: {
    name: "Backpack",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    description: "Durable travel backpack",
    images: [
      "https://images.unsplash.com/photo-1509762774605-f07235a08f1f",
      "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4"
    ],
    sizes: ["Standard"]
  }

}; 

  const product = products[categoryName];

  if (!product) return <h2>Product Not Found</h2>;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);

 return (
  <Box sx={{ background: "#F1F5F9", minHeight: "100vh", p: 4 }}>
      <Paper
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          p: 4,
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)"
        }}
      >
        <Box sx={{ display: "flex", gap: 5 }}>

          <Box sx={{ width: "40%" }}>
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <img
                src={selectedImage}
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Paper>

            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  width="70"
                  onClick={() => setSelectedImage(img)}
                  style={{
                    cursor: "pointer",
                    border:
                      selectedImage === img
                        ? "2px solid #6366F1"
                        : "1px solid #ddd",
                    borderRadius: "8px"
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ width: "60%" }}>
            <Typography variant="h5" fontWeight={700}>
              {product.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Rating value={4.2} precision={0.1} readOnly />
              <Typography ml={1} fontSize={14}>
                (1,245 reviews)
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography fontSize={28} fontWeight={700} color="#16A34A">
                ₹{product.price}
              </Typography>

              <Typography
                sx={{ textDecoration: "line-through", color: "#777" }}
              >
                ₹{product.originalPrice}
              </Typography>

              <Typography color="error" fontWeight={600}>
                {product.discount}% OFF
              </Typography>
            </Box>

            <Typography sx={{ mt: 2, color: "#555" }}>
              {product.description}
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography fontWeight={600}>Select Size</Typography>

              <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    variant={selectedSize === size ? "contained" : "outlined"}
                    sx={{
                      borderRadius: "20px",
                      minWidth: "50px"
                    }}
                  >
                    {size}
                  </Button>
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
              <Chip label="🚚 2-4 Days Delivery" />
              <Chip label="💰 COD Available" />
              <Chip label="🔁 7 Days Return" />
            </Box>

            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
              <Button
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  background:
                    "linear-gradient(135deg,#6366F1,#06B6D4)",
                  color: "#fff"
                }}
              >
                Add to Cart
              </Button>

              <Button
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px"
                }}
              >
                Buy Now
              </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6">Product Details</Typography>
            <ul>
              <li>Premium Quality</li>
              <li>Durable Material</li>
              <li>Modern Design</li>
            </ul>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6">Related Products</Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Paper sx={{ p: 1, textAlign: "center" }}>
                <img src={product.images[0]} width="100" />
                <Typography>Item A</Typography>
              </Paper>

              <Paper sx={{ p: 1, textAlign: "center" }}>
                <img src={product.images[1]} width="100" />
                <Typography>Item B</Typography>
              </Paper>
            </Box>

          </Box>
        </Box>
      </Paper>
    </Box>
);
};

export default CategoryPage;