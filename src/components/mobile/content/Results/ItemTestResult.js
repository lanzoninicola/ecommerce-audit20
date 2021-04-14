import * as React from "react";
import styled from "styled-components";

import { Text, SmallText } from "@typography";
import { GridFixedContainer, FlexContainer, SizedBox } from "@layouts";
import { colorTheme } from "@colors/lib";
import { SVGIcon } from "@icons";

import Card from "../../Cards/CardWrapper";
import {
  PassedIcon,
  NotPassedIcon,
  ImprovementIcon,
  NotTestedIcon,
} from "../../Icons/TestResults/TestResults";
import { HighImpact, MediumImpact, LowImpact } from "../../Icons/Impact/Impact";
import Filters from "../../Filter/Filters";
import FilterButton from "../../Filter/FilterButton";
import testResults from "../../../../data/enums/testResults";
import {
  isNotUndefined,
  isNotEmptyObject,
  isEmptyObject,
  objectKeys,
} from "@utils";
import { PrimaryOutlineButton } from "../../Buttons/Buttons";

const ResultTestIcon = ({ result }) => {
  if (result === testResults.passed) {
    return <PassedIcon />;
  }

  if (result === testResults.improvement) {
    return <ImprovementIcon />;
  }

  if (result === testResults.notPassed) {
    return <NotPassedIcon />;
  }

  if (result === testResults.notTested) {
    return <NotTestedIcon />;
  }
};

const ResultImpactIcon = ({ result }) => {
  if (result === "ALTO") {
    return <HighImpact />;
  }

  if (result === "MEDIO") {
    return <MediumImpact />;
  }

  if (result === "BAIXO") {
    return <LowImpact />;
  }
};

const StyledVoltarButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  border-radius: 20px;
  background: ${() => colorTheme("black", { opacity: 0.7 })};
  height: auto;
  width: 120px;

  padding: 4px 25px 4px 25px;
