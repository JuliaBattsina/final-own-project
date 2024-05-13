import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import { CartProvider } from './CartContext'; // Импорт CartProvider

function App() {
  return (
    <Router>
      <CartProvider> {/* Обертка вокруг всего приложения */}
        <div>
          <Navbar />
          <Routes>
          <Route exact path="/"element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider> {/* Закрываем CartProvider */}
    </Router>
  );
}

export default App;