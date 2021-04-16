import * as React from "react";
import { Title, Text } from "@typography";
import { FlexContainer, GridFixedContainer } from "@layouts";
import { FadeIn } from "@animations";
import { colorTheme } from "@colors/lib";

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
        <GridFixedContainer columns="0.50fr 1fr" rows="1fr" gap="6" mb="24">
          <FlexContainer column centerX centerY>
            <PassedIcon />

            <Text weight="600" size={{ mobile: 14 }} color="green">
              Passou
            </Text>
          </FlexContainer>

          <Text size={{ mobile: 12 }}>
            Isso significa que não são necessárias alterações, o item em uso
            está de acordo com as boas práticas de mercado
          </Text>
        </GridFixedContainer>

        <GridFixedContainer columns="0.50fr 1fr" rows="1fr" gap="6" mb="24">
          <FlexContainer column centerX centerY>
            <ImprovementIcon />
            <Text weight="600" size={{ mobile: 14 }} color="yellow" center>
              Oportunidade de Melhorar
            </Text>
          </FlexContainer>
          <Text size={{ mobile: 12 }}>
            O elemento em uso está parcialmente de acordo com as boas práticas
            de mercado, ele precisa ser ainda melhorado.
          </Text>
        </GridFixedContainer>

        <GridFixedContainer columns="0.50fr 1fr" rows="1fr" gap="6" mb="24">
          <FlexContainer column centerX centerY>
            <NotPassedIcon />
            <Text weight="600" size={{ mobile: 14 }} color="red">
              Não Passou
            </Text>
          </FlexContainer>

          <Text size={{ mobile: 12 }}>
            O elemento não está de acordo com as boas práticas de mercado.
            Necessidade de nova implementação ou mudança radical.
          </Text>
        </GridFixedContainer>

        <GridFixedContainer columns="0.50fr 1fr" rows="1fr" gap="6" mb="24">
          <FlexContainer column centerX centerY>
            <NotTestedIcon />
            <Text
              weight="600"
              size={{ mobile: 14 }}
              color={colorTheme("black", { opacity: 0.8 })}
            >
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