`;

const VoltarButton = ({ onClick }) => {
  return (
    <StyledVoltarButton onClick={onClick}>
      <SVGIcon name="ARROW_LEFT" size="24" color="white" />
      <SmallText color="white">Voltar</SmallText>
    </StyledVoltarButton>
  );
};

const ItemTestResult = ({
  dataSectionParsed,
  sectionShown,
  setShowDetails,
}) => {
  const [shown, setShown] = React.useState(false);
  const [showDetailsItemId, setShowDetailsItemId] = React.useState(false);
  const [showFilters, setShowFilters] = React.useState(false);

  const [itemsData, setItemsData] = React.useState([
    ...dataSectionParsed[sectionShown].records,
  ]);

  function showFilterWindow(yesNo) {
    if (yesNo) {
      setShowFilters(!yesNo);
    }
    setShowFilters(!showFilters);
  }

  function resetFilter() {
    console.log(dataSectionParsed[sectionShown].records);
    return [...dataSectionParsed[sectionShown].records];
  }

  function filterOR(filters) {
    let filteredData;

    objectKeys(filters).forEach((filter) => {
      if (filters[filter] !== null && filter === "testResult") {
        filteredData = itemsData.filter((item) => {
          return item.resultado.toLowerCase() === filters[filter].toLowerCase();
        });
      }
      if (filters[filter] !== null && filter === "impact") {
        filteredData = itemsData.filter((item) => {
          return item.impacto.toLowerCase() === filters[filter].toLowerCase();
        });
      }
    });

    return filteredData;
  }

  function filterAND(filters) {
    let filteredData = [];

    filteredData = itemsData.filter((item) => {
      return (
        item.resultado.toLowerCase() === filters["testResult"].toLowerCase()
      );
    });

    return filteredData.filter((item) => {
      return item.impacto.toLowerCase() === filters["impact"].toLowerCase();
    });

    // objectKeys(filters).forEach((filter) => {
    //   if (filters[filter] !== null && filter === "testResult") {
    //     // itemsData.forEach((item) => {
    //     //   if (
    //     //     item.resultado.toLowerCase() === filters["testResult"].toLowerCase()
    //     //   ) {
    //     //     filteredData.push();
    //     //   }
    //     // });

    //     filteredData = itemsData.filter((item) => {
    //       return (
    //         item.resultado.toLowerCase() === filters["testResult"].toLowerCase()
    //       );
    //     });
    //   }

    //   console.log("filter AND . filteredData", filteredData);

    //   if (filters[filter] !== null && filter === "impact") {
    //     filteredData = filteredData.filter((item) => {
    //       return item.impacto.toLowerCase() === filters["impact"].toLowerCase();
    //     });
    //   }
    // });

    // return filteredData;
  }

  function applyFilterData(filters) {
    console.log("setFilter data fired");
    let nextItemsData;

    if (isNotUndefined(filters)) {
      if (isNotEmptyObject(filters)) {
        if (filters.testResults !== null && filters.impact !== null) {
          nextItemsData = filterAND(filters);
        } else if (filters.testResults !== null || filters.impact !== null) {
          nextItemsData = filterOR(filters);
        }
      }

      if (isEmptyObject(filters)) {
        nextItemsData = resetFilter();
      }
    }
    console.log(nextItemsData);
    setItemsData(nextItemsData);
  }

  function handleShowContent(id) {
    setShown(!shown);
    setShowDetailsItemId(id);
  }

  return (
    <FlexContainer>
      {itemsData.length > 0 ? (
        itemsData.map((item, i) => {
          // console.log(item);
          return (
            <SizedBox key={i}>
              <Card>
                <div
                  style={{
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                >
                  <GridFixedContainer
                    columns="1fr .25fr .25fr"
                    rows="1fr"
                    pt="8"
                    pb="8"
                    centerY
                  >
                    <FlexContainer column>
                      <Text
                        size={{ mobile: 14 }}
                        weight="600"
                        left
                        color="orange"
                      >
                        {item.subcategoria}
                      </Text>
                      <Text size={{ mobile: 12 }} left>
                        {item.categoria}
                      </Text>
                    </FlexContainer>

                    <ResultImpactIcon result={item.impacto} />
                    <ResultTestIcon result={item.resultado} />
                  </GridFixedContainer>
                  <FlexContainer column>
                    <Text size={{ mobile: 12 }} weight="600" left>
                      Descrição
                    </Text>
                    <Text size={{ mobile: 12 }} left>
                      {item.descricao}
                    </Text>

                    {shown === true && showDetailsItemId === i && (
                      <SizedBox>
                        <Text size={{ mobile: 12 }} weight="600" left>
                          Informações adicionais
                        </Text>
                        <Text size={{ mobile: 12 }} left>
                          {item.informacoesadicionais}
                        </Text>
                        <Text size={{ mobile: 12 }} weight="600" left>
                          Links úteis
                        </Text>

                        <Text size={{ mobile: 12 }} left>
                          {item.linkuteis}
                        </Text>
                        <Text size={{ mobile: 12 }} weight="600" left>
                          Comentários
                        </Text>
                        <Text size={{ mobile: 12 }} left>
                          {item.comentarios}
                        </Text>
                      </SizedBox>
                    )}
                    <Text size={{ mobile: 12 }} weight="600" left>
                      Recomendações
                    </Text>

                    <Text size={{ mobile: 12 }} left>
                      {item.recomendacoes}
                    </Text>
                  </FlexContainer>
                  <FlexContainer row centerX centerY>
                    <PrimaryOutlineButton
                      buttonStyle={{
                        w: "200",
                        h: "30",
                        mt: "8",
                        mb: "8",
                      }}
                      onClick={() => handleShowContent(i)}
                      text={
                        shown && showDetailsItemId === i
                          ? "esconder"
                          : "veja os comentarios"
                      }
                      textStyle={{
                        size: { mobile: 12 },
                        color: "orange",
                        weight: "800",
                      }}
                    ></PrimaryOutlineButton>
                  </FlexContainer>
                </div>
              </Card>

              <SizedBox h={16} />
            </SizedBox>
          );
        })
      ) : (
        <FlexContainer column centerX centerY mt="48">
          <Text size={{ mobile: 16 }} color="black">
            Nenhum dado foi encontrado
          </Text>
          <SizedBox h="8" />
          <Text size={{ mobile: 14 }} color="black" italic center>
            Redefina os filtros usados e tenta novamente com outros
          </Text>
        </FlexContainer>
      )}
      <FlexContainer
        w100
        row
        stretchXS
        style={{ position: "fixed", bottom: "20px" }}
        pr="64"
      >
        <VoltarButton onClick={() => setShowDetails(false)} />
        <FilterButton onClick={showFilterWindow} />
      </FlexContainer>
      {showFilters && (
        <Filters
          applyFilterData={applyFilterData}
          showFilterWindow={showFilterWindow}
        />
      )}
    </FlexContainer>
  );
};

export default ItemTestResult;
