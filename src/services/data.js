import mockProducts from '../mock/products.json';
import mockNews from '../mock/news.json';

const USE_MOCK = process.env.REACT_APP_USE_MOCK === 'true';

export const dataService = {
  getProducts: () =>
    USE_MOCK
      ? Promise.resolve({ data: mockProducts })
      : import('./api').then(({ productsAPI }) => productsAPI.fetchAll()),

  getProductById: id =>
    USE_MOCK
      ? Promise.resolve({ data: mockProducts.find(p => p.id === id) })
      : import('./api').then(({ productsAPI }) => productsAPI.fetchById(id)),

  getNews: () =>
    USE_MOCK
      ? Promise.resolve({ data: mockNews })
      : import('./api').then(({ newsAPI }) => newsAPI.fetchLatest()),
};
