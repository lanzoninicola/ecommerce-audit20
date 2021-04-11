import * as React from "react";
import { Text } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { PassedIcon } from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const PassedCard = ({ data }) => {
  return (
    <Card>
      <FlexContainer column centerX centerY>
        <Text size={{ mobile: 40 }} weight="800" color="green">
          {data}
        </Text>
        <SizedBox h="4" />
        <PassedIcon />
      </FlexContainer>
    </Card>
  );
};

export default PassedCard;
