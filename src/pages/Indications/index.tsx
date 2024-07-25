"use client";
import React, { useState } from "react";

import { ButtonsContainer, IndicationContainer } from "./styles.module";
import axios from "axios";
import IndicationTag from "@/components/IndicationsPage/IndicationTag";
import { IIndication } from "@/types/Iindication";

const Indications: React.FC = () => {
  const [indicationList, setIndicationList] = useState<IIndication[]>([]);

  function handleCreateIndications() {
    axios
      .post("api/indications/CreateNew", {
        title: "test1",
        name: "test1 name",
        date: new Date(),
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function handleGetAllIndications() {
    axios
      .get<IIndication[]>("api/indications/GetAll")
      .then((res) => setIndicationList(res.data));
  }
  return (
    <div>
      <h1>Indications page</h1>
      <ButtonsContainer>
        <button onClick={handleGetAllIndications}>buscar todas</button>
        <button onClick={handleCreateIndications}>criar uma</button>
      </ButtonsContainer>
      <h2>Indicações</h2>
      {indicationList.map((item) => (
        <IndicationTag indication={item} />
      ))}
    </div>
  );
};

export default Indications;
