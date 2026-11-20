
import React from 'react';
import ProductCard from './ProductCard';
import products from '../data/products';

const ProductSection = () => {
  return (
    <section className="product-section" id="new-arrivals">

      <div className="section-heading">
        <p>CURATED FOR YOU</p>
        <h2>New Arrivals</h2>
        <span>Discover the latest additions to our collection.</span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default ProductSection;
