"use client";
import React, { useEffect, useState } from "react";

import {
  ButtonsContainer,
  Container,
  IndicationContainer,
} from "../../styles/Indications.module";
import axios from "axios";
import { IIndication } from "@/types/IIndication";
import PageContainer from "@/components/PageContainer";
import PagesTitle from "@/components/PagesTitle";
import IndicationCard from "@/components/IndicationCard";
import DefaultButton from "@/components/DefaultButton";
import { EosIconsLoading } from "../../../public/assets/components/LoadingCircle";
import { useRouter } from "next/router";

const Indications: React.FC = () => {
  const [indicationList, setIndicationList] = useState<IIndication[]>();
  const [title, setTitle] = useState("");

  const router = useRouter();

  useEffect(() => {
    handleGetAllIndications();
  }, []);
  function handleCreateIndications() {
    axios
      .post("api/indications/CreateNew", {
        title: "test1",
        name: title,
        date: new Date(),
      })
      .then((res) => handleGetAllIndications())
      .catch((err) => console.log(err));
  }

  function handleGetAllIndications() {
    axios
      .get<IIndication[]>("api/indications/GetAll")
      .then((res) => setIndicationList(res.data));
  }
  function handleDeleteOne(id: string) {
    axios
      .delete(`api/indications/DeleteOne?id=${id}`)
      .then((res) => handleGetAllIndications());
  }
  function handleUpdateOne(id: string) {
    axios
      .put(`api/indications/UpdateOne?id=${id}`, { name: title })
      .then((res) => handleGetAllIndications());
  }
  return (
    <PageContainer hasBackButton>
      <Container>
        <PagesTitle>Lista das indicações</PagesTitle>
        {/* 
        <ButtonsContainer>
          <button onClick={handleGetAllIndications}>buscar todas</button>
          <button onClick={handleCreateIndications}>criar uma</button>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </ButtonsContainer> */}
        {indicationList ? (
          indicationList.length > 0 ? (
            <IndicationContainer>
              {indicationList.map((item, key) => (
                <IndicationCard key={key} {...item} />
              ))}
            </IndicationContainer>
          ) : (
            <PagesTitle>Sem indicações cadastradas...</PagesTitle>
          )
        ) : (
          <EosIconsLoading />
        )}
        <DefaultButton
          onClick={() => {
            router.push("/Indications/Edition");
          }}
          label="Criar uma nova"
        ></DefaultButton>
      </Container>
    </PageContainer>
  );
};

export default Indications;
