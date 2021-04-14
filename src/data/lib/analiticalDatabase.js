import { objectKeys, error } from "@utils";
import websitePages from "../enums/pages";

function analiticalDatabase(auditRecords = []) {
  const _auditRecords = [...auditRecords];

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

  function totalTestResultsPerPage(page) {
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

  function alltotalTestResultsPerPage() {
    /**
     * home_page : {
     * passed: 99,
     * notPassed: 100
     * }
     */
    let result = {};

    objectKeys(websitePages).forEach((page) => {
      let nextResult = { ...result };

      nextResult[page] = {};

      const passed = _auditRecords.filter(
        (auditRecord) =>
          auditRecord.pagina === websitePages[page] &&
          auditRecord.isTestResultPassed === true
      ).length;

      const improvement = _auditRecords.filter(
        (auditRecord) =>
          auditRecord.pagina === websitePages[page] &&
          auditRecord.isTestResultImprovement === true
      ).length;

      const notPassed = _auditRecords.filter(
        (auditRecord) =>
          auditRecord.pagina === websitePages[page] &&
          auditRecord.isTestResultNotPassed === true
      ).length;

      const notTested = _auditRecords.filter(
        (auditRecord) =>
          auditRecord.pagina === websitePages[page] &&
          auditRecord.isTestResultNotTested === true
      ).length;

      nextResult[page] = {
        passed: passed,
        improvement: improvement,
        notPassed: notPassed,
        notTested: notTested,
      };

      result = { ...result, nextResult };
    });
  }

  return {
    records: () => all(),
  };
}
