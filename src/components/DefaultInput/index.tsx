import React from "react";
import { Container, StyledInput, StyledLabel } from "./styles.module";
import { IDefaultInput } from "./interface";

const DefaultInput: React.FC<IDefaultInput> = (props: IDefaultInput) => {
  return (
    <Container>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput {...props} />
    </Container>
  );
};

export default DefaultInput;
