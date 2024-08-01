"use client";
import PageContainer from "@/components/PageContainer";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

// import { Container } from './styles';

const HomePage: React.FC = () => {
  const router = useRouter();
  return (
    <PageContainer>
      <div>
        <button onClick={() => router.push("/Indications")}>
          Página de Indicações
        </button>
        <button onClick={() => router.push("/Users")}>
          Página de Usuários
        </button>
        <button onClick={() => router.push("/Diarys")}>
          Página de Diários
        </button>
        <div></div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
