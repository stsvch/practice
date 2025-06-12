// src/components/About/CTAJoin.jsx
import React from 'react';
import Container from '../../components/Layout/Container';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';
import { Link } from 'react-router-dom';

export default function CTAJoin() {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-primary text-white"
    >
      <Container className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Хотите присоединиться к нашей команде?
        </h2>
        <p className="max-w-2xl mx-auto">
          Мы всегда рады талантливым инженерам, дизайнерам и менеджерам проектов.
        </p>
        <Link
          to="/careers"
          className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-full hover:opacity-90 transition"
        >
          Посмотреть вакансии
        </Link>
      </Container>
    </motion.section>
  );
}
