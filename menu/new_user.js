$(document).ready(function () {

    const app = require('electron').remote.app;
    const { BrowserWindow, remote, desktopCapturer } = require('electron');




    $.get("./menu/catraca.html", function (catraca) {
        $("#catraca").replaceWith(catraca);
    });


    $("#photo-waiter-container").on("click", function () {

    })














})