import React from "react";
import {
  BodyContainer,
  Container,
  Header,
  HeaderContainer,
  FooterContainer,
} from "./styles.module";
import { IPageContainer } from "./interface";
import { useRouter } from "next/router";
import { MingcuteBack2Fill } from "../../../public/assets/components/BackIcon";

const PageContainer: React.FC<IPageContainer> = ({
  pathToRetunr,
  children,
  hasBackButton,
}: IPageContainer) => {
  const router = useRouter();
  return (
    <Container>
      <HeaderContainer>
        <div>
          {hasBackButton && (
            <div onClick={() => router.back()}>
              <MingcuteBack2Fill />
            </div>
          )}
        </div>
        <Header>Borboletass</Header>
        <div></div>
      </HeaderContainer>
      <BodyContainer>{children}</BodyContainer>
      <FooterContainer></FooterContainer>
    </Container>
  );
};

export default PageContainer;
