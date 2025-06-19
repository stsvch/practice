// src/api/caseStudiesApi.js
import api from './axiosInstance';

const ENDPOINT = '/casestudies';

// Получить все кейсы (с пагинацией)
export const getCaseStudies = async (page = 1, pageSize = 10) => {
  const res = await api.get(ENDPOINT, {
    params: { pageNumber: page, pageSize },
  });
  return res.data; // контроллер возвращает PagedList<CaseStudyDto>
};

// Получить кейс по ID
export const getCaseStudyById = async (id) => {
  const res = await api.get(`${ENDPOINT}/${id}`);
  return res.data;
};

// Создать новый кейс
export const createCaseStudy = async (caseData) => {
  // caseData — объект, соответствующий полям CreateCaseStudyCommand
  const res = await api.post(ENDPOINT, caseData);
  return res.data; // контроллер вернёт Created (без тела) — на всякий случай возвращаем data
};

// Обновить кейс
export const updateCaseStudy = async (id, caseData) => {
  // UpdateCaseStudyCommand требует поле Id, поэтому включаем его в тело
  const res = await api.put(`${ENDPOINT}/${id}`, { id, ...caseData });
  return res.data;
};

// Удалить кейс
export const deleteCaseStudy = async (id) => {
  const res = await api.delete(`${ENDPOINT}/${id}`);
  return res.data;
};

// Загрузить фото к кейсу
export const uploadCaseStudyPhoto = async (caseId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await api.post(
    `${ENDPOINT}/${caseId}/photos`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return res.data; // { photoId, path }
};

// Удалить фото из кейса
export const removeCaseStudyPhoto = async (caseId, photoId) => {
  const res = await api.delete(`${ENDPOINT}/${caseId}/photos/${photoId}`);
  return res.data;
};
