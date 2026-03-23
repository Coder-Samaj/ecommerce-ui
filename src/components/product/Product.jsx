import React from 'react'

const Product = ({product}) => {
  // console.log(product);
  return (
    <div style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          borderBottom:"2px solid black"
        }}>

          <div style={{ width: "250px", height: "250px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h2>{product.name}</h2>
            <ul>
              {product.specs.map((spec,index)=>(
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div style={{ width: "200px", textAlign: "left" }}>
            <h2>{product.price}</h2>
            <p style={{ color: "green" }}>
              {product.exchangeOffer}
            </p>
            <p style={{ color: "green", fontWeight: "bold" }}>
              {product.bankOffer}
            </p>
          </div>

        </div>
  )
}

export default Product
