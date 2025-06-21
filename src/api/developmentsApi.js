// src/api/developmentsApi.js
import api from './axiosInstance';

const ENDPOINT = '/developments';

// Получение списка разработок
export const fetchDevelopments = async (page = 1, pageSize = 10) => {
  const res = await api.get(ENDPOINT, {
    params: { pageNumber: page, pageSize },
  });
  return res.data; // { items: DevelopmentDto[], totalCount: number }
};


// Забираем DTO с photos: PhotoDto[]
export const fetchDevelopmentById = async (id) => {
  const res = await api.get(`${ENDPOINT}/${id}`);
  return res.data; // { id, name, description, photos: [{ id, path }, …], … }
};


// Удаляем по photoId
export const removeDevelopmentPhoto = async (devId, photoId) => {
  await api.delete(`${ENDPOINT}/${devId}/photos/${photoId}`);
};

export const createDevelopment = async ({ name, description }) => {
  const payload = {
    Title:       name,          // соответствует positional-аргументу Title
    Description: description,   // соответствует Description
    PhotoPaths:  []             // обязательно передать, даже если пусто
  };

  const res = await api.post(ENDPOINT, payload);

  // .NET вернёт заголовок Location: /api/developments/{newId}
  const loc = res.headers['location'] || res.headers['Location'];
  if (!loc) throw new Error('Не удалось получить ID новой разработки');

  return loc.split('/').pop();
};

// Загрузка фото к разработке
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

export const updateDevelopment = async (id, { title, description }) => {
  const payload = {
    Id:          id,
    Title:       title,
    Description: description
  };
  await api.put(`${ENDPOINT}/${id}`, payload);
};

// Удаление
export const deleteDevelopment = async (id) => {
  const res = await api.delete(`${ENDPOINT}/${id}`);
  return res.data;
};

export const removeDevelopmentPhotoByPath = async (devId, path) => {
  // DELETE /developments/{devId}/photos?path=/uploads/xxx.png
  await api.delete(`${ENDPOINT}/${devId}/photos`, {
    params: { path }
  });
};