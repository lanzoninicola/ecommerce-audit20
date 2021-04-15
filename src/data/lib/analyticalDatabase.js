import { isNotArray, error } from "@utils";
import { object } from "prop-types";

function analyticalDatabase(sourceRecords = []) {
  if (isNotArray(sourceRecords)) {
    error(
      `analyticalDatabase`,
      `I expected an array as parameter instead of ${typeof sourceRecords}`
    );
  }
  const _auditRecords = [...sourceRecords];

  // console.log(_auditRecords);

  function all() {
    return _auditRecords;
  }

  function filterRecordsByPage(page) {
    return _auditRecords.filter(
      (auditRecord) => auditRecord.pagina.toLowerCase() === page.toLowerCase()
    );
  }

  function filterRecordsByTestResult(testResultValue) {
    return _auditRecords.filter(
      (auditRecord) =>
        auditRecord.resultado.toLowerCase() === testResultValue.toLowerCase()
    );
  }

  function filterRecordsByImpact(impactValue) {
    return _auditRecords.filter(
      (auditRecord) =>
        auditRecord.impacto.toLowerCase() === impactValue.toLowerCase()
    );
  }

  function filterRecords(filterData = {}) {
    let filteredRecords = [..._auditRecords];

    function filter(filterItem, filterValue) {
      const recordFiltered = filteredRecords.filter(
        (filteredRecord) =>
          filteredRecord[filterItem].toLowerCase() === filterValue.toLowerCase()
      );

      filteredRecords = recordFiltered;
    }

    Object.keys(filterData).forEach((filterItem) => {
      filter(filterItem, filterData[filterItem]);
    });

    return filteredRecords;
  }

  function totalRecords() {
    return _auditRecords.length;
  }

  function totalTestPassed() {
    return _auditRecords.filter(
      (auditRecord) => auditRecord.isTestResultPassed === true
    ).length;
  }

  function totalTestImprovement() {
    return _auditRecords.filter(
      (auditRecord) => auditRecord.isTestResultImprovement === true
    ).length;
  }

  function totalTestNotPassed() {
    return _auditRecords.filter(
      (auditRecord) => auditRecord.isTestResultNotPassed === true
    ).length;
  }

  function totalTestNotTested() {
    return _auditRecords.filter(
      (auditRecord) => auditRecord.isTestResultNotTested === true
    ).length;
  }

  function totalHighImpact() {
    return _auditRecords.filter(
      (auditRecord) => auditRecord.isHighImpact === true
    ).length;
  }

  function totalMediumImpact() {
    return _auditRecords.filter(
      (auditRecord) => auditRecord.isMediumImpact === true
    ).length;
  }

  function totalLowImpact() {
    return _auditRecords.filter(
      (auditRecord) => auditRecord.isLowImpact === true
    ).length;
  }

  function totalTestResultsOfPage(page) {
    if (page) {
      return _auditRecords.filter((auditRecord) => auditRecord.pagina === page)
        .length;
    } else {
      return error(
        "analyticalDatabase - totalTestresultsPerPage",
        `"page" parameter is missing`
      );
    }
  }

  function allTestResultOfPage(pageName) {
    const passed = _auditRecords.filter(
      (auditRecord) =>
        auditRecord.pagina === pageName &&
        auditRecord.isTestResultPassed === true
    ).length;

    const improvement = _auditRecords.filter(
      (auditRecord) =>
        auditRecord.pagina === pageName &&
        auditRecord.isTestResultImprovement === true
    ).length;

    const notPassed = _auditRecords.filter(
      (auditRecord) =>
        auditRecord.pagina === pageName &&
        auditRecord.isTestResultNotPassed === true
    ).length;

    const notTested = _auditRecords.filter(
      (auditRecord) =>
        auditRecord.pagina === pageName &&
        auditRecord.isTestResultNotTested === true
    ).length;

    return {
      passed: passed,
      improvement: improvement,
      notPassed: notPassed,
      notTested: notTested,
    };
  }

  // function allTotalTestResultsPerPage() {
  //   /**
  //    * home_page : {
  //    * passed: 99,
  //    * notPassed: 100
  //    * }
  //    */
  //   let result = {};

  //   objectKeys(websitePages).forEach((page) => {
  //     let nextResult = { ...result };

  //     nextResult[page] = {};

  //     const passed = _auditRecords.filter(
  //       (auditRecord) =>
  //         auditRecord.pagina === websitePages[page] &&
  //         auditRecord.isTestResultPassed === true
  //     ).length;

  //     const improvement = _auditRecords.filter(
  //       (auditRecord) =>
  //         auditRecord.pagina === websitePages[page] &&
  //         auditRecord.isTestResultImprovement === true
  //     ).length;

  //     const notPassed = _auditRecords.filter(
  //       (auditRecord) =>
  //         auditRecord.pagina === websitePages[page] &&
  //         auditRecord.isTestResultNotPassed === true
  //     ).length;

  //     const notTested = _auditRecords.filter(
  //       (auditRecord) =>
  //         auditRecord.pagina === websitePages[page] &&
  //         auditRecord.isTestResultNotTested === true
  //     ).length;

  //     nextResult[page] = {
  //       passed: passed,
  //       improvement: improvement,
  //       notPassed: notPassed,
  //       notTested: notTested,
  //     };

  //     result = { ...result, ...nextResult };
  //   });

  //   return result;
  // }

  return {
    records: () => all(),
    filterRecords: (filterData) => filterRecords(filterData),
    filterRecordsByPage: (page) => filterRecordsByPage(page),
    filterRecordsByImpact: (impactValue) => filterRecordsByImpact(impactValue),
    filterRecordsByTestResult: (testResultValue) =>
      filterRecordsByTestResult(testResultValue),
    totalRecords: () => totalRecords(),
    totalTestPassed: () => totalTestPassed(),
    totalTestImprovement: () => totalTestImprovement(),
    totalTestNotPassed: () => totalTestNotPassed(),
    totalTestNotTested: () => totalTestNotTested(),
    totalHighImpact: () => totalHighImpact(),
    totalMediumImpact: () => totalMediumImpact(),
    totalLowImpact: () => totalLowImpact(),
    totalTestResultsOfPage: (page) => totalTestResultsOfPage(page),
    allTestResultOfPage: (page) => allTestResultOfPage(page),
    // allTotalTestResultsPerPage: (page) => allTotalTestResultsPerPage(page),
  };
}

export default analyticalDatabase;
