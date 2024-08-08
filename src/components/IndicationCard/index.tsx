import React, { useState } from "react";
import {
  ButtonsContainer,
  DateText,
  IndicationButton,
  IndicationContainer,
  TitleText,
} from "./styles.module";
import { IIndication } from "@/types/IIndication";

// import { Container } from './styles';

const IndicationCard: React.FC<IIndication> = (indication: IIndication) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IndicationContainer onClick={() => setIsOpen(!isOpen)}>
      <TitleText>{indication.title}</TitleText>
      <DateText>{indication.date.substring(0, 10)}</DateText>
      {isOpen && (
        <ButtonsContainer>
          <IndicationButton>VER</IndicationButton>
          <IndicationButton>EDITAR</IndicationButton>
        </ButtonsContainer>
      )}
    </IndicationContainer>
  );
};

export default IndicationCard;
