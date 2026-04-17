import { useState } from 'react'
import {
  Box,
  Typography,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Button,
} from "@mui/material";

const Filter = () => {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([0, 100000])

  function handleCategory(e) {
    // console.log(e);
    // console.log(e.target.value);
    // console.log(e.target.checked);

    const { value, checked } = e.target;

    if (checked) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((item) => item !== value));
    }
  }

  function handleBrand(e) {
    const { value, checked } = e.target;

    if (checked) {
      setBrand([...brand, value]);
    } else {
      setBrand(brand.filter((item) => item !== value));
    }
  }

  function handlePrice(e, newValue) {
    setPrice(newValue);
  }

  function handleApply() {
    console.log("Applied Filters");
    console.log("Selected Category:", category);
    console.log("Selected Brand:", brand);
    console.log("Selected Price:", price);

  }

  function handleClear() {
    setCategory([]);
    setBrand([]);
    setPrice([0, 100000]);
    console.log("Filters Cleared")
  }

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          color: "#111827",
          mb: 1,
        }}
      >
        Filters
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Typography sx={sectionTitle}>Category</Typography>

      <FormGroup>
        {["Mobiles", "Laptops", "Tablets", "Shoes"].map((item) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                value={item}
                checked={category.includes(item)}
                onChange={handleCategory}
                sx={checkboxStyle}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      <Typography sx={sectionTitle}>Brand</Typography>

      <FormGroup>
        {["Apple", "Samsung", "OnePlus", "Google Pixel"].map((item) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                value={item}
                checked={brand.includes(item)}
                onChange={handleBrand}
                sx={checkboxStyle}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      <Typography sx={sectionTitle}>Price Range</Typography>

      <Slider
        value={price}
        onChange={handlePrice}
        min={0}
        max={100000}
        valueLabelDisplay="auto"
        sx={{
          color: "#6366F1",
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
          color: "#6B7280",
        }}
      >
        <Typography variant="body2">₹{price[0]}</Typography>
        <Typography variant="body2">₹{price[1]}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Button
        fullWidth
        onClick={handleApply}
        sx={{
          mb: 1,
          borderRadius: "25px",
          background:
            "linear-gradient(135deg, #6366F1, #06B6D4)",
          color: "#fff",
          fontWeight: 600,

          "&:hover": {
            boxShadow: "0 5px 15px rgba(99,102,241,0.4)",
          },
        }}
      >
        Apply Filters
      </Button>

      <Button
        fullWidth
        variant="outlined"
        onClick={handleClear}
        sx={{
          borderRadius: "25px",
          borderColor: "#6366F1",
          color: "#6366F1",
          fontWeight: 600,

          "&:hover": {
            borderColor: "#4F46E5",
            backgroundColor: "rgba(99,102,241,0.05)",
          },
        }}
      >
        Clear Filters
      </Button>
    </Box>
  );
};

const sectionTitle = {
  fontWeight: 600,
  mb: 1,
  color: "#374151",
};

const checkboxStyle = {
  color: "#6366F1",
  "&.Mui-checked": {
    color: "#6366F1",
  },
};

export default Filter