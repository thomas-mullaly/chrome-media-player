require.config({
    shim: {
        "angular": {
            exports: "angular"
        },
        "chrome": {
            exports: "chrome"
        }
    },
    paths: {
        "angular": "libs/angular/angular.min",
        "domReady": "libs/require/require.domready"
    }
});

require(["angular", "app", "domReady!", "app/media/bootstrap"], function (angular, app, document) {
    "use strict";

    angular.bootstrap(document, ["app"]);
});
