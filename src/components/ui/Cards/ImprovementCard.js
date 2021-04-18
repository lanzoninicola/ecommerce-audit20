import * as React from "react";
import { Text } from "@typography";
import { GridFixedContainer } from "@layouts";
import { ImprovementIcon } from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const ImprovementCard = ({ data }) => {
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
        <Text size={{ mobile: 40, laptop: 60 }} weight="800" color="yellow">
          {data}
        </Text>
        <ImprovementIcon />
        <Text weight="600" size={{ mobile: 12 }} color="yellow" center>
          Oportunidade de Melhorar
        </Text>
      </GridFixedContainer>
    </Card>
  );
};

export default ImprovementCard;
