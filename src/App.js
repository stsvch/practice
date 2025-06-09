// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home             from './pages/Home';
import About            from './pages/About';
import Products         from './pages/Products';
import ProductDetail    from './pages/ProductDetail';
import Cases            from './pages/Cases';        // new
import Knowledge        from './pages/Knowledge';    // new
import News             from './pages/News';         // optionally move under Knowledge
import Support          from './pages/Support';
import Contact          from './pages/Contact';
import NotFound         from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"                 element={<Home />} />
          <Route path="/about"            element={<About />} />
          <Route path="/products"         element={<Products />} />
          <Route path="/products/:id"     element={<ProductDetail />} />
          <Route path="/cases"            element={<Cases />} />
          <Route path="/knowledge"        element={<Knowledge />} />
          <Route path="/support"          element={<Support />} />
          <Route path="/contact"          element={<Contact />} />
          <Route path="*"                 element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
