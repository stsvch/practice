// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Layout & Guards
import Layout from './components/Layout/Layout';
import RequireAdmin from './components/RequireAdmin';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CasesGallery from './pages/CasesGallery';
import KnowledgeEvents from './pages/KnowledgeEvents';
// Импортируем ваш компонент детализации новостей
import NewsDetail from './components/Knowledge/NewsDetail';
import ServiceSupport from './pages/ServiceSupport';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Forbidden from './pages/Forbidden';
import NotFound from './pages/NotFound';
import CaseDetail from './pages/CaseDetail';

// Admin components
import NewProduct from './components/Products/NewProduct';
import NewCase from './components/Cases/NewCase';
import NewNews from './components/Knowledge/NewNews';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Общий макет */}
          <Route path="/" element={<Layout />}>
            {/* публичные страницы */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="cases" element={<CasesGallery />} />
            <Route path="cases/:id" element={<CaseDetail />} />
            <Route path="knowledge" element={<KnowledgeEvents />} />

            {/* Детали новости */}
            <Route path="news/:id" element={<NewsDetail />} />

            <Route path="support" element={<ServiceSupport />} />
            <Route path="contact" element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="403" element={<Forbidden />} />

            {/* Admin-only */}
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
            <Route
              path="news/new"
              element={
                <RequireAdmin>
                  <NewNews />
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
