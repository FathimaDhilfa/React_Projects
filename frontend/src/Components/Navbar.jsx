
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems, wishlist } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="announcement">
        FREE SHIPPING ON ORDERS ABOVE ₹1999
      </div>

      <nav className="navbar">

        <Link to="/" className="logo">
          ZÉLORA<span>.</span>
        </Link>

        <div className="nav-links">
          <Link to="/">HOME</Link>
          <a href="#categories">SHOP</a>
          <a href="#new-arrivals">NEW ARRIVALS</a>
          <a href="#about">ABOUT</a>
        </div>

        <div className="nav-icons">

          {/* Search Icon */}
          <button aria-label="Search">
            <svg viewBox="0 0 24 24">
              <circle cx="10.8" cy="10.8" r="7.2" />
              <path d="M16.2 16.2L21 21" />
            </svg>
          </button>

          {/* Account Icon */}
          <button aria-label="Account">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="7.5" r="4" />
              <path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2" />
            </svg>
          </button>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            className="nav-icon-link"
            aria-label={`Wishlist (${wishlist.length})`}
          >
            <svg viewBox="0 0 24 24">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>
            <span>{wishlist.length}</span>
          </Link>

          {/* Shopping Bag Icon */}
          <Link
            to="/cart"
            className="nav-icon-link"
            aria-label={`Shopping Bag (${cartCount})`}
          >
            <svg viewBox="0 0 24 24">
              <path d="M5.5 8h13l1.5 13h-16L5.5 8Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
            <span>{cartCount}</span>
          </Link>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
