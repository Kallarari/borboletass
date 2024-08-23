import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;
export const DataSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  margin: auto auto;
`;
export const StyledLabel = styled.label``;
export const DataText = styled.label`
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--black-text);
`;
export const StyledContent = styled.p`
  font-size: 24px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--black-text);
`;
export const StyledTitle = styled.h2`
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--black-text);
  font-size: 600;
`;
