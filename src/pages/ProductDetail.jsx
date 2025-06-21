// src/pages/ProductDetail.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import {
  fetchDevelopmentById,
  updateDevelopment,
  deleteDevelopment,
  uploadDevelopmentPhoto,
  removeDevelopmentPhotoByPath
} from '../api/developmentsApi';
import { useAuth } from '../context/AuthContext';

export default function ProductDetail() {
  const { id }      = useParams();
  const navigate    = useNavigate();
  const { user }    = useAuth();
  const isAdmin     = user?.roles?.includes('Admin');

  const [dev, setDev]           = useState(null);
  const [loading, setLoading]   = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm]         = useState({ title: '', description: '' });
  const fileRef                = useRef();

  // базовый URL без «/api»
  const API_BASE = process.env.REACT_APP_API_URL.replace(/\/api$/, '');

  // загрузка данных
  useEffect(() => {
    let canceled = false;
    (async () => {
      setLoading(true);
      try {
        const data = await fetchDevelopmentById(id);
        if (!canceled) {
          setDev(data);
          setForm({ title: data.title, description: data.description });
        }
      } finally {
        if (!canceled) setLoading(false);
      }
    })();
    return () => { canceled = true; };
  }, [id]);

  if (loading) return <p className="p-6">Загрузка…</p>;
  if (!dev)    return <Navigate to="/404" replace />;

  // сохранить изменения
  const handleSave = async () => {
    try {
      await updateDevelopment(id, {
        title:       form.title,
        description: form.description
      });
      setDev(await fetchDevelopmentById(id));
      setEditMode(false);
    } catch {
      alert('Не удалось сохранить изменения');
    }
  };

  // удалить всю запись
  const handleDeleteDev = async () => {
    if (!window.confirm('Удалить всю запись?')) return;
    await deleteDevelopment(id);
    navigate('/products', { replace: true });
  };

  // загрузить новое фото
  const handleUpload = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    await uploadDevelopmentPhoto(id, file);
    setDev(await fetchDevelopmentById(id));
    fileRef.current.value = null;
  };

  // удалить отдельное фото по пути
  const handleRemovePhoto = async path => {
    if (!window.confirm('Удалить это фото?')) return;
    await removeDevelopmentPhotoByPath(id, path);
    setDev(d => ({
      ...d,
      photoPaths: d.photoPaths.filter(p => p !== path)
    }));
  };

  const photoPaths = Array.isArray(dev.photoPaths) ? dev.photoPaths : [];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Назад */}
      <div>
        <Link to="/products" className="text-blue-600 hover:underline">
          ← К списку
        </Link>
      </div>

      {/* Заголовок и описание */}
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
            <h1 className="text-3xl font-bold">{dev.title}</h1>
            <p className="mt-2 text-gray-700">{dev.description}</p>
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

      {/* Галерея фотографий и управление */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Фотографии</h2>
          {photoPaths.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photoPaths.map((path, idx) => {
                const url = path.startsWith('http')
                  ? path
                  : `${API_BASE}${path.startsWith('/') ? path : `/${path}`}`;
                return (
                  <div key={idx} className="relative">
                    <img
                      src={url}
                      alt={`${dev.title} ${idx + 1}`}
                      className="w-full h-40 object-cover rounded"
                    />
                    {isAdmin && (
                      <button
                        onClick={() => handleRemovePhoto(path)}
                        className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                      >
                        ×
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center">
              Нет фотографий
            </div>
          )}
        </div>

        {isAdmin && (
          <div className="space-y-4">
            {/* Загрузка нового фото */}
            <div>
              <label className="block mb-1 font-medium">Добавить фото</label>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="border p-1 rounded"
              />
            </div>

            {/* Кнопка удаления записи внизу */}
            <div className="text-center">
              <button
                onClick={handleDeleteDev}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
              >
                Удалить запись
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
