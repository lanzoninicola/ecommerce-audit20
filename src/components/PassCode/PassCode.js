import * as React from "react";

import { Text } from "@typography";
import { FlexContainer } from "@layouts";
import { InputText } from "@input";

import Card from "../mobile/Cards/CardWrapper";

const Passcode = () => {
  return (
    <FlexContainer centerX centerY h100 w100>
      <Card
        style={{
          width: "300px",
          padding: "20px",
        }}
      >
        <Text>Passcode</Text>
        <InputText w="280" />
      </Card>
    </FlexContainer>
  );
};

export default Passcode;
