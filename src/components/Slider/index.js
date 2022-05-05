import React from "react";
import styles from "./Slider.module.scss";
import cn from "classnames";
import { Button } from "../Button/Button";

export const Slider = () => {
  return (
    <section className={styles.section}>
      <div className={styles.slider}>
        <div className={cn(styles.container, styles.sliderContent)}>
          <h1 className={styles.header}>Wow</h1>
          <h2 className={styles.subheader}>Wow.Wow.Wow</h2>
          <div className={styles.call}>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};
