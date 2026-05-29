import React from 'react'
import Product from './Product'
import { Box, Typography } from "@mui/material";

const productsData = [
  {
    id: 1,
    name: "Apple iPhone 17 (Sage, 256 GB)",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70",
    category: "Mobiles",
    brand: "Apple",
    price: 82900,
    exchangeOffer: "Upto ₹54,100 Off on Exchange",
    bankOffer: "Bank Offer Available",
    specs: [
      "256 GB ROM",
      "16.0 cm (6.3 inch) Super Retina XDR Display",
      "48MP + 48MP | 18MP Front Camera",
      "A19 Chip, 6 Core Processor",
      "1 Year Warranty",
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 (Black, 256 GB)",
    image: "https://www.designinfo.in/wp-content/uploads/2024/01/Samsung-Galaxy-S24-128GB-Onyx-Black-1-485x485.webp",
    category: "Mobiles",
    brand: "Samsung",
    price: 74999,
    exchangeOffer: "Upto ₹40,000 Off on Exchange",
    bankOffer: "Bank Offer Available",
    specs: [
      "256 GB ROM",
      "15.8 cm (6.2 inch) AMOLED Display",
      "50MP + 12MP + 10MP | 12MP Front Camera",
      "Exynos 2400 Processor",
      "1 Year Warranty",
    ],
  },
  {
    id: 3,
    name: "OnePlus 12 (Flowy Emerald, 256 GB)",
    image: "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UF1000,1000_QL80_.jpg",
    category: "Mobiles",
    brand: "OnePlus",
    price: 64999,
    exchangeOffer: "Upto ₹35,000 Off on Exchange",
    bankOffer: "Bank Offer Available",
    specs: [
      "256 GB ROM",
      "17.2 cm (6.82 inch) AMOLED Display",
      "50MP + 48MP + 64MP | 32MP Front Camera",
      "Snapdragon 8 Gen 3 Processor",
      "1 Year Warranty",
    ],
  },
];

const ProductsList = ({ searchQuery, filter }) => {

  const filteredProducts = productsData.filter((product) => {
    // return product.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = filter.category.length === 0 || filter.category.includes(product.category);

    const matchesBrand = filter.brand.length === 0 || filter.brand.includes(product.brand);

    const matchesPrice = product.price >= filter.price[0] && product.price <= filter.price[1];

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice
  })

  console.log(filteredProducts);


  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          mb: 2,
          pb: 1,
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Products
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            color: "#6B7280",
          }}
        >
          {filteredProducts.length} items found
        </Typography>
      </Box>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <Box
          sx={{
            textAlign: "center",
            mt: 8,
            color: "#6B7280",
          }}
        >
          <Typography variant="h6">
            No products found 😔
          </Typography>

          <Typography sx={{ fontSize: 14 }}>
            Try adjusting your search or filters
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ProductsList