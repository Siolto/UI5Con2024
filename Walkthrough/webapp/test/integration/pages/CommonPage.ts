import HashChanger from "sap/ui/core/routing/HashChanger";
import Opa5 from "sap/ui/test/Opa5";
import Container from "sap/ushell/Container";

/**
 * @namespace ui5con2024.test.integration.pages
 */
export default class CommonPage extends Opa5 {
    iStartMyFLPApp(oOptionsParameter?: any) {
        const oOptions = oOptionsParameter || { intent: "Shell-home" };
        return this.waitFor({
            success: function () {
                // create new instance to reset hash
                new HashChanger().setHash(oOptions.intent + (oOptions.hash ? "&/" + oOptions.hash : ""));
            },
        });
    }

    iLeaveMyFLPApp() {
        return this.waitFor({
            success: async function () {
                // reset the mockdata every time the application is closed
                await fetch("http://localhost:8080/V2/Northwind/Northwind.svc/$metadata/reload", {
                    method: "POST",
                });
                new HashChanger().setHash("Shell-home");
            },
        });
    }
}
