import * as React from "react";
import { Title, Text } from "@typography";
import { FlexContainer, GridFixedContainer } from "@layouts";
import { FadeIn } from "@animations";

import {
  PassedIcon,
  NotPassedIcon,
  ImprovementIcon,
  NotTestedIcon,
} from "../../Icons/TestResults/TestResults";

const ResultsIntroduction = () => {
  return (
    <FlexContainer column centerY centerX pl="32" pr="32">
      <FadeIn>
        <FlexContainer column pb="16">
          <Title as="h3" weight="600" mb="16">
            Resultados do auditoria
          </Title>
          <Text>
            A página seguinte mostra os resultados. Os resultados são
            representados com os seguintes valores:
          </Text>
        </FlexContainer>
        <GridFixedContainer columns="0.1fr 0.1fr 1fr" rows="1fr" gap="6">
          <PassedIcon />
          <FlexContainer row centerX centerY h100>
            <Text weight="600" size={{ mobile: 14 }}>
              Passou
            </Text>
          </FlexContainer>

          <Text size={{ mobile: 12 }}>
            Isso significa que não são necessárias alterações, o item em uso
            está de acordo com as boas práticas de mercado
          </Text>

          <ImprovementIcon />
          <FlexContainer row centerX centerY h100>
            <Text weight="600" size={{ mobile: 14 }}>
              Oportunidade de Melhorar
            </Text>
          </FlexContainer>
          <Text size={{ mobile: 12 }}>
            O elemento em uso está parcialmente de acordo com as boas práticas
            de mercado, ele precisa ser ainda melhorado.
          </Text>
          <NotPassedIcon />
          <FlexContainer row centerX centerY h100>
            <Text weight="600" size={{ mobile: 14 }}>
              Não Passou
            </Text>
          </FlexContainer>

          <Text size={{ mobile: 12 }}>
            O elemento não está de acordo com as boas práticas de mercado.
            Necessidade de nova implementação ou mudança radical.
          </Text>

          <NotTestedIcon />
          <FlexContainer row centerX centerY h100>
            <Text weight="600" size={{ mobile: 14 }}>
              Não Testado
            </Text>
          </FlexContainer>
          <Text size={{ mobile: 12 }}>
            O elemento não está testado porque não encontrado no momento da
            verifica.
          </Text>
        </GridFixedContainer>
      </FadeIn>
    </FlexContainer>
  );
};

export default ResultsIntroduction;
