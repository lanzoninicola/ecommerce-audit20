import * as React from "react";
import { colorTheme } from "@colors/lib";
import { Text } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { NotTestedIcon } from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const NotTestetCard = ({ data }) => {
  return (
    <Card>
      <FlexContainer column centerX centerY>
        <Text
          size={{ mobile: 40 }}
          weight="800"
          color={colorTheme("black", { opacity: 0.8 })}
        >
          {data}
        </Text>
        <SizedBox h="4" />
        <NotTestedIcon />
        <SizedBox h="4" />
        <Text
          weight="600"
          size={{ mobile: 12 }}
          color={colorTheme("black", { opacity: 0.8 })}
        >
          Não Testado
        </Text>
      </FlexContainer>
    </Card>
  );
};

export default NotTestetCard;
