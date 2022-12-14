import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactWrapper}>
      <h1 id={styles.contactHeader}>Contact</h1>
      <form className={styles.formWrapper}>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
        ></input>
        <label htmlFor="email">Number</label>
        <input
          required
          type="number"
          id="number"
          name="number"
          placeholder="Your number"
        ></input>
        <label htmlFor="message">Message</label>
        <textarea
          required
          id="message"
          name="message"
          placeholder="Your message"
        ></textarea>
        <button className={styles.submitButton} type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
