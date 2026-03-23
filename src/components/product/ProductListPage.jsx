import Filter from "../Filter"
import ProductsList from "./ProductsList"
import Navbar from "../Navbar/Navbar"
import { useLocation } from "react-router-dom"
const ProductListPage = () => {

  const location  = useLocation();
  // console.log(location);

  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);
  
  const searchQuery = queryParams.get("search") || "";
  // console.log(searchQuery);
  
  return (
    <div>
      <Navbar/>
      <div style={{
        width: "100%",
        height: "calc(100vh - 68px)",
        display: "flex",
        gap: "3px",

      }}>

        <Filter />

        <ProductsList searchQuery={searchQuery}/>

      </div>
    </div>
  )
}

export default ProductListPage