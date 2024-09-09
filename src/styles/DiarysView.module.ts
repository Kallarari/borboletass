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
interface IhappinesCard {
  isClicked: boolean;
}
export const HappinesCard = styled.div<IhappinesCard>`
  width: 30vw;
  border-radius: 10px;
  border: 1px solid #888;
  background-color: #fff;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow: ${(props) =>
    props.isClicked && " 0px 0px 10px -1px rgba(0, 0, 0, 0.75)"};
`;
export const HappinessContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
`;
export const StyledSpan = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Kreon&display=swap");
  font-family: "Kreon", monospace;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--black-text);
  font-size: 14px;
  font-weight: 600;
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
