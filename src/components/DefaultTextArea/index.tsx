import React from "react";
import { Container, StyledLabel, StyledTextArea } from "./styles.module";
import { IDefaultTextArea } from "./interface";

// import { Container } from './styles';

const DefaultTextArea: React.FC<IDefaultTextArea> = (
  props: IDefaultTextArea) => {
  return(
  <Container>
    <StyledLabel>{props.label}</StyledLabel>
    <StyledTextArea {...props} />
  </Container>);
};

export default DefaultTextArea;
