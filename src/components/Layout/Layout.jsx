// src/components/Layout/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
