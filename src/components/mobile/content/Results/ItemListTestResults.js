import * as React from "react";
import DataContext from "../../../../data/DataContext";

import { Text } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { objectKeys } from "@utils";

import BackButton from "../../BackButton/BackButton";

import Filters from "../../Filter/Filters";
import FilterButton from "../../Filter/FilterButton";

import ItemTestResults from "./ItemTestResults";

const ItemListTestResults = ({ recordsOfPage, setShowItemsList }) => {
  const dataContext = React.useContext(DataContext);
  const _recordsOfPage = dataContext.filterRecordsByPage(recordsOfPage);

  const [itemsData, setItemsdata] = React.useState(_recordsOfPage);
  const [showFilters, setShowFilters] = React.useState(false);

  function showFilterWindow(yesNo) {
    if (yesNo) {
      setShowFilters(!yesNo);
    }
    setShowFilters(!showFilters);
  }

  function applyFilterData(filters = {}) {
    let nextFilterData = { pagina: recordsOfPage };

    objectKeys(filters).forEach((filter) => {
      if (filters[filter] !== null) {
        nextFilterData = { ...nextFilterData, [filter]: filters[filter] };
      }
    });

    const filterData = dataContext.filterRecords(nextFilterData);

    setItemsdata(filterData);
  }

  return (
    <FlexContainer>
      {itemsData.length > 0 ? (
        itemsData.map((item, i) => {
          // console.log(item);
          return <ItemTestResults key={i} itemData={item} index={i} />;
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
        <BackButton onClick={() => setShowItemsList(false)} />
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

export default ItemListTestResults;
