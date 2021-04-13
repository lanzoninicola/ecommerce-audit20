import * as React from "react";
import styled from "styled-components";
import { Title, Text } from "@typography";
import { Span } from "@layouts";
import { FlexContainer, SizedBox } from "@layouts";
import { FadeIn } from "@animations";

const SpanText = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: rgba(237, 107, 40, 1);
  position: relative;
  font-size: 20px;
  line-height: 28px;
`;

const Introduction = () => {
  return (
    <FlexContainer column centerY centerX pl="32" pr="32">
      <FadeIn>
        <SizedBox>
          <Title as="h3" weight="600" mb="16">
            O que è uma auditoria?
          </Title>
          <Text as="p">
            Auditoria é um{" "}
            <SpanText>processo de verificação e análise</SpanText> de atividades
            desenvolvidas por uma determinada empresa.
          </Text>
          <SizedBox h="8" />
          <Text>
            O objetivo principal desse especifica auditoria é examinar se{" "}
            <SpanText color="orange">
              o portal do comercio eletrônico está em conformidade com as boas
              práticas do mercado
            </SpanText>
            .
          </Text>
        </SizedBox>
      </FadeIn>
    </FlexContainer>
  );
};

export default Introduction;
