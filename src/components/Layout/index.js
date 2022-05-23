import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet, useMatch } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Container } from "../Container";

export const Layout = () => {
  const onMainPage = useMatch({ path: "/" });

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
