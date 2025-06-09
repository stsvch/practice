import products from '../mock/products.json';
export const db = {
  products: [...products],
};
export const inMemoryDB = {
  list: (entity) => Promise.resolve({ data: db[entity] }),
  get: (entity, id) =>
    Promise.resolve({ data: db[entity].find(item => item.id === id) }),
  create: (entity, item) => {
    db[entity].push(item);
    return Promise.resolve({ data: item });
  },
  update: (entity, id, updates) => { /* ... */ },
  remove: (entity, id) => { /* ... */ },
};
