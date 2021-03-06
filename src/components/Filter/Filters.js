import * as React from "react";
import styled from "styled-components";

import { useLocalStorage } from "@hooks";
import { Text, SmallText } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { BaseButton } from "@buttons";
import { colorTheme } from "@colors/lib";
import { objectKeys } from "@utils";
import { SVGIcon } from "@icons";

import testResults from "../../data/enums/testResults";
import impacts from "../../data/enums/impacts";
import { PrimaryButton, PrimaryOutlineButton } from "../ui/Buttons/Buttons";

const StyledFilterWindow = styled.div`
  border: none;
  border-radius: 10px;
  background: ${() => colorTheme("black", { opacity: 0.8 })};
  height: auto;
  width: 90%;
  position: fixed;
  bottom: 10%;
  right: 20px;
  padding: 10px 20px;
`;

// const StyledSubFilterWindow = styled.div`
//   border: none;
//   border-radius: 10px;
//   background: ${() => colorTheme("black", { opacity: 0.9 })};
//   height: auto;
//   width: 90%;
//   position: fixed;
//   bottom: 50%;
//   right: 20px;
//   padding: 20px;
//   z-index: 2;
// `;

const StyledSubFilterWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${() => colorTheme("black", { opacity: 0.9 })};
  padding: 20px;
  display: flex;
  justify-items: center;
  z-index: 2;
`;

const FilterItem = styled.div`
  border: none;
  border-radius: 10px;
  background: ${() => colorTheme("white", { opacity: 0.4 })};
  height: auto;
  width: 100%;
  margin-bottom: 16px;
  padding: 4px;
`;

const Filters = ({ applyFilterData, showFilterWindow }) => {
  const [showSubFilter, setShowSubFilter] = React.useState(false);
  const [filterType, setFilterType] = React.useState(null);
  const [filterTestResultValue, setFilterTestResultValue] = useLocalStorage(
    "alg_filterTestResultValue",
    null
  );
  const [filterImpactValue, setFilterImpactValue] = useLocalStorage(
    "alg_filterImpactValue",
    null
  );

  // const [filterTestResultValue, setFilterTestResultValue] = React.useState(
  //   null
  // );
  // const [filterImpactValue, setFilterImpactValue] = React.useState(null);

  function handlefilterReset() {
    applyFilterData({});
    setFilterTestResultValue(null);
    setFilterImpactValue(null);
  }

  function handleTestResultFiltered(testResultItem) {
    setFilterTestResultValue(testResultItem);
    setShowSubFilter(false);
  }

  function renderTestResultsList() {
    return (
      <FlexContainer column centerX centerY w100>
        {objectKeys(testResults).map((item, i) => (
          <FilterItem
            key={i}
            onClick={() => handleTestResultFiltered(testResults[item])}
          >
            <Text color="white" center>
              {testResults[item]}
            </Text>
          </FilterItem>
        ))}
      </FlexContainer>
    );
  }

  function handleImpactFiltered(impactItem) {
    setFilterImpactValue(impactItem);
    setShowSubFilter(false);
  }

  function renderImpactsList() {
    return (
      <FlexContainer column centerX centerY w100>
        {objectKeys(impacts).map((item, i) => (
          <FilterItem
            key={i}
            onClick={() => handleImpactFiltered(impacts[item])}
          >
            <Text color="white" center>
              {impacts[item]}
            </Text>
          </FilterItem>
        ))}
      </FlexContainer>
    );
  }

  function renderFilterType(filterType) {
    setShowSubFilter(true);
    setFilterType(filterType);
  }

  return (
    <>
      {showSubFilter && (
        <StyledSubFilterWindow>
          {filterType === "testResults" && renderTestResultsList()}
          {filterType === "impactResults" && renderImpactsList()}
        </StyledSubFilterWindow>
      )}
      <StyledFilterWindow>
        <FlexContainer column>
          <FlexContainer
            row
            right
            mb="24"
            onClick={() => showFilterWindow(false)}
          >
            <SVGIcon name="CLOSE" color="white" />
          </FlexContainer>
          <Text size={{ mobile: 18 }} weight="600" left color="white">
            Eu s?? quero ver os elementos que
          </Text>
          <SizedBox h="16" />
          <FlexContainer row centerY mb="16">
            <Text size={{ mobile: 14 }} left color="white">
              passaram os test com esse resultato
              {filterTestResultValue === null ? (
                <BaseButton
                  w="100"
                  h="30"
                  onClick={() => renderFilterType("testResults")}
                  color="orange"
                >
                  <Text size={{ mobile: 12 }}>
                    {filterTestResultValue ? filterTestResultValue : "escolha"}
                  </Text>
                </BaseButton>
              ) : (
                <Text size={{ mobile: 16 }} color="orange" weight="800" left>
                  {filterTestResultValue}
                </Text>
              )}
            </Text>
          </FlexContainer>
          <FlexContainer row centerY>
            <Text size={{ mobile: 14 }} left color="white">
              e teria um impacto{" "}
              {filterImpactValue === null ? (
                <BaseButton
                  w="100"
                  h="30"
                  onClick={() => renderFilterType("impactResults")}
                  color="orange"
                >
                  <Text size={{ mobile: 12 }}>
                    {filterImpactValue ? filterImpactValue : "escolha"}
                  </Text>
                </BaseButton>
              ) : (
                <Text size={{ mobile: 16 }} color="orange" weight="800" left>
                  {filterImpactValue}
                </Text>
              )}{" "}
              no resultado da venda.
            </Text>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer row right pt="32">
          <PrimaryOutlineButton
            buttonStyle={{
              w: "100",
              h: "30",
            }}
            onClick={handlefilterReset}
            text="redefinir"
            textStyle={{
              size: { mobile: 12 },
            }}
          />
          <SizedBox w="8" />
          <PrimaryButton
            buttonStyle={{
              w: "100",
              h: "30",
            }}
            onClick={() => {
              if (filterTestResultValue || filterImpactValue) {
                applyFilterData({
                  resultado: filterTestResultValue,
                  impacto: filterImpactValue,
                });
              }

              showFilterWindow(false);
            }}
            text="aplicar"
            textStyle={{
              size: { mobile: 12 },
            }}
          />
        </FlexContainer>
        {filterTestResultValue === null && filterImpactValue === null && (
          <SmallText color="orange" italic mt="8">
            Seleciona pelo menos um filtro ou fecha a janela
          </SmallText>
        )}
      </StyledFilterWindow>
    </>
  );
};

export default Filters;
