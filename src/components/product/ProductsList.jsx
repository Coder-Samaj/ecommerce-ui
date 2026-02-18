import React from 'react'
import Product from './Product'

const ProductsList = () => {
  return (
    <div style={{
        width: "80%",
        height: "100%",
        border: "2px solid black",
        overflowY: "auto",
      }}>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>Product</h1>
        </div>

        <Product/>
        <Product/>
        <Product/>
        <Product/>

      </div>
  )
}

export default ProductsList
