define(["angular", "app/media/module"], function (angular, mediaModule) {
    "use strict";

    return angular.module("app", ["app.media", "app.import"])
                  .controller('TestController', ["$scope", "app.media.scanner", function ($scope, mediaScanner) {
        $scope.test = function () {
            mediaScanner();
        };
    }]);
});
