"use client";
import React, { useEffect, useState } from "react";
import {
  ButtonsContainer,
  CustomButton,
  StyledTD,
  UserContainer,
} from "../../styles/Users.module";
import axios from "axios";
import { IUser } from "@/types/IUser";
import PageContainer from "@/components/PageContainer";

const Users: React.FC = () => {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [inputText, setInputText] = useState("");
  function handleCreateUser() {
    axios
      .post("api/users/CreateNew", {
        userName: "JVM 1",
        name: "joão vitor Minosso 1",
        password: "password test",
        type: "admin",
      })
      .then(() => handleGetAllUsers())
      .catch((err) => alert("Usuário com esse nome ja existe!"));
  }
  function handleGetAllUsers() {
    axios.get<IUser[]>("api/users/GetAll").then((res) => setUserList(res.data));
  }
  function handleDeleteOne(id: string) {
    axios
      .delete(`api/users/DeleteOne?id=${id}`)
      .then((res) => handleGetAllUsers());
  }
  function hanldeUpdateUser(id: string) {
    axios
      .put(`api/users/Update?id=${id}`, { name: inputText })
      .then((res) => handleGetAllUsers());
  }

  useEffect(() => {
    handleGetAllUsers();
  }, []);
  return (
    <PageContainer>
      <div>
        <h1>Página de usuários</h1>
        <ButtonsContainer>
          <button onClick={handleGetAllUsers}>buscar todos </button>
          <button onClick={handleCreateUser}>criar um</button>
          <input onChange={(e) => setInputText(e.target.value)}></input>
        </ButtonsContainer>
        <h2>Usuários</h2>
        <table>
          <tbody>
            <tr>
              <StyledTD>Nome</StyledTD>
              <StyledTD>Senha</StyledTD>
              <StyledTD>Tipo</StyledTD>
              <StyledTD>nome de usuário</StyledTD>
              <td></td>
              <td></td>
            </tr>
            {userList.map((item, key) => (
              <tr key={key}>
                <StyledTD>{item.name}</StyledTD>
                <StyledTD>{item.password}</StyledTD>
                <StyledTD>{item.type}</StyledTD>
                <StyledTD>{item.userName}</StyledTD>
                <StyledTD>
                  <CustomButton onClick={() => hanldeUpdateUser(item._id)}>
                    Editar
                  </CustomButton>
                </StyledTD>
                <StyledTD>
                  <CustomButton onClick={() => handleDeleteOne(item._id)}>
                    Deletar
                  </CustomButton>
                </StyledTD>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageContainer>
  );
};

export default Users;
