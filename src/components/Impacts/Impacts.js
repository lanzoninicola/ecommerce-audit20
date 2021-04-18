import * as React from "react";

import { Title, Text, TextSpan } from "@typography";
import { FlexContainer, SizedBox } from "@layouts";
import { FadeIn } from "@animations";

const Impacts = () => {
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
            Classificações de impacto
          </Title>
          <Text>
            Os fatores de auditoria{" "}
            <TextSpan color="orange">
              variam de alto impacto a baixo impacto{" "}
            </TextSpan>
            com base no quanto eles podem influenciar a forma como seu website
            converte os visitantes em leads e clientes, desempenho, segurança e
            sua classificação nos resultados dos mecanismos de busca.
          </Text>
          <SizedBox h="8" />
          <Text>
            Aplique as recomendações para ajudar seu site a parecer mais
            agradável, correr mais rápido, classificar melhor e começar a
            converter mais visitantes em clientes.
          </Text>
        </SizedBox>
      </FadeIn>
    </FlexContainer>
  );
};

export default Impacts;
