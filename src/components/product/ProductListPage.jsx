import Filter from "../Filter"
import ProductsList from "./ProductsList"
import Navbar from "../Navbar/Navbar"
const ProductListPage = () => {
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

        <ProductsList />

      </div>
    </div>
  )
}

export default ProductListPage