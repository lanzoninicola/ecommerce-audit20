import * as React from "react";
import { navigate } from "gatsby-link";

import { Text, SmallText, TextSpan } from "@typography";
import { FlexContainer, GridFixedContainer } from "@layouts";

import AuthContext from "./context/AuthContext";

import { PrimaryButton, PrimaryOutlineButton } from "../mobile/Buttons/Buttons";
import Card from "../mobile/Cards/CardWrapper";

import PasscodeButton from "./PasscodeButton";
import LoginEntity from "./entity/LoginEntity";

const loginBrain = LoginEntity();

const Login = () => {
  const authContext = React.useContext(AuthContext);
  const [passcodeKeyboard, setPasscodeKeyboard] = React.useState(
    loginBrain.init()
  );
  const [inputPasscode, setInputPasscode] = React.useState([]);
  const [httpErrorMessage, setHttpErrorMessage] = React.useState();

  function handleClickBtn(number) {
    let userPasscode = [...inputPasscode];
    userPasscode.push(number);

    setInputPasscode(userPasscode);
  }

  function reversePasscodeKeyboard() {
    const nextPasscodeKeyborad = loginBrain.generateNewSerie();
    setPasscodeKeyboard(nextPasscodeKeyborad);
  }

  function resetKeyboard() {
    setInputPasscode([]);
    setHttpErrorMessage(null);
  }

  function authorizeAndRedirect() {
    authContext.shouldAuthenticate();
    navigate("/auditoria");
  }

  function showLoginError(message) {
    setHttpErrorMessage(message);
  }

  async function login() {
    const userPasscode = inputPasscode.join("");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userPasscode: userPasscode }),
    };

    try {
      const response = await fetch("/.netlify/functions/auth", requestOptions);
      const responseBody = await response.json();

      if (responseBody.authSuccess) {
        authorizeAndRedirect();
      } else {
        const { message } = responseBody;
        showLoginError(message);
      }
    } catch (error) {
      showLoginError(error);
    }
  }

  React.useEffect(() => {
    reversePasscodeKeyboard();
  }, [reversePasscodeKeyboard, passcodeKeyboard, httpErrorMessage]);

  //  85569887

  return (
    <FlexContainer h100v w100v>
      <GridFixedContainer columns="1fr" rows="1fr .1fr" h100 centerX centerY>
        <Card
          style={{
            width: "300px",
            padding: "20px",
          }}
        >
          <Text mb="16" center>
            Passcode
          </Text>
          {inputPasscode.length > 0 && (
            <SmallText mb="16" center>
              {inputPasscode.join("")}
            </SmallText>
          )}

          <GridFixedContainer columns="1fr 1fr 1fr" rAuto w100 centerX centerY>
            {passcodeKeyboard.map((number, i) => {
              return (
                <PasscodeButton
                  key={i}
                  number={number}
                  handleClickBtn={handleClickBtn}
                />
              );
            })}
          </GridFixedContainer>
          <FlexContainer row centerX centerY>
            <PrimaryButton
              text="OK"
              textStyle={{
                size: { laptop: 16 },
                color: "white",
              }}
              buttonStyle={{
                w: "150",
                h: "40",
                mt: "32",
                mb: "16",
              }}
              onClick={login}
              isDisabled={inputPasscode.length > 0 ? false : true}
            />
            <PrimaryOutlineButton
              text="Redefinir"
              textStyle={{
                size: { laptop: 16 },
              }}
              buttonStyle={{
                w: "150",
                h: "40",
                mt: "32",
                mb: "16",
              }}
              onClick={resetKeyboard}
            />
          </FlexContainer>
          <FlexContainer centerX centerY>
            <SmallText color="red">{httpErrorMessage}</SmallText>
          </FlexContainer>
        </Card>
        <FlexContainer column centerY>
          <SmallText>Website developed by Lanzoni Nicola</SmallText>
          <SmallText>lanzoni.nicola@gmail.com</SmallText>
        </FlexContainer>
      </GridFixedContainer>
    </FlexContainer>
  );
};

export default Login;
