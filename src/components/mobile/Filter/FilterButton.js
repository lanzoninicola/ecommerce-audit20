import * as React from "react";
import styled from "styled-components";

import { SVGIcon } from "@icons";
import { colorTheme } from "@colors/lib";

const StyledFilterButton = styled.button`
  border: none;
  border-radius: 50%;
  background: ${() => colorTheme("black", { opacity: 0.7 })};
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const FilterButton = ({ prevPage }) => {
  return (
    <StyledFilterButton onClick={prevPage}>
      <SVGIcon name="FILTER" size="24" color="white" />
    </StyledFilterButton>
  );
};

export default FilterButton;
