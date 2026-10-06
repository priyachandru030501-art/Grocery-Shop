import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/Contact.css";

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="contact-page">

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
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We would love to hear from you</p>
      </section>

      {/* Contact Content */}
      <section className="contact-section">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>📍 Chennai, Tamil Nadu</p>

          <p>📞 +91 44444 44444</p>

          <p>📧 freshora@gmail.com</p>

          <p>🕒 Monday - Sunday: 8 AM - 9 PM</p>

        </div>

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button>
            Send Message
          </button>

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

export default Contact;