import PageContainer from "@/components/PageContainer";
import PagesTitle from "@/components/PagesTitle";
import { ButtonsContainer, Container } from "@/styles/UserEdition.module";
import { IUser } from "@/types/IUser";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { EosIconsLoading } from "../../../../public/assets/components/LoadingCircle";
import DefaultInput from "@/components/DefaultInput";
import DefaultButton from "@/components/DefaultButton";

// import { Container } from './styles';

const Edition: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({
    name: "",
    password: "",
    _id: "",
    type: "user",
    userName: "",
  });
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [itensHasError, setItensHasError] = useState({
    name: false,
    password: false,
    userName: false,
  });
  const searchParams = useSearchParams();
  const params: { id: string | null } = { id: searchParams.get("id") };
  useEffect(() => {
    if (params.id)
      axios
        .get<IUser>(`../api/users/GetOne?id=${params.id}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    setIsLoading(false);
  }, [params.id]);
  function hanldeCreateUser() {
    if (user.userName == "")
      return setItensHasError((prev) => ({ ...prev, userName: true }));
    if (user.name == "")
      return setItensHasError((prev) => ({ ...prev, name: true }));
    if (user.password == "")
      return setItensHasError((prev) => ({ ...prev, password: true }));
    setItensHasError({
      name: false,
      password: false,
      userName: false,
    });
    axios
      .post("api/users/CreateNew", {
        userName: user.userName,
        name: user.name,
        password: user.password,
        type: user.type,
      })
      .then((res) => router.back())
      .catch((err) => router.back());
  }

  function handleDeleteOne(id: string) {
    axios
      .delete(`api/users/DeleteOne?id=${id}`)
      .then((res) => router.back())
      .catch((err) => router.back());
  }
  function handleUpdateOne(id: string) {
    axios
      .put(`../api/users/Update?id=${id}`, {
        name: user.name,
        password: user.password,
        userName: user.userName,
        type: user.type,
      })
      .then((res) => router.back())
      .catch((err) => router.back());
  }
  return (
    <PageContainer hasBackButton>
      <Container>
        <PagesTitle>Usuário</PagesTitle>
        {isLoading ? (
          <EosIconsLoading />
        ) : (
          <>
            <DefaultInput
              value={user.name}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
              hasError={itensHasError.name}
              label="Nome do paciente"
            ></DefaultInput>
            <DefaultInput
              value={user.userName}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, userName: e.target.value }))
              }
              hasError={itensHasError.userName}
              label="Nome do usuário"
            ></DefaultInput>
            <DefaultInput
              value={user.password}
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              hasError={itensHasError.password}
              label="Senha"
              type="password"
            ></DefaultInput>
            <ButtonsContainer>
              {params.id ? (
                <>
                  <DefaultButton
                    onClick={() => handleDeleteOne(params.id as string)}
                    label="Apagar"
                  ></DefaultButton>
                  <DefaultButton
                    onClick={() => handleUpdateOne(params.id as string)}
                    label="Salvar"
                  ></DefaultButton>
                </>
              ) : (
                <DefaultButton
                  onClick={() => hanldeCreateUser()}
                  label="Criar nova"
                ></DefaultButton>
              )}
            </ButtonsContainer>
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default Edition;
