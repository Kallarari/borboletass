import styled from "styled-components";

export const IndicationContainer = styled.div`
  border-radius: 10px;
  padding: 4px 10px;
  background-color: var(--secondary);
  width: 90vw;
  border: none;
  font-size: 24px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: var(--text);
  min-width: 220px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  flex-wrap: wrap;
`;
export const TitleText = styled.h3`
  margin: 0;
  max-width: 68%;
`;
export const DateText = styled.span`
  max-width: 32%;
`;
export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const IndicationButton = styled.button`
  background-color: #d9d9d9;
  color: var(--black-text);
  padding: 4px 10px;
  border-radius: 10px;
  min-width: 90px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
