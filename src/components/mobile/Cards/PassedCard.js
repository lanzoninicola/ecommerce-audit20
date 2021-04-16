import * as React from "react";
import { Text } from "@typography";
import { FlexContainer, SizedBox, GridFixedContainer } from "@layouts";
import { PassedIcon } from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const PassedCard = ({ data }) => {
  return (
    <Card pt="20" pl="20" pr="20" pb="20">
      <GridFixedContainer
        columns="1fr"
        rows="1fr .25fr .25fr"
        gap="4"
        centerX
        centerY
        h100
      >
        <Text size={{ mobile: 40, laptop: 60 }} weight="800" color="green">
          {data}
        </Text>

        <PassedIcon />
        <Text weight="600" size={{ mobile: 12 }} color="green">
          Passou
        </Text>
      </GridFixedContainer>
    </Card>
  );
};

export default PassedCard;
