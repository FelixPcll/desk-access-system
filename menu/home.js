$(document).ready(function () {

    const app = require('electron').remote.app;
    const { remote } = require('electron');



    $.get("./menu/catraca.html", function (catraca) {
        $("#catraca").replaceWith(catraca);
    });









})