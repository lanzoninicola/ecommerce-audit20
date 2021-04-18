import * as React from "react";

import { GridFixedContainer, SizedBox } from "@layouts";
import { useViewportInfo } from "@hooks";

import GlobalTestResult from "./GlobalTestResult";
import SectionTestResult from "./SectionTestResult";
import ItemListTestResults from "./ItemListTestResults";

const ResultsStats = () => {
  const { width } = useViewportInfo();
  const [showItemsList, setShowItemsList] = React.useState(false);
  const [showRecordsOfPage, setShowRecordsOfPage] = React.useState(null);

  function handleDetails(page) {
    setShowItemsList(true);
    setShowRecordsOfPage(page);
  }

  return (
    // <FadeIn>
    <GridFixedContainer
      columns={{
        mobile: "1fr",
        laptop: ".50fr 1fr .50fr",
      }}
      pl={{ mobile: "32" }}
      pr={{ mobile: "32" }}
      rAuto
      w100v
    >
      <SizedBox />
      <SizedBox>
        {showItemsList === false && (
          <>
            <GlobalTestResult />
            <SizedBox h={48} />
            <SectionTestResult handleDetails={handleDetails} />
          </>
        )}
        {showItemsList === true && (
          <ItemListTestResults
            recordsOfPage={showRecordsOfPage}
            setShowItemsList={setShowItemsList}
          />
        )}
      </SizedBox>
      <SizedBox />
    </GridFixedContainer>
    // </FadeIn>
  );
};

export default ResultsStats;
