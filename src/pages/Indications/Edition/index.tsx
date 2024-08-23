"use client";
import React, { useEffect, useState } from "react";

import {
  ButtonsContainer,
  Container,
  IndicationContainer,
} from "../../../styles/IndicationEdition.module";
import axios from "axios";
import { IIndication } from "@/types/IIndication";
import PageContainer from "@/components/PageContainer";
import PagesTitle from "@/components/PagesTitle";
import DefaultButton from "@/components/DefaultButton";
import { useParams, useSearchParams } from "next/navigation";
import { EosIconsLoading } from "../../../../public/assets/components/LoadingCircle";
import DefaultInput from "@/components/DefaultInput";
import { useRouter } from "next/router";
import DefaultTextArea from "@/components/DefaultTextArea";

const Edition: React.FC = () => {
  const router = useRouter();
  const [indication, setIndication] = useState<IIndication>({
    title: "",
    body: "",
    _id: "",
    date: "",
    imageLink: "",
  });
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [itensHasError, setItensHasError] = useState({
    title: false,
    link: false,
    body: false,
  });
  const searchParams = useSearchParams();
  const params:{id:string | null} = {id:searchParams.get('id')};
  useEffect(() => {
    if (params.id)
      axios
        .get<IIndication>(`../api/indications/GetOne?id=${params.id}`)
        .then((res) => setIndication(res.data))
        .catch((err) => console.log(err));
    setIsLoading(false);
  }, [params.id]);
  function handleCreateIndications() {
    if (indication.body == "")
      return setItensHasError((prev) => ({ ...prev, body: true }));
    if (indication.title == "")
      return setItensHasError((prev) => ({ ...prev, title: true }));
    if (indication.imageLink == "")
      return setItensHasError((prev) => ({ ...prev, link: true }));
    axios
      .post("../api/indications/CreateNew", {
        title: indication.title,
        body: indication.body,
        imageLink: indication.imageLink,
        date: new Date(),
      })
      .then((res) => router.back())
      .catch((err) => router.back());
  }

  function handleDeleteOne(id: string) {
    axios
      .delete(`../api/indications/DeleteOne?id=${id}`)
      .then((res) => router.back())
      .catch((err) => router.back());
  }
  function handleUpdateOne(id: string) {
    axios
      .put(`../api/indications/UpdateOne?id=${id}`, {
        title: indication.title,
        body: indication.body,
        ImageLink: indication.imageLink,
        date: new Date(),
      })
      .then((res) => router.back())
      .catch((err) => router.back());
  }
  return (
    <PageContainer hasBackButton>
      <Container>
        <PagesTitle>Indicação</PagesTitle>
        {isLoading ? (
          <EosIconsLoading />
        ) : (
          <>
            <DefaultInput
              value={indication.title}
              onChange={(e) =>
                setIndication((prev) => ({ ...prev, title: e.target.value }))
              }
              hasError={itensHasError.title}
              label="Título"
            ></DefaultInput>
            <DefaultInput
              value={indication.imageLink}
              onChange={(e) =>
                setIndication((prev) => ({ ...prev, imageLink: e.target.value }))
              }
              hasError={itensHasError.link}
              label="Link da imagem"
            ></DefaultInput>
            <DefaultTextArea
              value={indication.body}
              onChange={(e) =>
                setIndication((prev) => ({ ...prev, body: e.target.value }))
              }
              hasError={itensHasError.body}
              label="Corpo da indicação"
            ></DefaultTextArea>
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
                  onClick={() => handleCreateIndications()}
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
