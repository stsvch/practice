// src/components/Knowledge/NewsDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getNewsById,
  updateNews,
  uploadNewsPhoto,
  removeNewsPhoto,
  deleteNews
} from '../../api/newApi';
import { useAuth } from '../../context/AuthContext';

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user?.roles?.includes('Admin');

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ title: '', description: '' });
  const [photoFile, setPhotoFile] = useState(null);
  const [error, setError] = useState('');

  // Загрузка данных новости
  useEffect(() => {
    async function fetchDetail() {
      try {
        const data = await getNewsById(id);
        setNews(data);
        setForm({ title: data.title, description: data.description });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  // Обработчик изменения полей и выбора файла
  const handleInput = e => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setPhotoFile(files[0]);
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  // Сохранение изменений заголовка/описания
  const handleUpdate = async () => {
    try {
      await updateNews(id, { title: form.title, description: form.description });
      const updated = await getNewsById(id);
      setNews(updated);
      setEditMode(false);
    } catch {
      setError('Ошибка при обновлении');
    }
  };

  // Загрузка нового фото
  const handleUploadPhoto = async () => {
    if (!photoFile) return;
    try {
      const { path } = await uploadNewsPhoto(id, photoFile);
      setNews(prev => ({
        ...prev,
        photoPaths: [...(prev.photoPaths || []), path]
      }));
      setPhotoFile(null);
    } catch {
      setError('Ошибка при загрузке фото');
    }
  };

  // Удаление фото по пути
  const handleRemovePhoto = async (path) => {
    try {
      await removeNewsPhoto(id, path);
      setNews(prev => ({
        ...prev,
        photoPaths: prev.photoPaths.filter(p => p !== path)
      }));
    } catch {
      setError('Ошибка при удалении фото');
    }
  };

  // Удаление самой новости
  const handleDeleteNews = async () => {
    if (!window.confirm('Удалить эту новость окончательно?')) return;
    try {
      await deleteNews(id);
      navigate('/knowledge', { replace: true });
    } catch {
      setError('Ошибка при удалении новости');
    }
  };

  if (loading) return <p>Загрузка...</p>;
  if (!news)  return <p>Новость не найдена.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-24 p-6 space-y-6">
      {error && <div className="p-2 bg-red-100 text-red-700 rounded">{error}</div>}

      {/* Заголовок и описание */}
      {editMode ? (
        <div className="space-y-4">
          <input
            name="title"
            value={form.title}
            onChange={handleInput}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleInput}
            className="w-full border p-2 rounded"
            rows={4}
          />
          <div>
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Сохранить
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="ml-2 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold">{news.title}</h1>
          <p className="text-gray-700">{news.description}</p>
        </>
      )}

      {/* Фотографии */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Фотографии</h2>

        {news.photoPaths?.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {news.photoPaths.map((path, idx) => (
              <div key={idx} className="relative">
                <img
                  src={`${process.env.REACT_APP_API_URL.replace('/api','')}${path}`}
                  alt={`Фото ${idx + 1}`}
                  className="h-32 w-32 object-cover rounded"
                />
                {isAdmin && (
                  <button
                    onClick={() => handleRemovePhoto(path)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">Нет фото.</p>
        )}

        {isAdmin && (
          <div className="mt-4 flex items-center space-x-2">
            <input type="file" onChange={handleInput} />
            <button
              onClick={handleUploadPhoto}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Загрузить фото
            </button>
          </div>
        )}
      </div>

      {/* Админ-кнопки */}
      {isAdmin && !editMode && (
        <div className="space-x-2">
          <button
            onClick={() => setEditMode(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Редактировать
          </button>
          <button
            onClick={handleDeleteNews}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Удалить новость
          </button>
        </div>
      )}
    </div>
  );
}
