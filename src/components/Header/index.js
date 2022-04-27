import React from "react";
import styles from "./Header.module.scss";
import logoSrc from "../../assets/logo.png";
import { Container } from "../Container";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

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
