
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const savedOrder = sessionStorage.getItem('latestOrder');

  if (!savedOrder) {
    return <Navigate to="/" replace />;
  }

  const order = JSON.parse(savedOrder);

  const formatPrice = (price) =>
    `₹${Number(price).toLocaleString('en-IN')}`;

  return (
    <main className="order-success-page">

      <div className="success-card">

        {/* Back to Home */}
        <Link to="/" className="success-back-home">
          ← BACK TO HOME
        </Link>

        {/* Success Icon */}
        <div className="success-icon">
          ✓
        </div>

        {/* Success Message */}
        <h1>Thank You for Your Order!</h1>

        <p className="success-message">
          Your order has been placed successfully.
          We're getting it ready for you.
        </p>

        {/* Single Continue Shopping Button */}
        <Link
          to="/"
          className="success-shopping-button"
        >
          CONTINUE SHOPPING
        </Link>

        {/* Order Number */}
        <div className="order-id-box">
          <span>ORDER NUMBER</span>
          <strong>{order.orderId}</strong>
        </div>

        {/* Customer Details */}
        <div className="success-details">

          <div className="success-detail-row">
            <span>Customer</span>
            <strong>{order.customer.name}</strong>
          </div>

          <div className="success-detail-row">
            <span>Email</span>
            <strong>{order.customer.email}</strong>
          </div>

          <div className="success-detail-row">
            <span>Phone</span>
            <strong>{order.customer.phone}</strong>
          </div>

          <div className="success-detail-row">
            <span>Payment</span>
            <strong>{order.paymentMethod}</strong>
          </div>

          <div className="success-detail-row">
            <span>Total Amount</span>
            <strong>{formatPrice(order.subtotal)}</strong>
          </div>

        </div>

        {/* Ordered Products */}
        <div className="success-products">

          <h2>Order Details</h2>

          {order.items.map((item, index) => (
            <div
              className="success-product"
              key={`${item.id}-${item.selectedSize}-${index}`}
            >
              <img src={item.image} alt={item.name} />

              <div className="success-product-info">
                <h3>{item.name}</h3>
                <p>Size: {item.selectedSize}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <strong>
                {formatPrice(item.price * item.quantity)}
              </strong>
            </div>
          ))}

        </div>

        <p className="success-footer">
          Thank you for shopping with ZÉLORA.
        </p>

      </div>
    </main>
  );
};

export default OrderSuccess;
