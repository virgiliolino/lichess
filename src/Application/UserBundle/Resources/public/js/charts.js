google.setOnLoadCallback(function() {

    $('div.elo_history').each(function() {
        var data = google.elemToData(this);
        var chart = new google.visualization.AreaChart(this);
        chart.draw(data, {
            width: 400, 
            height: 350, 
            axisTitlePosition: 'none',
            chartArea:{left:"10%",top:"3%",width:"90%",height:"80%"},
            title: $(this).attr('title'),
            titlePosition: 'in'
        });
    });

    $('div.win_stats').each(function() {
        var data = google.elemToData(this);
        var chart = new google.visualization.PieChart(this);
        chart.draw(data, {
            width: 347, 
            height: 200, 
            chartArea:{left:"0%",top:"0%",width:"100%",height:"100%"},
            is3D: true,
        });
    });

    $('div.elo_distribution').each(function() {
        var data = google.elemToData(this);
        var chart = new google.visualization.ScatterChart(this);
        chart.draw(data, {
            width: 747, 
            height: 500, 
            //axisTitlePosition: 'none',
            chartArea:{left:"5%",top:"3%",width:"78%",height:"92%"},
            title: $(this).attr('title'),
            titlePosition: 'in',
            pointSize: 3,
        });
    });

    $('div.end_distribution').each(function() {
        var data = google.elemToData(this);
        var chart = new google.visualization.PieChart(this);
        chart.draw(data, {
            width: 747, 
            height: 500, 
            chartArea:{left:"0%",top:"5%",width:"100%",height:"95%"},
            is3D: true,
            title: $(this).attr('title'),
        });
    });
});