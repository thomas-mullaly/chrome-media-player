define(["angular", "require", "app", "routes"], function (angular, require) {
    "use strict";

    require(["domReady!"], function (document) {
        angular.bootstrap(document, "app");
    });

    return undefined;
})
