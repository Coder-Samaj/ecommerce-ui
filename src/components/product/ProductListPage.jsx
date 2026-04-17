import Filter from "../Filter"
import ProductsList from "./ProductsList"
import Navbar from "../Navbar/Navbar"
import { useLocation } from "react-router-dom"
import { Box } from "@mui/material";

const ProductListPage = () => {

  const location = useLocation();
  // console.log(location);

  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);

  const searchQuery = queryParams.get("search") || "";
  // console.log(searchQuery);

  return (
    <Box
      sx={{
        bgcolor: "#F1F5F9",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          px: 2,
          py: 2,
          height: "calc(100vh - 64px)",
        }}
      >
        <Box
          sx={{
            width: 260,
            minWidth: 260,
            bgcolor: "#ffffff",
            borderRadius: 2,
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            p: 2,
            height: "100%",
            overflowY: "auto",

            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Filter />
        </Box>

        <Box
          sx={{
            flex: 1,
            bgcolor: "#ffffff",
            borderRadius: 2,
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            p: 2,
            height: "100%",
            overflowY: "auto",

            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <ProductsList searchQuery={searchQuery} />
        </Box>
      </Box>
    </Box>
  )
}

export default ProductListPage