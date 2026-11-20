
import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // Cart state
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  });

  // Save cart to LocalStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save wishlist to LocalStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Add product to cart
  const addToCart = (newItem) => {

    setCartItems((prevItems) => {

      const existingItem = prevItems.find(
        (item) =>
          item.id === newItem.id &&
          item.selectedSize === newItem.selectedSize &&
          item.selectedColor === newItem.selectedColor
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id &&
          item.selectedSize === newItem.selectedSize &&
          item.selectedColor === newItem.selectedColor
            ? {
                ...item,
                quantity: item.quantity + newItem.quantity
              }
            : item
        );
      }

      return [...prevItems, newItem];
    });
  };

  // Remove product from cart
  const removeFromCart = (id, size, color) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
      )
    );
  };

  // Update product quantity
  const updateQuantity = (id, size, color, quantity) => {

    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        item.selectedSize === size &&
        item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Add or remove wishlist product
  const toggleWishlist = (product) => {
    setWishlist((prevItems) => {
      const exists = prevItems.some(
        (item) => item.id === product.id
      );

      return exists
        ? prevItems.filter((item) => item.id !== product.id)
        : [...prevItems, product];
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        toggleWishlist
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => useContext(CartContext);
