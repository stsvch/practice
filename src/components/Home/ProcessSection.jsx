import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../Layout/Container';

const steps = [
  {
    key: 'idea',
    label: 'Идея',
    desc: 'Формируем концепцию под ваши задачи.',
    details: 'На этом этапе мы тщательно изучаем ваши цели и задачи, собираем технические требования и проводим первичную консультацию. Это фундамент для дальнейшей работы.',
  },
  {
    key: 'design',
    label: 'Проектирование',
    desc: 'Разрабатываем чертежи и спецификации.',
    details: 'Инженеры создают 3D-модели и рабочие чертежи, учитывая эргономику, нагрузки и особенности использования тренажёра. Мы используем современное CAD-программное обеспечение.',
  },
  {
    key: 'docs',
    label: 'Документация',
    desc: 'Готовим рабочие и эскизные материалы.',
    details: 'На этом этапе оформляются технические документы, спецификации, инструкции по сборке, материалы для сертификации и утверждения проекта.',
  },
  {
    key: 'prototype',
    label: 'Прототип',
    desc: 'Изготавливаем и тестируем опытный образец.',
    details: 'Изготавливается первый физический образец, который проходит стендовые и полевые испытания. Проверяются все параметры: надёжность, точность, удобство.',
  },
  {
    key: 'sample',
    label: 'Апробация',
    desc: 'Проверяем решение в работе с атлетами.',
    details: 'Проводятся практические тренировки с атлетами, собирается обратная связь, фиксируются возможные доработки, вносятся улучшения перед финальной версией.',
  },
  {
    key: 'delivery',
    label: 'Поставка',
    desc: 'Доставляем готовый тренажёр к вам.',
    details: 'Мы осуществляем упаковку, доставку и, при необходимости, монтаж и пусконаладку. Обучаем персонал, предоставляем техподдержку и гарантию.',
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (key) => {
    setActiveStep((prev) => (prev === key ? null : key));
  };

  return (
    <section
      id="process"
      className="relative left-1/2 transform -translate-x-1/2 w-screen py-16 bg-page dark:bg-gray-900"
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

          <ul className="flex flex-col space-y-6">
            {steps.map((step, idx) => (
              <li key={step.key} className="relative pl-8">
                <motion.div
                  className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.2 }}
                />

                <motion.div
                  className={`bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md transition cursor-pointer ${
                    activeStep === step.key ? 'ring-2 ring-primary' : 'hover:shadow-lg'
                  }`}
                  onClick={() => toggleStep(step.key)}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.3 }}
                >
                  <h3 className="text-lg font-semibold dark:text-white">{step.label}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.desc}</p>

                  <AnimatePresence>
                    {activeStep === step.key && (
                      <motion.div
                        className="mt-3 text-sm text-gray-700 dark:text-gray-300 border-t pt-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.details}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
