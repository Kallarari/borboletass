import { IDiary } from "@/types/IDiary";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { EosIconsLoading } from "../../../../public/assets/components/LoadingCircle";
import PageContainer from "@/components/PageContainer";
import { Icon } from "@iconify/react";
import PagesTitle from "@/components/PagesTitle";
import {
  Container,
  DataSection,
  DataText,
  HappinesCard,
  HappinessContainer,
  Section,
  StyledContent,
  StyledLabel,
  StyledSpan,
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
            
            <HappinessContainer>
              {diaryData?.happiness == 0 && (
                <HappinesCard isClicked>
                  <Icon
                    width={40}
                    color="#242a67"
                    icon="ant-design:smile-filled"
                  />
                  <StyledSpan>Feliz</StyledSpan>
                </HappinesCard>
              )}
              {diaryData?.happiness == 1 && (
                <HappinesCard isClicked>
                  <Icon width={38} color="#fa1" icon="fa6-solid:face-meh" />
                  <StyledSpan>Indiferente</StyledSpan>
                </HappinesCard>
              )}
              {diaryData?.happiness == 2 && (
                <HappinesCard isClicked>
                  <Icon width={40} color="#302f2f" icon="mingcute:sad-fill" />
                  <StyledSpan>Triste</StyledSpan>
                </HappinesCard>
              )}
              {diaryData?.happiness == 3 && (
                <HappinesCard isClicked>
                  <Icon
                    width={40}
                    color="#242a67"
                    icon="material-symbols:sentiment-calm"
                  />
                  <StyledSpan>Calmo</StyledSpan>
                </HappinesCard>
              )}
              {diaryData?.happiness == 4 && (
                <HappinesCard isClicked>
                  <Icon
                    width={38}
                    color="#fa1"
                    icon="material-symbols:sentiment-stressed-rounded"
                  />
                  <StyledSpan>Em pânico</StyledSpan>
                </HappinesCard>
              )}
              {diaryData?.happiness == 5 && (
                <HappinesCard isClicked>
                  <Icon
                    width={40}
                    color="#302f2f"
                    icon="material-symbols:sentiment-dissatisfied-rounded"
                  />
                  <StyledSpan>Confuso</StyledSpan>
                </HappinesCard>
              )}
            </HappinessContainer>
          </>
        )}
      </Container>
    </PageContainer>
  );
};

export default View;
