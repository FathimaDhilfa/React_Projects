
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import "./Wishlist.css";

const Wishlist = () => {

  const { wishlist, toggleWishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Wishlist is Empty</h2>
        <p>Save your favourite styles here.</p>
        <Link to="/">EXPLORE COLLECTION</Link>
      </div>
    );
  }

  return (
    <div className="wishlist-page">

      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <h1>My Wishlist</h1>

      <div className="product-grid">

        {wishlist.map((product) => (

          <div className="product-card" key={product.id}>

            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <Link to={`/product/${product.id}`}>
              VIEW DETAILS
            </Link>

            <button
              onClick={() => toggleWishlist(product)}
            >
              REMOVE FROM WISHLIST
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Wishlist;
