
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart, wishlist, toggleWishlist } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      selectedSize,
      quantity
    });

    alert('Product added to bag successfully!');
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <main className="product-details-page">

      {/* Back Navigation */}
      <Link to="/" className="back-home-link">
        <span>←</span> BACK TO HOME
      </Link>

      <div className="product-details-layout">

        {/* Product Image */}
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.name}
            className="product-details-image"
          />
        </div>

        {/* Product Information */}
        <div className="product-info-section">

          <h1 className="product-details-name">
            {product.name}
          </h1>

          <div className="product-details-price">
            ₹{product.price.toLocaleString('en-IN')}
          </div>

          <p className="product-description">
            {product.description}
          </p>

          {/* Size Selection */}
          <div className="selection-section">
            <p className="selection-title">
              Select Size
            </p>

            <div className="selection-options">
              {['XS', 'S', 'M', 'L'].map((size) => (
                <button
                  type="button"
                  key={size}
                  className={`option-button ${
                    selectedSize === size ? 'selected' : ''
                  }`}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="selection-section">
            <p className="selection-title">Quantity</p>

            <div className="quantity-controls">
              <button
                type="button"
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="product-total">
            <span>Total Price</span>
            <strong>
              ₹{totalPrice.toLocaleString('en-IN')}
            </strong>
          </div>

          {/* Add to Bag */}
          <button
            type="button"
            className="add-to-bag-button"
            onClick={handleAddToCart}
          >
            ADD TO BAG
          </button>

          {/* Wishlist */}
          <button
            type="button"
            className={`wishlist-button ${
              isWishlisted ? 'wishlisted' : ''
            }`}
            onClick={handleWishlist}
          >
            <span className="wishlist-heart">
              {isWishlisted ? '♥' : '♡'}
            </span>

            {isWishlisted
              ? 'ADDED TO WISHLIST'
              : 'ADD TO WISHLIST'}
          </button>

          {/* View Bag */}
          <Link to="/cart" className="view-bag-link">
            VIEW BAG
          </Link>

        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
