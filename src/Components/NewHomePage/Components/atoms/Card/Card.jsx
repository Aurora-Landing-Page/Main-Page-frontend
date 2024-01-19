// Card.js
import React from 'react';
import styles from './Card.module.scss';

const Card = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>  
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;