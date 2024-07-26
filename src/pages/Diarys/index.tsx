"use client";
import React, { useState } from "react";
import { ButtonsContainer, CustomButton, StyledTD } from "./styles.module";
import { IDiary } from "@/types/IDiary";
import axios from "axios";

const Diarys: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [diarysList, setDiarysList] = useState<IDiary[]>([]);
  function hanldeGetAllDiarys() {
    axios
      .get<IDiary[]>("api/diary/GetAll")
      .then((res) => setDiarysList(res.data));
  }
  function handleCreateDiary() {
    axios
      .post("api/diary/Create", {
        happiness: 5,
        content: "conteúdo",
        title: "título",
        data: new Date(),
        user: "joãozinho",
      })
      .then((res) => hanldeGetAllDiarys());
  }

  function handleDeleteOne(id: string) {
    axios
      .delete(`api/diary/DeleteOne?id=${id}`)
      .then((res) => hanldeGetAllDiarys());
  }
  function hanldeUpdateDiary(id: string) {
    axios
      .put(`api/diary/Update?id=${id}`, { title: inputText })
      .then((res) => hanldeGetAllDiarys());
  }
  return (
    <div>
      <h1>Pagina dos diários</h1>
      <ButtonsContainer>
        <button onClick={hanldeGetAllDiarys}>buscar todas</button>
        <button onClick={handleCreateDiary}>criar uma</button>
        <input type="text" onChange={(e) => setInputText(e.target.value)} />
      </ButtonsContainer>
      <h2>Diários</h2>
      <table>
        <tbody>
          <tr>
            <StyledTD>Título</StyledTD>
            <StyledTD>Conteúdo</StyledTD>
            <StyledTD>Data</StyledTD>
            <StyledTD>Felicidade</StyledTD>
            <StyledTD>Usuário</StyledTD>
            <td></td>
            <td></td>
          </tr>
          {diarysList.map((item) => (
            <tr>
              <StyledTD>{item.title}</StyledTD>
              <StyledTD>{item.content}</StyledTD>
              <StyledTD>{item.data}</StyledTD>
              <StyledTD>{item.happiness}</StyledTD>
              <StyledTD>{item.user}</StyledTD>
              <StyledTD>
                <CustomButton onClick={() => {hanldeUpdateDiary(item._id)}}>Editar</CustomButton>
              </StyledTD>
              <StyledTD>
                <CustomButton
                  onClick={() => {
                    handleDeleteOne(item._id);
                  }}
                >
                  Deletar
                </CustomButton>
              </StyledTD>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Diarys;
