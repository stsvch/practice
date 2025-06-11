// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home             from './pages/Home';
import About            from './pages/About';
import Products         from './pages/Products';
import ProductDetail    from './pages/ProductDetail';
import CasesGallery     from './pages/CasesGallery';        // new
import KnowledgeEvents  from './pages/KnowledgeEvents';    // new
import NewsDetail       from './pages/NewsDetail';         // optionally move under Knowledge
import ServiceSupport   from './pages/ServiceSupport';
import Contacts         from './pages/Contacts';
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
          <Route path="/cases"            element={<CasesGallery />} />
          <Route path="/knowledge"        element={<KnowledgeEvents />} />
          <Route path="/news/:slug"       element={<NewsDetail />} />
          <Route path="/support"          element={<ServiceSupport />} />
          <Route path="/contact"          element={<Contacts />} />
          <Route path="*"                 element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
