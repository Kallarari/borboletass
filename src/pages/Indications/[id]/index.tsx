import DefaultButton from "@/components/DefaultButton";
import IndicationCard from "@/components/IndicationCard";
import PageContainer from "@/components/PageContainer";
import PagesTitle from "@/components/PagesTitle";
import { IIndication } from "@/types/IIndication";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { EosIconsLoading } from "../../../../public/assets/components/LoadingCircle";
import {
  StyledImage,
  StyledIndicaTionContainer,
  StyledBody,
  StyledSpan,
} from "@/styles/singleIndicationStyle";

// import { Container } from './styles';

const Page: React.FC = () => {
  const router = useRouter();
  const [indication, setIndication] = useState<IIndication>();

  useEffect(() => {
    if (router.query.id) handleGetOne(router.query.id as string);
  }, [router.query.id]);
  function handleGetOne(id: string) {
    axios
      .get<IIndication>(`../api/indications/GetOne?id=${id}`)
      .then((res) =>{console.log(res.data); setIndication(res.data)})
      .catch((err) => console.log(err));
  }

  /* 
  function handleUpdateOne(id: string) {
    axios
      .put(`api/indications/UpdateOne?id=${id}`, { name: title })
      .then((res) => {});
  } */
  return (
    <PageContainer hasBackButton>
      <StyledIndicaTionContainer>
        {indication ? (
          <>
            <PagesTitle>{indication.title}</PagesTitle>
            <StyledImage
              imageLink={
                indication.imageLink
                  ? indication.imageLink
                  : "https://img.freepik.com/vetores-gratis/fundo-de-contorno-de-borboleta-desenhado-a-mao_23-2149029441.jpg?ga=GA1.1.1042171942.1715078900&semt=ais_hybrid"
              }
            ></StyledImage>
            <StyledBody>{indication.body}</StyledBody>
            <StyledSpan>
              criada em {indication.date.substring(0, 10)}
            </StyledSpan>
          </>
        ) : (
          <EosIconsLoading />
        )}
        <DefaultButton
          label="Voltar"
          onClick={() => router.back()}
        ></DefaultButton>
      </StyledIndicaTionContainer>
    </PageContainer>
  );
};

export default Page;
