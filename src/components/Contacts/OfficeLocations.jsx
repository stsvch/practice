import React from 'react';

const OfficeLocations = () => (
  <section className="bg-white dark:bg-gray-800 text-black dark:text-white p-8 rounded-lg shadow-md w-full mx-auto">
    <h2 className="text-2xl font-semibold mb-6 text-center">Наши офисы</h2>

    <div className="space-y-4">
      <div>
        <h3 className="font-medium">Главный офис</h3>
        <p>Адрес: г. Минск, проспект Победителей 105</p>
      </div>
    </div>

    <div className="mt-6">
      <h3 className="font-medium mb-2">Карта</h3>
      <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.123456789!2d27.55894781579106!3d53.92750198001007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf6d290b0c11%3A0x1a2b3c4d5e6f789!2z0YPQuy4g0JvQvtC90L7Qv9C-INCf0YDQuNC70LXQvdC40Lkg0LzQtdGA0L3QsCDQktC-0YDQtdGB0LrQsNC90LjRjw!5e0!3m2!1sru!2sby!4v1686585791234!5m2!1sru!2sby"
          title="Office location"
          className="w-full h-full border-0"
          style={{ pointerEvents: 'auto' }} // 👈 ключевой стиль
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default OfficeLocations;
