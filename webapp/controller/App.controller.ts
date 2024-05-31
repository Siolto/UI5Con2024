import Controller from "sap/ui/core/mvc/Controller";
import Component from "../Component";

/**
 * @namespace ui5con2024.controller
 */
export default class App extends Controller {
    onInit(): void {
        this.getView().addStyleClass((<Component>this.getOwnerComponent()).getContentDensityClass());
    }
}
