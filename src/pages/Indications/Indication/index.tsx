"use client";
import React, { useEffect, useState } from "react";

import {
  ButtonsContainer,
  IndicationContainer,
} from "../../../styles/Indication.module";
import axios from "axios";
import IndicationTag from "@/components/IndicationsPage/IndicationTag";
import { IIndication } from "@/types/IIndication";
import PageContainer from "@/components/PageContainer";
import PagesTitle from "@/components/PagesTitle";
import DefaultButton from "@/components/DefaultButton";

const Indication: React.FC = () => {
  const [indicationList, setIndicationList] = useState<IIndication[]>([]);
  const [title, setTitle] = useState("");

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
    <PageContainer>
      <div>
        <PagesTitle>Página de Indicações</PagesTitle>
        <ButtonsContainer>
          <button onClick={handleGetAllIndications}>buscar todas</button>
          <button onClick={handleCreateIndications}>criar uma</button>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </ButtonsContainer>
        {indicationList.map((item, key) => (
          <IndicationContainer key={key}>
            <a onClick={() => handleDeleteOne(item._id)}>Delete</a>
            <a onClick={() => handleUpdateOne(item._id)}>Update</a>
            <IndicationTag indication={item} />
          </IndicationContainer>
        ))}
        <DefaultButton label="Criar uma nova"></DefaultButton>
      </div>
    </PageContainer>
  );
};

export default Indication;
