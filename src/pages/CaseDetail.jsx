// src/pages/CaseDetail.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
  uploadCaseStudyPhoto,
  removeCaseStudyPhoto
} from '../api/caseStudiesApi';
import { useAuth } from '../context/AuthContext';

export default function CaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user?.roles?.includes('Admin');

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ title: '', description: '' });
  const fileInputRef = useRef();

  // Загрузка одного кейса
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getCaseStudyById(id)
      .then(data => {
        if (!cancelled) {
          setItem(data);
          setForm({ title: data.title, description: data.description });
        }
      })
      .catch(err => console.error('Ошибка загрузки кейса:', err))
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  // Сохранить правки
  const handleSave = async () => {
    try {
      await updateCaseStudy(id, form);
      const updated = await getCaseStudyById(id);
      setItem(updated);
      setEditMode(false);
    } catch (err) {
      console.error('Ошибка при сохранении:', err);
      alert('Не удалось сохранить данные');
    }
  };

  // Удалить кейс
  const handleDelete = async () => {
    if (!window.confirm('Удалить этот кейс навсегда?')) return;
    try {
      await deleteCaseStudy(id);
      navigate('/cases', { replace: true });
    } catch (err) {
      console.error('Ошибка при удалении:', err);
      alert('Не удалось удалить кейс');
    }
  };

  // Загрузить новую фотографию
  const handleUploadPhoto = async e => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      await uploadCaseStudyPhoto(id, file);
      const updated = await getCaseStudyById(id);
      setItem(updated);
      fileInputRef.current.value = null;
    } catch (err) {
      console.error('Ошибка при загрузке фото:', err);
      alert('Не удалось загрузить фото');
    }
  };

  // Удалить конкретное фото
  const handleRemovePhoto = async photoId => {
    if (!window.confirm('Удалить эту фотографию?')) return;
    try {
      await removeCaseStudyPhoto(id, photoId);
      setItem(prev => ({
        ...prev,
        photoPaths: prev.photoPaths.filter((_, i) => prev.photos[i].id !== photoId)
      }));
      // лучше заново подгрузить весь объект:
      // const updated = await getCaseStudyById(id);
      // setItem(updated);
    } catch (err) {
      console.error('Ошибка при удалении фото:', err);
      alert('Не удалось удалить фото');
    }
  };

  if (loading) return <p className="p-6">Загрузка...</p>;
  if (!item)    return <p className="p-6">Кейс не найден</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">

      {/* Навигация */}
      <div className="flex justify-between items-center">
        <Link to="/cases" className="text-blue-600 hover:underline">&larr; Назад к списку</Link>
        {isAdmin && (
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Удалить кейс
          </button>
        )}
      </div>

      {/* Заголовок и описание (просмотр/редактирование) */}
      <div>
        {editMode ? (
          <>
            <input
              className="w-full border p-2 rounded mb-2"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            />
            <textarea
              className="w-full border p-2 rounded mb-2"
              rows={4}
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
            />
            <div className="space-x-2">
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Сохранить
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Отменить
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="mt-2 text-gray-700">{item.description}</p>
            {isAdmin && (
              <button
                onClick={() => setEditMode(true)}
                className="mt-4 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Редактировать
              </button>
            )}
          </>
        )}
      </div>

      {/* Фотографии */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Фотографии</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {item.photoPaths?.map((path, idx) => {
            // если у вас в item ещё есть .photos[i].id, можно хранить их параллельно
            const photoId = item.photos?.[idx]?.id;
            const src = `${process.env.REACT_APP_API_URL.replace('/api','')}${path}`;
            return (
              <div key={idx} className="relative">
                <img
                  src={src}
                  alt={`case-${idx}`}
                  className="w-full h-40 object-cover rounded"
                />
                {isAdmin && photoId && (
                  <button
                    onClick={() => handleRemovePhoto(photoId)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                  >
                    ×
                  </button>
                )}
              </div>
            );
          })}
        </div>
        {isAdmin && (
          <div className="mt-4">
            <label className="block mb-1">Загрузить новую фотографию</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleUploadPhoto}
              className="border p-1 rounded"
            />
          </div>
        )}
      </div>

    </div>
  );
}
