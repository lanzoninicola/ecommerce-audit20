import * as React from "react";
import styled from "styled-components";

import { colorTheme } from "@colors/lib";

import NextArrow from "../NextArrow/NextArrow";

const StyledRoundButton = styled.button`
  border: none;
  border-radius: 50%;
  background: ${() => colorTheme("orange")};
  height: 40px;
  width: 40px;
`;

const NextButton = ({ nextPage }) => {
  return (
    <StyledRoundButton onClick={nextPage}>
      <NextArrow />
    </StyledRoundButton>
  );
};

export default NextButton;
