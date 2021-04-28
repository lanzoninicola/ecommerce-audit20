import * as React from "react";
import { useLocalStorage } from "@hooks";
import AuthContext from "../../Auth/context/AuthContext";
import RoutingContext from "./RoutingContext";
import { navigate } from "gatsby-link";

const pagesQueue = [
  "/introduction-page",
  "/reportexplanation-page",
  "/customerjourney-page",
  "/impacts-page",
  "/summarystats-page",
  "/resultsintroduction-page",
  "/results-page",
];

const RoutingProvider = ({ children }) => {
  const authContext = React.useContext(AuthContext);
  const [currentPage, setCurrentPage] = React.useState(0);

  function nextPage() {
    let newPageNumber = currentPage;
    newPageNumber = currentPage + 1;
    newPageNumber =
      newPageNumber > pagesQueue.length - 1 ? currentPage : newPageNumber;

    setCurrentPage(newPageNumber);
    navigate(pagesQueue[currentPage]);
  }

  function prevPage() {
    let newPageNumber = currentPage;
    newPageNumber = currentPage - 1;
    newPageNumber = newPageNumber < 0 ? 0 : newPageNumber;

    setCurrentPage(newPageNumber);
    navigate(pagesQueue[currentPage]);
  }

  return (
    <RoutingContext.Provider value={{ currentPage, nextPage, prevPage }}>
      {children}
    </RoutingContext.Provider>
  );
};

export default RoutingProvider;
