import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import DataContext from "./DataContext";
import auditRecordEntity from "../entity/auditRecordEntity";
import auditRecordModel from "../model/auditRecordModel";
import analyticalDatabase from "../lib/analyticalDatabase";

const DataProvider = ({ children }) => {
  const data = useStaticQuery(graphql`
    query pingoPongo {
      auditsRecords: allGoogleSheetRelatorioRow {
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

  const allAuditRecordsNodes = data.auditsRecords.edges;
  const auditRecordsSource = allAuditRecordsNodes.map((item) => {
    const _auditRecordModel = auditRecordModel(item);
    return auditRecordEntity(_auditRecordModel);
  });

  const auditRecordDatabase = analyticalDatabase(auditRecordsSource);

  return (
    <DataContext.Provider value={auditRecordDatabase}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
