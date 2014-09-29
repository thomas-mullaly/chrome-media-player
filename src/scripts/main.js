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
        "angular": "libs/angular/angular",
        "domReady": "libs/requirejs-domready/requirejs-domReady"
    }
});

require(["angular", "app", "domReady!", "app/bootstrap"], function (angular, app, document) {
    "use strict";

    angular.bootstrap(document, ["app"]);
});
