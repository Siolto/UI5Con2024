import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ProductRating from "ui5con2024/control/ProductRating";
// @ts-expect-error unknown import
import QUnitUtils from "sap/ui/qunit/QUnitUtils";
import KeyCodes from "sap/ui/events/KeyCodes";
// @ts-expect-error unknown import
import nextUIUpdate from "sap/ui/qunit/utils/nextUIUpdate";
import Button from "sap/m/Button";

QUnit.module("Product Rating");

QUnit.test("Should disable the rating when submit button was pressed and call the change event", async (assert) => {
    // Arrange
    // Act
    // Assert
});
