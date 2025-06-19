// src/api/developmentsApi.js
import api from './axiosInstance';

const ENDPOINT = '/developments';

// Получение списка разработок
export const fetchDevelopments = async (page = 1, pageSize = 10) => {
  const res = await api.get(ENDPOINT, {
    params: { pageNumber: page, pageSize },
  });
  return res.data; // PagedList<DevelopmentDto>
};

// Получение одной разработки по ID
export const fetchDevelopmentById = async (id) => {
  const res = await api.get(`${ENDPOINT}/${id}`);
  return res.data;
};

// Создание новой разработки (без файла)
export const createDevelopment = async ({ name, description }) => {
  // CreateDevelopmentCommand принимает свойства Name и Description
  const res = await api.post(ENDPOINT, { name, description });
  return res.data;
};

// Обновление разработки
export const updateDevelopment = async (id, updateData) => {
  // UpdateDevelopmentCommand требует Id
  const res = await api.put(`${ENDPOINT}/${id}`, { id, ...updateData });
  return res.data;
};

// Удаление разработки
export const deleteDevelopment = async (id) => {
  const res = await api.delete(`${ENDPOINT}/${id}`);
  return res.data;
};

// Загрузить фото к разработке
export const uploadDevelopmentPhoto = async (devId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await api.post(
    `${ENDPOINT}/${devId}/photos`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return res.data; // { photoId, path }
};
