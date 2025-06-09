import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="hero">
        <h1>Мы — первые на постсоветском рынке</h1>
        <p>Тренажеры для изолированной проработки мышц</p>
        <button>Каталог продукции</button>
        <button>О компании</button>
        <button>Контакты</button>
      </section>

      <section id="about">
        <h2>О компании</h2>
        <h3>История и миссия</h3>
        <p>Год основания, этапы развития…</p>
        {/* …остальной контент */}
      </section>

      <section id="products">
        <h2>Продукция</h2>
        {/* здесь позже вставите <Products /> или статический список */}
      </section>

      {/* Добавьте остальные секции: Новости, Поддержка, Партнёры и т.д. */}

      <footer>
        <p>© 2025 Fitness Pioneer</p>
      </footer>
    </div>
  );
}

export default App;
