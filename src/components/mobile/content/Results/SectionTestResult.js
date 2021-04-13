import * as React from "react";

import { Title, Text } from "@typography";
import { SizedBox, GridFixedContainer } from "@layouts";
import { objectKeys } from "@utils";

import ResultCard from "../../Cards/ResultCard";

const SectionTestResult = ({ dataSectionParsed, handleDetails }) => {
  console.log(dataSectionParsed);

  function renderResultCard(item, i) {
    const value_pt = dataSectionParsed[item].value_pt;
    const pageDescription = dataSectionParsed[item].descricao;
    const passed = dataSectionParsed[item].results.passed;
    const improvement = dataSectionParsed[item].results.improvement;
    const notPassed = dataSectionParsed[item].results.notPassed;
    const notTested = dataSectionParsed[item].results.notTested;
    return (
      <GridFixedContainer columns="1fr" rAuto key={i} mb="16">
        <ResultCard
          title={value_pt}
          description={pageDescription}
          passed={passed ? passed : 0}
          improvement={improvement ? improvement : 0}
          notPassed={notPassed ? notPassed : 0}
          notTested={notTested ? notTested : 0}
          handleDetails={() => handleDetails(value_pt)}
        >
          <Text center size={{ mobile: 12 }} mt="8" weight="600" color="orange">
            clique para ver os detalhes
          </Text>
        </ResultCard>
      </GridFixedContainer>
    );
  }

  return (
    <>
      <Title as="h4" weight="600" mb="16">
        Resultado para cada tapa de Jornada do Cliente
      </Title>

      {objectKeys(dataSectionParsed).map((item, i) => {
        if (dataSectionParsed[item].macroCategoria === "customerJourney") {
          return renderResultCard(item, i);
        }
      })}

      <Title as="h4" weight="600" mb="16">
        Resultado com referência a capacidade de analisar o comportamento do
        visitante
      </Title>

      {objectKeys(dataSectionParsed).map((item, i) => {
        if (dataSectionParsed[item].macroCategoria === "analytics") {
          return renderResultCard(item, i);
        }
      })}

      <Title as="h4" weight="600" mb="16">
        Resultado com referência a conformidade as leis
      </Title>

      {objectKeys(dataSectionParsed).map((item, i) => {
        if (dataSectionParsed[item].macroCategoria === "legal") {
          return renderResultCard(item, i);
        }
      })}
    </>
  );
};

export default SectionTestResult;
