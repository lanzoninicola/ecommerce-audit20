const dictionary = [
  {
    pt: "PÁGINA INICIAL",
    en: "HOME PAGE",
  },

  {
    pt: "CARRINHO",
    en: "CART",
  },

  {
    pt: "FERRAMENTA DE BUSCA",
    en: "PRODUCT SEARCH",
  },

  {
    pt: "LEGAL",
    en: "LEGAL",
  },

  {
    pt: "LISTA DE PRODUTOS DE UMA CATEGORIA",
    en: "PRODUCT CATEGORY LIST",
  },

  {
    pt: "PÁGINA DE CONFIRMAÇÃO",
    en: "CONFIRMATION PAGE",
  },

  {
    pt: "PÁGINA DE DETALHES DO PRODUTO",
    en: "PRODUCT DETAILS PAGE",
  },

  {
    pt: "PÁGINAS DA CATEGORIA DE PRODUTOS",
    en: "CATEGORY PRODUCT PAGE",
  },

  {
    pt: "RASTREAMENTO E RELATÓRIOS",
    en: "TRACKING AND METRICS",
  },
];

export function translate(term, options = { lang: "en" }) {
  let translation = "";

  dictionary.map((item, i) => {
    if (item.pt.toLowerCase() == term.toLowerCase()) {
      translation = dictionary[i][options.lang];
    }
  });

  return translation;
}
