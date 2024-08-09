import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 10px;
  padding: 4px 10px;
  background-color: var(--secondary);
  border: none;
  font-size: 24px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--text);
  min-width: 220px;
  cursor: pointer;
  :disabled {
    background-color: grey;
  }
`;
