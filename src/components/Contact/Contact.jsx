import React from "react";
import styles from "./Contact.module.css";
import { Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Let's Connect</h2>
        <p className={styles.subtitle}>
          Full Stack Developer focused on building scalable AI-powered web applications.
          Open to full-time opportunities and collaborations.
        </p>
      </div>

      <div className={styles.right}>
        <a href="mailto:abhish.poddar@gmail.com" className={styles.card}>
          <span className={styles.icon}>
            <Mail size={22} />
          </span>
          <span>abhish.poddar@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/abhishek-poddar-91b49321b/"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <span className={styles.icon}>
            <FaLinkedinIn size={20} />
          </span>
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/abhishek-poddar9"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <span className={styles.icon}>
            <FaGithub size={20} />
          </span>
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};