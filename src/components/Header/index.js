import React from "react";
import styles from "./Header.module.css";
import logoSrc from "../../assets/logo.png";
import { Container } from "../Container";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <Container className={styles.headerWrap}>
          <img src={logoSrc} alt="logo" className={styles.logo} />
          <ul className={styles.nav}>
            {MENU.map((el, i) => (
              <li key={i}>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};
