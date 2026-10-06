import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          🥬 FRESHORA
        </div>

        {/* Toggle Button */}
        <button
          className="toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
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
      <section className="hero">
        <div>
          <h1>Fresh Groceries</h1>
          <p>Fresh • Healthy • Natural</p>

          <Link to="/menu" className="hero-btn">
            Shop Now
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

export default Home;