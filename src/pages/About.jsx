import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.aboutWrapper}>
      <h1 id={styles.aboutHeader}>About us</h1>

      <article id={styles.firstArticle}>
        <p>
          We would like to make it easy for you as a sneakers lover to get
          information about the latest news regarding sneakers and the sneaker
          industry in general. The way we want to do this is by providing
          information here at the website <br /> and also give you the
          opportunity to subscribe to our newsletter.
        </p>

        <iframe
          id={styles.video}
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </article>
    </section>
  );
}
