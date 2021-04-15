import * as React from "react";

import { Title, Text } from "@typography";
import {
  GridFixedContainer,
  GridFluidContainer,
  FlexContainer,
} from "@layouts";

import DataContext from "../../../../data/DataContext";
import analyticalUnits from "../../../../config/analyticalUnits";
import ResultCard from "../../Cards/ResultCard";

const SectionTitle = ({ children }) => {
  return (
    <Title as="h4" weight="600" mb="16">
      {children}
    </Title>
  );
};

const SectionTestResult = ({ handleDetails }) => {
  const dataContext = React.useContext(DataContext);
  const _analyticalUnits = analyticalUnits();
  const listPagesOfJornadaDoCliente = _analyticalUnits.getListPagesOfAnalyticalUnit(
    "customerJourney"
  );
  const listPagesOfTrackingMetrics = _analyticalUnits.getListPagesOfAnalyticalUnit(
    "analytics"
  );
  const listPagesOfLegal = _analyticalUnits.getListPagesOfAnalyticalUnit(
    "analytics"
  );

  function renderResultCard(pageName, i) {
    const pageDescription = _analyticalUnits.getDescriptionOfPage(pageName);

    const {
      passed,
      improvement,
      notPassed,
      notTested,
    } = dataContext.allTestResultOfPage(pageName);

    return (
      <GridFixedContainer columns="1fr" rAuto key={i} mb="16">
        <ResultCard
          title={pageName}
          description={pageDescription}
          passed={passed ? passed : 0}
          improvement={improvement ? improvement : 0}
          notPassed={notPassed ? notPassed : 0}
          notTested={notTested ? notTested : 0}
          handleDetails={() => handleDetails(pageName)}
        >
          <Text center size={{ mobile: 12 }} mt="8" weight="600" color="orange">
            clique para ver os detalhes
          </Text>
        </ResultCard>
      </GridFixedContainer>
    );
  }

  return (
    <GridFluidContainer>
      <FlexContainer mb="32">
        <SectionTitle>
          Resultado para cada tapa de Jornada do Cliente
        </SectionTitle>

        {listPagesOfJornadaDoCliente.map((pageName, index) => {
          return renderResultCard(pageName, index);
        })}
      </FlexContainer>

      <FlexContainer mb="32">
        <SectionTitle>
          Resultado com referência a capacidade de analisar o comportamento do
          visitante
        </SectionTitle>

        {listPagesOfTrackingMetrics.map((pageName, index) => {
          return renderResultCard(pageName, index);
        })}
      </FlexContainer>

      <FlexContainer mb="32">
        <SectionTitle>
          Resultado com referência a conformidade as leis
        </SectionTitle>

        {listPagesOfLegal.map((pageName, index) => {
          return renderResultCard(pageName, index);
        })}
      </FlexContainer>
    </GridFluidContainer>
  );
};

export default SectionTestResult;
