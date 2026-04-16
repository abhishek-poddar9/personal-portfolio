import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <div id="about-section" className={styles.anchor}></div>

      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        <div className={styles.visualBox}>
          <div className={styles.glow}></div>

          <div className={styles.techCard}>
            <h3>Frontend Development</h3>
            <p>React.js, HTML5, CSS3, Tailwind CSS</p>
          </div>

          <div className={styles.techCard}>
            <h3>Backend & APIs</h3>
            <p>Node.js, Express.js, REST APIs</p>
          </div>

          <div className={styles.techCard}>
            <h3>Database & Security</h3>
            <p>PostgreSQL, MongoDB, JWT, Firebase, Clerk</p>
          </div>
        </div>

        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <div className={styles.icon}>⚛️</div>
            <div className={styles.aboutItemText}>
              <h3>AI-Powered Web Applications</h3>
              <p>
                I build scalable full-stack applications with a strong focus on
                performance, usability, and real-world problem solving.
              </p>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div className={styles.icon}>🛠️</div>
            <div className={styles.aboutItemText}>
              <h3>Backend Architecture & APIs</h3>
              <p>
                I develop secure RESTful APIs, backend workflows, and efficient
                server-side systems using Node.js and Express.js.
              </p>
            </div>
          </div>

          <div className={styles.aboutItem}>
            <div className={styles.icon}>🔒</div>
            <div className={styles.aboutItemText}>
              <h3>Databases & Authentication</h3>
              <p>
                I work with PostgreSQL and MongoDB, and implement secure
                authentication and access control for reliable applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};