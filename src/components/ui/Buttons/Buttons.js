import * as React from "react";
import styled from "styled-components";
import { BaseButton } from "@buttons";
import { colorTheme } from "@colors/lib";
import { Text } from "@typography";

const StyledPrimaryButton = styled(BaseButton)`
  background: ${({ disabled }) => {
    if (disabled) return colorTheme("orange", { opacity: 0.2 });

    return colorTheme("orange", { opacity: 0.8 });
  }};

  &:hover {
    background: ${() => colorTheme("black", { opacity: 0.6 })};
  }
`;

const StyledPrimaryOutlineButton = styled(BaseButton)`
  background: none;
  border: 2px solid;
  border-color: ${() => colorTheme("orange", { opacity: 0.8 })};

  &:hover {
    background: ${() => colorTheme("black", { opacity: 0.6 })};
  }
`;

export const PrimaryButton = ({
  text,
  textStyle,
  buttonStyle,
  isDisabled,
  onClick,
}) => {
  return (
    <StyledPrimaryButton
      {...buttonStyle}
      disabled={isDisabled}
      onClick={onClick}
    >
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
  isDisabled,
}) => {
  return (
    <StyledPrimaryOutlineButton
      {...buttonStyle}
      onClick={onClick}
      disabled={isDisabled}
    >
      <Text {...textStyle} color={textStyle.color ? textStyle.color : "orange"}>
        {text}
      </Text>
    </StyledPrimaryOutlineButton>
  );
};
