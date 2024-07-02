import React from "react";
import styles from "./CertificateStyles.module.css"
import javascript from '../../assets/javascrpt.png'
import sql from '../../assets/sql.png'
import react from '../../assets/react.png'
import udemy from '../../assets/udemy.jpg'
import wipro from '../../assets/wipro.jpg'
import CertificateCard from "../../common/CertificateCard";


function Certificate() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.certificatesContainer}>
        <CertificateCard
          src={javascript}
          link="https://www.hackerrank.com/certificates/6f8c3021dcfc"
          p="Javascript(Hackerrank)"
        />
         <CertificateCard
          src={react}
          link="https://www.hackerrank.com/certificates/e58b8d300afa"
          p="React(hackerrank)"
        />
         <CertificateCard
          src={sql}
          link="sql"
          p="sql(hackerank)"
        />
         <CertificateCard
          src={udemy}
          link="https://drive.google.com/file/d/12nxvqcJiL1VBTbxTE4JKkA1dXwLl-umt/view?usp=sharing"
          p="Web Development Couse(Udemy)"
        />
         <CertificateCard
          src={wipro}
          link="https://drive.google.com/file/d/1YZzns0YwqaLUBmmfHXUKdE2Ocim3LeQO/view?usp=sharing"
          p="Java FullStack Development(Wipro(Talentnext))"
        />
      </div>
    </section>
  );
}

export default Certificate;
