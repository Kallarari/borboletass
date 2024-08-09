import React, { useState } from "react";
import {
  ButtonsContainer,
  DateText,
  IndicationButton,
  IndicationContainer,
  TitleText,
} from "./styles.module";
import { IIndication } from "@/types/IIndication";
import { useRouter } from "next/router";

// import { Container } from './styles';

const IndicationCard: React.FC<IIndication> = (indication: IIndication) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <IndicationContainer onClick={() => setIsOpen(!isOpen)}>
      <TitleText>{indication.title}</TitleText>
      <DateText>{indication.date.substring(0, 10)}</DateText>
      {isOpen && (
        <ButtonsContainer>
          <IndicationButton
            onClick={() => router.push(`/Indications/${indication._id}`)}
          >
            VER
          </IndicationButton>
          <IndicationButton
            onClick={() =>
              router.push(`/Indications/Edition?id=${indication._id}`)
            }
          >
            EDITAR
          </IndicationButton>
        </ButtonsContainer>
      )}
    </IndicationContainer>
  );
};

export default IndicationCard;
