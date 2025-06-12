// src/components/About/MissionValues.jsx
import React from 'react';
import Container from '../../components/Layout/Container';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

const values = [
  {
    key: 'innovation',
    icon: '/icons/innovation.svg',
    title: 'Инновации',
    desc: 'Постоянное внедрение новых технологий и идей для улучшения спортивных результатов.',
  },
  {
    key: 'quality',
    icon: '/icons/quality.svg',
    title: 'Качество',
    desc: 'Высокие стандарты производства и контроля на каждом этапе разработки.',
  },
  {
    key: 'science',
    icon: '/icons/science.svg',
    title: 'Научный подход',
    desc: 'Наши решения основаны на последних исследованиях биомеханики и физиологии.',
  },
];

export default function MissionValues() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container className="space-y-8 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-semibold dark:text-white"
        >
          Наша миссия и ценности
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
        >
          Мы стремимся создавать тренажёры, которые помогают спортсменам
          безопасно и эффективно достигать новых высот, опираясь на
          инновации, безупречное качество и научные исследования.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((item, idx) => (
            <motion.div
              key={item.key}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.2 }}
              className="p-6 bg-page dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img src={item.icon} alt={item.title} className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-medium dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
