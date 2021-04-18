import * as React from "react";

import { FlexContainer } from "@layouts";

import BackButton from "../ui/BackButton/BackButton";

import FilterButton from "../Filter/FilterButton";

const ItemListAppBar = ({ setShowItemsList, showFilterWindow }) => {
  return (
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
  );
};

export default ItemListAppBar;
