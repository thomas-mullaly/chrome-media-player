define(["app"], function (app) {
    "use strict";

    return app.config(['$routeProvider'], function ($routeProvider) {
        $routeProvider.when("/view1", {
            templateUrl: "views/view1.html",
            controller: "Controller1"
        });
    });
});
