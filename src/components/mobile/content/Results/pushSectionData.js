function pushSectionData(page) {
  const dataParsed = {};

  let sectionTotal = 0;
  let counterPassed = 0;
  let counterImprovement = 0;
  let counterNotPassed = 0;
  let counterNotTested = 0;

  let pageEN = translate(page);
  pageEN = pageEN.toLowerCase();
  pageEN = camelize(pageEN);

  dataParsed[pageEN] = {};
  dataParsed[pageEN]["value_pt"] = page;
  dataParsed[pageEN]["results"] = {};
  dataParsed[pageEN]["records"] = [];

  allAuditRecords.forEach((item, i) => {
    if (item.pagina === page) {
      let nextResult = { ...dataParsed[pageEN]["results"] };
      nextResult = { ...nextResult, total: sectionTotal++ };

      dataParsed[pageEN]["results"] = nextResult;

      if (item.resultado === "Passou") {
        let nextResult = { ...dataParsed[pageEN]["results"] };
        nextResult = { ...nextResult, passed: counterPassed++ };

        dataParsed[pageEN]["results"] = nextResult;
      }

      if (item.resultado === "Oportunidade de Melhorar") {
        let nextResult = { ...dataParsed[pageEN]["results"] };
        nextResult = { ...nextResult, improvement: counterImprovement++ };

        dataParsed[pageEN]["results"] = nextResult;
      }

      if (item.resultado === "Não Passou") {
        let nextResult = { ...dataParsed[pageEN]["results"] };
        nextResult = { ...nextResult, notPassed: counterNotPassed++ };
        dataParsed[pageEN]["results"] = nextResult;
      }

      if (item.resultado === "Não Testado") {
        let nextResult = { ...dataParsed[pageEN]["results"] };
        nextResult = { ...nextResult, notTested: counterNotTested++ };
        dataParsed[pageEN]["results"] = nextResult;
      }

      dataParsed[pageEN]["records"].push({
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

  return dataParsed;
}

export default pushSectionData;
