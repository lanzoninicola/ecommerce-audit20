import * as React from "react";
import styled from "styled-components";

import { Text } from "@typography";
import { colorTheme } from "@colors/lib";

const StyledOutlinedRoundButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 3px solid;
  color: ${() => colorTheme("orange")};
  background: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;

  &:hover {
    color: ${() => colorTheme("black", { opacity: 0.8 })};
  }
`;

const PasscodeButton = ({ number, handleClickBtn }) => {
  return (
    <StyledOutlinedRoundButton onClick={() => handleClickBtn(number)}>
      <Text weight="600">{number}</Text>
    </StyledOutlinedRoundButton>
  );
};

export default PasscodeButton;
