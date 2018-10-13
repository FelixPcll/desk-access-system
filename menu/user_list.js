$(document).ready(function () {

    const app = require('electron').remote.app;
    const { remote } = require('electron');


    $.get("./menu/catraca.html", function (catraca) {
        $("#catraca").replaceWith(catraca);
    });



    $("#contact_list li").on("click", function (event) {
        $('#contact_list li.active').removeClass('active');
        $(this).addClass('active');

    });

    $("#filter_user").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#contact_list li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });




})