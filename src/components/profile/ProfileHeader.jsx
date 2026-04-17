import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";

const ProfileHeader = ({ user }) => {
    return (
       <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 3,
        borderRadius: "16px",

        background:
          "linear-gradient(135deg, #6366F1, #06B6D4)",

        color: "#fff",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
        
        <Avatar
          sx={{
            width: 70,
            height: 70,
            fontSize: 28,
            fontWeight: 600,
            backgroundColor: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          {user.name.charAt(0)}
        </Avatar>

        <Box>
          <Typography variant="h6" fontWeight={600}>
            {user.name}
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              opacity: 0.9,
            }}
          >
            {user.email}
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              opacity: 0.7,
              mt: 0.5,
            }}
          >
            Joined: {user.joinedOn}
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{
          borderRadius: "25px",
          px: 3,
          fontWeight: 600,
          textTransform: "none",

          backgroundColor: "#fff",
          color: "#111827",

          "&:hover": {
            backgroundColor: "#f1f5f9",
          },
        }}
      >
        Edit Profile
      </Button>
    </Box>
    );
};



export default ProfileHeader;
