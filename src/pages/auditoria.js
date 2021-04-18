import * as React from "react";
import { navigate } from "gatsby-link";
import AuthContext from "../components/Auth/context/AuthContext";
import authStatusEnums from "../components/Auth/enums/authStatusEnums";

import { FlexContainer, SizedBox, GridFixedContainer } from "@layouts";
// import { ViewportInfoData } from "@layouts/lib";
import { SmallText } from "@typography";

import Introduction from "../components/Introduction/Introduction";
import ReportExplanation from "../components/ReportExplanation/ReportExplanation";
import Layout from "../components/layout";
import NextButton from "../components/ui/NextButton/NextButton";
import PrevButton from "../components/ui/PrevButton/PrevButton";
import CustomerJourney from "../components/CustomerJourney/CustomerJourney";
import Impacts from "../components/Impacts/Impacts";
import SummaryStats from "../components/SummaryStats/SummaryStats";
import ResultsIntroduction from "../components/ResultsIntroduction/ResultsIntroduction";
import ResultsStats from "../components/Results/Results";

// device, size, height, width, diagonal

// markup
const Auditoria = () => {
  const authContext = React.useContext(AuthContext);
  const [currentPage, setCurrentPage] = React.useState(0);

  const pagesQueue = [
    <Introduction />,
    <ReportExplanation />,
    <CustomerJourney />,
    <Impacts />,
    <SummaryStats />,
    <ResultsIntroduction />,
    <ResultsStats />,
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

  function isAuthenticated() {
    if (authContext.authStatus === authStatusEnums.anonymous) {
      navigate("/");
    }
  }

  React.useEffect(() => {
    isAuthenticated();
  }, []);

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

export default Auditoria;
