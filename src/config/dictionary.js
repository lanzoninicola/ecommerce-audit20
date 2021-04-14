function dictionary() {
  const _dictionary = [
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

  function translate(term, options = { lang: "en" }) {
    let translation = "";

    _dictionary.map((item, i) => {
      if (item.pt.toLowerCase() == term.toLowerCase()) {
        translation = dictionary[i][options.lang];
      }
    });

    return translation;
  }

  function all() {
    return _dictionary;
  }

  return {
    all: () => all(),
    translate: (term, options) => translate(term, options),
  };
}
