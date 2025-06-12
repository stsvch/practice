import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

const CTASection = () => (
  <motion.section
    className="bg-primary py-16 text-center text-white"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-heading mb-4">Готовы начать?</h2>
    <p className="mb-8">Свяжитесь с нами — и мы разработаем решение под ваш проект.</p>
    <a href="/contact" className="px-10 py-4 bg-accent font-medium rounded-full hover:opacity-90 transition">
      Связаться
    </a>
  </motion.section>
);

export default CTASection;
