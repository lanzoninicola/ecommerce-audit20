import * as React from "react";
import styled from "styled-components";

import { SVGIcon } from "@icons";
import { colorTheme } from "@colors/lib";
import { SmallText } from "@typography";

// const StyledFilterButton = styled.button`
//   border: none;
//   border-radius: 50%;
//   background: ${() => colorTheme("black", { opacity: 0.7 })};
//   height: 50px;
//   width: 50px;
//   position: fixed;
//   bottom: 20px;
//   right: 80px;
// `;

// const FilterButton = ({ onClick }) => {
//   return (
//     <StyledFilterButton onClick={onClick}>
//       <SVGIcon name="FILTER" size="24" color="white" />
//     </StyledFilterButton>
//   );
// };

const StyledFilterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  border-radius: 20px;
  background: ${() => colorTheme("black", { opacity: 0.7 })};
  height: auto;
  width: 120px;

  padding: 4px 30px 4px 30px;
`;

const FilterButton = ({ onClick }) => {
  return (
    <StyledFilterButton onClick={onClick}>
      <SVGIcon name="FILTER" size="24" color="white" />
      <SmallText color="white">Filtros</SmallText>
    </StyledFilterButton>
  );
};

export default FilterButton;
