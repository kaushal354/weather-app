import React from 'react';
import styles from './Footer.module.css'; // Assuming CSS Modules
import glassStyles from './GlassCard.module.css';

const Footer = () => {
  return (
    <footer className={`${styles['footer']} ${glassStyles['glass-card']}`}>
      <div className={styles['container']}>
        <p>© 2025 WeatherNow. All rights reserved.</p>
        <div className={styles['social-icons']}>
          {/* Placeholder for Font Awesome icons */}
          <a href="#" className={styles['social-icon']}><i className="fab fa-facebook"></i></a>
          <a href="#" className={styles['social-icon']}><i className="fab fa-twitter"></i></a>
          <a href="#" className={styles['social-icon']}><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
