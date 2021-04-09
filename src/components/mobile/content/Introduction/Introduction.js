import * as React from "react";
import { Title, Text } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { FadeIn } from "@animations";

const Introduction = () => {
  return (
    <FlexContainer column centerY centerX pl="32" pr="32">
      <FadeIn>
        <SizedBox>
          <Title as="h3" weight="600" mb="16">
            O que è uma auditoria?
          </Title>
          <Text>
            Auditoria é um <strong>processo de verificação e análise</strong> de
            atividades desenvolvidas por uma determinada empresa.
          </Text>
          <SizedBox h="8" />
          <Text>
            O objetivo principal desse especifica auditoria é examinar se o
            portal do comercio eletrônico está em conformidade com os mais
            conhecidas praticas do setor.
          </Text>
        </SizedBox>
      </FadeIn>
    </FlexContainer>
  );
};

export default Introduction;
