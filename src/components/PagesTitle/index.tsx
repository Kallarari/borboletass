import React from "react";
import { StyledTitle } from "./styles.module";

// import { Container } from './styles';

const PagesTitle: React.FC<{ children: string }> = ({
  children,
}: {
  children: string;
}) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default PagesTitle;
