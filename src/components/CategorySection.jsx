import React from 'react'
import {useNavigate} from 'react-router-dom'
const CategorySection = () => {
    const navigate = useNavigate();
    
    const handleClick = (e,index)=>{
      const product = categories[index];
      console.log(product);
      navigate(`/category/${product}`);
    }
    const categories = [
        "Product_1",
        "Product_2",
        "Product_3",
        "Product_4",
        "Product_5",
        "Product_6"
    ];
 return (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: "20px 0",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    }}
  >
    {categories.map((item, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          transition: "transform 0.2s ease"
        }
      }
      onClick={(e)=>handleClick(e,index)}
      >
        <div
          style={{
            width: "85px",
            height: "85px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #4f46e5, #3b82f6)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            fontWeight: "500",
            textAlign: "center",
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
          }}
        >
          Mewo Ghop Ghop
        </div>

        <p
          style={{
            marginTop: "10px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#333"
          }}
        >
          {item}
        </p>
      </div>
    ))}
  </div>
);
}

export default CategorySection