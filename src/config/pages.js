// export const websitePages = [
//   "PÁGINA INICIAL",
//   "FERRAMENTA DE BUSCA",
//   "PÁGINAS DA CATEGORIA DE PRODUTOS",
//   "LISTA DE PRODUTOS DE UMA CATEGORIA",
//   "PÁGINA DE DETALHES DO PRODUTO",
//   "CARRINHO",
//   "PÁGINA DE CONFIRMAÇÃO",
//   "RASTREAMENTO E RELATÓRIOS",
//   "LEGAL",
// ];

export const analiticalUnits = {
  customerJourney: {
    homepage: {
      name: "PÁGINA INICIAL",
      description:
        "A página inicial pode ser pensada como a vitrine para seu site de comércio eletrônico. Ela precisa de refletir quem você é e o que você vende. É aqui que você desenha e envolve seus visitantes para veja e entregar seus produtos.",
      parent: "customerJourney",
    },
    websiteSearchEngine: {
      name: "FERRAMENTA DE BUSCA",
      description:
        "O trabalho de uma busca no site é encontrar os produtos que o visitante está procurando, combinando o as palavras-chave de busca dos visitantes com os melhores resultados de produtos em sua loja. Visitantes que utilizam o site A pesquisa tem 216% mais probabilidade de se converter em clientes pagantes do que os visitantes regulares. - WebInc",
      parent: "customerJourney",
    },
    categoriesPage: {
      name: "PÁGINAS DA CATEGORIA DE PRODUTOS",
      description:
        "Suas páginas de categoria de produtos são importantes para seu site de comércio eletrônico e funcionam como um centro para produtos filtrantes na viagem de compra do cliente. Um produto otimizado e bem projetado A página da categoria de produtos ajuda a contribuir para uma boa experiência de compra, melhora a busca e leva ao aumento das vendas.",
      parent: "customerJourney",
    },
    categoryProductList: {
      name: "LISTA DE PRODUTOS DE UMA CATEGORIA",
      description:
        "A página de listagem de produtos lista vários produtos dentro de uma categoria específica, com cada produto representado por um nome de produto, foto e preço. Uma página de listagem de produtos bem desenhada aumentará o envolvimento, aumentará os cliques nas páginas de produtos individuais e impulsionará as vendas.",
      parent: "customerJourney",
    },
    productDetailsPage: {
      name: "PÁGINA DE DETALHES DO PRODUTO",
      description:
        "A página de produtos é uma das páginas mais importantes de um site de comércio eletrônico. Seu principal objetivo é atuar como vendedor de seus produtos. É freqüentemente na página de produto onde os usuários decidem se querem ou não comprar o produto. Faça isso corretamente e você verá um aumento significativo tanto em seu tráfego quanto em suas vendas.",
      parent: "customerJourney",
    },
    cart: {
      name: "CARRINHO",
      description:
        "Um processo otimizado de carrinho e checkout facilita ao máximo o gerenciamento de produtos no carrinho e checkout com sucesso, evitando ao mesmo tempo qualquer coisa que possa levar o visitante a abandonar seu pedido.",
      parent: "customerJourney",
    },
    confirmationPage: {
      name: "PÁGINA DE CONFIRMAÇÃO",
      description:
        "Além de agradecer a seus clientes e mostrar-lhes os detalhes de seus pedidos, sua página de confirmação é uma grande oportunidade para aumentar a retenção de clientes e obter mais valor de seus clientes. Infelizmente, a maioria das lojas de eCommerce desperdiça esta oportunidade. Siga estes passos acionáveis para que você não o faça!",
      parent: "customerJourney",
    },
  },
  analytics: {
    trackMetrics: {
      name: "RASTREAMENTO E RELATÓRIOS",
      description:
        "Não se pode medir o que não se rastreia. Se não se pode medir, não se pode melhorar. Use a análise para rastrear e analisar as percepções dos visitantes. Estabeleça metas para medir e otimizar o desempenho. Aproveite-os todos juntos para impulsionar o crescimento e aumentar sua receita",
      parent: "analytics",
    },
  },

  legal: {
    legal: {
      name: "LEGAL",
      description:
        "Seus documentos legais devem cobrir todos os detalhes em torno dos termos e condições que o comprador entra quando visita, usa, compra e processa reembolsos a partir de seu site. Proteja seu negócio assegurando que seu site esteja em conformidade com as leis, regras e regulamentos nacionais e internacionais.",
      parent: "legal",
    },
  },
};
