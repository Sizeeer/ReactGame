import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.footerWrap}>
          Coded with
          <span className={styles.heart}></span>
          by You
        </div>
      </div>
    </footer>
  );
};
