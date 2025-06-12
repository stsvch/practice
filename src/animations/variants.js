// src/animations/variants.js

/**
 * Варианты анимации для framer-motion
 */

// Универсальная функция для появления с направлением и задержкой
export const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 0.6) => ({
  hidden: {
    y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type, delay, duration },
  },
});

// Стагированная анимация контейнера: поочерёдное появление дочерних элементов
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Готовый вариант появления снизу вверх без дополнительных параметров
export const fadeInUp = fadeIn('up');