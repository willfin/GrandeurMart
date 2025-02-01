import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Dashboard } from './pages/Dashboard';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
          <script async data-id="4816512115" id="chatling-embed-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></script>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;