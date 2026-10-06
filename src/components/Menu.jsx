import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Menu.css";

function Menu() {
  const vegetables = [
    {
      name: "Fresh Tomato",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Fresh Carrot",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Broccoli",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const fruits = [
    {
      name: "Fresh Apple",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Fresh Orange",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Banana",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const dairy = [
    {
      name: "Fresh Milk",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cheese",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Yogurt",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const juices = [
    {
      name: "Orange Juice",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mango Juice",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Watermelon Juice",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const showProducts = (products) => {
    return (
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>

              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="menu-page">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🥬 FRESHORA</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu" className="active">Menu</Link>
          <Link to="/cart">Cart 🛒</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="menu-hero">
        <div>
          <p>FRESH • HEALTHY • NATURAL</p>
          <h1>Our Fresh Menu</h1>
          <span>Choose your favourite groceries</span>
        </div>
      </section>

      {/* Vegetables */}
      <section className="products-section">
        <h2>🥕 Fresh Vegetables</h2>
        <p className="section-text">
          Fresh vegetables directly for your kitchen
        </p>

        {showProducts(vegetables)}
      </section>

      {/* Fruits */}
      <section className="products-section light">
        <h2>🍎 Fresh Fruits</h2>
        <p className="section-text">
          Sweet and healthy fruits for your family
        </p>

        {showProducts(fruits)}
      </section>

      {/* Dairy */}
      <section className="products-section">
        <h2>🥛 Dairy Products</h2>
        <p className="section-text">
          Fresh dairy products every day
        </p>

        {showProducts(dairy)}
      </section>

      {/* Juices */}
      <section className="products-section light">
        <h2>🧃 Fresh Juices</h2>
        <p className="section-text">
          Refreshing natural juices
        </p>

        {showProducts(juices)}
      </section>

      {/* Footer */}
      <footer>
        <h2>🥬 FRESHORA</h2>
        <p>Fresh groceries for a healthy lifestyle.</p>
        <p>© 2026 Freshora. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Menu;