import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/variants';

const features = [
  { title: 'Качество ПОМ', desc: 'Износостойкие материалы и сертификаты.' },
  { title: 'Инд. подход', desc: 'Проектирование «под клиента».' },
  { title: 'Сервис 24/7', desc: 'Поддержка и ремонт по всей стране.' },
];

const FeaturesSection = () => (
  <motion.section
    className="container mx-auto py-16"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <h2 className="text-3xl font-heading text-center mb-12">Преимущества</h2>
    <div className="grid sm:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <motion.div key={i} variants={fadeIn} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default FeaturesSection;
