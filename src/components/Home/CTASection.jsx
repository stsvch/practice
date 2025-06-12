import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';
import Container from '../Layout/Container';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        py-16 text-center
        bg-primary/10 dark:bg-primary/20
        text-primary-dark dark:text-white
      "
    >
      <Container className="space-y-6">
        <h2 className="text-4xl font-heading">
          Готовы вывести проект на новый уровень?
        </h2>
        <p className="text-lg">
          Расскажите о своём задании — и мы воплотим его в жизнь.
        </p>
        <Link
          to="/contact"
          className="
            inline-block px-8 py-3
            bg-primary dark:bg-white/90
            text-white dark:text-gray-900
            font-medium rounded-full
            hover:opacity-80 transition
          "
        >
          Связаться
        </Link>
      </Container>
    </motion.section>
  );
}
