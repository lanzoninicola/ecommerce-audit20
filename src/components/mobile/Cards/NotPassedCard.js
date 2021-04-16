import * as React from "react";
import { Text } from "@typography";
import { GridFixedContainer, SizedBox } from "@layouts";
import { NotPassedIcon } from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const NotPassedCard = ({ data }) => {
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
        <Text size={{ mobile: 40, laptop: 60 }} weight="800" color="red">
          {data}
        </Text>
        <NotPassedIcon />
        <Text weight="600" size={{ mobile: 12 }} color="red">
          Não Passou
        </Text>
      </GridFixedContainer>
    </Card>
  );
};

export default NotPassedCard;
