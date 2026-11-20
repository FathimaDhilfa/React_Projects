
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity
  } = useCart();

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    `₹${price.toLocaleString('en-IN')}`;

  // Empty Cart
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <Link to="/" className="cart-back-link">
          ← BACK TO HOME
        </Link>

        <div className="empty-cart-content">
          <div className="empty-cart-icon">♡</div>

          <h2>Your Shopping Bag is Empty</h2>

          <p>
            Discover something beautiful from ZÉLORA.
          </p>

          <Link to="/" className="continue-shopping-button">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* Back to Home */}
      <Link to="/" className="cart-back-link">
        ← CONTINUE SHOPPING
      </Link>

      <div className="cart-heading">
        <h1>Shopping Bag</h1>
        <p>
         {(() => {
  const count = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return `${count} ${count === 1 ? 'ITEM' : 'ITEMS'} IN YOUR BAG`;
})()}
        </p>
      </div>

      <div className="cart-container">

        {/* Cart Items */}
        <div className="cart-items">

          {cartItems.map((item) => (

            <div
              className="cart-item"
              key={`${item.id}-${item.selectedSize}-${item.selectedColor || ''}`}
            >

              {/* Product Image */}
              <div className="cart-item-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* Product Information */}
              <div className="cart-item-info">

                <h3>{item.name}</h3>

                <p>
                  Size: {item.selectedSize}
                </p>

                {item.selectedColor && (
                  <p>
                    Colour: {item.selectedColor}
                  </p>
                )}

                <p className="cart-item-price">
                  {formatPrice(item.price)}
                </p>

                {/* Quantity Controls */}
                <div className="cart-quantity-control">

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.selectedSize,
                        item.selectedColor,
                        item.quantity - 1
                      )
                    }
                    disabled={item.quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.selectedSize,
                        item.selectedColor,
                        item.quantity + 1
                      )
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>

                </div>

                {/* Remove Button */}
                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(
                      item.id,
                      item.selectedSize,
                      item.selectedColor
                    )
                  }
                >
                  REMOVE
                </button>

              </div>

              {/* Item Total */}
              <div className="cart-item-total">
                {formatPrice(item.price * item.quantity)}
              </div>

            </div>

          ))}

        </div>

        {/* Order Summary */}
        <aside className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row summary-total">
            <strong>Total</strong>
            <strong>{formatPrice(subtotal)}</strong>
          </div>

          <button
            className="checkout-button"
            onClick={() => navigate('/checkout')}
          >
            PROCEED TO CHECKOUT
          </button>

          <p className="checkout-note">
            Shipping charges will be calculated at checkout.
          </p>

          <Link
            to="/"
            className="summary-continue-link"
          >
            CONTINUE SHOPPING
          </Link>

        </aside>

      </div>
    </div>
  );
};

export default Cart;
