import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";

export default function ProdDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  // Function to Add to Cart
  const addToCart = () => {
    if (product) {
      setCart((prevCart) => [...prevCart, product]);
      alert(`${product.title} added to cart! 🛒`);
    }
  };

  // Function to Add to Wishlist
  const addToWishlist = () => {
    if (product) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      alert(`${product.title} added to wishlist! 💖`);
    }
  };

  if (!product) {
    return <div className="loading-message">Loading... 💖✨</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        
        {/* Image & Details Side by Side */}
        <div className="product-details-content">
          {/* Left - Small Image */}
          <div className="product-details-image">
            <img src={product.image} alt={product.title} />
          </div>

          {/* Right - Details */}
          <div className="product-details-info">
            <h1 className="product-details-title">🎀 {product.title} 🎀</h1>
            <p className="product-details-description">{product.description}</p>
            <p className="product-details-price">$ {product.price}</p>
            <p className="product-details-category">✨ {product.category.toUpperCase()} ✨</p>
            
            {/* Buttons */}
            <div className="button-group">
              <button className="add-cart-btn" onClick={addToCart}>🛒 Add to Cart</button>
              <button className="add-cart-btn" onClick={addToWishlist}>💖 Add to Wishlist</button>
            </div>
          </div>
        </div>

        {/* Go Back Button */}
        <div className="product-details-button-container">
          <button className="product-details-back-button" onClick={() => navigate(-1)}>
            ⬅ Go Back
          </button>
        </div>

      </div>
    </div>
  );
}
