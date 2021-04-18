import * as React from "react";
import styled from "styled-components";
import { colorTheme } from "@colors/lib";
import { Paddings } from "@layouts";

const StyledCard = styled.div`
  ${Paddings}
  border: "none";
  border-radius: 8px;
  background: ${() => colorTheme("white")};
  width: 100%;
  box-shadow: ${({ noShadow }) => {
    if (noShadow) return null;
    return `rgba(0, 6, 36, 0) 0px 26px 24px -16px,
    rgba(0, 6, 36, 0.3) 0px 16px 24px -18px,
    rgba(0, 6, 36, 0.07) 0px 0px 10px 0px;`;
  }};
`;

const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
