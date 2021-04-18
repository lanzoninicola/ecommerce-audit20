import * as React from "react";
import { colorTheme } from "@colors/lib";
import { Text } from "@typography";
import { GridFixedContainer } from "@layouts";
import { NotTestedIcon } from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const NotTestetCard = ({ data }) => {
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
        <Text
          size={{ mobile: 40, laptop: 60 }}
          weight="800"
          color={colorTheme("black", { opacity: 0.8 })}
        >
          {data}
        </Text>
        <NotTestedIcon />
        <Text
          weight="600"
          size={{ mobile: 12 }}
          color={colorTheme("black", { opacity: 0.8 })}
        >
          Não Testado
        </Text>
      </GridFixedContainer>
    </Card>
  );
};

export default NotTestetCard;
