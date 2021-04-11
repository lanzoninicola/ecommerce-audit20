import * as React from "react";

import { Text } from "@typography";
import { GridFixedContainer, FlexContainer, SizedBox } from "@layouts";
import { BaseButton } from "@buttons";

import Card from "../../Cards/CardWrapper";
import {
  PassedIcon,
  NotPassedIcon,
  ImprovementIcon,
  NotTestedIcon,
} from "../../Icons/TestResults/TestResults";
import { HighImpact, MediumImpact, LowImpact } from "../../Icons/Impact/Impact";
import Filters from "../../Filter/Filters";
import FilterButton from "../../Filter/FilterButton";
import testResults from "../../../../config/testResults";

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

const ItemTestResult = ({ dataSectionParsed, sectionShown }) => {
  const [shown, setShown] = React.useState(false);
  const [showDetailsItemId, setShowDetailsItemId] = React.useState(false);

  const sectionItems = [...dataSectionParsed[sectionShown].records];

  const itemsData = [...sectionItems];

  function handleShowContent(id) {
    setShown(!shown);
    setShowDetailsItemId(id);
  }

  return (
    <FlexContainer>
      {itemsData.map((item, i) => {
        // console.log(item);
        return (
          <SizedBox key={i}>
            <Card
              borderColor={
                item.resultado === "Não Passou"
                  ? "red"
                  : item.resultado === "Oportunidade de Melhorar"
                  ? "yellow"
                  : null
              }
            >
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
                  <FlexContainer columns>
                    <Text
                      size={{ mobile: 14 }}
                      weight="600"
                      left
                      color="orange"
                    >
                      {item.subcategoria}
                    </Text>
                    <Text size={{ mobile: 12 }} left>
                      {item.categoria}
                    </Text>
                  </FlexContainer>

                  <ResultImpactIcon result={item.impacto} />
                  <ResultTestIcon result={item.resultado} />
                </GridFixedContainer>
                <FlexContainer column>
                  <Text size={{ mobile: 12 }} weight="600" left>
                    Descrição
                  </Text>
                  <Text size={{ mobile: 12 }} left>
                    {item.descricao}
                  </Text>

                  {shown === true && showDetailsItemId === i && (
                    <SizedBox>
                      <Text size={{ mobile: 12 }} weight="600" left>
                        Informações adicionais
                      </Text>
                      <Text size={{ mobile: 12 }} left>
                        {item.informacoesadicionais}
                      </Text>
                      <Text size={{ mobile: 12 }} weight="600" left>
                        Links úteis
                      </Text>

                      <Text size={{ mobile: 12 }} left>
                        {item.linkuteis}
                      </Text>
                      <Text size={{ mobile: 12 }} weight="600" left>
                        Comentários
                      </Text>
                      <Text size={{ mobile: 12 }} left>
                        {item.comentarios}
                      </Text>
                    </SizedBox>
                  )}
                  <Text size={{ mobile: 12 }} weight="600" left>
                    Recomendações
                  </Text>

                  <Text size={{ mobile: 12 }} left>
                    {item.recomendacoes}
                  </Text>
                </FlexContainer>

                <BaseButton w="150" h="30" onClick={() => handleShowContent(i)}>
                  <Text size={{ mobile: 12 }}>
                    {shown && showDetailsItemId === i
                      ? "esconder"
                      : "veja os comentarios"}
                  </Text>
                </BaseButton>
              </div>
            </Card>
            <SizedBox h={16} />
          </SizedBox>
        );
      })}
      <FilterButton />
      <Filters />
    </FlexContainer>
  );
};

export default ItemTestResult;
