// src/components/Home/FeaturesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Layout/Container';

// Массив с данными преимуществ
const features = [
  {
    key: 'special',
    icon: '/icons/specialization.svg',
    title: 'Узкая специализация',
    desc: 'Наши тренажёры разработаны для конкретных соревновательных задач, а не универсальных нагрузок.',
  },
  {
    key: 'precision',
    icon: '/icons/precision.svg',
    title: 'Инженерная точность',
    desc: 'Все элементы проходят строгий контроль качества и испытания для максимальной надежности.',
  },
  {
    key: 'feedback',
    icon: '/icons/feedback.svg',
    title: 'Обратная связь',
    desc: 'Встроенные сенсоры моментально анализируют технику и дают корректировки.',
  },
  {
    key: 'science',
    icon: '/icons/science.svg',
    title: 'Научный подход',
    desc: 'Наши решения основаны на последних исследованиях биомеханики и физиологии.',
  },
];
function FeatureCard({ feature, index }) {
  return (
    <motion.div
      className="
        w-full relative group bg-white dark:bg-gray-800 
        rounded-2xl shadow-md hover:shadow-xl
        transition-shadow cursor-pointer overflow-hidden
      "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="p-4 flex flex-col items-center text-center">
        <img src={feature.icon} alt={feature.title} className="h-12 w-12 mb-3" />
        <h3 className="text-lg font-semibold dark:text-white mb-1">
          {feature.title}
        </h3>
      </div>
      <div className="
        absolute inset-0 bg-gradient-to-t from-black/70 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      ">
        <div className="absolute bottom-0 p-4 text-white">
          <p className="text-sm leading-relaxed">
            {feature.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-page dark:bg-gray-900">
      <Container className="text-center mb-8">
        <h2 className="text-3xl font-semibold dark:text-white">Наши преимущества</h2>
      </Container>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.key} feature={f} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}