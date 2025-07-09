import React from 'react';
import styles from './Welcome.module.css';
import glassStyles from './GlassCard.module.css';

const Welcome = () => {
  return (
    <div className={`${styles['welcome-container']} ${glassStyles['glass-card']}`}>
      <h2 className={styles['welcome-title']}>Welcome to WeatherNow!</h2>
      <p className={styles['welcome-text']}>Your ultimate companion for real-time weather forecasts and insightful climate data.</p>
      <p className={styles['welcome-text']}>Experience a sleek and intuitive interface designed for clarity and precision.</p>
    </div>
  );
};

export default Welcome;
