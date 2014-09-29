define(["angular"], function (angular) {
    "use strict";

    return angular.module("app", ["app.media", "app.import"])
                  .controller('TestController', ["$scope", "app.media.scanner", function ($scope, mediaScanner) {
        $scope.test = function () {
            mediaScanner();
        };
    }]);
});
