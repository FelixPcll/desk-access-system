$(document).ready(function () {

    const Highcharts = require('highcharts/highstock');

    Highcharts.setOptions({
        lang: {
            months: [
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ],
            weekdays: [
                'Domingo', 'Segunda', 'Terça', 'Quarta',
                'Quinta', 'Sexta', 'Sábado'
            ],
            shortMonths: [
                'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
            ]
        }
    })



    $.getJSON('./goog-c.json', function (data) {
        // Create the chart
        Highcharts.stockChart('freq_chart', {
            title: {
                text: 'Frequência Diária de Pessoas'
            },

            rangeSelector: {
                selected: 4
            },

            credits: {
                enabled: false
            },

            data: {
                enablePolling: true
            },



            plotOptions: {
                series: {
                    boostThreshold: 1
                }
            },

            rangeSelector: {
                buttons: [
                    {
                        type: 'week',
                        count: 1,
                        text: '1s'
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: '1a'
                    },
                    {
                        type: 'all',
                        text: 'tudo'
                    }
                ]
            },

            series: [{
                name: 'BTC',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });


})