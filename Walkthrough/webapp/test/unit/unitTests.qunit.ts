QUnit.config.autostart = false;

// import all your QUnit tests here
void Promise.all([
    import("ui5con2024/test/unit/model/formatter"),
    import("ui5con2024/test/unit/control/ProductRating")
]).then(() => {
    QUnit.start();
});
