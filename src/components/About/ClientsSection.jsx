// src/components/About/ClientsSection.jsx
import React from 'react';
import Container from '../../components/Layout/Container';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

// Логотипы клиентов/партнёров
const partners = [
  { key: 'olympic', logo: '/logos/olympic.svg', alt: 'Олимпийская сборная' },
  { key: 'clubA', logo: '/logos/club-a.svg', alt: 'Профессиональный клуб A' },
  { key: 'academy', logo: '/logos/academy.svg', alt: 'Спортивная академия' },
  { key: 'federation', logo: '/logos/federation.svg', alt: 'Федерация спорта' },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-page dark:bg-gray-900">
      <Container className="space-y-8 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-semibold dark:text-white"
        >
          Наши клиенты и партнёры
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
        >
          Нам доверяют ведущие спортивные организации и профессиональные клубы.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {partners.map((partner, idx) => (
            <img
              key={partner.key}
              src={partner.logo}
              alt={partner.alt}
              className="h-16 object-contain dark:filter dark:brightness-200"
              loading="lazy"
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
