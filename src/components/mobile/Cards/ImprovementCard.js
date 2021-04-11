import * as React from "react";
import { Text } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { ImprovementIcon } from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const ImprovementCard = ({ data }) => {
  return (
    <Card>
      <FlexContainer column centerX centerY>
        <Text size={{ mobile: 40 }} weight="800" color="yellow">
          {data}
        </Text>
        <SizedBox h="4" />
        <ImprovementIcon />
      </FlexContainer>
    </Card>
  );
};

export default ImprovementCard;
