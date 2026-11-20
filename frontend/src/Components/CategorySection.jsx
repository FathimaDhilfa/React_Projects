
import React from 'react';
import {Link} from 'react-router-dom';

const categories = [
  {
    name: "Tops & T-shirts",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=800&q=85"
  },
  {
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600"
  },
  {
    name: "Jeans & Denim",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
  },
  {
    name: "Co-ord Sets",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
  }
];

const CategorySection = () => {
  return (
    <section className="categories" id="categories">

      <div className="section-heading">
        <p>EXPLORE OUR COLLECTION</p>
        <h2>Shop by Category</h2>
      </div>

      <div className="category-grid">

        {categories.map((category) => (
          <div className="category-card" key={category.name}>

            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-overlay">
              <h3>{category.name}</h3>
              <span>SHOP NOW →</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default CategorySection;
