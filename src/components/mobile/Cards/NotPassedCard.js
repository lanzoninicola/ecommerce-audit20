import * as React from "react";
import { Text } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { NotPassedIcon } from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const NotPassedCard = ({ data }) => {
  return (
    <Card>
      <FlexContainer column centerX centerY>
        <Text size={{ mobile: 40 }} weight="800" color="red">
          {data}
        </Text>
        <SizedBox h="4" />
        <NotPassedIcon />
      </FlexContainer>
    </Card>
  );
};

export default NotPassedCard;
