
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">

      {/* Product Image */}
      <Link
        to={`/product/${product.id}`}
        className="product-image-link"
      >
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />

          {product.label && (
            <span className="product-label">
              {product.label}
            </span>
          )}
        </div>
      </Link>

      {/* Product Information */}
      <div className="product-info">

        <Link
          to={`/product/${product.id}`}
          className="product-name-link"
        >
          <h3>{product.name}</h3>
        </Link>

        {/* Price */}
        <div className="product-price">
          <span>
            ₹{Number(product.price).toLocaleString('en-IN')}
          </span>

          {product.originalPrice && (
            <del>
              ₹{Number(product.originalPrice).toLocaleString('en-IN')}
            </del>
          )}
        </div>

        {/* View Details */}
        <Link
          to={`/product/${product.id}`}
          className="add-to-cart"
        >
          VIEW DETAILS
        </Link>

      </div>
    </article>
  );
};

export default ProductCard;
