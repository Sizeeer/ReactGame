import React from "react";
import styles from "./Header.module.css";
import logoSrc from "../../assets/logo.png";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logoSrc} alt="logo" />
          </div>
          <ul className={styles.nav}>
            {MENU.map((el, i) => (
              <li key={i}>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
