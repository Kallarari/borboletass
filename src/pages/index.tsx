"use client";
import PageContainer from "@/components/PageContainer";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { Container, PageTitle } from "../styles/Homepage.module";
import DefaultButton from "@/components/DefaultButton";

// import { Container } from './styles';

const HomePage: React.FC = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <Container>
        <PageTitle>O que deseja fazer hoje?</PageTitle>
        <DefaultButton
          label="Página de Indicações"
          onClick={() => router.push("/Indications")}
        ></DefaultButton>
        <DefaultButton
          label="Página de Usuários"
          onClick={() => router.push("/Users")}
        ></DefaultButton>
        <DefaultButton
          label="Página de Diários"
          onClick={() => router.push("/Diarys")}
        ></DefaultButton>
        <div></div>
      </Container>
    </PageContainer>
  );
};

export default HomePage;
