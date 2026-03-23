import Filter from "../Filter"
import ProductsList from "./ProductsList"
import Navbar from "../Navbar/Navbar"
import { useLocation } from "react-router-dom"
import { useState } from "react"
const ProductListPage = () => {

  const location  = useLocation();
  // console.log(location);

  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);
  
  const searchQuery = queryParams.get("search") || "";
  // console.log(searchQuery);
  
  const [filter,setFilter]=useState({
    category:[],
    brand:[],
    price:[0,100000]
  })

  return (
    <div>
      <Navbar/>
      <div style={{
        width: "100%",
        height: "calc(100vh - 68px)",
        display: "flex",
        gap: "3px",

      }}>

        <Filter setFilter={setFilter}/>

        <ProductsList searchQuery={searchQuery} filter={filter}/>

      </div>
    </div>
  )
}

export default ProductListPage