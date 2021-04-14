import analiticalUnits from "../../config/analiticalUnits";
import dictionary from "../../config/dictionary";
import impacts from "../enums/impacts";
import testResult from "../enums/testResults";

const _analiticalUnits = analiticalUnits();
const _dictionary = dictionary();

function auditRecord(auditRecordModel) {
  const _auditRecord = { ...auditRecordModel };

  function _translateAndCamelize(pageName) {
    let pageNameEN = _dictionary.translate(pageName);
    pageNameEN = pageNameEN.toLowerCase();
    return camelize(pageNameEN);
  }

  function getAnaliticalUnitOfPage() {
    const pageNameENG = _translateAndCamelize(_auditRecord["pagina"]);
    return _analiticalUnits.getAnaliticalUnitOfPage(pageNameENG);
  }

  function getPageDescription() {
    const pageNameENG = _translateAndCamelize(_auditRecord["pagina"]);
    return _analiticalUnits.getDescription(pageNameENG);
  }

  function isHighImpact() {
    return _auditRecord["impacto"] === impacts.high;
  }

  function isMediumImpact() {
    return _auditRecord["impacto"] === impacts.medium;
  }

  function isLowImpact() {
    return _auditRecord["impacto"] === impacts.low;
  }

  function isTestResultPassed() {
    return _auditRecord["resultado"] === testResult.passed;
  }

  function isTestResultImprovement() {
    return _auditRecord["resultado"] === testResult.improvement;
  }

  function isTestResultNotPassed() {
    return _auditRecord["resultado"] === testResult.notPassed;
  }

  function isTestResultNotTested() {
    return _auditRecord["resultado"] === testResult.notTested;
  }

  return {
    ..._auditRecord,
    macroCategory: getAnaliticalUnitOfPage(),
    categoryDescription: getPageDescription(),
    isHighImpact: isHighImpact(),
    isMediumImpact: isMediumImpact(),
    isLowImpact: isLowImpact(),
    isTestResultPassed: isTestResultPassed(),
    isTestResultImprovement: isTestResultImprovement(),
    isTestResultNotPassed: isTestResultNotPassed(),
    isTestResultNotTested: isTestResultNotTested(),
  };
}

export default auditRecord;
