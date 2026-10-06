import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/Cart.css";

function Cart() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="cart-page">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          🥬 FRESHORA
        </div>

        <button
          className="toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart 🛒
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>

      </nav>

      {/* Hero */}
      <section className="cart-hero">
        <h1>Your Cart</h1>
        <p>Check your selected groceries</p>
      </section>

      {/* Empty Cart */}
      <section className="cart-section">

        <div className="empty-cart">
          <div className="cart-icon">🛒</div>

          <h2>Your Cart is Empty</h2>

          <p>Add your favourite groceries from our menu.</p>

          <Link to="/menu" className="shop-btn">
            Start Shopping
          </Link>
        </div>

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

export default Cart;