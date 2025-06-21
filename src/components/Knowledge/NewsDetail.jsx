// src/components/Knowledge/NewsDetail.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import {
  getNewsById,
  updateNews,
  deleteNews,
  uploadNewsPhoto,
  removeNewsPhotoByPath
} from '../../api/newApi';
import { useAuth } from '../../context/AuthContext';

export default function NewsDetail() {
  const { id }       = useParams();
  const navigate     = useNavigate();
  const { user }     = useAuth();
  const isAdmin      = user?.roles?.includes('Admin');

  const [news, setNews]         = useState(null);
  const [loading, setLoading]   = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm]         = useState({ title: '', description: '' });
  const fileInputRef            = useRef();
  const [error, setError]       = useState('');

  // Base URL without "/api"
  const API_BASE = process.env.REACT_APP_API_URL.replace(/\/api$/, '');

  // Load news on mount
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const data = await getNewsById(id);
        if (!cancelled) {
          setNews(data);
          setForm({ title: data.title, description: data.description });
        }
      } catch (err) {
        console.error('Error loading news:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  if (loading) return <p className="p-6">Загрузка…</p>;
  if (!news)   return <Navigate to="/404" replace />;

  // Save title/description
  const handleSave = async () => {
    setError('');
    try {
      await updateNews(id, { title: form.title, description: form.description });
      const updated = await getNewsById(id);
      setNews(updated);
      setEditMode(false);
    } catch (err) {
      console.error('Error updating news:', err);
      setError('Не удалось сохранить изменения');
    }
  };

  // Delete news
  const handleDelete = async () => {
    if (!window.confirm('Удалить эту новость окончательно?')) return;
    try {
      await deleteNews(id);
      navigate('/knowledge', { replace: true });
    } catch (err) {
      console.error('Error deleting news:', err);
      setError('Не удалось удалить новость');
    }
  };

  // Upload new photo
  const handleUpload = async (e) => {
    setError('');
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await uploadNewsPhoto(id, file);
      const updated = await getNewsById(id);
      setNews(updated);
      fileInputRef.current.value = null;
    } catch (err) {
      console.error('Error uploading photo:', err);
      setError('Не удалось загрузить фото');
    }
  };

  // Remove photo by path
  const handleRemovePhoto = async (path) => {
    if (!window.confirm('Удалить это фото?')) return;
    setError('');
    try {
      await removeNewsPhotoByPath(id, path);
      setNews(n => ({
        ...n,
        photoPaths: n.photoPaths.filter(p => p !== path)
      }));
    } catch (err) {
      console.error('Error removing photo:', err);
      setError('Не удалось удалить фото');
    }
  };

  const photoPaths = Array.isArray(news.photoPaths) ? news.photoPaths : [];

  return (
    <div className="max-w-2xl mx-auto mt-24 p-6 space-y-6">
      {error && (
        <div className="p-2 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {/* Title & Description */}
      <div>
        {editMode ? (
          <div className="space-y-4">
            <input
              name="title"
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              className="w-full border p-2 rounded"
            />
            <textarea
              name="description"
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              className="w-full border p-2 rounded"
              rows={4}
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
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold">{news.title}</h1>
            <p className="text-gray-700">{news.description}</p>
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

      {/* Photos */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Фотографии</h2>
        {photoPaths.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {photoPaths.map((path, idx) => {
              const normalized = path.startsWith('/') ? path : `/${path}`;
              const src = normalized.startsWith('http')
                ? normalized
                : `${API_BASE}${normalized}`;
              return (
                <div key={idx} className="relative">
                  <img
                    src={src}
                    alt={`Фото ${idx + 1}`}
                    className="h-32 w-32 object-cover rounded"
                  />
                  {isAdmin && (
                    <button
                      onClick={() => handleRemovePhoto(path)}
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                    >
                      ×
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500">Нет фото.</p>
        )}

        {isAdmin && (
          <div className="mt-4 flex items-center space-x-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleUpload}
            />
            <button
              onClick={handleUpload}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Загрузить фото
            </button>
          </div>
        )}
      </div>

      {/* Admin actions */}
      {isAdmin && !editMode && (
        <div className="space-x-2">
          <button
            onClick={() => setEditMode(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Редактировать
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Удалить запись
          </button>
        </div>
      )}
    </div>
  );
}
