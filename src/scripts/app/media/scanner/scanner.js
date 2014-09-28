define(["app/media/module"], function (mediaModule) {
    "use strict";

    var scanFile = function (file) {
        if (file.name.toLowerCase().indexOf(".jpg") < 0 && file.name.toLowerCase().indexOf(".png") < 0) {
            console.log(file);

            file.file(function (f) {
                console.log(f);
            });
        }
    };

    var scanDirectory = function (directory) {
        var reader = directory.createReader();

        reader.readEntries(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isDirectory) {
                    scanFile(entry);
                } else {
                    scanDirectory(entry);
                }
            })
        })
    };

    return mediaModule.factory("app.media.scanner", ["$window", function ($window) {
        return function () {
            $window.chrome.mediaGalleries.getMediaFileSystems({
                interactive: "if_needed"
            }, function (mediaDirs) {
                mediaDirs.forEach(function (dir) {
                    scanDirectory(dir.root);
                });
            });
        };
    }]);
});
