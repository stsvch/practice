// src/components/About/TeamSection.jsx
import React from 'react';
import Container from '../../components/Layout/Container';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

// Данные команды
const teamMembers = [
  {
    key: 'ivanov',
    name: 'Алексей Иванов',
    role: 'Генеральный директор',
    image: '/images/team/ivanov.jpg',
    bio: 'Более 10 лет опыта в спортивной инженерии и управлении проектами.',
  },
  {
    key: 'petrova',
    name: 'Мария Петрова',
    role: 'Главный инженер',
    image: '/images/team/petrova.jpg',
    bio: 'Эксперт в области биомеханики и разработки испытательных стендов.',
  },
  {
    key: 'sidorov',
    name: 'Дмитрий Сидоров',
    role: 'Руководитель R&D',
    image: '/images/team/sidorov.jpg',
    bio: 'Ведущий исследователь спортивных технологий и алгоритмов анализа.',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container className="text-center space-y-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-3xl font-semibold dark:text-white"
        >
          Наша команда
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
        >
          Профессионалы и энтузиасты своего дела, объединённые общей целью —
          создавать инновационные тренажёры мирового уровня.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.key}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.2 }}
              className="bg-page dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-medium dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary dark:text-accent font-semibold mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
