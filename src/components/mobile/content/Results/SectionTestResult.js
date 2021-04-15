import * as React from "react";

import { Title, Text } from "@typography";
import { GridFixedContainer } from "@layouts";

import DataContext from "../../../../data/DataContext";
import analyticalUnits from "../../../../config/analyticalUnits";
import ResultCard from "../../Cards/ResultCard";

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
    <div>
      <Title as="h4" weight="600" mb="16">
        Resultado para cada tapa de Jornada do Cliente
      </Title>

      {listPagesOfJornadaDoCliente.map((pageName, index) => {
        return renderResultCard(pageName, index);
      })}

      <Title as="h4" weight="600" mb="16">
        Resultado com referência a capacidade de analisar o comportamento do
        visitante
      </Title>

      {listPagesOfTrackingMetrics.map((pageName, index) => {
        return renderResultCard(pageName, index);
      })}

      <Title as="h4" weight="600" mb="16">
        Resultado com referência a conformidade as leis
      </Title>

      {listPagesOfLegal.map((pageName, index) => {
        return renderResultCard(pageName, index);
      })}
    </div>
  );
};

export default SectionTestResult;
