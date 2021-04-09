import * as React from "react";
import styled from "styled-components";

import { colorTheme } from "@colors/lib";

import PrevArrow from "../PrevArrow/PrevArrow";

const StyledRoundButton = styled.button`
  border: none;
  border-radius: 50%;
  background: ${() => colorTheme("orange")};
  height: 40px;
  width: 40px;
`;

const PrevButton = ({ prevPage }) => {
  return (
    <StyledRoundButton onClick={prevPage}>
      <PrevArrow />
    </StyledRoundButton>
  );
};

export default PrevButton;
