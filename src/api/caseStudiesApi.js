// src/api/caseStudiesApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/casestudies'; // Замените на нужный адрес

// Получить все кейсы (с пагинацией)
export const getCaseStudies = async (page = 1, pageSize = 10) => {
  const res = await axios.get(`${BASE_URL}?pageNumber=${page}&pageSize=${pageSize}`);
  return res.data.items || res.data;
};

// Получить кейс по ID
export const getCaseStudyById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

// Создать новый кейс
export const createCaseStudy = async (caseData) => {
  const res = await axios.post(BASE_URL, caseData);
  return res.data;
};

// Обновить кейс
export const updateCaseStudy = async (id, caseData) => {
  const res = await axios.put(`${BASE_URL}/${id}`, { ...caseData, id });
  return res.data;
};

// Удалить кейс
export const deleteCaseStudy = async (id) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
