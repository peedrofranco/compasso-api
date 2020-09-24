import React from "react";
import { Container, InputField } from "./styles";

const Input = ({ onChange }) => {
  return (
    <Container>
      <InputField
        width={30}
        type="text"
        placeholder="Nome do Usuário"
        onChange={onChange}
      />
    </Container>
  );
};
export default Input;
