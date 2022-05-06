import React, { useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import logoSrc from "../../assets/logo.png";
import { Container } from "../Container";
import { Link } from "react-router-dom";

export const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60 && headerRef.current) {
        headerRef.current.classList.add(styles.small);
      } else {
        headerRef.current.classList.remove(styles.small);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={styles.root}>
      <div ref={headerRef} className={styles.header}>
        <Container className={styles.headerWrap}>
          <Link to="/">
            <img src={logoSrc} alt="logo" className={styles.logo} />
          </Link>

          <ul className={styles.nav}>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/about-game">AboutGame</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
};
