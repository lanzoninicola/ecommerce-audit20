import * as React from "react";
import styled from "styled-components";

import { FlexContainer, SizedBox, GridFixedContainer } from "@layouts";
import { ViewportInfoData } from "@layouts/lib";
import { SmallText } from "@typography";

import Introduction from "../components/mobile/content/Introduction/Introduction";
import ReportExplanation from "../components/mobile/content/ReportExplanation/ReportExplanation";
import Layout from "../components/layout";
import NextButton from "../components/mobile/NextButton/NextButton";
import PrevButton from "../components/mobile/PrevButton/PrevButton";
import CustomerJourney from "../components/mobile/content/CustomerJourney/CustomerJourney";
import Impacts from "../components/mobile/content/Impacts/Impact";
import SummaryStats from "../components/mobile/content/SummaryStats/SummaryStats";
import ResultsIntroduction from "../components/mobile/content/ResultsIntroduction/ResultsIntroduction";
import ResultsStats from "../components/mobile/content/Results/Results";
import Passcode from "../components/PassCode/PassCode";

// device, size, height, width, diagonal

// markup
const IndexPage = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const pagesQueue = [
    <Passcode />,
    // <Introduction />,
    // <ReportExplanation />,
    // <CustomerJourney />,
    // <Impacts />,
    // <SummaryStats />,
    // <ResultsIntroduction />,
    // <ResultsStats />,
  ];

  function nextPage() {
    let newPage = currentPage;
    setCurrentPage(() => {
      newPage = currentPage + 1;
      newPage = newPage > pagesQueue.length - 1 ? currentPage : newPage;
      return newPage;
    });
  }

  function prevPage() {
    let newPage = currentPage;
    setCurrentPage(() => {
      newPage = currentPage - 1;
      newPage = newPage < 0 ? 0 : newPage;
      return newPage;
    });
  }

  return (
    <Layout>
      {/* <ViewportInfoData /> */}
      <GridFixedContainer
        columns="1fr 1fr"
        rows="1fr"
        pt="16"
        pl="32"
        pr="32"
        mb="32"
      >
        <SizedBox>
          <SmallText color="black">Auditoria de site</SmallText>
        </SizedBox>
        <FlexContainer row right>
          <PrevButton prevPage={prevPage} />
          <SizedBox w="16" />
          <NextButton nextPage={nextPage} />
        </FlexContainer>
      </GridFixedContainer>

      <FlexContainer column centerX>
        {pagesQueue[currentPage]}
      </FlexContainer>
    </Layout>
  );
};

export default IndexPage;