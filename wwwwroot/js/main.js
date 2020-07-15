System.register(["./sidebar/sidebar"], function (exports_1, context_1) {
    "use strict";
    var sidebar_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            }
        ],
        execute: function () {
            window.onload = function () {
                var application = new sidebar_1.sidebar();
                application.init();
            };
        }
    };
});
