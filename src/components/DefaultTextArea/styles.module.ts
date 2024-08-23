import styled from "styled-components";

interface IStyledInput {
  hasError?: boolean;
}
export const StyledTextArea = styled.textarea<IStyledInput>`
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.35);
  -webkit-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.35);
  min-height: 20px;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--black-text);
  border: ${(props) => (props.hasError ? "1px solid var(--error)" : "")};
`;
export const StyledLabel = styled.label`
  font-size: 24px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--black-text);
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90vw;
`;
