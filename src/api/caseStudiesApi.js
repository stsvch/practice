import api from './axiosInstance';

const ENDPOINT = '/casestudies';

export const getCaseStudies = async (page = 1, pageSize = 10) => {
  const res = await api.get(ENDPOINT, {
    params: { pageNumber: page, pageSize },
  });
  return res.data; // { items: CaseStudyDto[], totalCount }
};

export const getCaseStudyById = async (id) => {
  const res = await api.get(`${ENDPOINT}/${id}`);
  return res.data; // CaseStudyDto
};

// 1️⃣ Создаем кейс без файла
export const createCaseStudy = async ({ title, description }) => {
  const payload = {
    Title:       title,
    Description: description,
    PhotoPaths:  []              // обязательно, иначе 400
  };
  const res = await api.post(ENDPOINT, payload);
  // Новый ID прилетит в заголовке Location
  const loc = res.headers['location'] || res.headers['Location'];
  if (!loc) throw new Error('Не удалось получить ID нового кейса');
  return loc.split('/').pop();
};

// 2️⃣ Загружаем фото
export const uploadCaseStudyPhoto = async (caseId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await api.post(
    `${ENDPOINT}/${caseId}/photos`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' }}
  );
  return res.data; // { photoId, path }
};

// Удалить, обновить — по старой схеме
export const updateCaseStudy = async (id, { title, description }) => {
  const payload = { Id: id, Title: title, Description: description };
  await api.put(`${ENDPOINT}/${id}`, payload);
};

export const deleteCaseStudy = async (id) => {
  await api.delete(`${ENDPOINT}/${id}`);
};


// Удалить фото из кейса
export const removeCaseStudyPhoto = async (caseId, photoId) => {
  const res = await api.delete(`${ENDPOINT}/${caseId}/photos/${photoId}`);
  return res.data;
};
