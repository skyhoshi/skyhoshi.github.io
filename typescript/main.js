"use strict";
exports.__esModule = true;
var sidebar_1 = require("./sidebar/sidebar");
window.onload = function () {
    var application = new sidebar_1.sidebar();
    application.init();
};
