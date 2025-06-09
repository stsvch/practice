// src/services/data.js

// 1. Импортируем JSON-файлы с фиктивными данными
import mockProducts from '../mock/products.json';
import mockNews from '../mock/news.json';

// 2. Утилита, которая решает, откуда брать данные
const USE_MOCK = process.env.REACT_APP_USE_MOCK === 'true';

export const dataService = {
  getProducts: () => {
    if (USE_MOCK) {
      return new Promise(resolve =>
        setTimeout(() => resolve({ data: mockProducts }), 500)
      );
    }
    // Когда придёт настоящий API:
    return import('./api').then(({ productsAPI }) => productsAPI.fetchAll());
  },

  getProductById: id => {
    if (USE_MOCK) {
      const item = mockProducts.find(p => p.id === id);
      return Promise.resolve({ data: item });
    }
    return import('./api').then(({ productsAPI }) =>
      productsAPI.fetchById(id)
    );
  },

  getNews: () => {
    if (USE_MOCK) {
      return Promise.resolve({ data: mockNews });
    }
    return import('./api').then(({ newsAPI }) => newsAPI.fetchLatest());
  },

  // …и т. д.
};
