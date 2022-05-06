import React from "react";
import { Container } from "../../components/Container";
import avatar from "assets/avatar.jpg";

export const index = () => {
  return (
    <Container>
      <img src={avatar} alt="avatar" />
    </Container>
  );
};
