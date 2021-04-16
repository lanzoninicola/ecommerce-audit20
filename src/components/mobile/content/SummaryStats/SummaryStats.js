import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { colorTheme } from "@colors/lib";
import { Title, Text, SmallText } from "@typography";
import { FlexContainer, GridFixedContainer, SizedBox } from "@layouts";
import { FadeIn } from "@animations";
import { useViewportInfo } from "@hooks";
import NumberWrapper from "../../NumberWrapper/NumberWrapper";

const Card = styled.div`
  border: none;
  border-radius: 8px;
  background: ${() => colorTheme("white")};
  width: 100%;
  box-shadow: ${({ noShadow }) => {
    if (noShadow) return null;
    return `rgba(0, 6, 36, 0) 0px 26px 24px -16px,
    rgba(0, 6, 36, 0.3) 0px 16px 24px -18px,
    rgba(0, 6, 36, 0.07) 0px 0px 10px 0px;`;
  }};
  padding: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

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

const SummaryStats = () => {
  const { width } = useViewportInfo();
  const data = useStaticQuery(graphql`
    query allAuditRecords {
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
      allHomePage: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "PÁGINA INICIAL" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      allCarrinho: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "CARRINHO" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      allFerramentaDeBusca: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "FERRAMENTA DE BUSCA" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      allLegal: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "LEGAL" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      allCategoryProduct: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "LISTA DE PRODUTOS DE UMA CATEGORIA" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      allConfirmationPage: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "PÁGINA DE CONFIRMAÇÃO" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      allProductDetails: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "PÁGINA DE DETALHES DO PRODUTO" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      allCategories: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "PÁGINAS DA CATEGORIA DE PRODUTOS" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      allTrackingMetrics: allGoogleSheetRelatorioRow(
        filter: { pagina: { eq: "RASTREAMENTO E RELATÓRIOS" } }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  const allAuditRecords = data.allAuditRecords.edges.length;
  const allHomePage = data.allHomePage.edges.length;
  const allCarrinho = data.allCarrinho.edges.length;
  const allFerramentaDeBusca = data.allFerramentaDeBusca.edges.length;
  const allLegal = data.allLegal.edges.length;
  const allCategoryProduct = data.allCategoryProduct.edges.length;
  const allConfirmationPage = data.allConfirmationPage.edges.length;
  const allProductDetails = data.allProductDetails.edges.length;

  const allCategories = data.allCategories.edges.length;
  const allTrackingMetrics = data.allTrackingMetrics.edges.length;

  return (
    <FadeIn>
      <FlexContainer
        column
        centerY
        centerX
        pl="32"
        pr="32"
        mb="24"
        w={width}
        wFixed
      >
        <Title as="h3" weight="600">
          Numeros dos elementos analizados
        </Title>

        <GridFixedContainer columns="1fr" rows="1fr" w100>
          <CardData number={allAuditRecords} description="TOTAIS" />
        </GridFixedContainer>
      </FlexContainer>

      <FlexContainer
        column
        centerY
        centerX
        pl="32"
        pr="32"
        mb="24"
        w={width}
        wFixed
      >
        <GridFixedContainer rAuto columns=".1fr 1fr" centerY>
          <NumberWrapper w="20" h="20">
            <Text size={{ mobile: 14 }} weight="600" color="orange" center>
              1
            </Text>
          </NumberWrapper>
          <Title as="h4" weight="600">
            por cada tapa da Jornada do Cliente
          </Title>
        </GridFixedContainer>
        <SmallText size={{ mobile: 10 }} mb="16">
          Em nessa analisi foi excluido outras 54 elementos analizados com
          referencia as possibilidade do site de ser incluido na primeira pagina
          do motor de busca
        </SmallText>
        <GridFixedContainer columns="1fr" rAuto>
          <GridFixedContainer columns="1fr 1fr" rows="1fr" w100>
            <CardData number={allHomePage} description="PÁGINA INICIAL" />
            <CardData
              number={allFerramentaDeBusca}
              description="FERRAMENTA DE BUSCA"
            />
          </GridFixedContainer>

          <GridFixedContainer columns="1fr 1fr" rows="1fr" w100>
            <CardData
              number={allCategoryProduct}
              description="LISTA DE PRODUTOS DE UMA CATEGORIA"
            />
            <CardData
              number={allCategories}
              description="PÁGINAS DA CATEGORIA DE PRODUTOS"
            />
          </GridFixedContainer>

          <GridFixedContainer columns="1fr 1fr" rows="1fr" w100>
            <CardData
              number={allProductDetails}
              description="PÁGINA DE DETALHES DO PRODUTO"
            />
            <CardData number={allCarrinho} description="CARRINHO" />
          </GridFixedContainer>

          <GridFixedContainer columns="1fr 1fr" rows="1fr" w100>
            <CardData
              number={allConfirmationPage}
              description="PÁGINA DE CONFIRMAÇÃO"
            />
          </GridFixedContainer>
        </GridFixedContainer>
      </FlexContainer>

      <FlexContainer
        column
        centerY
        centerX
        pl="32"
        pr="32"
        w={width}
        wFixed
        mb="24"
      >
        <GridFixedContainer rAuto columns=".1fr 1fr" centerY mb="16">
          <NumberWrapper w="20" h="20">
            <Text size={{ mobile: 14 }} weight="600" color="orange" center>
              2
            </Text>
          </NumberWrapper>
          <Title as="h4" weight="600">
            em relacões à capacidade de monitorar e traçar estratégias para o
            seu negócio
          </Title>
        </GridFixedContainer>

        <GridFixedContainer columns="1fr" rows="1fr" w100>
          <CardData
            number={allTrackingMetrics}
            description="RASTREAMENTO E RELATÓRIOS"
          />
        </GridFixedContainer>
      </FlexContainer>

      <FlexContainer
        column
        centerY
        centerX
        pl="32"
        pr="32"
        w={width}
        wFixed
        mb="24"
      >
        <GridFixedContainer rAuto columns=".1fr 1fr" centerY mb="16">
          <NumberWrapper w="20" h="20">
            <Text size={{ mobile: 14 }} weight="600" color="orange" center>
              3
            </Text>
          </NumberWrapper>
          <Title as="h4" weight="600">
            em relacões à conformidade com as leis
          </Title>
        </GridFixedContainer>

        <GridFixedContainer columns="1fr" rows="1fr" w100>
          <CardData number={allLegal} description="LEGAL" />
        </GridFixedContainer>
      </FlexContainer>
    </FadeIn>
  );
};

export default SummaryStats;
