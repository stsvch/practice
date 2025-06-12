// src/components/About/HistoryTimeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../../components/Layout/Container';
import { fadeInUp } from '../../animations/variants';

const history = [
  { year: '2020', title: 'Основание компании', desc: 'InSportTech основана группой инженеров и спортсменов с целью создания специализированных тренажёров.' },
  { year: '2021', title: 'Первый опытный образец', desc: 'Разработан и протестирован первый опытный образец тренажёра для тяжелой атлетики.' },
  { year: '2022', title: 'Сотрудничество с олимпийской командой', desc: 'Запущен проект по разработке тренажёров для подготовки олимпийской сборной.' },
  { year: '2023', title: 'Запуск сервиса поддержки', desc: 'Открыт отдел сервисного обслуживания и поддержки клиентов по всей России.' },
  { year: '2024', title: '50+ реализованных проектов', desc: 'Более 50 успешных проектов для профессиональных клубов и спортивных академий.' },
];

export default function HistoryTimeline() {
  return (
    <section className="py-20 bg-page dark:bg-gray-900">
      <Container className="space-y-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-semibold text-center dark:text-white"
        >
          Наша история
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto text-center text-gray-600 dark:text-gray-400"
        >
          Ключевые вехи и достижения, которые сформировали путь нашей компании.
        </motion.p>

        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute top-0 left-4 h-full w-1 bg-gradient-to-b from-primary to-accent-light" />

          <ul className="space-y-8">
            {history.map((item, idx) => (
              <li key={item.year} className="relative pl-12">
                {/* Точка на линии */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-3 h-3 bg-primary rounded-full shadow"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: idx * 0.2 }}
                />

                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: idx * 0.3 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-primary dark:text-accent font-semibold">
                    {item.year}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
