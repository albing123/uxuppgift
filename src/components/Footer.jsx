import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <p>Author: Albin Gerhardsson</p>

      <a href="mailto:Albin@example.com">Contact: Albin@gmail.com</a>
    </footer>
  );
}
