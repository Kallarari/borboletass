import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  background-color: var(--primary);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BodyContainer = styled.div``;
export const Header = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text);
`;
export const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--primary);
  height: 70px;
`;
