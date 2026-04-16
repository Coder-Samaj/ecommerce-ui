import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Box, Typography, Paper } from "@mui/material";
import { ShoppingBag } from "lucide-react";

const CategorySection = () => {
    const navigate = useNavigate();
    
    const handleClick = (e,index)=>{
      const product = categories[index];
      console.log(product);
      navigate(`/category/${product}`);
    }
    const categories = [
        "Product_1",
        "Product_2",
        "Product_3",
        "Product_4",
        "Product_5",
        "Product_6"
    ];
 return (
  <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        py: 3,
        px: 2,
        bgcolor: "#F8FAFC",
      }}
    >
      {categories.map((item, index) => (
        <Box
          key={index}
          onClick={(e) => handleClick(e, index)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",

            "&:hover": {
              transform: "translateY(-6px)",
            },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: 85,
              height: 85,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                "linear-gradient(135deg, #6366F1, #06B6D4)",
              color: "#fff",

              boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
              transition: "all 0.3s ease",

              "&:hover": {
                boxShadow: "0 12px 30px rgba(99,102,241,0.5)",
                transform: "scale(1.08)",
              },
            }}
          >
            <ShoppingBag size={28} />
          </Paper>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: 14,
              fontWeight: 600,
              color: "#1F2937",
              transition: "color 0.3s",

              "&:hover": {
                color: "#6366F1",
              },
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
);
}

export default CategorySection