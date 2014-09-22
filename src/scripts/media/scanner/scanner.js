define(["app/media/module"], function (mediaModule) {
    "use strict";

    return mediaModule.factory("app.media.scanner", ["$window", function (win) {
        console.log(win);
    }]);
});
