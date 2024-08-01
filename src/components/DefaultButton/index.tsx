import React from "react";
import { IDefaultButton } from "./interface";
import { StyledButton } from "./styles.module";

const DefaultButton: React.FC<IDefaultButton> = (props: IDefaultButton) => {
  return (
    <StyledButton {...props} type={"button"}>
      {props.label ? props.label : ""}
    </StyledButton>
  );
};

export default DefaultButton;
