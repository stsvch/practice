import axios from 'axios';

const API_URL = 'http://localhost:5000/api/developments'; // замени на свой адрес при деплое

// ✅ Получение списка разработок
export const fetchDevelopments = async (page = 1, pageSize = 10) => {
  const response = await axios.get(API_URL, {
    params: { pageNumber: page, pageSize },
  });
  return response.data;
};

// ✅ Получение одного элемента по ID
export const fetchDevelopmentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// ✅ Создание новой разработки с файлом
export const createDevelopment = async ({ name, description, file }) => {
  const formData = new FormData();
  formData.append('Name', name);
  formData.append('Description', description);
  formData.append('File', file);

  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

// ✅ Удаление по ID
export const deleteDevelopment = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// ✅ Обновление (если нужно)
export const updateDevelopment = async (id, updateData) => {
  const response = await axios.put(`${API_URL}/${id}`, updateData);
  return response.data;
};
