import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import DataContext from "./DataContext";
import { removeNodeProp } from "./lib/removeNodeProp";

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
  const allAuditRecords = removeNodeProp(allAuditRecordsNodes);

  return (
    <DataContext.Provider value={allAuditRecords}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
