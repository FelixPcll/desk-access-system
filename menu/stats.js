$(document).ready(function () {

    const app = require('electron').remote.app;
    const { remote } = require('electron');
    const Chart = require('chart.js');


    $.get("./menu/catraca.html", function (catraca) {
        $("#catraca").replaceWith(catraca);
    });








    var ctx = $("#myChart");

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
            datasets: [{
                label: 'Homens',
                data: [
                    81,
                    37,
                    72,
                    98,
                    64,
                    22
                ],
                backgroundColor: 'rgb(75, 77, 180)',
                borderColor: 'rgb(125, 127, 255)',
                fill: false,
                showLine: true
            },
            {
                label: 'Mulheres',
                data: [
                    89,
                    30,
                    64,
                    103,
                    69,
                    17
                ],
                backgroundColor: 'rgb(247, 99, 247)',
                borderColor: 'rgb(255, 155, 255)',
                fill: false,
                pointRadius: 5,
                showLine: true
            }]
        },
        options: {
            elements: {
                point: {
                    pointStyle: "rectRot"
                }
            }
        }
    });










})