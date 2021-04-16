import * as React from "react";

import { Text, Title } from "@typography";
import { GridFixedContainer, FlexContainer, SizedBox } from "@layouts";

import Card from "../../Cards/CardWrapper";
import {
  PassedIcon,
  NotPassedIcon,
  ImprovementIcon,
  NotTestedIcon,
} from "../../Icons/TestResults/TestResults";
import { HighImpact, MediumImpact, LowImpact } from "../../Icons/Impact/Impact";
import testResults from "../../../../data/enums/testResults";
import { PrimaryOutlineButton } from "../../Buttons/Buttons";

const ResultTestIcon = ({ result }) => {
  if (result === testResults.passed) {
    return <PassedIcon />;
  }

  if (result === testResults.improvement) {
    return <ImprovementIcon />;
  }

  if (result === testResults.notPassed) {
    return <NotPassedIcon />;
  }

  if (result === testResults.notTested) {
    return <NotTestedIcon />;
  }
};

const ResultImpactIcon = ({ result }) => {
  if (result === "ALTO") {
    return <HighImpact />;
  }

  if (result === "MEDIO") {
    return <MediumImpact />;
  }

  if (result === "BAIXO") {
    return <LowImpact />;
  }
};

const SectionTitle = ({ children }) => {
  return (
    <Text size={{ mobile: 14, laptop: 18 }} weight="600" left>
      {children}
    </Text>
  );
};

const SectionText = ({ children }) => {
  return (
    <Text size={{ mobile: 12, laptop: 16 }} left>
      {children}
    </Text>
  );
};

const ItemTestResults = ({ itemData, index }) => {
  const [shown, setShown] = React.useState(false);
  const [showDetailsItemId, setShowDetailsItemId] = React.useState(false);

  function handleShowContent(id) {
    setShown(!shown);
    setShowDetailsItemId(id);
  }

  return (
    <SizedBox>
      <Card pt="20" pl="20" pr="20" pb="20">
        <div
          style={{
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
        >
          <GridFixedContainer
            columns="1fr .25fr .25fr"
            rows="1fr"
            pt="8"
            pb="8"
            centerY
          >
            <FlexContainer column>
              <Title
                as="h4"
                // size={{ mobile: 14, laptop: 18 }}
                weight="600"
                left
                color="orange"
              >
                {itemData.subcategoria}
              </Title>
              <SectionText>{itemData.categoria}</SectionText>
            </FlexContainer>

            <ResultImpactIcon result={itemData.impacto} />
            <ResultTestIcon result={itemData.resultado} />
          </GridFixedContainer>
          <FlexContainer column>
            <SectionTitle>Descrição</SectionTitle>
            <SectionText>{itemData.descricao}</SectionText>

            {shown === true && showDetailsItemId === index && (
              <SizedBox>
                <SectionTitle>Informações adicionais</SectionTitle>
                <SectionText>{itemData.informacoesadicionais}</SectionText>
                <SectionTitle>Links úteis</SectionTitle>

                <SectionText>{itemData.linkuteis}</SectionText>
                <SectionTitle>Comentários</SectionTitle>
                <SectionText>{itemData.comentarios}</SectionText>
              </SizedBox>
            )}
            <SectionTitle>Recomendações</SectionTitle>

            <SectionText>{itemData.recomendacoes}</SectionText>
          </FlexContainer>
          <FlexContainer row centerX centerY>
            <PrimaryOutlineButton
              buttonStyle={{
                w: "250",
                h: "30",
                mt: "8",
                mb: "8",
              }}
              onClick={() => handleShowContent(index)}
              text={
                shown && showDetailsItemId === index
                  ? "esconder"
                  : "veja os comentarios"
              }
              textStyle={{
                size: { mobile: 12, laptop: 16 },
                color: "orange",
                weight: "800",
              }}
            ></PrimaryOutlineButton>
          </FlexContainer>
        </div>
      </Card>

      <SizedBox h={16} />
    </SizedBox>
  );
};

export default ItemTestResults;
