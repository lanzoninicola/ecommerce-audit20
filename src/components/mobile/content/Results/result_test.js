import * as React from "react";
import DataContext from "../../../../data/DataContext";

const ResultsTest = () => {
  const dataContext = React.useContext(DataContext);

  console.log(dataContext.records());

  return <div>Hello World</div>;
};

export default ResultsTest;
