import React from "react";
import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import food from '../../assets/food.png'
import voting from '../../assets/voting.png'
import ResumeBuilder from '../../assets/resumebuilder.png'
import github from '../../assets/github.png'
import social from '../../assets/social.png'


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={food}
          link="https://github.com/Dheerajsingh002/Food--Delivery-application-using-mern"
          p="Food Delivery Application"
        />
         <ProjectCard
          src={voting}
          link="https://github.com/Dheerajsingh002/DecentraliZedVotingSystemUsingBlockChain"
          p="Decentralized Voting System"
        />
         <ProjectCard
          src={ResumeBuilder}
          link="https://github.com/Dheerajsingh002/ResumeGenerator"
          p="Resume Builder"
        />
         <ProjectCard
          src={github}
          link="https://github.com/Dheerajsingh002/github-user-search"
          p="Github User Search"
        />
         <ProjectCard
          src={social}
          link="https://github.com/Dheerajsingh002/Social-Media-application"
          p="Social Media Application"
        />
      </div>
    </section>
  );
}

export default Projects;
