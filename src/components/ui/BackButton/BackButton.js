import * as React from "react";
import styled from "styled-components";

import { SmallText } from "@typography";
import { colorTheme } from "@colors/lib";
import { SVGIcon } from "@icons";

const StyledBackButtton = styled.button`
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

const BackButtton = ({ onClick }) => {
  return (
    <StyledBackButtton onClick={onClick}>
      <SVGIcon name="ARROW_LEFT" size="24" color="white" />
      <SmallText color="white">Voltar</SmallText>
    </StyledBackButtton>
  );
};

export default BackButtton;
