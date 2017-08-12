google.charts.load('current', {packages: ['corechart', 'line']});

var key = '';

function formatter(hour, minute) {
    var str = '';
    if (hour < 10) {
        str += '0';
    }
    str += String(hour);
    str += ':';
    if (minute < 10) {
        str += '0';
    }
    str += String(minute);
    return str;
}

function parse_detail(detail, first_blood) {
    var html = '';
    var first_solve = false;
    if (detail[1] !== -1) {
        var time = formatter(Math.floor(detail[1] / 60), detail[1] % 60);
        html += '<span class="accepted">';
        if (detail[1] === first_blood) {
            first_solve = true;
        }
        if (detail[2] === 0) {
            html += '+</span><br>' + time;
        } else {
            html += '+' + String(detail[2]) + '</span><br>' + time;
        }
    } else if (detail[2] > 0) {
        html += '<span class="failed">';
        html += String(-detail[2]) + '</span>';
    }
    if (first_solve) {
        html = '<td style="background:lightgreen">' + html + '</td>';
    } else {
        html = '<td>' + html + '</td>'
    }
    return html;
}

function parse_board() {
    var contest = data[key];
    console.log(contest.title);
    $('.title').text(contest.title);
    $('.date').text(contest.date);
    $('.table').empty();
    var problem_num = contest.num;
    var header = '<caption>Standings</caption><tbody><tr><th>#</th><th>Who</th><th>=</th><th>Penalty</th>';
    for (var i = 0 ; i < problem_num ; ++ i) {
        header += '<th>';
        header += String.fromCharCode('A'.charCodeAt(0) + i);
        header += '</th>';
    }
    header += '</tr>';
    $('.table').append(header);

    var ranklist = contest.ranklist;

    var first_blood = new Array(problem_num);
    for (var i = 0 ; i < problem_num ; ++ i) {
        first_blood[i] = 1 << 30;
    }
    for (var i = 0 ; i < ranklist.length ; ++ i) {
        var team = ranklist[i];
        var status = contest.statuses[team];
        for (var j = 0 ; j < problem_num ; ++ j) {
            if (status[j][1] !== -1) {
                first_blood[j] = Math.min(first_blood[j], status[j][1]);
            }
        }
    }

    for (var i = 0 ; i < ranklist.length ; ++ i) {
        var team = ranklist[i];
        var status = contest.statuses[team];
        var row = '<tr><td>' + String(i + 1) + '</td><td>' + team + '</td>';

        var solved = 0, penalty = 0;
        for (var j = 0 ; j < problem_num ; ++ j) {
            if (status[j][1] !== -1) {
                solved ++;
                penalty += status[j][1] + status[j][2] * 20;
            }
        }
        row += '<td>' + String(solved) + '</td>';
        row += '<td>' + String(penalty) + '</td>';
        for (var j = 0 ; j < problem_num ; ++ j) {
            row += parse_detail(status[j] , first_blood[j]);
        }
        row += '</tr>';
        $('.table').append(row);
    }
}

function drawChart() {
    var contest = data[key];
    var ranklist = contest.ranklist;
    var problem_num = contest.num;
    var chart_data = new google.visualization.DataTable();
    var pass_time = [0, contest.time ? contest.time : 300];

    chart_data.addColumn('number', 'X');
    for (var i = 0 ; i < ranklist.length ; ++ i) {
        chart_data.addColumn('number',  ranklist[i]);
        chart_data.addColumn({type:'string', role:'annotation'});
        for (var j = 0 ; j < problem_num ; ++ j) {
            var t = contest.statuses[ranklist[i]][j][1];
            if (t >= 0) {
                pass_time.push(t);
            }
        }
    }
    pass_time = pass_time.sort(function (a , b) {
        return a - b;
    });
    for (var k = 0 ; k < pass_time.length ; ++ k) {
        if (k > 0 && pass_time[k] === pass_time[k - 1]) {
            continue;
        }
        var row = [pass_time[k]];
        var scores = [];
        for (var i = 0 ; i < ranklist.length ; ++ i) {
            var team = ranklist[i], solved = 0, penalty = 0;
            for (var j = 0 ; j < problem_num ; ++ j) {
                var t = contest.statuses[team][j][1];
                if (t >= 0 && t <= pass_time[k]) {
                    ++ solved;
                    penalty += contest.statuses[team][j][1] + contest.statuses[team][j][2] * 20;
                }
            }
            scores.push([solved, penalty]);
        }

        for (var i = 0 ; i < ranklist.length ; ++ i) {
            var team = ranklist[i], rank = 1;
            for (var j = 0 ; j < ranklist.length ; ++ j) {
                if (scores[j][0] > scores[i][0]) {
                    ++ rank;
                } else if (scores[j][0] === scores[i][0] && scores[j][1] < scores[i][1]) {
                    ++ rank;
                }
            }
            row.push(-rank);

            var solved = '';
            for (var j = 0 ; j < problem_num ; ++ j) {
                var t = contest.statuses[team][j][1];
                if (t === pass_time[k]) {
                    solved += String.fromCharCode('A'.charCodeAt(0) + j);
                }
            }
            if (solved.length > 0) {
                row.push(solved);
            } else {
                row.push(null);
            }
        }
        chart_data.addRow(row);
    }

    var options = {
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Rank'
        },
        width: 1366,
        height: 720
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(chart_data, options);
}

$(document).ready(function () {
    $('#contest_list').empty();
    for (var p in data) {
        if (p === 'end') break;
        var link = '<a class="mdc-list-item" onclick="parse(' + "'" + p + "'" + ')" href=#' + p + '>' + data[p].date + '</a>';
        $('#contest_list').append(link);
    }
    var arg_list = window.location.href.split('#');
    key = arg_list.length < 2 ? '01' : arg_list[1];
    parse(key);
});

function parse(str) {
    key = str;
    parse_board();
    google.charts.setOnLoadCallback(drawChart);
}
