import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Category Mapping
  const categoryMap = {
    All: "All",
    "Men's Clothing": "men's clothing",
    "Women's Clothing": "women's clothing",
    Accessories: "jewelery",
    Electronics: "electronics",
  };

  // Function to add to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart! 🛒`);
  };

  // Filter Products Based on Category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === categoryMap[selectedCategory]);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>🌸 Cute & Stylish Collection 🌸</h1>
        <button className="home-btn" onClick={() => navigate("/")}>🏡 Home</button>
        <div className="cart-icon">🛒 {cart.length}</div>
      </div>

      {/* Category Selection */}
      <div className="category-tabs">
        {Object.keys(categoryMap).map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} className="product-image" alt={prod.title} />
            <h5 className="product-title">{prod.title}</h5>
            <p className="product-price">${prod.price}</p>
            <div className="button-group">
              <button className="view-details-btn" onClick={() => navigate(`/products/${prod.id}`)}>
                ✨ View Details ✨
              </button>
              <button className="add-cart-btn" onClick={() => addToCart(prod)}>
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
