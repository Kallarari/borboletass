import styled from "styled-components";

export const StyledIndicaTionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 70vh;
  height: auto;
`;
interface IStyledImage {
  imageLink?: string;
}
export const StyledImage = styled.img<IStyledImage>`
  width: 90vw;
  height: 100px;
  background-image: url(${props=>props.imageLink});
  background-color: #eee;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 5px;
`;
export const StyledSpan = styled.span``
export const StyledBody = styled.h3``