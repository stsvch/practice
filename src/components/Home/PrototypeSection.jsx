import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Layout/Container';

const videos = [
  {
    src: 'https://www.youtube.com/embed/prototype-video-1',
    title: 'Демонстрация работы тренажёра',
  },
  {
    src: 'https://www.youtube.com/embed/prototype-video-2',
    title: 'Объяснение ключевых функций',
  },
];

export default function PrototypeSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Container className="space-y-12 max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold">Первый прототип тренажёра</h2>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Лыжный тренажёр XC Skiing Power
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Фото */}
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/prototype.jpg" // замени на актуальный путь к фото
              alt="Первый прототип тренажёра"
              className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
            />
          </motion.div>

          {/* Текст */}
          <motion.div
            className="md:w-2/3 space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Тренажер помогает спортсменам овладеть оптимальной техникой лыжных передвижений коньковым стилем, что позволяет воспроизводить наиболее естественный стереотип подседания и отталкивания.
            </p>
            <p>
              Подседание — важный элемент при передвижении на лыжах. От правильного и своевременного подседания во многом зависят сила и скорость отталкивания нижними конечностями. Лыжнику необходимо овладеть навыком оптимального взаимодействия с лыжами при выполнении подседания и отталкивания в рамках одноопорного скольжения по неровной и зачастую ухабистой поверхности лыжной трассы.
            </p>
            <p>
              Тренажер оснащен множеством подвижных элементов и узлов, что создает необходимость согласовывать и балансировать суставные движения с учетом упругой деформации лыж. Это позволяет эффективно осваивать технику лыжных передвижений и укреплять наиболее глубокие и мелкие мышцы, способствующие повышению динамического равновесия.
            </p>
            <p>
              Тренажер состоит из трех основных элементов:
            </p>
            <ul className="list-disc list-inside ml-5">
              <li>А – амортизирующая платформа (подвижная опора)</li>
              <li>Б – рама основания (неподвижная опора)</li>
              <li>Интеллектуальные датчики силы (В), регистрирующие усилия спортсмена</li>
            </ul>
            <p>
              Данные, регистрируемые датчиками, передаются на управляющий компьютер в режиме реального времени, что дает возможность их отображения в процессе тренировки.
            </p>
            <p>
              Наибольшая эффективность достигается за счет двух функций программы: электронного метронома и установления границ рабочего диапазона, что позволяет регулировать темп упражнений и формировать двигательную задачу.
            </p>
            <p>
              Тренажер подходит спортсменам с различным уровнем подготовки, а увеличение сложности достигается повышением жесткости лыж с возможностью перемещения опорных узлов.
            </p>
          </motion.div>
        </div>

        {/* Видео блок */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          {videos.map(({ src, title }, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
              <iframe
                className="w-full aspect-video"
                src={src}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="text-center mt-2 text-gray-700 dark:text-gray-300">{title}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
