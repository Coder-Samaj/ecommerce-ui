import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const ProfileInfo = ({ user }) => {
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
        Account Information
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        
        <InfoRow label="Name" value={user.name} />
        <InfoRow label="Email" value={user.email} />
        <InfoRow label="Phone" value={user.phone} />

      </Box>
    </Box>
  );
};

const InfoRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: 2,
      borderRadius: "10px",
      backgroundColor: "#F8FAFC",
      border: "1px solid #E5E7EB",
    }}
  >
    <Typography
      sx={{
        fontSize: 14,
        color: "#6B7280",
        fontWeight: 500,
      }}
    >
      {label}
    </Typography>

    <Typography
      sx={{
        fontSize: 15,
        fontWeight: 600,
        color: "#111827",
      }}
    >
      {value}
    </Typography>
  </Box>
);

export default ProfileInfo;
