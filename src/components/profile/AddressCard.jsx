import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AddressCard = ({ address }) => {
    return (
        <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 18,
          color: "#111827",
          mb: 2,
        }}
      >
        Shipping Address
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          p: 3,
          borderRadius: "14px",
          border: "1px solid #E5E7EB",
          backgroundColor: "#F9FAFB",
          display: "flex",
          gap: 2,
          alignItems: "flex-start",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            transform: "translateY(-2px)",
          },
        }}
      >
        <Box
          sx={{
            width: 45,
            height: 45,
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#6366F1,#06B6D4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <LocationOnIcon />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={600}>
            {address.street}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#6B7280",
              mt: 0.5,
            }}
          >
            {address.city}, {address.state} {address.zip}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            {address.country}
          </Typography>
        </Box>

        <Button
          sx={{
            borderRadius: "20px",
            textTransform: "none",
            fontWeight: 600,
            px: 2,
            border: "1px solid #6366F1",
            color: "#6366F1",
            "&:hover": {
              backgroundColor: "#EEF2FF",
            },
          }}
        >
          Edit
        </Button>
      </Box>
    </Box>
    );
};

export default AddressCard;
