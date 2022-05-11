import React, { useRef, useEffect } from "react";
import styles from "./Header.module.scss";
import logoSrc from "../../assets/logo.png";
import { Container } from "../Container";
import { Link, NavLink } from "react-router-dom";

const MENU = [
  {
    path: "/",
    text: "Main",
  },
  {
    path: "/characters",
    text: "Characters",
  },
  {
    path: "/about-game",
    text: "AboutGame",
  },
  {
    path: "/contacts",
    text: "Contacts",
  },
];

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
            {MENU.map((el) => (
              <li>
                <NavLink
                  to={el.path}
                  className={({ isActive }) => {
                    return isActive ? styles.activeLink : null;
                  }}
                >
                  {el.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};
