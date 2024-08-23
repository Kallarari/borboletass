import React from "react";
import { IDiaryCard } from "./interface";
import { CardContainer } from "./styles.module";
import { useRouter } from "next/router";

// import { Container } from './styles';

const DiaryCard: React.FC<IDiaryCard> = ({ diary }: IDiaryCard) => {
  const router = useRouter();
  return (
    <CardContainer
      onClick={() =>
        router.push(`/Diarys/View?id=${diary._id}`)
      }
    >
      {diary.title}
    </CardContainer>
  );
};

export default DiaryCard;
