import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {

  const { categoryName } = useParams();

  const products = {

  Product_1: {
    name: "Sneakers",
    price: 699,
    originalPrice: 3299,
    discount: 79,
    description: "High-top stylish sneakers",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    ],
    sizes: [6,7,8,9]
  },

  Product_2: {
    name: "T-Shirt",
    price: 499,
    originalPrice: 999,
    discount: 50,
    description: "Comfort cotton T-shirt",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
    ],
    sizes: ["S","M","L"]
  },

  Product_3: {
    name: "Running Shoes",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    description: "Lightweight running shoes",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    ],
    sizes: [7,8,9,10]
  },

  Product_4: {
    name: "Jeans",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    description: "Slim fit denim jeans",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1514996937319-344454492b37"
    ],
    sizes: ["30","32","34"]
  },

  Product_5: {
    name: "Watch",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    description: "Stylish analog watch",
    images: [
      "https://images.unsplash.com/photo-1511389026070-a14ae610a1be",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
    ],
    sizes: ["Free Size"]
  },

  Product_6: {
    name: "Backpack",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    description: "Durable travel backpack",
    images: [
      "https://images.unsplash.com/photo-1509762774605-f07235a08f1f",
      "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4"
    ],
    sizes: ["Standard"]
  }

}; 

  const product = products[categoryName];

  if (!product) return <h2>Product Not Found</h2>;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);

 return (
  <div style={{
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial"
  }}>

    <div style={{ display: "flex", gap: "40px" }}>

      <div style={{
        width: "40%",
        position: "sticky",
        top: "20px"
      }}>

        <div style={{
          border: "1px solid #eee",
          padding: "10px",
          borderRadius: "10px",
          background: "#fff"
        }}>
          <img
            src={selectedImage}
            alt="product"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        <div style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px"
        }}>
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              width="70"
              onClick={() => setSelectedImage(img)}
              style={{
                cursor: "pointer",
                border: selectedImage === img ? "2px solid #2874f0" : "1px solid #ddd",
                borderRadius: "6px"
              }}
            />
          ))}
        </div>

      </div>

      <div style={{ width: "60%" }}>

        <h2 style={{ marginBottom: "5px" }}>{product.name}</h2>

        <div style={{ color: "#555", marginBottom: "10px" }}>
          ⭐ 4.2 | 1,245 ratings
        </div>

        <h1 style={{ color: "green", margin: "10px 0" }}>
          ₹{product.price}
        </h1>

        <p style={{ marginBottom: "10px" }}>
          <span style={{
            textDecoration: "line-through",
            color: "#888",
            marginRight: "10px"
          }}>
            ₹{product.originalPrice}
          </span>

          <span style={{ color: "green", fontWeight: "bold" }}>
            {product.discount}% off
          </span>
        </p>

        <p style={{ color: "#444", marginBottom: "15px" }}>
          {product.description}
        </p>

        
        <div style={{ marginBottom: "20px" }}>
          <h4>Select Size</h4>

          <div style={{ display: "flex", gap: "10px" }}>
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: "10px 15px",
                  border: selectedSize === size ? "2px solid #2874f0" : "1px solid #ccc",
                  background: selectedSize === size ? "#e6f0ff" : "white",
                  cursor: "pointer",
                  borderRadius: "5px"
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        
        <div style={{
          background: "#f5f5f5",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}>
          <p>🚚 Delivery in 2-4 days</p>
          <p>💰 Cash on Delivery Available</p>
          <p>🔁 7 Days Replacement</p>
        </div>

        
        <div style={{ marginBottom: "30px" }}>
          <button style={{
            background: "#ff9f00",
            padding: "12px 30px",
            border: "none",
            marginRight: "10px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Add to Cart
          </button>

          <button style={{
            background: "#fb641b",
            padding: "12px 30px",
            border: "none",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Buy Now
          </button>
        </div>

        
        <div style={{
          borderTop: "1px solid #eee",
          paddingTop: "20px",
          marginBottom: "20px"
        }}>
          <h3>Product Details</h3>
          <ul style={{ color: "#444" }}>
            <li>Color: Black</li>
            <li>Material: Cotton</li>
            <li>Fit: Regular</li>
            <li>Usage: Casual Wear</li>
          </ul>
        </div>

        
        <div style={{
          borderTop: "1px solid #eee",
          paddingTop: "20px",
          marginBottom: "20px"
        }}>
          <h3>Description</h3>
          <p style={{ color: "#444" }}>
            This product is made with high-quality material ensuring comfort and durability.
            Perfect for daily use and stylish appearance.
          </p>
        </div>

        
        <div style={{
          borderTop: "1px solid #eee",
          paddingTop: "20px"
        }}>
          <h3>Related Products</h3>

          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ cursor: "pointer" }}>
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                width="120"
                style={{ borderRadius: "8px" }}
              />
              <p>Product A</p>
            </div>

            <div style={{ cursor: "pointer" }}>
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                width="120"
                style={{ borderRadius: "8px" }}
              />
              <p>Product B</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);
};

export default CategoryPage;