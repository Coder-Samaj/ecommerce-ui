import React from 'react'

const Product = () => {
  return (
    <div style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          borderBottom:"2px solid black"
        }}>

          <div style={{ width: "250px", height: "250px" }}>
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70"
              alt="product"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h2>Apple iPhone 17 (Sage, 256 GB)</h2>
            <ul>
              <li>256 GB ROM</li>
              <li>16.0 cm (6.3 inch) Super Retina XDR Display</li>
              <li>48MP + 48MP | 18MP Front Camera</li>
              <li>A19 Chip, 6 Core Processor</li>
              <li>1 Year Warranty</li>
            </ul>
          </div>

          <div style={{ width: "200px", textAlign: "left" }}>
            <h2>₹82,900</h2>
            <p style={{ color: "green" }}>
              Upto ₹54,100 Off on Exchange
            </p>
            <p style={{ color: "green", fontWeight: "bold" }}>
              Bank Offer Available
            </p>
          </div>

        </div>
  )
}

export default Product
