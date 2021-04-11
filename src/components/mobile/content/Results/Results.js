import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { FlexContainer, SizedBox } from "@layouts";
import { useViewportInfo } from "@hooks";
import { camelize } from "@utils";

import { parseData } from "../../../../../data/parsedData";
import { translate } from "../../../../config/dictionary";
import { websitePages } from "../../../../config/pages";

import testResults from "../../../../config/testResults";
import GlobalTestResult from "./GlobalTestResult";
import SectionTestResult from "./SectionTestResult";
import ItemTestResult from "./ItemTestResult";

// TODO: Refactor the code removing data logic. I created a DataProvider and DataContext to let data available through the app.

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
        if (item.resultado === testResults.passed) {
          let nextResult = { ...dataSectionParsed[pageEN]["results"] };
          counterPassed = counterPassed + 1;
          nextResult = { ...nextResult, passed: counterPassed };
          dataSectionParsed[pageEN]["results"] = nextResult;
        }

        if (item.resultado === testResults.improvement) {
          let nextResult = { ...dataSectionParsed[pageEN]["results"] };
          counterImprovement = counterImprovement + 1;
          nextResult = { ...nextResult, improvement: counterImprovement };
          dataSectionParsed[pageEN]["results"] = nextResult;
        }

        if (item.resultado === testResults.notPassed) {
          let nextResult = { ...dataSectionParsed[pageEN]["results"] };
          counterNotPassed = counterNotPassed + 1;
          nextResult = { ...nextResult, notPassed: counterNotPassed };
          dataSectionParsed[pageEN]["results"] = nextResult;
        }

        if (item.resultado === testResults.notTested) {
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

      if (item.resultado === testResults.passed) {
        let nextResult = { ...testTotalResults["results"] };
        counterPassed = counterPassed + 1;
        nextResult = { ...nextResult, passed: counterPassed };
        testTotalResults["results"] = nextResult;
      }

      if (item.resultado === testResults.improvement) {
        let nextResult = { ...testTotalResults["results"] };
        counterImprovement = counterImprovement + 1;
        nextResult = { ...nextResult, improvement: counterImprovement };
        testTotalResults["results"] = nextResult;
      }

      if (item.resultado === testResults.notPassed) {
        let nextResult = { ...testTotalResults["results"] };
        counterNotPassed = counterNotPassed + 1;
        nextResult = { ...nextResult, notPassed: counterNotPassed };
        testTotalResults["results"] = nextResult;
      }

      if (item.resultado === testResults.notTested) {
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

  console.log(sectionShown, showDetails);

  return (
    // <FadeIn>
    <FlexContainer column pl="32" pr="32" w={width}>
      {showDetails === false && (
        <>
          <GlobalTestResult
            total={testTotalResults.results.total}
            passed={
              testTotalResults.results.passed
                ? testTotalResults.results.passed
                : 0
            }
            notPassed={
              testTotalResults.results.notPassed
                ? testTotalResults.results.notPassed
                : 0
            }
            improvement={
              testTotalResults.results.improvement
                ? testTotalResults.results.improvement
                : 0
            }
            notTested={
              testTotalResults.results.notTested
                ? testTotalResults.results.notTested
                : 0
            }
          />
          <SizedBox h={48} />
          <SectionTestResult
            dataSectionParsed={dataSectionParsed}
            handleDetails={handleDetails}
          />
        </>
      )}
      {showDetails === true && (
        <ItemTestResult
          dataSectionParsed={dataSectionParsed}
          sectionShown={sectionShown}
          handleDetails={handleDetails}
        />
      )}
    </FlexContainer>
    // </FadeIn>
  );
};

export default ResultsStats;
