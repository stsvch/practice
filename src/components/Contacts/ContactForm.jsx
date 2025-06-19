import React, { useState, useEffect } from 'react';
import Captcha from './Captcha';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
    captchaInput: '',
  });

  const [captcha, setCaptcha] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    const newCode = Array.from({ length: 5 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join('');
    setCaptcha(newCode);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      alert('Пожалуйста, заполните все поля');
      return;
    }

    if (!form.acceptTerms) {
      alert('Вы должны согласиться на обработку персональных данных');
      return;
    }

    if (form.captchaInput.toUpperCase() !== captcha.toUpperCase()) {
      alert('Неверная капча!');
      generateCaptcha();
      return;
    }

    // Можно здесь отправить данные формы
    console.log(form);
    alert('Спасибо! Сообщение отправлено.');

    // Очистка формы
    setForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      acceptTerms: false,
      captchaInput: '',
    });
    generateCaptcha();
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
          required
          className="border rounded p-3 bg-white dark:bg-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Ваш e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="border rounded p-3 bg-white dark:bg-gray-700"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
          required
          className="border rounded p-3 bg-white dark:bg-gray-700"
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={form.message}
          onChange={handleChange}
          required
          className="border rounded p-3 bg-white dark:bg-gray-700 h-32 resize-none"
        />
        <Captcha code={captcha} regenerate={generateCaptcha} />
        <input
          type="text"
          name="captchaInput"
          placeholder="Введите капчу"
          value={form.captchaInput}
          onChange={handleChange}
          required
          className="border rounded p-3 bg-white dark:bg-gray-700"
        />
        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={form.acceptTerms}
            onChange={handleChange}
            required
          />
          <span>Соглашаюсь на обработку персональных данных</span>
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
