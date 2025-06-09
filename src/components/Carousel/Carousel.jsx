// src/components/Carousel/Carousel.jsx
import React, { useState, useRef, useEffect, Children, cloneElement } from 'react';
import styles from './Carousel.module.css';
import { ReactComponent as ArrowLeftIcon } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../assets/icons/arrow-right.svg';

export default function Carousel({
  children,
  autoPlay = false,
  autoPlayInterval = 5000,
  infinite = false,
  showArrows = true,
  showDots = true,
}) {
  const count = Children.count(children);
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  // Перелистывание
  const prev = () => {
    setCurrent(prevIndex =>
      prevIndex === 0
        ? infinite
          ? count - 1
          : 0
        : prevIndex - 1
    );
  };
  const next = () => {
    setCurrent(prevIndex =>
      prevIndex === count - 1
        ? infinite
          ? 0
          : prevIndex
        : prevIndex + 1
    );
  };

  // Автоплей
  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, autoPlayInterval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, autoPlayInterval]);

  // Сдвиг трека при смене слайда
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  return (
    <div className={styles.carousel}>
      <div className={styles.track} ref={trackRef}>
        {Children.map(children, (child, idx) =>
          cloneElement(child, { className: styles.slide, key: idx })
        )}
      </div>

      {showArrows && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prev}
            aria-label="Previous slide"
          >
            <ArrowLeftIcon />
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={next}
            aria-label="Next slide"
          >
            <ArrowRightIcon />
          </button>
        </>
      )}

      {showDots && (
        <div className={styles.dots}>
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${
                idx === current ? styles.activeDot : ''
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
