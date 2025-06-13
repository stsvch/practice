import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Layout/Container';

const people = [
  {
    name: 'Иван Смирнов',
    role: 'Тренер олимпийской сборной',
    photo: '/images/ivan.jpg',
    video: 'https://www.youtube.com/embed/abcd1234',
    description:
      'Иван вдохновил нас на разработку тренажёров, которые соответствуют высшим стандартам спортивной подготовки.',
  },
  {
    name: 'Елена Кузнецова',
    role: 'Физиотерапевт, кандидат наук',
    photo: '/images/elena.jpg',
    video: 'https://www.youtube.com/embed/efgh5678',
    description:
      'Елена внесла неоценимый вклад в эргономику и безопасность оборудования.',
  },
  {
    name: 'Артем Белов',
    role: 'Профессиональный атлет',
    photo: '/images/artem.jpg',
    video: 'https://www.youtube.com/embed/ijkl9012',
    description:
      'Артем помог адаптировать тренажёры под реальные задачи спортсменов.',
  },
];

// Варианты анимации для каждого блока вдохновителя
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

export default function InspirationSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
      <Container className="space-y-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Идейные вдохновители</h2>
          <p className="mt-1 text-white drop-shadow-md">
            Люди, без которых эти тренажёры не были бы такими, какие они есть.
          </p>
        </div>

        {people.map((person, index) => {
          const isOdd = index % 2 === 1;

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 min-h-[500px] ${
                isOdd ? 'md:flex-row-reverse' : ''
              }`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Анимация запускается, когда элемент виден на 50%
            >
              {/* Фото + имя + должность */}
              <div className="md:w-1/4 w-full flex flex-col items-center text-center">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-[200px] h-[200px] rounded-lg object-cover shadow-lg"
                />
                <h3 className="text-3xl font-semibold mt-4">{person.name}</h3>
                <p className="text-blue-900 dark:text-blue-500 text-lg mt-1 drop-shadow-md">
                  {person.role}
                </p>
              </div>

              {/* Описание текста - между фото и видео */}
              <div className="md:w-1/2 w-full px-6">
                <p className="text-lg leading-relaxed">{person.description}</p>
              </div>

              {/* Видео */}
              <div className="md:w-1/4 w-full">
                <div className="aspect-w-16 aspect-h-9 md:aspect-h-6 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src={person.video}
                    title={`Видео от ${person.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </Container>
    </section>
  );
}
