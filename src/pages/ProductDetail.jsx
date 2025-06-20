// src/pages/ProductDetail.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import {
  fetchDevelopmentById,
  updateDevelopment,
  deleteDevelopment,
  uploadDevelopmentPhoto,
  removeDevelopmentPhoto
} from '../api/developmentsApi';
import { useAuth } from '../context/AuthContext';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user?.roles?.includes('Admin');

  const [dev, setDev] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ title: '', description: '' });
  const fileRef = useRef();

  // Загрузка детали разработки
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchDevelopmentById(id)
      .then(data => {
        if (!cancelled) {
          setDev(data);
          setForm({ title: data.title, description: data.description });
        }
      })
      .catch(() => {
        if (!cancelled) setDev(null);
      })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  if (loading) return <p className="p-6">Загрузка...</p>;
  if (dev === null) return <Navigate to="/404" replace />;

  // Сохранить изменения
  const onSave = async () => {
    try {
      await updateDevelopment(id, { title: form.title, description: form.description });
      const updated = await fetchDevelopmentById(id);
      setDev(updated);
      setEditMode(false);
    } catch (err) {
      console.error(err);
      alert('Не удалось сохранить изменения');
    }
  };

  // Удалить всю разработку
  const onDelete = async () => {
    if (!window.confirm('Удалить эту разработку?')) return;
    try {
      await deleteDevelopment(id);
      navigate('/products', { replace: true });
    } catch (err) {
      console.error(err);
      alert('Не удалось удалить разработку');
    }
  };

  // Загрузить новую фотографию
  const onUpload = async e => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await uploadDevelopmentPhoto(id, file);
      const updated = await fetchDevelopmentById(id);
      setDev(updated);
      fileRef.current.value = null;
    } catch (err) {
      console.error(err);
      alert('Не удалось загрузить фото');
    }
  };

  // Удалить фотографию по пути
  const onRemovePhoto = async path => {
    if (!window.confirm('Удалить эту фотографию?')) return;
    try {
      await removeDevelopmentPhoto(id, path);
      const updated = await fetchDevelopmentById(id);
      setDev(updated);
    } catch (err) {
      console.error(err);
      alert('Не удалось удалить фото');
    }
  };

  // Базовый URL без "/api"
  const base = process.env.REACT_APP_API_URL.replace(/\/api$/, '');

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Навигация и удаление */}
      <div className="flex justify-between items-center">
        <Link to="/products" className="text-blue-600 hover:underline">
          &larr; К списку
        </Link>
        {isAdmin && (
          <button
            onClick={onDelete}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Удалить
          </button>
        )}
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
                onClick={onSave}
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

      {/* Галерея фотографий */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Фотографии</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {dev.photoPaths?.map((path, idx) => (
            <div key={idx} className="relative">
              <img
                src={`${base}${path}`}
                alt={`${dev.title} ${idx + 1}`}
                className="w-full h-40 object-cover rounded"
              />
              {isAdmin && (
                <button
                  onClick={() => onRemovePhoto(path)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
        {isAdmin && (
          <div className="mt-4">
            <label className="block mb-1">Добавить фото</label>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={onUpload}
              className="border p-1 rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
}
