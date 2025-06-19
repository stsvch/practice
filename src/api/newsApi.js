import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/news';

export const getNews = async (page = 1, pageSize = 10) => {
  const res = await axios.get(`${BASE_URL}?pageNumber=${page}&pageSize=${pageSize}`);
  return res.data.items || res.data;
};

export const getNewsById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const createNews = async (newsData) => {
  const res = await axios.post(BASE_URL, newsData);
  return res.data;
};

export const uploadNewsPhoto = async (id, file) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post(`${BASE_URL}/${id}/photos`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const updateNews = async (id, newsData) => {
  const res = await axios.put(`${BASE_URL}/${id}`, newsData);
  return res.data;
};

export const deleteNews = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
