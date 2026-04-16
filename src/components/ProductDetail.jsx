import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
  Rating,
  IconButton
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
     <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#F1F5F9",
        p: 4,
      }}
    >
      <Paper
        sx={{
          maxWidth: "1150px",
          margin: "0 auto",
          p: 4,
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
        }}
      >
        <Box sx={{ display: "flex", gap: 6 }}>

          <Box>
            <Box
              sx={{
                width: 380,
                height: 380,
                borderRadius: "18px",
                backgroundColor: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Typography color="#94A3B8">
                Product Image
              </Typography>

              <IconButton
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "#fff",
                  "&:hover": { backgroundColor: "#f1f5f9" },
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>

            <Typography variant="h5" fontWeight={700}>
              Product {productId}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1, gap: 1 }}>
              <Rating value={4.2} precision={0.1} readOnly />
              <Typography fontSize={14} color="#6B7280">
                (1,245 reviews)
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#16A34A",
                }}
              >
                ₹999
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#6B7280",
                  textDecoration: "line-through",
                }}
              >
                ₹1299
              </Typography>

              <Typography sx={{ color: "#EF4444", fontWeight: 600 }}>
                23% OFF
              </Typography>
            </Box>

            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <Chip label="Free Delivery" color="success" />
              <Chip label="Cashback Available" color="primary" />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography color="#4B5563" lineHeight={1.7}>
              This is a premium product designed with modern technology and
              high-quality materials. Enjoy superior performance and durability
              for everyday usage.
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Typography fontWeight={600} mb={1}>
                Highlights
              </Typography>

              <ul style={{ paddingLeft: "18px", color: "#4B5563" }}>
                <li>High quality material</li>
                <li>1 year warranty</li>
                <li>Fast performance</li>
                <li>Premium design</li>
              </ul>
            </Box>

            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
              <Button
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg,#6366F1,#06B6D4)",
                  color: "#fff",
                  "&:hover": {
                    boxShadow:
                      "0 10px 30px rgba(99,102,241,0.5)",
                  },
                }}
              >
                Add to Cart
              </Button>

              <Button
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  fontWeight: 600,
                  borderColor: "#6366F1",
                  color: "#6366F1",
                  "&:hover": {
                    backgroundColor: "#EEF2FF",
                  },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductDetail;