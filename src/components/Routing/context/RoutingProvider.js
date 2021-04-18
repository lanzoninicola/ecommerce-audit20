import * as React from "react";
import { useLocalStorage } from "@hooks";
import RoutingContext from "./RoutingContext";

import Introduction from "../../Introduction/Introduction";
import ReportExplanation from "../../ReportExplanation/ReportExplanation";

const pagesQueue = [
  <Introduction />,
  <ReportExplanation />,
  // <CustomerJourney />,
  // <Impacts />,
  // <SummaryStats />,
  // <ResultsIntroduction />,
  // <ResultsStats />,
];

const RoutingProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState(0);

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
    <AuthContext.Provider value={{ currentPage, nextPage, prevPage }}>
      {children}
    </AuthContext.Provider>
  );
};

export default RoutingProvider;
