define(["angular", "app/media/module"], function (angular, mediaModule) {
    "use strict";

    return angular.module("app", ["app.media"]).controller('TestController', ["$scope", "app.media.scanner", function ($scope, mediaScanner) {
        console.log(mediaScanner);
        $scope.test = function () {
            mediaScanner();
        };
    }]);
});
