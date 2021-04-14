import * as React from "react";
import styled from "styled-components";

import { FlexContainer, GridFixedContainer } from "@layouts";
import { SmallText } from "@typography";

import { useViewportInfo } from "@hooks";

const StyledViewportInfo = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  border: none;
  border-radius: 10px;
  background: red;
  padding: 20px;
  height: auto;
  width: auto;
  z-index: 1000;
`;

// markup
const ViewportInfoData = () => {
  const { height, width, diagonal } = useViewportInfo();

  return (
    <>
      <StyledViewportInfo>
        <GridFixedContainer columns="1fr 1fr 1fr" rAuto>
          <FlexContainer column centerY>
            <SmallText color="white">height</SmallText>
            <SmallText color="white">{height}</SmallText>
          </FlexContainer>
          <FlexContainer column centerY>
            <SmallText color="white">width</SmallText>
            <SmallText color="white">{width}</SmallText>
          </FlexContainer>
          <FlexContainer column centerY>
            <SmallText color="white">diagonal</SmallText>
            <SmallText color="white">{diagonal}</SmallText>
          </FlexContainer>
        </GridFixedContainer>
      </StyledViewportInfo>
    </>
  );
};

export default ViewportInfoData;
