import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Title, Text, SmallText } from "@typography";
import { FlexContainer, GridFixedContainer, SizedBox } from "@layouts";
import { FadeIn } from "@animations";
import { useViewportInfo } from "@hooks";
import { camelize, objectKeys } from "@utils";

import { parseData } from "../../../../../data/parsedData";
import { translate } from "../../../../config/dictionary";
import { websitePages } from "../../../../config/pages";

import ResultCard from "./ResultCard";
import Card from "../../Card/Card";

const CardData = ({ number, description }) => {
  return (
    <Card>
      <FlexContainer column centerX centerY>
        <Text center color="orange" weight="600" size={{ mobile: 32 }}>
          {number}
        </Text>
        <SmallText size={{ mobile: 10 }} center weight="600">
          {description}
        </SmallText>
      </FlexContainer>
    </Card>
  );
};

const ResultsStats = () => {
  const { width } = useViewportInfo();
  const [showDetails, setShowDetails] = React.useState(false);
  const [sectionShown, setSectionShown] = React.useState(null);

  const data = useStaticQuery(graphql`
    query resultsStats {
      allAuditRecords: allGoogleSheetRelatorioRow {
        edges {
          node {
            id
            pagina
            categoria
            subcategoria
            descricao
            informacoesadicionais
            linksuteis
            impacto
            comentarios
            resultado
            recomendacoes
            prioridade
          }
        }
      }
    }
  `);

  const allAuditRecordsNodes = data.allAuditRecords.edges;

  const allAuditRecords = parseData(allAuditRecordsNodes);

  let dataSectionParsed = {};

  function pushSectionData(page) {
    let counterPassed = 0;
    let counterImprovement = 0;
    let counterNotPassed = 0;
    let counterNotTested = 0;

    let pageEN = translate(page);
    pageEN = pageEN.toLowerCase();
    pageEN = camelize(pageEN);

    dataSectionParsed[pageEN] = {};
    dataSectionParsed[pageEN]["value_pt"] = page;
    dataSectionParsed[pageEN]["results"] = {};
    dataSectionParsed[pageEN]["records"] = [];

    allAuditRecords.forEach((item, i) => {
      if (item.pagina === page) {
        if (item.resultado === "Passou") {
          let nextResult = { ...dataSectionParsed[pageEN]["results"] };
          counterPassed = counterPassed + 1;
          nextResult = { ...nextResult, passed: counterPassed };
          dataSectionParsed[pageEN]["results"] = nextResult;
        }

        if (item.resultado === "Oportunidade de Melhorar") {
          let nextResult = { ...dataSectionParsed[pageEN]["results"] };
          counterImprovement = counterImprovement + 1;
          nextResult = { ...nextResult, improvement: counterImprovement };
          dataSectionParsed[pageEN]["results"] = nextResult;
        }

        if (item.resultado === "Não Passou") {
          let nextResult = { ...dataSectionParsed[pageEN]["results"] };
          counterNotPassed = counterNotPassed + 1;
          nextResult = { ...nextResult, notPassed: counterNotPassed };
          dataSectionParsed[pageEN]["results"] = nextResult;
        }

        if (item.resultado === "Não Testado") {
          let nextResult = { ...dataSectionParsed[pageEN]["results"] };
          counterNotTested = counterNotTested + 1;
          nextResult = { ...nextResult, notTested: counterNotTested };
          dataSectionParsed[pageEN]["results"] = nextResult;
        }

        dataSectionParsed[pageEN]["records"].push({
          id: item.id,
          pagina: item.pagina,
          categoria: item.categoria,
          subcategoria: item.subcategoria,
          descricao: item.descricao,
          informacoesadicionais: item.informacoesadicionais,
          linkuteis: item.linkuteis,
          impacto: item.impacto,
          comentarios: item.comentarios,
          resultado: item.resultado,
          recomendacoes: item.recomendacoes,
          prioridade: item.prioridade,
        });
      }
    });
  }

  let testTotalResults = {};

  function resultTotalTestData() {
    let counterTotal = 0;
    let counterPassed = 0;
    let counterImprovement = 0;
    let counterNotPassed = 0;
    let counterNotTested = 0;

    testTotalResults["results"] = {};

    allAuditRecords.forEach((item, i) => {
      let nextResult = { ...testTotalResults["results"] };
      counterTotal = counterTotal + 1;
      nextResult = { ...nextResult, total: counterTotal };
      testTotalResults["results"] = nextResult;

      if (item.resultado === "Passou") {
        let nextResult = { ...testTotalResults["results"] };
        counterPassed = counterPassed + 1;
        nextResult = { ...nextResult, passed: counterPassed };
        testTotalResults["results"] = nextResult;
      }

      if (item.resultado === "Oportunidade de Melhorar") {
        let nextResult = { ...testTotalResults["results"] };
        counterImprovement = counterImprovement + 1;
        nextResult = { ...nextResult, improvement: counterImprovement };
        testTotalResults["results"] = nextResult;
      }

      if (item.resultado === "Não Passou") {
        let nextResult = { ...testTotalResults["results"] };
        counterNotPassed = counterNotPassed + 1;
        nextResult = { ...nextResult, notPassed: counterNotPassed };
        testTotalResults["results"] = nextResult;
      }

      if (item.resultado === "Não Testado") {
        let nextResult = { ...testTotalResults["results"] };
        counterNotTested = counterNotTested + 1;
        nextResult = { ...nextResult, notTested: counterNotTested };
        testTotalResults["results"] = nextResult;
      }
    });
  }

  function handleDetails(page) {
    console.log("clicked");
    setShowDetails(true);
    let pageEN = translate(page);
    pageEN = pageEN.toLowerCase();
    pageEN = camelize(pageEN);

    setSectionShown(pageEN);
  }

  websitePages.map((item, i) => {
    pushSectionData(item);
  });

  resultTotalTestData();

  console.log(testTotalResults);

  return (
    // <FadeIn>
    <FlexContainer column pl="32" pr="32" w={width}>
      {showDetails === false && (
        <>
          <Title as="h4" weight="600" mb="16">
            Resultado total
          </Title>
          <ResultCard
            title="Total"
            passed={
              testTotalResults.results.passed
                ? testTotalResults.results.passed
                : 0
            }
            improvement={
              testTotalResults.results.improvement
                ? testTotalResults.results.improvement
                : 0
            }
            notPassed={
              testTotalResults.results.notPassed
                ? testTotalResults.results.notPassed
                : 0
            }
            notTested={
              testTotalResults.results.notTested
                ? testTotalResults.results.notTested
                : 0
            }
          />
          <SizedBox h={24} />
          <FlexContainer column>
            <Text size={{ mobile: 16 }} mb="4">
              {`${
                (testTotalResults.results.passed /
                  testTotalResults.results.total) *
                100
              }% dos elementos passou a analisi e não são necessárias atividade`}
            </Text>
            <Text size={{ mobile: 16 }} mb="4">
              {`${
                (testTotalResults.results.improvement /
                  testTotalResults.results.total) *
                100
              }% dos elementos precisa ser ainda melhorado`}
            </Text>

            <Text size={{ mobile: 16 }} mb="4">
              {`${
                (testTotalResults.results.notPassed /
                  testTotalResults.results.total) *
                100
              }% dos elementos precisa de nova implementação ou mudança radical`}
            </Text>

            <Text size={{ mobile: 16 }} mb="4">
              {`${
                (testTotalResults.results.notTested /
                  testTotalResults.results.total) *
                100
              }% dos elementos não foi testada porque não disponivel no momento da
          verifica`}
            </Text>
          </FlexContainer>
          <SizedBox h={48} />

          <Title as="h4" weight="600" mb="16">
            Resultado para cada pagina do site
          </Title>

          {objectKeys(dataSectionParsed).map((item, i) => {
            const value_pt = dataSectionParsed[item].value_pt;
            const passed = dataSectionParsed[item].results.passed;
            const improvement = dataSectionParsed[item].results.improvement;
            const notPassed = dataSectionParsed[item].results.notPassed;
            const notTested = dataSectionParsed[item].results.notTested;
            return (
              <>
                <ResultCard
                  key={i}
                  title={value_pt}
                  passed={passed ? passed : 0}
                  improvement={improvement ? improvement : 0}
                  notPassed={notPassed ? notPassed : 0}
                  notTested={notTested ? notTested : 0}
                  handleDetails={() => handleDetails(value_pt)}
                >
                  <SizedBox h="8" />
                  <Text center size={{ mobile: 12 }}>
                    clique para ver detalhes
                  </Text>
                </ResultCard>
                <SizedBox h={16} />
              </>
            );
          })}
        </>
      )}
      {showDetails === true && (
        <>
          {objectKeys(dataSectionParsed[sectionShown]).map((item, i) => {
            const value_pt = dataSectionParsed[item].value_pt;
            const passed = dataSectionParsed[item].results.passed;
            const improvement = dataSectionParsed[item].results.improvement;
            const notPassed = dataSectionParsed[item].results.notPassed;
            const notTested = dataSectionParsed[item].results.notTested;
            return (
              <>
                <ResultCard
                  key={i}
                  title={value_pt}
                  passed={passed ? passed : 0}
                  improvement={improvement ? improvement : 0}
                  notPassed={notPassed ? notPassed : 0}
                  notTested={notTested ? notTested : 0}
                  onClick={() => handleDetails(value_pt)}
                >
                  <SizedBox h="8" />
                  <Text center size={{ mobile: 12 }}>
                    clique para ver detalhes
                  </Text>
                </ResultCard>
                <SizedBox h={16} />
              </>
            );
          })}
        </>
      )}
    </FlexContainer>
    // </FadeIn>
  );
};

export default ResultsStats;
