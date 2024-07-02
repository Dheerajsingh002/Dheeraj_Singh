// src/components/Education.js
import React from 'react';
import  styles from './EducationStyles.module.css'

const Education = () => {
  const educationData = [
    {
      institution: 'GLA University',
      degree: 'Btech in Computer Science(81.2%)',
      startDate: 'August 2020',
      endDate: 'May 2024',
      description: 'Focused on software engineering, algorithms, and data structures.'
    },
    {
      institution: 'S.B.S Public School',
      degree: '12th(88%)',
      startDate: 'July 2019',
      endDate: 'June 2020',
      description: 'Specialized in Science with a focus on Mathematics, Physics, and Chemistry. '
    },
    {
        institution: 'S.B.S Public School',
        degree: '10th(69.3)',
        startDate: 'July 2017',
        endDate: 'June 2018',
        description: 'Focused on core subjects including Mathematics, Science, and English. Achieved high grades and participated in various extracurricular activities such as the school debate team and science club.'
      }
  ];

  return (
    <section className={styles.educationSection}>
      <h2>Education</h2>
      <div className={styles.educationContainer}>
        {educationData.map((edu, index) => (
          <div className={styles.educationItem} key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
