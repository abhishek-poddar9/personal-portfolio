import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(imageSrc)}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>

        <ul className={styles.skills}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Live
            </a>
          )}

          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};