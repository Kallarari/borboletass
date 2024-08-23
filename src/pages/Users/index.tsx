"use client";
import React, { useEffect, useState } from "react";
import {
  ButtonsContainer,
  CustomButton,
  StyledTD,
  Container,
  UsersContainer,
} from "../../styles/Users.module";
import axios from "axios";
import { IUser } from "@/types/IUser";
import PageContainer from "@/components/PageContainer";
import PagesTitle from "@/components/PagesTitle";
import UserCard from "@/components/UserCard";
import DefaultButton from "@/components/DefaultButton";
import { useRouter } from "next/router";

const Users: React.FC = () => {
  const router = useRouter();
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
    <PageContainer hasBackButton>
      <Container>
        <PagesTitle>Lista de pacientes</PagesTitle>
        {/*  <ButtonsContainer>
          <button onClick={handleGetAllUsers}>buscar todos </button>
          <button onClick={handleCreateUser}>criar um</button>
          <input onChange={(e) => setInputText(e.target.value)}></input>
        </ButtonsContainer> */}

        {userList.length == 0 ? (
          <p>Sem usuários cadastrados</p>
        ) : (
          <UsersContainer>
            {userList.map((item) => (
              <UserCard key={item._id} user={item} />
            ))}
          </UsersContainer>
        )}
        <DefaultButton
          onClick={() => {
            router.push("/Users/Edition");
          }}
          label="Criar uma nova"
        ></DefaultButton>
      </Container>
      {/*   <h2>Usuários</h2>
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
        </table> */}
    </PageContainer>
  );
};

export default Users;
