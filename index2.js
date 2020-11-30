var chartData = [{
    "country": "USA",
    "visits": 4252,
    "visits1": 4251
}, {
    "country": "China",
    "visits": 1882,
    "visits1": 1885
}, {
    "country": "Japan",
    "visits": 1809,
    "visits1": 1885
}, {
    "country": "Germany",
    "visits": 1322,
    "visits1": 1885
}, {
    "country": "UK",
    "visits": 1122,
    "visits1": 1885
}, {
    "country": "France",
    "visits": 1114,
    "visits1": 1885
}, {
    "country": "India",
    "visits": 984,
    "visits1": 1885
}, {
    "country": "Spain",
    "visits": 711,
    "visits1": 1885
}, {
    "country": "Netherlands",
    "visits": 665,
    "visits1": 1885
}, {
    "country": "Russia",
    "visits": 580,
    "visits1": 1885
}, {
    "country": "South Korea",
    "visits": 443,
    "visits1": 1885
}, {
    "country": "Canada",
    "visits": 441,
    "visits1": 1885
}, {
    "country": "Brazil",
    "visits": 395,
    "visits1": 1885
}, {
    "country": "Italy",
    "visits": 386,
    "visits1": 1885
}, {
    "country": "Australia",
    "visits": 384,
    "visits1": 1885
}, {
    "country": "Taiwan",
    "visits": 338,
    "visits1": 1885
}, {
    "country": "Poland",
    "visits": 328,
    "visits1": 1885
}];

AmCharts.ready(function () {
    var chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "country";

    var graph = new AmCharts.AmGraph();
    graph.valueField = "visits";
    graph.type = "line";
    graph.bullet = "round";
    graph.lineColor = "#8d1cc6";
    graph.balloonText = "[[category]]: <b>[[value]]</b>";
    chart.addGraph(graph);

    var graph1 = new AmCharts.AmGraph();
    graph1.valueField = "visits1";
    graph1.type = "line";
    graph1.bullet = "round";
    graph1.lineColor = "red";
    graph1.balloonText = "[[category]]: <b>[[value]]</b>";
    chart.addGraph(graph1);

    var categoryAxis = chart.categoryAxis;
    categoryAxis.autoGridCount = false;
    categoryAxis.gridCount = chartData.length;
    categoryAxis.gridPosition = "start";
    categoryAxis.labelRotation = 60;

    chart.write("chartdiv");
});