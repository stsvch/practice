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
    <section>
      <h2 className='text-2xl font-semibold mb-4'>Свяжитесь с нами</h2>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 max-w-lg'>
        <input type='text' name='name' placeholder='Ваше имя' value={form.name} onChange={handleChange} className='border rounded p-2' required />
        <input type='email' name='email' placeholder='Ваш e-mail' value={form.email} onChange={handleChange} className='border rounded p-2' required />
        <textarea name='message' placeholder='Сообщение' value={form.message} onChange={handleChange} className='border rounded p-2 h-32' required />
        <button type='submit' className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>Отправить</button>
      </form>
    </section>
  );
};

export default ContactForm;