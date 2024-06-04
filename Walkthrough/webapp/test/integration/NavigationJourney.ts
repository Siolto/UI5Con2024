import opaTest from "sap/ui/test/opaQunit";
import HelloPanelPage from "./pages/HelloPanelPage";

const onTheHelloPanelPage = new HelloPanelPage();

QUnit.module("Navigation");

opaTest("Should open the Hello dialog", function () {
    // Arrangements
    onTheHelloPanelPage.iStartMyFLPApp({ intent: "Walkthrough-display"});
    // Actions
    onTheHelloPanelPage.iPressTheSayHelloWithDialogButton();

    // Assertions
    onTheHelloPanelPage.iShouldSeeTheHelloDialog();

    // Cleanup
    onTheHelloPanelPage.iLeaveMyFLPApp();
});
