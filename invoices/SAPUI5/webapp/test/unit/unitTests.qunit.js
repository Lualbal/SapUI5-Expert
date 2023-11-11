// @ts-nocheck
/* global Qunit*/
//requiere "sap/ui/core/Core";
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "lualbal/SAPUI5/test/unit/AllTests"
    ], function () {
        QUnit.start();
    })
});