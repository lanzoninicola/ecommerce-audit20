import * as React from "react";

import { Title, Text } from "@typography";
import { FlexContainer, SizedBox, GridFixedContainer } from "@layouts";
import { FadeIn } from "@animations";
import NumberWrapper from "../../NumberWrapper/NumberWrapper";

const ReportExplanation = () => {
  return (
    <FlexContainer column centerY centerX pl="32" pr="32">
      <FadeIn>
        <SizedBox>
          <Title as="h3" weight="600" mb="16">
            Estruttura report
          </Title>

          <Text>Este relatório inclui uma análise de:</Text>
          <SizedBox h="16" />
          <GridFixedContainer columns=".1fr 1fr" rAuto mb="8">
            <NumberWrapper w="30" h="30">
              <Text weight="600" color="orange" center>
                1
              </Text>
            </NumberWrapper>
            <Text>
              Seções do site que guiarão o cliente no processo de compra
              (Jornada do Cliente/Customer Journey) a partir da página inicial,
              checkout, pós-venda
            </Text>
          </GridFixedContainer>
          <GridFixedContainer columns=".1fr 1fr" rAuto mb="8">
            <NumberWrapper w="30" h="30">
              <Text weight="600" color="orange" center>
                2
              </Text>
            </NumberWrapper>
            <Text>
              Presença das ferramentas para monitorar o comportamentos dos
              visitantes ao navegarem pelas páginas do seu site e traçar
              estratégias para o seu negócio.
            </Text>
          </GridFixedContainer>
          <GridFixedContainer columns=".1fr 1fr" rAuto mb="8">
            <NumberWrapper w="30" h="30">
              <Text weight="600" color="orange" center>
                3
              </Text>
            </NumberWrapper>
            <Text>
              Presença dos elementos para protejer o seu negócio assegurando que
              o site esteja em conformidade com as leis, regras e regulamentos
              nacionais.
            </Text>
          </GridFixedContainer>
        </SizedBox>
      </FadeIn>
    </FlexContainer>
  );
};

export default ReportExplanation;
