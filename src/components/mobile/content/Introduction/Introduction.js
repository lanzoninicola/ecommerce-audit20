import * as React from "react";
import { Title, Text, TextSpan } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { FadeIn } from "@animations";

const Introduction = () => {
  return (
    <FlexContainer
      column
      centerY
      centerX
      pl={{ mobile: "32", laptop: "192" }}
      pr={{ mobile: "32", laptop: "192" }}
    >
      <FadeIn>
        <SizedBox>
          <Title as="h3" weight="600" mb="16">
            O que è uma auditoria?
          </Title>
          <Text as="p">
            Auditoria é um{" "}
            <TextSpan color="orange">
              processo de verificação e análise
            </TextSpan>{" "}
            de atividades desenvolvidas por uma determinada empresa.
          </Text>
          <SizedBox h="8" />
          <Text>
            O objetivo principal desse especifica auditoria é examinar se{" "}
            <TextSpan color="orange">
              o portal do comercio eletrônico está em conformidade com as boas
              práticas do mercado
            </TextSpan>
            .
          </Text>
        </SizedBox>
      </FadeIn>
    </FlexContainer>
  );
};

export default Introduction;
