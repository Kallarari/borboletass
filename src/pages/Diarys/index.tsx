"use client";
import React, { useEffect, useState } from "react";
import {
  ButtonsContainer,
  CustomButton,
  Container,
  DiarysContainer,
  StyledTD,
} from "../../styles/Diarys.module";
import { IDiary } from "@/types/IDiary";
import axios from "axios";
import PageContainer from "@/components/PageContainer";
import PagesTitle from "@/components/PagesTitle";
import DiaryCard from "@/components/DiaryCard";

const Diarys: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [diarysList, setDiarysList] = useState<IDiary[]>([]);
  useEffect(() => {
    hanldeGetAllDiarys();
  }, []);
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
    <PageContainer hasBackButton>
      <Container>
        <PagesTitle>Lista de diários</PagesTitle>
        <DiarysContainer>
          {diarysList.length == 0 ? (
            <p>Sem diários cadastrados</p>
          ) : (
            diarysList.map((item) => <DiaryCard key={item._id} diary={item} />)
          )}
        </DiarysContainer>
      </Container>
    </PageContainer>
  );
};

export default Diarys;
