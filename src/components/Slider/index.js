import React from "react";
import styles from "./Slider.module.css";

export const Slider = () => {
  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        <div className={styles.container + " " + styles.sliderContent}>
          <h1 className={styles.header}>Wow</h1>
          <h2 className={styles.subheader}>Wow.Wow.Wow</h2>
          <div className={styles.call}>
            <button className={styles.button}>Wow</button>
          </div>
        </div>
      </div>
    </section>
  );
};