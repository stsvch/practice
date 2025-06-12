// src/components/About/HeroAbout.jsx
import React from 'react';
import Container from '../../components/Layout/Container';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

/**
 * Hero-блок для страницы "О компании"
 * Содержит заголовок, слоган, и расширенное описание компании.
 */
export default function HeroAbout() {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-page py-28"
    >
      <Container className="text-center space-y-6">
        {/* Основной заголовок */}
        <h1 className="text-5xl font-extrabold dark:text-white leading-tight">
          О компании InSportTech
        </h1>

        {/* Слоган и год основания */}
        <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">
          Инжиниринг узкоспециализированных тренажёров с 2020 года
        </p>

        {/* Расширенное описание */}
        <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-400">
          Мы специализируемся на разработке высокоточных, научно обоснованных
          тренажёров, предназначенных для максимального раскрытия потенциала
          спортсменов в конкретных дисциплинах. Наши решения интегрируют
          передовые инженерные технологии и новейшие исследования биомеханики,
          чтобы обеспечить безопасность, комфорт и результативность каждой
          тренировки.
        </p>

        {/* Дополнительная информация */}
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          За годы работы мы реализовали более 50 проектов для олимпийских команд,
          профессиональных клубов и спортивных академий. Наша миссия — делать
          тренировки эффективнее, помогая устанавливать новые рекорды и достигать
          амбициозных целей.
        </p>
      </Container>
    </motion.section>
  );
}
