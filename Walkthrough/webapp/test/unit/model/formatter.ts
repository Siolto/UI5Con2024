import ResourceModel from "sap/ui/model/resource/ResourceModel";
import formatter from "../../../model/formatter";
import Controller from "sap/ui/core/mvc/Controller";

QUnit.module("Formatting function");

QUnit.test("Should return the translated texts", (assert) => {
    // Arrange
    const resourceModel = new ResourceModel({
        bundleUrl: sap.ui.require.toUrl("ui5con2024/i18n/i18n.properties"),
        supportedLocales: [""],
        fallbackLocale: "",
    });

    const controllerMock = <Controller>(<any>{
        getOwnerComponent() {
            return {
                getModel() {
                    return resourceModel;
                },
            };
        },
    });

    const statusText = formatter.statusText.bind(controllerMock);
    // Act + Assert

    assert.strictEqual(statusText("A"), "New", "The long text should be 'New'");
});
