import * as React from "react";

import { Text, SmallText } from "@typography";
import { FlexContainer, GridFixedContainer } from "@layouts";
import { InputText } from "@input";

import Card from "../components/mobile/Cards/CardWrapper";
import { PrimaryButton } from "../components/mobile/Buttons/Buttons";

const app_passcode = process.env.APP_PASSCODE;

const IndexPage = () => {
  const [passCode, setPasscode] = React.useState([]);

  console.log(app_passcode);

  function handleClickBtn(number) {
    let userPasscode = [...passCode];
    userPasscode.push(number);

    setPasscode(userPasscode);
  }

  return (
    <FlexContainer h100v w100v>
      <GridFixedContainer columns="1fr" rows="1fr .1fr" h100 centerX centerY>
        <Card
          style={{
            width: "300px",
            padding: "20px",
          }}
        >
          <Text>Passcode</Text>
          <PrimaryButton
            text="1"
            textStyle={{
              color: "white",
            }}
            buttonStyle={{
              mb: "16",
            }}
            onClick={() => handleClickBtn(1)}
          />
          <PrimaryButton
            text="2"
            textStyle={{
              color: "white",
            }}
            buttonStyle={{
              mb: "16",
            }}
            onClick={() => handleClickBtn(2)}
          />
          <PrimaryButton
            text="3"
            textStyle={{
              color: "white",
            }}
            buttonStyle={{
              mb: "16",
            }}
            onClick={() => handleClickBtn(3)}
          />
          <Text>
            {passCode.length > 0
              ? passCode.join("") === app_passcode
                ? "code correct"
                : "code not correct"
              : null}
          </Text>
        </Card>
        <FlexContainer column centerY>
          <SmallText>Website developed by Lanzoni Nicola</SmallText>
          <SmallText>lanzoni.nicola@gmail.com</SmallText>
        </FlexContainer>
      </GridFixedContainer>
    </FlexContainer>
  );
};

export default IndexPage;
