import * as React from "react";

import { Title, Text } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { FadeIn } from "@animations";

const ReportExplanation = () => {
  return (
    <FlexContainer column centerY centerX pl="32" pr="32">
      <FadeIn>
        <SizedBox>
          <Title as="h3" weight="600" mb="16">
            Estruttura report
          </Title>
          <Text>
            Este relatório foi dividido em diferentes seções que representa o{" "}
            <strong>caminho do cliente para chegar à compra</strong>, desde sua
            página inicial até o checkout. Ele examina tudo, desde a facilidade
            de uso de seu site até a sua conversão.
          </Text>
        </SizedBox>
      </FadeIn>
    </FlexContainer>
  );
};

export default ReportExplanation;
