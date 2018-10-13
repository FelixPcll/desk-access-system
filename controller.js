$(document).ready(function () {

    const app = require('electron').remote.app;
    const { remote } = require('electron');




    // ---------------HEADER---------------
    $("#menu-group button").on("click", function (event) {

        $('#menu-group button.active').removeClass('active');
        $(this).addClass('active');

    });
    $('#btn-minimize').click(function () {
        remote.BrowserWindow.getFocusedWindow().minimize()
    })
    $('#btn-resize_full').click(function () {
        if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
            remote.BrowserWindow.getFocusedWindow().restore()
            $("#resize").replaceWith('<span id="resize" class="icon icon-resize-full"></span>')
        } else {
            remote.BrowserWindow.getFocusedWindow().maximize()
            $("#resize").replaceWith('<span id="resize" class="icon icon-resize-small"></span>')
        }
    })
    $('#btn-close').click(function () {
        remote.BrowserWindow.getFocusedWindow().close()
    })




    // ---------------INIT---------------
    $.get("./menu/home.html", function (init) {
        $("#modal_part").replaceWith(init);
    });




    // ---------------MENU---------------

    // ---------------home---------------
    $('#btn-menu-home').on("click", function () {
        // Load GUI
        $.get("./menu/home.html", function (home) {
            $("#modal_part").replaceWith(home);
        });
    })
    // ---------------users---------------
    $('#btn-menu-users').on("click", function () {
        // Load GUI
        $.get("./menu/user_list.html", function (users) {
            $("#modal_part").replaceWith(users);
        });
    });
    // ---------------add---------------
    $('#btn-menu-add').on("click", function () {
        // Load GUI
        $.get("./menu/new_user.html", function (add) {
            $("#modal_part").replaceWith(add);
        });
    })
    // ---------------stats---------------
    $('#btn-menu-stat').on("click", function () {
        // Load GUI
        $.get("./menu/stats.html", function (stats) {
            $("#modal_part").replaceWith(stats);
        });
    })




});