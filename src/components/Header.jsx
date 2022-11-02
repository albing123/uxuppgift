import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <section className={styles.linkWrapper}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </section>
      <hr className={styles.headerLine}></hr>
    </header>
  );
}
