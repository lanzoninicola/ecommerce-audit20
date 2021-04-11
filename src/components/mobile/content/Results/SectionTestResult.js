import * as React from "react";

import { Title, Text } from "@typography";
import { SizedBox } from "@layouts";
import { objectKeys } from "@utils";

import ResultCard from "../../Cards/ResultCard";

const SectionTestResult = ({ dataSectionParsed, handleDetails }) => {
  return (
    <>
      <Title as="h4" weight="600" mb="16">
        Resultado para cada tapa do caminho do cliente
      </Title>

      {objectKeys(dataSectionParsed).map((item, i) => {
        const value_pt = dataSectionParsed[item].value_pt;
        const passed = dataSectionParsed[item].results.passed;
        const improvement = dataSectionParsed[item].results.improvement;
        const notPassed = dataSectionParsed[item].results.notPassed;
        const notTested = dataSectionParsed[item].results.notTested;
        return (
          <SizedBox key={i}>
            <ResultCard
              title={value_pt}
              passed={passed ? passed : 0}
              improvement={improvement ? improvement : 0}
              notPassed={notPassed ? notPassed : 0}
              notTested={notTested ? notTested : 0}
              handleDetails={() => handleDetails(value_pt)}
            >
              <SizedBox h="8" />
              <Text center size={{ mobile: 12 }}>
                clique para ver detalhes
              </Text>
            </ResultCard>
            <SizedBox h={16} />
          </SizedBox>
        );
      })}
    </>
  );
};

export default SectionTestResult;
