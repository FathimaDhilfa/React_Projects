import React from 'react'
import ProductCard from './ProductCard';

const ProductListing = () => {
    const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        imgurl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        stock: 25,
        price: 2499
    },
    {
        id: 2,
        name: "Smart Watch",
        imgurl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",       stock: 15,
        price: 3999
    },
    {
        id: 3,
        name: "Running Shoes",
        imgurl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        stock: 0,
        price: 1999
    },
    {
        id: 4,
        name: "Backpack",
        imgurl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
       stock: 12,
        price: 1499
    },
    {
        id: 5,
        name: "Digital Camera",
        imgurl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        stock: 5,
        price: 24999
    },
    {
        id: 6,
        name: "Sunglasses",
        imgurl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        stock: 20,
        price: 999
    }
];
  return (
    <div className="container">
        <h1>Product Listing</h1>
        <div className="row">
            {products.map((prdc) => (
                <ProductCard products = {prdc} key = {prdc.id}/>
            ))}
        </div>
    </div>
  )
}

export default ProductListing