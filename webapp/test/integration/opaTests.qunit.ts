// @ts-expect-error ushell.container can not be found
import Container from "sap/ushell/Container";
import includeStylesheet from "sap/ui/dom/includeStylesheet";

QUnit.config.autostart = false;

// eslint-disable-next-line no-unused-expressions
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", fnSetupFLPStyles) : fnSetupFLPStyles();
Container.createRenderer().placeAt("content");

// import all your integration tests here
void Promise.all([import("ui5con2024/test/integration/NavigationJourney")]).then(() => {
    QUnit.start();
});

function fnSetupFLPStyles() {
    includeStylesheet(sap.ui.require.toUrl("sap/ui/test/OpaCss.css"));
    // limit app to 80% screen size to see QUnit test results
    const oBody = document.body;
    oBody.style.width = "80%";
    oBody.style.left = "20%";
    oBody.style.position = "absolute";

    // set OPA component class
    if (!oBody.classList.contains("sapUiOpaBodyComponent")) {
        oBody.classList.add("sapUiOpaBodyComponent");
    }

    // append "content" div on body (when using karma as test runner)
    // eslint-disable-next-line sap-no-dom-access
    let oDiv = document.getElementById("content");
    if (!oDiv) {
        // eslint-disable-next-line sap-no-element-creation
        oDiv = document.createElement("div");
        oDiv.setAttribute("id", "content");
        // eslint-disable-next-line sap-no-dom-insertion
        oBody.appendChild(oDiv);
    }
    oDiv.style.width = "80%";
}
