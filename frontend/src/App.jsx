
import './App.css';

import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Checkout';
import OrderSuccess from './Pages/OrderSuccess';

import Footer from './Components/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { CartProvider } from './context/CartContext';

function App() {

  return (

    <BrowserRouter>

      <CartProvider>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />

        </Routes>

        <Footer />

      </CartProvider>

    </BrowserRouter>

  );
}

export default App;
