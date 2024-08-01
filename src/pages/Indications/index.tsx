"use client";
import React, { useState } from "react";

import { ButtonsContainer, IndicationContainer } from "./styles.module";
import axios from "axios";
import IndicationTag from "@/components/IndicationsPage/IndicationTag";
import { IIndication } from "@/types/IIndication";

const Indications: React.FC = () => {
  const [indicationList, setIndicationList] = useState<IIndication[]>([]);
  const [title, setTitle] = useState("");

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
    <div>
      <h1>Indications page</h1>
      <ButtonsContainer>
        <button onClick={handleGetAllIndications}>buscar todas</button>
        <button onClick={handleCreateIndications}>criar uma</button>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </ButtonsContainer>
      <h2>Indicações</h2>
      {indicationList.map((item,key) => (
        <IndicationContainer  key={key}>
          <a onClick={() => handleDeleteOne(item._id)}>Delete</a>
          <a onClick={() => handleUpdateOne(item._id)}>Update</a>
          <IndicationTag indication={item} />
        </IndicationContainer>
      ))}
    </div>
  );
};

export default Indications;
