google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
const prezzoBenzina = 1.873;
function drawChart() {



    var km = document.getElementById("km").value;
    var kmXl = document.getElementById("kmXl").value;
    var prezzoIniziale = document.getElementById("initPrice").value;
    var anni = document.getElementById("year").value;
    var gXkm = document.getElementById("g/km").value;


    var km1 = document.getElementById("km1").value;
    var kmXl1 = document.getElementById("km/Kwatt").value;
    var prezzoIniziale1 = document.getElementById("initPrice1").value;
    var gXkm = document.getElementById("g/km1").value;

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'anni');
    data.addColumn('number','macchina inquinante');
    data.addColumn('number','macchina elettrica');
  
    for(let i = 0;i <= Number(anni);i++){
      data.addRows([
        [i.toString(),Number(prezzoIniziale)+ Number((Number(km) * i)/Number(kmXl)*prezzoBenzina),Number(prezzoIniziale1)+ Number((Number(km1) * i)/Number(kmXl1)*prezzoBenzina)]
      ]);
    }


  var data1 = new google.visualization.DataTable();

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  var chart1 = new google.visualization.LineChart(document.getElementById('curve_chart1'));

  chart.draw(data, options);
  chart1.draw(,options);
}