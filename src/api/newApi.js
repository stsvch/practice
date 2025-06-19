// src/api/newsApi.js
import api from './axiosInstance';

const ENDPOINT = '/news';

// Получить все новости (с пагинацией)
export const getNews = async (page = 1, pageSize = 10) => {
  const res = await api.get(ENDPOINT, {
    params: { pageNumber: page, pageSize },
  });
  return res.data; // контроллер возвращает PagedList<NewsDto>
};

// Получить новость по ID
export const getNewsById = async (id) => {
  const res = await api.get(`${ENDPOINT}/${id}`);
  return res.data;
};

// Создать новую новость
export const createNews = async (newsData) => {
  // newsData — объект, соответствующий CreateNewsCommand (например, { title, content, ... })
  const res = await api.post(ENDPOINT, newsData);
  return res.data;
};

// Обновить новость
export const updateNews = async (id, newsData) => {
  // UpdateNewsCommand требует поле id
  const res = await api.put(`${ENDPOINT}/${id}`, { id, ...newsData });
  return res.data;
};

// Удалить новость
export const deleteNews = async (id) => {
  const res = await api.delete(`${ENDPOINT}/${id}`);
  return res.data;
};

// Загрузить фото к новости
export const uploadNewsPhoto = async (newsId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await api.post(
    `${ENDPOINT}/${newsId}/photos`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return res.data; // { photoId, path }
};

// Удалить фото из новости
export const removeNewsPhoto = async (newsId, photoId) => {
  const res = await api.delete(`${ENDPOINT}/${newsId}/photos/${photoId}`);
  return res.data;
};
