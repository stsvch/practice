import React from 'react';
import {
  FaPhone,
  FaFax,
  FaEnvelope,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ContactDetails = () => (
  <section className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-lg shadow-md w-full mx-auto">
    <h2 className="text-2xl font-semibold mb-10 text-center">Контактная информация</h2>

    <div className="grid md:grid-cols-3 gap-6">
      {/* Блок 1: Компания */}
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow text-center flex flex-col items-center justify-center space-y-4">
        <h3 className="text-lg font-semibold">Компания</h3>
        <p className="flex items-center gap-2 justify-center">
          <FaMapMarkerAlt className="text-blue-600" />
          Минск, пр. Победителей 105
        </p>
        <p className="flex items-center gap-2 justify-center">
          <FaPhone className="text-blue-600" />
          +375 (17) 123-45-67
        </p>
        <p className="flex items-center gap-2 justify-center">
          <FaFax className="text-blue-600" />
          +375 (17) 765-43-21
        </p>
        <p className="flex items-center gap-2 justify-center">
          <FaEnvelope className="text-blue-600" />
          info@company.by
        </p>
      </div>

      {/* Блок 2: Отделы */}
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow text-center flex flex-col items-center justify-center space-y-4">
        <h3 className="text-lg font-semibold">Отделы</h3>
        <p><strong>Снабжение:</strong><br /> +375 (29) 111-22-33</p>
        <p><strong>Продажи:</strong><br /> +375 (29) 222-33-44</p>
        <p><strong>Доставка:</strong><br /> +375 (29) 333-44-55</p>
      </div>

      {/* Блок 3: Соцсети */}
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow text-center flex flex-col items-center justify-center space-y-4">
        <h3 className="text-lg font-semibold">Мы в соцсетях</h3>
        <a href="https://t.me/company" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500">
          <FaTelegram /> Telegram
        </a>
        <a href="https://wa.me/375291112233" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-500">
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="https://instagram.com/company" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-500">
          <FaInstagram /> Instagram
        </a>
      </div>
    </div>
  </section>
);

export default ContactDetails;
