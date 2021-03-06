import * as React from "react";
import { colorTheme } from "@colors/lib";
import { Text } from "@typography";
import { FlexContainer, GridFixedContainer, SizedBox } from "@layouts";
import {
  PassedIcon,
  NotPassedIcon,
  ImprovementIcon,
  NotTestedIcon,
} from "../Icons/TestResults/TestResults";
import Card from "./CardWrapper";

const ResultSingleCardData = ({
  title,
  description,
  passed,
  improvement,
  notPassed,
  notTested,
  children,

  handleDetails,
}) => {
  return (
    <Card
      onClick={handleDetails}
      pt="20"
      pl="20"
      pr="20"
      pb="20"
      style={{
        cursor: "pointer",
      }}
    >
      <GridFixedContainer columns="1fr" rows="1fr .25fr">
        <Text size={{ mobile: 14 }} weight="600" pl="16">
          {title}
        </Text>
        <GridFixedContainer columns="1fr 1fr 1fr 1fr" rows="1fr" mb="8">
          <FlexContainer row centerY centerX>
            <Text
              color="green"
              size={{ mobile: 18, laptop: 36 }}
              pr="8"
              weight="800"
            >
              {passed}
            </Text>
            <PassedIcon />
          </FlexContainer>
          <FlexContainer row centerY centerX>
            <Text
              color="yellow"
              size={{ mobile: 18, laptop: 36 }}
              pr="8"
              weight="800"
            >
              {improvement}
            </Text>
            <ImprovementIcon />
          </FlexContainer>
          <FlexContainer row centerY centerX>
            <Text
              color="red"
              size={{ mobile: 18, laptop: 36 }}
              pr="8"
              weight="800"
            >
              {notPassed}
            </Text>
            <NotPassedIcon />
          </FlexContainer>
          <FlexContainer row centerY centerX>
            <Text
              color={colorTheme("black", { opacity: 0.8 })}
              size={{ mobile: 18, laptop: 36 }}
              pr="8"
              weight="800"
            >
              {notTested}
            </Text>
            <NotTestedIcon />
          </FlexContainer>
        </GridFixedContainer>
      </GridFixedContainer>
      <Text size={{ mobile: 12, laptop: 18 }} pl="16">
        {description}
      </Text>
      {children}
    </Card>
  );
};

export default ResultSingleCardData;
