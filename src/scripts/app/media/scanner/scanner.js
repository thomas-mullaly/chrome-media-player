define(["app/media/module"], function (mediaModule) {
    "use strict";

    return mediaModule.factory("app.media.scanner", ["$window", function ($window) {
        return function () {
            console.log($window);
        }
    }]);
});
