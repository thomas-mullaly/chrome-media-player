require.config({
    shim: {
        "angular": {
            exports: "angular"
        }
    },
    paths: {
        "angular": "libs/angular/angular.min",
        "domReady": "libs/require/require.domready"
    }
});

require(["angular", "domReady!"], function (angular, document) {
    "use strict";

    angular.bootstrap(document, ["app"]);
    console.log(angular);
})
