import React, { useEffect, useState } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Container } from "../Container";

export const Layout = () => {
  const { hash, pathname } = useLocation();
  const onMainPage = useMatch({ path: "/" });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const load = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", load);

    return () => {
      window.removeEventListener("load", load);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (hash === "") {
        window.scrollTo(0, 0);
      } else {
        const anchorElement = document.querySelector(`a[href*="${hash}"]`);
        if (anchorElement) {
          setTimeout(() => {
            anchorElement.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
          }, 0);
        }
      }
    }
  }, [hash, pathname, isLoaded]);

  return (
    <>
      <Header />
      {onMainPage ? (
        <Outlet />
      ) : (
        <div className={styles.container}>
          <Container>
            <Outlet />
          </Container>
        </div>
      )}

      <Footer />
    </>
  );
};
