import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { Search, ShoppingCart, User, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(){
    if(search.trim()!=""){
      navigate(`/products?search=${search}`)
    }
  }

  return (
   <Box
      sx={{
        width: "100%",
        px: 3,
        py: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        bgcolor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          color: "#6366F1",
          cursor: "pointer",
        }}
      >
        MyShop
      </Typography>

      <Box
        sx={{
          flex: 1,
          mx: 4,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search products..."
          size="small"
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              backgroundColor: "#F1F5F9",
              "& fieldset": {
                border: "none",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={18} color="#6B7280" />
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            borderRadius: "25px",
            px: 3,
            background:
              "linear-gradient(135deg, #6366F1, #06B6D4)",
            textTransform: "none",
            fontWeight: 600,

            "&:hover": {
              boxShadow: "0 5px 15px rgba(99,102,241,0.4)",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <NavItem icon={<MoreHorizontal size={20} />} label="More" />
        <NavItem icon={<ShoppingCart size={20} />} label="Cart" />
        <NavItem icon={<User size={20} />} label="Profile" />
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, label }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      cursor: "pointer",
      color: "#374151",
      fontWeight: 500,
      transition: "0.2s",

      "&:hover": {
        color: "#6366F1",
        transform: "translateY(-1px)",
      },
    }}
  >
    {icon}
    <Typography sx={{ fontSize: 14 }}>{label}</Typography>
  </Box>
);

export default Navbar;