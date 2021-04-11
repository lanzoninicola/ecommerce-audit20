import * as React from "react";

import { Title, Text } from "@typography";
import { FlexContainer, GridFixedContainer, SizedBox } from "@layouts";

import PassedCard from "../../Cards/PassedCard";
import ImprovementCard from "../../Cards/ImprovementCard";
import NotPassedCard from "../../Cards/NotPassedCard";
import NotTestedCard from "../../Cards/NotTestedCard";

const GlobalTestResult = ({
  total,
  passed,
  notPassed,
  improvement,
  notTested,
}) => {
  return (
    <>
      <Title as="h4" weight="600" mb="16">
        Resultado global
      </Title>
      <GridFixedContainer columns="1fr 1fr" rows="1fr 1fr" pt="8" pb="8">
        <PassedCard data={passed} />
        <NotPassedCard data={notPassed} />
        <ImprovementCard data={improvement} />
        <NotTestedCard data={notTested} />
      </GridFixedContainer>

      <SizedBox h={24} />
      <FlexContainer column>
        <Text size={{ mobile: 14 }} mb="4">
          {`${
            (passed / total) * 100
          }% dos elementos passou a analisi e não são necessárias atividade`}
        </Text>
        <Text size={{ mobile: 14 }} mb="4">
          {`${
            (improvement / total) * 100
          }% dos elementos precisa ser ainda melhorado`}
        </Text>

        <Text size={{ mobile: 14 }} mb="4">
          {`${
            (notPassed / total) * 100
          }% dos elementos precisa de nova implementação ou mudança radical`}
        </Text>

        <Text size={{ mobile: 14 }} mb="4">
          {`${
            (notTested / total) * 100
          }% dos elementos não foi testada porque não disponivel no momento da
          verifica`}
        </Text>
      </FlexContainer>
    </>
  );
};

export default GlobalTestResult;
