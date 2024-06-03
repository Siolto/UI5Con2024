/* eslint-disable */
// @ts-nocheck
window.suite = function () {
    const suite = new parent.jsUnitTestSuite();
    const contextPath = location.pathname.substring(0, location.pathname.lastIndexOf("/") + 1);

    suite.addTestPage(contextPath + "unit/unitTests.qunit.html");
    suite.addTestPage(contextPath + "integration/opaTests.qunit.html");

    return suite;
};
