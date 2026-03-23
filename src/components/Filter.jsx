import { useState } from 'react'
import {
  Box,
  Typography,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Button
} from "@mui/material";

const Filter = ({ setFilter }) => {
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
    // console.log("Applied Filters");
    // console.log("Selected Category:", category);
    // console.log("Selected Brand:", brand);
    // console.log("Selected Price:", price);

    setFilter({
      category: category,
      brand: brand,
      price: price
    })

  }

  function handleClear() {
    setCategory([]);
    setBrand([]);
    setPrice([0, 100000]);

    setFilter({
      category: [],
      brand: [],
      price: [0, 100000]
    });
    console.log("Filters Cleared")
  }

  return (
    <Box
      sx={{
        width: "20%",
        height: "100%",
        p: 3,
        borderRight: "1px solid #ddd",
        position: "sticky",
        top: 0,
        overflowY: "auto",
        backgroundColor: "#fff",
      }}>
      <Typography variant="h6" align='center' fontWeight="bold" gutterBottom>
        Filters
      </Typography>

      <Divider sx={{ mb: 2 }}></Divider>

      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
        Category
      </Typography>

      <FormGroup>
        <FormControlLabel control={<Checkbox value="Mobiles" checked={category.includes("Mobiles")} onChange={handleCategory} />} label="Mobiles" />
        <FormControlLabel control={<Checkbox value="Laptops" checked={category.includes("Laptops")} onChange={handleCategory} />} label="Laptops" />
        <FormControlLabel control={<Checkbox value="Tablets" checked={category.includes("Tablets")} onChange={handleCategory} />} label="Tablets" />
        <FormControlLabel control={<Checkbox value="Shoes" checked={category.includes("Shoes")} onChange={handleCategory} />} label="Shoes" />
      </FormGroup>

      <Divider sx={{ mb: 2 }}></Divider>

      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
        Brand
      </Typography>

      <FormGroup>
        <FormControlLabel control={<Checkbox value="Apple" checked={brand.includes("Apple")} onChange={handleBrand} />} label="Apple" />
        <FormControlLabel control={<Checkbox value="Samsung" checked={brand.includes("Samsung")} onChange={handleBrand} />} label="Samsung" />
        <FormControlLabel control={<Checkbox value="OnePlus" checked={brand.includes("OnePlus")} onChange={handleBrand} />} label="OnePlus" />
        <FormControlLabel control={<Checkbox value="Google Pixel" checked={brand.includes("Google Pixel")} onChange={handleBrand} />} label="Google Pixel" />
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1" fontWeight="600" sx={{ mb: 1 }}>
        Price Range
      </Typography>

      <Slider
        defaultValue={[0, 100000]}
        value={price}
        onChange={handlePrice}
        min={0}
        max={100000}
        valueLabelDisplay="auto"
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <Typography variant="body2">₹{price[0]}</Typography>
        <Typography variant="body2">₹{price[1]}</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Button variant="contained" fullWidth sx={{ mb: 1 }} onClick={handleApply}>
        Apply Filters
      </Button>

      <Button variant="outlined" fullWidth onClick={handleClear}>
        Clear Filters
      </Button>
    </Box>
  )
}

export default Filter