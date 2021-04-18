import * as React from "react";
import { FlexContainer } from "@layouts";
import { SVGIcon } from "@icons";
import { colorTheme } from "@colors/lib";

export const HighImpact = () => {
  return (
    <FlexContainer row centerX centerY h100>
      <SVGIcon name="CIRCLE_ARROW_TOP" color="red" />
    </FlexContainer>
  );
};

export const MediumImpact = () => {
  return (
    <FlexContainer row centerX centerY h100>
      <SVGIcon name="CIRCLE_ARROW_RIGHT" color="yellow" />
    </FlexContainer>
  );
};

export const LowImpact = () => {
  return (
    <FlexContainer row centerX centerY h100>
      <SVGIcon
        name="CIRCLE_ARROW_BOTTOM"
        color={colorTheme("black", { opacity: 0.8 })}
      />
    </FlexContainer>
  );
};
