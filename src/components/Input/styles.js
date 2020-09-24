import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  text-align: center;
`;

export const InputField = styled.input`
  width: ${({ width }) => width}%;
  height: 60px;
  color: #333333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
`;
