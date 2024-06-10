import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ProductRating from "ui5con2024/control/ProductRating";
// @ts-expect-error unknown import
import QUnitUtils from "sap/ui/qunit/QUnitUtils";
import KeyCodes from "sap/ui/events/KeyCodes";
// @ts-expect-error unknown import
import nextUIUpdate from "sap/ui/qunit/utils/nextUIUpdate";
import Button from "sap/m/Button";

QUnit.module("Product Rating");

QUnit.test("the change event was called when submitting the rating", async (assert) => {
    // Arrange
    const resourceModel = new ResourceModel({
        bundleUrl: sap.ui.require.toUrl("ui5con2024/i18n/i18n.properties"),
        supportedLocales: [""],
        fallbackLocale: "",
    });

    const productRating = new ProductRating();
    sinon.stub(productRating, "getModel").returns(resourceModel);
    const changeSpy = sinon.spy();
    productRating.placeAt("qunit-fixture");
    productRating.attachChange(changeSpy);
    await nextUIUpdate();
    const button = <Button>productRating.getAggregation("_button");
    // Act
    QUnitUtils.triggerKeydown(button.getDomRef(), KeyCodes.ENTER);
    // Assert

    assert.strictEqual(changeSpy.called, true, "change event has been called");
});
