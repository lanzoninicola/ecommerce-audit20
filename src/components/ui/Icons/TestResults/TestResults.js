import * as React from "react";
import { FlexContainer } from "@layouts";
import { SVGIcon } from "@icons";
import { colorTheme } from "@colors/lib";

export const PassedIcon = () => {
  return (
    <FlexContainer row centerX centerY h100>
      <SVGIcon name="THUMBS_UP" color="green" />
    </FlexContainer>
  );
};

export const NotPassedIcon = () => {
  return (
    <FlexContainer row centerX centerY h100>
      <SVGIcon name="THUMBS_DOWN" color="red" />
    </FlexContainer>
  );
};

export const ImprovementIcon = () => {
  return (
    <FlexContainer row centerX centerY h100>
      <SVGIcon name="CIRCLE_ARROW_TOP_RIGHT" color="yellow" />
    </FlexContainer>
  );
};

export const NotTestedIcon = () => {
  return (
    <FlexContainer row centerX centerY h100>
      <SVGIcon
        name="CIRCLE_MINUS"
        color={colorTheme("black", { opacity: 0.8 })}
      />
    </FlexContainer>
  );
};
