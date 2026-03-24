import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <div style={{ padding: "30px" }}>
      <h2>Product Detail Page</h2>

      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        
        
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "#eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Image of Product
        </div>

        
        <div>
          <h2>Product {productId}</h2>
          <p style={{ fontSize: "18px", fontWeight: "600" }}>₹999</p>
          <p>This is a simple product description.</p>

          <button
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "orange",
              border: "none",
              cursor: "pointer"
            }}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;