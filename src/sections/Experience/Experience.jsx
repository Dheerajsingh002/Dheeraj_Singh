import React from "react";
import styles from "./ExperienceStyles.module.css";
import gla from "../../assets/gla.jpg";
import dabotics from "../../assets/dabotics.jpeg";
import wipro from "../../assets/wipro.png";
import udemy from '../../assets/udemy1.png'

function Experience() {
  return (
    <section id="projects" className={styles.containers}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.leftContainer}`}>
          <img src={gla} alt="" />
          <div className={styles.textBox}>
            <h2>Gla University</h2>
            <small>10/2022-11/2022</small>
            <p>
              Hybrid Mobile App Development with Flutter(Google), 10/2022,
              11/2022, Gained hands-on experience in developing hybrid mobile
              applications using Flutter and Dart. Explored the integration of
              Firebase for backend services and real-time synchronization.
            </p>
            <span className={styles.leftContainerArrow}></span>
          </div>
        </div>
        <div className={`${styles.container} ${styles.rightContainer}`}>
          <img src={dabotics} alt="" />
          <div className={styles.textBox}>
            <h2>Dabotics</h2>
            <small>07/2023- 08/2023</small>
            <p>
              Completing one month of internship as a Web Developer at Dabotics
              India Private Limited from 1st july 2023 to 1st August with
              exceptinal dedication and hard work
            </p>
            <span className={styles.rightContainerArrow}></span>
          </div>
        </div>
        <div className={`${styles.container} ${styles.leftContainer}`}>
          <img src={wipro} alt="" />
          <div className={styles.textBox}>
            <h2>TalentNext(Wipro)</h2>
            <small>05/2023 - 08/2023</small>
            <p>
              Completing the TalentNext course on Java Full Stack during the
              period may to september in the year 2023
            </p>
            <span className={styles.leftContainerArrow}></span>
          </div>
        </div>
        <div className={`${styles.container} ${styles.rightContainer}`}>
          <img src={udemy} alt="mm" />
          <div className={styles.textBox}>
            <h2>Udemy</h2>
            <small>05/2022-04/2023</small>
            <p>
              Completed: April, 2023 <br/>
               - Acquired knowledge in HTML, CSS, JavaScript, and responsive design principles<br/>
               - Developed and deployed multiple web applications using modern web technologies <br/>
               - Hands-on experience with both front-end (React, Angular) and
              back-end (Node.js, Express) development
            </p>
            <span className={styles.rightContainerArrow}></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
