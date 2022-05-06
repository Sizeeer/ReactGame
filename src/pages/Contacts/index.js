import React from "react";
import { Container } from "../../components/Container";
import avatar from "./../../assets/avatar.jpg";
import { Text } from "../../components/Text";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <Container className={styles.root}>
      <img src={avatar} alt="avatar" />
      <div className={styles.infoWrapper}>
        <Text element="h2">Крисанов Максим</Text>
        <Text element="h4">Full-stack разработчик)</Text>
        <Text element="h4">
          Основной стек: react, rtk/redux, react-query, react-hook-form,
          material-ui, nodejs, expressjs, express-validator, sequelize
        </Text>
      </div>
    </Container>
  );
};
