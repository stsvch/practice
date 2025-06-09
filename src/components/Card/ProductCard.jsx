// src/components/Card/ProductCard.jsx
import React from 'react';
import styles from './ProductCard.module.css';
import Button from '../Button/Button';

export default function ProductCard({
  id,
  image,
  title,
  price,
  features = [],
  onViewDetail,
  onAddToList,
}) {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
        {features.length > 0 && (
          <ul className={styles.features}>
            {features.map((feat, idx) => (
              <li key={idx} className={styles.featureItem}>
                {feat}
              </li>
            ))}
          </ul>
        )}
        <div className={styles.actions}>
          <Button onClick={() => onViewDetail(id)} variant="outline">
            Подробнее
          </Button>
          <Button onClick={() => onAddToList(id)} variant="primary">
            В прайс-лист
          </Button>
        </div>
      </div>
    </div>
  );
}
