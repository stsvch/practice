// src/components/Home/ProcessSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Layout/Container';

const steps = [
  { key: 'idea',      label: 'Идея',           desc: 'Формируем концепцию под ваши задачи.' },
  { key: 'design',    label: 'Проектирование', desc: 'Разрабатываем чертежи и спецификации.' },
  { key: 'docs',      label: 'Документация',   desc: 'Готовим рабочие и эскизные материалы.' },
  { key: 'prototype', label: 'Прототип',       desc: 'Изготавливаем и тестируем опытный образец.' },
  { key: 'sample',    label: 'Апробация',      desc: 'Проверяем решение в работе с атлетами.' },
  { key: 'delivery',  label: 'Поставка',       desc: 'Доставляем готовый тренажёр к вам.' },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="
        relative left-1/2 transform -translate-x-1/2 w-screen
        py-16 bg-page dark:bg-gray-900
      "
    >
      <Container className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold dark:text-white">
            Путь от идеи к поставке
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Каждый этап мы продумываем до мелочей, чтобы вы получили тренажёр готовым к применению.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-4 h-full w-1 bg-gradient-to-b from-primary to-accent-light" />

          <ul className="flex flex-col space-y-8">
            {steps.map((step, idx) => (
              <li key={step.key} className="relative pl-8">
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 left-4 w-2 h-2 bg-primary rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                />
                <motion.div
                  className="
                    bg-white dark:bg-gray-800 p-4 rounded-xl
                    shadow-md hover:shadow-lg transition-shadow
                  "
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.3 }}
                >
                  <h3 className="text-lg font-semibold dark:text-white">
                    {step.label}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {step.desc}
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