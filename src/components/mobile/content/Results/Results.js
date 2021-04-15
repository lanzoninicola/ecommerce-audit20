import * as React from "react";

import { FlexContainer, SizedBox } from "@layouts";
import { useViewportInfo } from "@hooks";

import GlobalTestResult from "./GlobalTestResult";
import SectionTestResult from "./SectionTestResult";
import ItemListTestResults from "./ItemListTestResults";

const ResultsStats = () => {
  const { width } = useViewportInfo();
  const [showItemsList, setShowItemsList] = React.useState(false);
  const [showRecordsOfPage, setShowRecordsOfPage] = React.useState(null);

  function handleDetails(page) {
    console.log(page);
    setShowItemsList(true);
    setShowRecordsOfPage(page);
  }

  return (
    // <FadeIn>
    <FlexContainer column pl="32" pr="32" w={width}>
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
          showItemsList={showItemsList}
        />
      )}
    </FlexContainer>
    // </FadeIn>
  );
};

export default ResultsStats;
