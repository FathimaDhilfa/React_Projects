
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="zenora-footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-logo">ZELORA</h2>

          <p>
            Discover your style with Zelora Fashion.
            Modern fashion, timeless confidence.
          </p>

          <div className="footer-contact">
            <a href="mailto:hello@zenora.com">
              ✉ Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>EXPLORE</h3>
          <Link to="/">Home</Link>
          <Link to="/">Collections</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        {/* Customer Support */}
        <div className="footer-column">
          <h3>CUSTOMER CARE</h3>
          <Link to="/checkout">Checkout</Link>
          <Link to="/order-success">Order Information</Link>
          <a href="mailto:hello@zenora.com">Contact Us</a>
          <a href="mailto:hello@zenora.com">Help & Support</a>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook ↗
          </a>
          <a href="mailto:hello@zenora.com">
            Email ↗
          </a>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Zelora Fashion.  
          All rights reserved.
        </p>

        <a href="#top" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </div>

    </footer>
  );
};

export default Footer;
