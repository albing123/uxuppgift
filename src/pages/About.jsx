import React from "react";
import styles from "./About.module.css";
import video from "./Sneaker.mp4";

export default function About() {
  return (
    <section className={styles.aboutWrapper}>
      <h1 id={styles.aboutHeader}>About us</h1>

      <article id={styles.firstArticle}>
        <p>
          We are a website that started 2022 with the goal to provide you with
          sneaker news.
          <br />
          We are all passionate about sneakers and we want to share our passion
          with you. <br /> <br />
          Each day we upload a new video rearding sneakers or shoes. Subtitles
          always avaliable.
        </p>
      </article>

      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
}
