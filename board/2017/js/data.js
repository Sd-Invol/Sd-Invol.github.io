google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', '黑人问号.jpg');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '我需要治疗');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '水能载舟');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', 'TAT');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '复苏');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '人生已经如此的艰难');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '头文件');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', 'CE使我快乐');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '终结者');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '不存在的');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', 'tvcr');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '极值点');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '我们吓成一团了');
    data.addColumn({type:'string', role:'annotation'});
    data.addColumn('number', '瞎搞');
    data.addColumn({type:'string', role:'annotation'});

    data.addRows([
        [0, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null, -1, null],
        [8, -2, null, -2, null, -2, null, -2, null, -2, null, -2, null, -2, null, -2, null, -2, null, -2, null, -2, null, -1, 'I', -2, null, -2, null],
        [11, -3, null, -3, null, -3, null, -3, null, -3, null, -3, null, -3, null, -2, 'I', -3, null, -3, null, -3, null, -1, null, -3, null, -3, null],
        [12, -4, null, -4, null, -4, null, -3, 'I', -4, null, -4, null, -4, null, -2, null, -4, null, -4, null, -4, null, -1, null, -4, null, -4, null],
        [14, -4, 'I', -6, null, -6, null, -3, null, -6, null, -6, null, -6, null, -2, null, -6, null, -6, null, -4, 'I', -1, null, -6, null, -6, null],
        [15, -4, null, -8, null, -8, null, -3, null, -8, null, -6, 'I', -6, 'I', -2, null, -8, null, -8, null, -4, null, -1, null, -8, null, -8, null],
        [17, -1, 'K', -9, null, -9, null, -4, null, -8, 'I', -6, null, -6, null, -3, null, -9, null, -9, null, -5, null, -2, null, -9, null, -9, null],
        [18, -1, null, -11, null, -11, null, -4, null, -8, null, -6, null, -6, null, -3, null, -9, 'I', -9, 'I', -5, null, -2, null, -11, null, -11, null],
        [19, -1, null, -11, 'I', -13, null, -5, null, -8, null, -7, null, -2, 'K', -4, null, -9, null, -9, null, -6, null, -3, null, -11, 'I', -13, null],
        [20, -1, null, -11, null, -13, null, -6, null, -3, 'K', -8, null, -2, null, -5, null, -9, null, -9, null, -7, null, -4, null, -11, null, -13, null],
        [21, -1, null, -11, null, -13, 'I', -6, null, -3, null, -8, null, -2, null, -5, null, -9, null, -9, null, -7, null, -4, null, -11, null, -14, null],
        [23, -1, null, -5, 'K', -13, null, -3, 'K', -4, null, -9, null, -2, null, -7, null, -10, null, -10, null, -8, null, -6, null, -12, null, -14, null],
        [24, -1, null, -6, null, -13, null, -3, null, -5, null, -9, null, -2, null, -3, 'K', -10, null, -10, null, -8, null, -7, null, -12, null, -14, null],
        [26, -1, null, -7, null, -13, null, -4, null, -6, null, -9, null, -2, null, -4, null, -10, null, -10, null, -8, null, -2, 'K', -12, null, -14, null],
        [27, -1, null, -7, null, -13, null, -4, null, -6, null, -8, 'K', -2, null, -4, null, -10, null, -10, null, -9, null, -2, null, -12, null, -14, null],
        [29, -1, null, -7, null, -14, null, -4, null, -6, null, -8, null, -2, null, -4, null, -10, null, -10, null, -9, null, -2, null, -12, null, -13, 'I'],
        [32, -1, null, -7, null, -9, 'K', -4, null, -6, null, -8, null, -2, null, -4, null, -11, null, -11, null, -10, null, -2, null, -13, null, -14, null],
        [34, -1, null, -7, null, -10, null, -4, null, -6, null, -8, null, -2, null, -4, null, -9, 'K', -12, null, -11, null, -2, null, -13, null, -14, null],
        [35, -1, 'C', -7, null, -11, null, -2, 'C', -6, null, -9, null, -3, null, -5, null, -10, null, -12, null, -8, 'K', -3, null, -13, null, -14, null],
        [49, -1, null, -3, 'C', -11, null, -2, null, -7, null, -9, null, -4, null, -6, null, -10, null, -12, null, -8, null, -4, null, -13, null, -14, null],
        [56, -1, null, -3, null, -11, null, -2, null, -7, null, -9, null, -4, null, -6, null, -10, null, -13, null, -8, null, -4, null, -12, 'K', -14, null],
        [61, -1, null, -3, null, -4, 'C', -2, null, -8, null, -10, null, -5, null, -7, null, -11, null, -13, null, -9, null, -5, null, -12, null, -14, null],
        [65, -1, null, -3, null, -4, null, -2, null, -5, 'C', -10, null, -6, null, -8, null, -11, null, -13, null, -9, null, -6, null, -12, null, -14, null],
        [67, -1, null, -3, null, -4, null, -2, null, -5, null, -10, null, -6, null, -8, null, -11, null, -13, 'K', -9, null, -6, null, -12, null, -14, null],
        [70, -1, null, -3, null, -4, null, -2, null, -5, null, -10, null, -6, null, -8, null, -11, null, -14, null, -9, null, -6, null, -12, null, -13, 'K'],
        [95, -2, null, -3, null, -4, null, -1, 'L', -5, null, -10, null, -6, null, -8, null, -11, null, -14, null, -9, null, -6, null, -12, null, -13, null],
        [96, -1, 'E', -3, null, -4, null, -2, null, -5, null, -10, null, -6, null, -8, null, -11, null, -14, null, -9, null, -6, null, -12, null, -13, null],
        [116, -1, null, -3, 'G', -4, null, -2, null, -5, null, -10, null, -6, null, -8, null, -11, null, -14, null, -9, null, -6, null, -12, null, -13, null],
        [132, -1, null, -3, null, -4, 'D', -2, null, -5, null, -10, null, -6, null, -8, null, -11, null, -14, null, -9, null, -6, null, -12, null, -13, null],
        [155, -1, null, -3, null, -4, null, -2, null, -5, null, -6, 'C', -7, null, -9, null, -11, null, -14, null, -10, null, -7, null, -12, null, -13, null],
        [160, -1, 'H', -3, null, -4, null, -2, null, -5, null, -6, null, -7, null, -9, null, -11, null, -14, null, -10, null, -7, null, -12, null, -13, null],
        [168, -1, null, -3, null, -4, null, -2, null, -5, null, -7, null, -8, null, -6, 'C', -11, null, -14, null, -10, null, -8, null, -12, null, -13, null],
        [178, -1, null, -2, 'D', -4, null, -3, null, -5, null, -7, null, -8, null, -6, null, -11, null, -14, null, -10, null, -8, null, -12, null, -13, null],
        [181, -1, null, -3, null, -4, null, -2, 'D', -5, null, -7, null, -8, null, -6, null, -11, null, -14, null, -10, null, -8, null, -12, null, -13, null],
        [187, -1, null, -3, null, -4, 'H', -2, null, -5, null, -7, null, -8, null, -6, null, -11, null, -14, null, -10, null, -8, null, -12, null, -13, null],
        [205, -1, 'B', -3, null, -4, null, -2, null, -5, null, -7, null, -8, null, -6, null, -11, null, -14, null, -10, null, -8, null, -12, null, -13, null],
        [212, -1, 'G', -3, null, -4, null, -2, null, -5, null, -7, null, -8, null, -6, null, -11, null, -14, null, -10, null, -8, null, -12, null, -13, null],
        [219, -1, null, -2, 'L', -4, null, -3, null, -5, null, -7, null, -8, null, -6, null, -11, null, -14, null, -10, null, -8, null, -12, null, -13, null],
        [226, -1, null, -2, null, -4, null, -3, null, -5, null, -7, null, -9, null, -6, null, -8, 'C', -14, null, -11, null, -9, null, -12, null, -13, null],
        [227, -1, null, -2, null, -4, null, -3, null, -6, null, -5, 'D', -9, null, -7, null, -8, null, -14, null, -11, null, -9, null, -12, null, -13, null],
        [233, -1, null, -2, null, -4, null, -3, null, -6, null, -5, null, -8, 'H', -7, null, -9, null, -14, null, -11, null, -10, null, -12, null, -13, null],
        [246, -1, null, -2, null, -4, null, -3, null, -6, null, -5, null, -8, null, -7, null, -9, null, -10, 'C', -12, null, -11, null, -13, null, -14, null],
        [247, -1, null, -2, null, -3, 'G', -4, null, -6, null, -5, null, -8, null, -7, null, -9, null, -10, null, -12, null, -11, null, -13, null, -14, null],
        [251, -1, null, -2, null, -3, null, -4, null, -5, 'D', -6, null, -8, null, -7, null, -9, null, -10, null, -12, null, -11, null, -13, null, -14, null],
        [267, -1, null, -2, null, -3, null, -4, null, -5, 'G', -6, null, -8, null, -7, null, -9, null, -10, null, -12, null, -11, null, -13, null, -14, null],
        [272, -1, null, -2, 'B', -3, null, -4, null, -5, null, -6, null, -8, null, -7, null, -9, null, -10, null, -12, null, -11, null, -13, null, -14, null],
        [274, -1, null, -2, null, -3, null, -4, null, -5, null, -6, null, -8, null, -7, null, -9, null, -10, null, -11, 'C', -12, null, -13, null, -14, null],
        [282, -1, 'D', -2, null, -3, null, -4, null, -5, null, -6, null, -8, null, -7, null, -9, null, -10, null, -11, null, -12, null, -13, null, -14, null],
        [290, -1, 'L', -2, null, -3, null, -4, null, -5, null, -6, null, -8, null, -7, null, -9, null, -10, null, -11, null, -12, null, -13, null, -14, null],
        [295, -1, null, -2, null, -4, null, -3, 'G', -5, null, -6, null, -8, null, -7, null, -9, null, -10, null, -11, null, -12, null, -13, null, -14, null],
        [298, -1, null, -2, null, -4, null, -3, null, -5, null, -6, null, -7, 'D', -8, null, -9, null, -10, null, -11, null, -12, null, -13, null, -14, null],
        [299, -1, null, -2, null, -3, 'B', -4, null, -5, null, -6, null, -7, null, -8, null, -9, null, -10, null, -11, null, -12, null, -13, null, -14, null],
        [300, -1, null, -2, null, -3, null, -4, null, -5, null, -6, null, -7, null, -8, null, -9, null, -10, null, -11, null, -12, null, -13, null, -14, null]
    ]);

    var options = {
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Rank'
        },
        width: 1280,
        height: 720
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}
