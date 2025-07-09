import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles['about-container']}>
      <h2>About WeatherNow</h2>
      <p>WeatherNow is a modern, responsive web application built using the MERN stack (MongoDB, Express.js, React, Node.js) to provide real-time weather forecasts.</p>
      <p>Our goal is to deliver accurate and visually appealing weather information to help you plan your day.</p>
      <h3>Our Team</h3>
      <p>This application was developed by Kaushal Prasad.</p>
      <p>Dedicated and enthusiastic B.Tech CSE (AI & ML) student at Parul University, proficient in C, Python 3, Java, Machine Learning, and Data Structures & Algorithms (DSA), with strong problem-solving abilities. Experienced in web development using HTML, CSS, and JavaScript, along with a solid understanding of DBMS, Oracle Database, and SQL. Passionate about technology, innovation, and continuous learning.</p>
      <h4>Key Expertise:</h4>
      <p>Machine Learning, Deep Learning, Java, Python, Javascript, Data Structures, Communications, Time Management, Artificial Intelligence, Data Analytics, Oracle Database, HTML, CSS, Git, Github, C.</p>
    </div>
  );
};

export default About;
