import api from './axiosInstance';

const ENDPOINT = '/news';

// 1) Получить все новости (с пагинацией)
export const getNews = async (page = 1, pageSize = 10) => {
  const res = await api.get(ENDPOINT, {
    params: { pageNumber: page, pageSize },
  });
  // res.data === { items: NewsDto[], totalCount: number }
  return res.data;
};

// 2) Получить одну новость по ID
export const getNewsById = async (id) => {
  const res = await api.get(`${ENDPOINT}/${id}`);
  // res.data === NewsDto
  return res.data;
};

// 3) Создать новость (CreateNewsCommand)
//    У бэка CreateNewsCommand ожидает поля Title, Description и PhotoPaths: List<string>
export const createNews = async ({ title, description }) => {
  const payload = {
    Title:       title,        // соответствует параметру Title
    Description: description,  // соответствует Description
    PhotoPaths:  []            // обязательно, чтобы не было 400 Bad Request
  };

  const res = await api.post(ENDPOINT, payload);

  // Новый ID, вернётся либо в заголовке Location, либо в теле (если мы добавили { id = newId })
  // Попробуем сначала из заголовка:
  let newId = res.headers['location']?.split('/').pop();
  if (!newId && res.data?.id) {
    newId = res.data.id;
  }
  if (!newId) {
    throw new Error('Не удалось получить ID новой новости');
  }
  return newId;
};

// 4) Загрузить фото к уже созданной новости
export const uploadNewsPhoto = async (newsId, file) => {
  const formData = new FormData();
  formData.append('file', file);

  const res = await api.post(
    `${ENDPOINT}/${newsId}/photos`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  // res.data === { photoId: Guid, path: string }
  return res.data;
};

export const removeNewsPhoto = async (newsId, photoId) => {
  const res = await api.delete(`${ENDPOINT}/${newsId}/photos/${photoId}`);
  return res.data;
};

// 5b) Удалить фото по пути (новый)
export const removeNewsPhotoByPath = async (newsId, path) => {
  await api.delete(
    `${ENDPOINT}/${newsId}/photos`,
    { params: { path } }
  );
};

// 6) Обновить новость
export const updateNews = async (id, { title, description }) => {
  const payload = {
    Id:          id,
    Title:       title,
    Description: description
    // PhotoPaths при обновлении обычно не нужен или может быть пустым
  };
  const res = await api.put(`${ENDPOINT}/${id}`, payload);
  return res.data;
};

// 7) Удалить новость
export const deleteNews = async (id) => {
  const res = await api.delete(`${ENDPOINT}/${id}`);
  return res.data;
};
