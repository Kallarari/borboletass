import { IDiary } from "@/types/IDiary";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { EosIconsLoading } from "../../../../public/assets/components/LoadingCircle";
import PageContainer from "@/components/PageContainer";
import PagesTitle from "@/components/PagesTitle";
import {
  Container,
  DataSection,
  DataText,
  Section,
  StyledContent,
  StyledLabel,
  StyledTitle,
} from "@/styles/DiarysView.module";

const View: React.FC = () => {
  const [diaryData, setDiaryData] = useState<IDiary>();
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const params: { id: string | null } = { id: searchParams.get("id") };

  useEffect(() => {
    if (params.id)
      axios
        .get<IDiary>(`../api/diary/GetOne?id=${params.id}`)
        .then((res) => setDiaryData(res.data))
        .catch((err) => console.log(err));
    setIsLoading(false);
  }, [params.id]);
  return (
    <PageContainer hasBackButton>
      <Container>
        <PagesTitle>Diário</PagesTitle>
        {isLoading ? (
          <EosIconsLoading />
        ) : (
          <>
            <DataSection>
              <DataText>
                Dia:{diaryData?.data.substring(0, 10).replaceAll("-", "/")}
              </DataText>
              <DataText>Hora:{diaryData?.data.substring(11, 16)}</DataText>
            </DataSection>
            <Section>
              <StyledTitle>{diaryData?.title}</StyledTitle>
              <StyledContent>{diaryData?.content}</StyledContent>
            </Section>
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default View;
