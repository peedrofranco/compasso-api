import React from "react";
import { Container, ButtonSearch } from "./styles";

const Button = ({ title, onClick }) => {
  return (
    <Container>
      <ButtonSearch onClick={onClick}>{title}</ButtonSearch>
    </Container>
  );
};

export default Button;
