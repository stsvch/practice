// src/components/About/ProcessTeaser.jsx
import React from 'react';
import Container from '../../components/Layout/Container';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import { Link } from 'react-router-dom';

export default function ProcessTeaser() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <Container className="text-center space-y-6">
        <h2 className="text-3xl font-semibold dark:text-white">
          Как мы работаем
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
          От идеи до поставки — мы сопровождаем каждую стадию разработки тренажёра.
        </p>
       <Link to="/#process" className="inline-block px-8 py-3 bg-primary dark:bg-accent text-white dark:text-primary font-medium rounded-full hover:opacity-90 transition">
          Узнать подробнее
       </Link>
      </Container>
    </motion.section>
  )
}
