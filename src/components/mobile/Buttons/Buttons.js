import * as React from "react";
import styled from "styled-components";
import { BaseButton } from "@buttons";
import { colorTheme } from "@colors/lib";
import { Text } from "@typography";

const StyledPrimaryButton = styled(BaseButton)`
  background: ${() => colorTheme("orange", { opacity: 0.8 })};
`;

const StyledPrimaryOutlineButton = styled(BaseButton)`
  background: none;
  border: 2px solid;
  border-color: ${() => colorTheme("orange", { opacity: 0.8 })};
`;

export const PrimaryButton = ({ text, textStyle, buttonStyle, onClick }) => {
  return (
    <StyledPrimaryButton {...buttonStyle} onClick={onClick}>
      <Text {...textStyle} color="white">
        {text}
      </Text>
    </StyledPrimaryButton>
  );
};

export const PrimaryOutlineButton = ({
  text,
  textStyle,
  buttonStyle,
  onClick,
}) => {
  return (
    <StyledPrimaryOutlineButton {...buttonStyle} onClick={onClick}>
      <Text {...textStyle} color="white">
        {text}
      </Text>
    </StyledPrimaryOutlineButton>
  );
};
