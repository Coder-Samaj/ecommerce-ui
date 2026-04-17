import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import AddressCard from "./AddressCard";
import OrderHistory from "./OrderHistory";
import { Box, Paper } from "@mui/material";


const Profile = () => {
    const user = {
        name: "Sanjeeb",
        email: "sanjeeb@xyz.com",
        joinedOn: "Feb 2026",
        phone: "00000000",
    };

    const address = {
        street: "Bhubaneswar",
        city: "Bhubaneswar",
        state: "Odisha",
        zip: "755001",
        country: "India",
    };

    const orders = [
        { id: "ORD123", date: "10 Feb 2026", total: "120.00", status: "Delivered" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD123", date: "10 Feb 2026", total: "120.00", status: "Delivered" },
        { id: "ORD123", date: "10 Feb 2026", total: "120.00", status: "Delivered" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
        { id: "ORD456", date: "25 Jan 2026", total: "75.50", status: "Shipped" },
    ];

    return (
       <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F8FAFC",
        display: "flex",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Paper sx={cardStyle}>
          <ProfileHeader user={user} />
        </Paper>

        <Paper sx={cardStyle}>
          <ProfileInfo user={user} />
        </Paper>

        <Paper sx={cardStyle}>
          <AddressCard address={address} />
        </Paper>

        <Paper sx={cardStyle}>
          <OrderHistory orders={orders} />
        </Paper>
      </Box>
    </Box>
  );
};

const cardStyle = {
  p: 3,
  borderRadius: "16px",
  boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
  backgroundColor: "#FFFFFF",
};

export default Profile;
