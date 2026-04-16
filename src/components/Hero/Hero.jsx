import React from "react";
import styles from "./Hero.module.css";
import profileImg from "../../../assets/profile.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhishek Poddar</h1>

        <p className={styles.description}>
          Full Stack Developer with expertise in building scalable AI-powered
          web applications using React.js, Node.js, and PostgreSQL.
          Experienced in designing RESTful APIs, integrating AI services, and
          implementing secure authentication systems.
        </p>

        <a
          href="mailto:abhish.poddar@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      <div className={styles.imageWrapper}>
        <img src={profileImg} alt="Abhishek" className={styles.heroImg} />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};