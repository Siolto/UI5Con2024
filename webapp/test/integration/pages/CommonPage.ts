import HashChanger from "sap/ui/core/routing/HashChanger";
import Opa5 from "sap/ui/test/Opa5";

/**
 * @namespace ui5con2024.test.integration.pages
 */
export default class CommonPage extends Opa5 {
    iStartMyFLPApp(oOptionsParameter?: any) {
        const oOptions = oOptionsParameter || { intent: "Shell-home" };
        return this.waitFor({
            success: function () {
                // restart the mock server every time the application is opened
                // if (!(oOptions && oOptions.resetMockData === false)) {
                //     mockserver.getMockServer().destroy();
                //     mockserver.init();
                // }

                // create new instance to reset hash
                new HashChanger().setHash(oOptions.intent + (oOptions.hash ? "&/" + oOptions.hash : ""));
            },
        });
    }

    iLeaveMyFLPApp() {
        return this.waitFor({
            success: function () {
                new HashChanger().setHash("Shell-home");
            }
        });
    }
}
