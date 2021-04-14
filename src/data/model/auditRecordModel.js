function auditRecordModel(item) {
  return {
    id: item.node.id,
    pagina: item.node.pagina,
    categoria: item.node.categoria,
    subcategoria: item.node.subcategoria,
    descricao: item.node.descricao,
    informacoesadicionais: item.node.informacoesadicionais,
    linkuteis: item.node.linkuteis,
    impacto: item.node.impacto,
    comentarios: item.node.comentarios,
    resultado: item.node.resultado,
    recomendacoes: item.node.recomendacoes,
    prioridade: item.node.prioridade,
  };
}

export default auditRecordModel;
