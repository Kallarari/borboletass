import React from "react";
import {
  BodyContainer,
  Container,
  Header,
  HeaderContainer,
  FooterContainer,
} from "./styles.module";
import { IPageContainer } from "./interface";

const PageContainer: React.FC<IPageContainer> = ({
  pathToRetunr,
  children,
}: IPageContainer) => {
  return (
    <Container>
      <HeaderContainer>
        <div></div>
        <Header>Borboletass</Header>
        <div></div>
      </HeaderContainer>
      <BodyContainer>{children}</BodyContainer>
      <FooterContainer></FooterContainer>
    </Container>
  );
};

export default PageContainer;
