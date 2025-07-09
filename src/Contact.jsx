import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles['contact-container']}>
      <h2>Contact Us</h2>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      <p>You can reach us via:</p>
      <ul>
        <li>Email 1: 2203031240594@paruluniversity.ac.in</li>
        <li>Email 2: kaushal.pd123456789@gmail.com</li>
        <li>Phone 1: +91-9661392401</li>
        <li>Phone 2: +91-9612111499</li>
        <li>Address: NEW TARACHAK KUSUM DEVI DAWAR, DANAPUR CANTT, Patna, Bihar, India - 801503</li>
      </ul>
      <h3>Connect with me:</h3>
      <ul>
        <li>GitHub: <a href="https://github.com/kaushal354" target="_blank" rel="noopener noreferrer">kaushal354</a></li>
        <li>Facebook: <a href="https://www.facebook.com/premraj.0123" target="_blank" rel="noopener noreferrer">premraj.0123</a></li>
        <li>Instagram: <a href="https://www.instagram.com/kaushal_prasad_10/" target="_blank" rel="noopener noreferrer">kaushal_prasad_10</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/kaushal-prasad-a8b740113/" target="_blank" rel="noopener noreferrer">Kaushal Prasad</a></li>
      </ul>
      <p>We aim to respond to all inquiries within 24-48 hours.</p>
    </div>
  );
};

export default Contact;
