import React from "react";
import styles from "./Skills.module.css";

import html from "../../../assets/skills/html.png";
import css from "../../../assets/skills/css.png";
import reactImg from "../../../assets/skills/react.png";
import node from "../../../assets/skills/node.png";
import mongo from "../../../assets/skills/mongodb.png";
import express from "../../../assets/skills/Express js.png"; // 

const postgres =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg";
const python =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";

export const Skills = () => {
  const skills = [
    { title: "HTML5", image: html },
    { title: "CSS3", image: css },
    { title: "React.js", image: reactImg },
    { title: "Node.js", image: node },
    { title: "MongoDB", image: mongo },
    { title: "PostgreSQL", image: postgres },
    { title: "Python", image: python },
    { title: "Express.js", image: express },
  ];

  const certifications = [
    {
      title: "Artificial Intelligence Certification",
      org: "Samsung Innovation Campus (2025–2026)",
    },
    {
      title: "AWS Solutions Architecture Simulation",
      org: "Forage (2026)",
    },
    {
      title: "JPMorgan Software Engineering Simulation",
      org: "Forage (2026)",
    },
    {
      title: "EY Techathon 5.0",
      org: "Ernst & Young (2025)",
    },
  ];

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills & Certifications</h2>

      <div className={styles.wrapper}>
        
        
        <div className={styles.skillsContainer}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skillCard}>
              <img src={skill.image} alt={skill.title} />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

          
        <div className={styles.certifications}>
          {certifications.map((cert, id) => (
            <div key={id} className={styles.certCard}>
              <h3>{cert.title}</h3>
              <p>{cert.org}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};