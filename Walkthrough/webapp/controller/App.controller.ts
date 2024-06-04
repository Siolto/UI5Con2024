import Controller from "sap/ui/core/mvc/Controller";
// @ts-expect-error unknown import
import Container from "sap/ushell/Container";
import Component from "../Component";

/**
 * @namespace ui5con2024.controller
 */
export default class App extends Controller {
    onInit(): void {
        this.getView().addStyleClass((<Component>this.getOwnerComponent()).getContentDensityClass());
    }

    async onIntentBasedNavigation(): Promise<void> {
        const navigation = await Container.getServiceAsync("Navigation");
        navigation.navigate({
            target: {
                semanticObject: "dummyApplication",
                action: "display",
            },
        });
    }
}
