import * as React from "react";
import DataContext from "../../../../data/DataContext";

import { Text } from "@typography";
import { FlexContainer, SizedBox, GridFixedContainer } from "@layouts";
import { objectKeys } from "@utils";
import { useViewportInfo } from "@hooks";

import BackButton from "../../BackButton/BackButton";

import Filters from "../../Filter/Filters";
import FilterButton from "../../Filter/FilterButton";

import ItemTestResults from "./ItemTestResults";
import ItemListAppBar from "./ItemListAppBar";

const ItemListTestResults = ({ recordsOfPage, setShowItemsList }) => {
  const dataContext = React.useContext(DataContext);
  const _recordsOfPage = dataContext.filterRecordsByPage(recordsOfPage);

  const [itemsData, setItemsdata] = React.useState(_recordsOfPage);
  const [showFilters, setShowFilters] = React.useState(false);
  const { device } = useViewportInfo();

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
          return (
            <GridFixedContainer
              columns={{
                mobile: "1fr",
                laptop: ".1fr 1fr",
              }}
            >
              <SizedBox />
              <ItemTestResults key={i} itemData={item} index={i} />
            </GridFixedContainer>
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
      {device === "mobile" && (
        <ItemListAppBar
          setShowItemsList={setShowItemsList}
          showFilterWindow={showFilterWindow}
        />
      )}

      {showFilters && device === "mobile" && (
        <Filters
          applyFilterData={applyFilterData}
          showFilterWindow={showFilterWindow}
        />
      )}
    </FlexContainer>
  );
};

export default ItemListTestResults;
