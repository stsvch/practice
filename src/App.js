// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Layout       from './components/Layout/Layout';
import RequireAdmin from './components/RequireAdmin';

import Home          from './pages/Home';
import About         from './pages/About';
import Products      from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CasesGallery  from './pages/CasesGallery';
import Knowledge     from './pages/KnowledgeEvents';
import NewsDetail    from './pages/NewsDetail';
import Support       from './pages/ServiceSupport';
import Contacts      from './pages/Contacts';
import Login         from './pages/Login';
import Forbidden     from './pages/Forbidden';
import NotFound      from './pages/NotFound';

import NewProduct    from './components/Products/NewProduct';
import NewCase       from './components/Cases/NewCase';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Все эти страницы будут рендериться внутри Layout */}
          <Route path="/" element={<Layout />}>
            
            {/* публичные */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="cases" element={<CasesGallery />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="news/:slug" element={<NewsDetail />} />
            <Route path="support" element={<Support />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="403" element={<Forbidden />} />

            {/* админские (только для роли Admin) */}
            <Route
              path="products/new"
              element={
                <RequireAdmin>
                  <NewProduct />
                </RequireAdmin>
              }
            />
            <Route
              path="cases/new"
              element={
                <RequireAdmin>
                  <NewCase />
                </RequireAdmin>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
