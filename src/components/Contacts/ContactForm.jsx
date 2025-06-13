// src/components/Contacts/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    alert('Спасибо! Сообщение отправлено.');
  };

  return (
    <section className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Свяжитесь с нами</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-300 dark:border-gray-600 rounded p-3 bg-white dark:bg-gray-700 text-black dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш e-mail"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 dark:border-gray-600 rounded p-3 bg-white dark:bg-gray-700 text-black dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={form.message}
          onChange={handleChange}
          className="border border-gray-300 dark:border-gray-600 rounded p-3 bg-white dark:bg-gray-700 text-black dark:text-white h-32 resize-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
